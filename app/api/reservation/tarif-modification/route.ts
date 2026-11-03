import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { verifierSessionReservation } from "@/lib/reservation-access";
import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  calculerTarifAllerRetour,
  calculerTarifMiseADispo,
  calculerTarifSeminaire,
  calculerTarifTrajet,
} from "@/lib/tarification";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function dateHeureParisEnDate(date: string, heure: string): Date | null {
  const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  const heureMatch = /^(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(heure);
  if (!dateMatch || !heureMatch) return null;

  const [, annee, mois, jour] = dateMatch;
  const [, h, m, s = "0"] = heureMatch;
  const cible = Date.UTC(+annee, +mois - 1, +jour, +h, +m, +s);
  const format = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23",
  });

  let estimation = cible;
  for (let i = 0; i < 4; i++) {
    const values = Object.fromEntries(format.formatToParts(new Date(estimation)).map((p) => [p.type, p.value]));
    const representation = Date.UTC(+values.year, +values.month - 1, +values.day, +values.hour, +values.minute, +values.second);
    const correction = cible - representation;
    if (!correction) break;
    estimation += correction;
  }

  const result = new Date(estimation);
  const values = Object.fromEntries(format.formatToParts(result).map((p) => [p.type, p.value]));
  if (
    values.year !== annee || values.month !== mois || values.day !== jour ||
    values.hour !== h || values.minute !== m || values.second !== s.padStart(2, "0")
  ) return null;
  return result;
}

async function obtenirDistance(depart: string, arrivee: string) {
  const apiKey = process.env.GOOGLE_MAPS_SERVER_API_KEY;
  if (!apiKey) {
    throw new Error("La clé serveur Google Maps manque (GOOGLE_MAPS_SERVER_API_KEY). L'estimation tarifaire sécurisée n'est pas disponible.");
  }

  const url = new URL("https://maps.googleapis.com/maps/api/distancematrix/json");
  url.searchParams.set("origins", depart);
  url.searchParams.set("destinations", arrivee);
  url.searchParams.set("mode", "driving");
  url.searchParams.set("language", "fr");
  url.searchParams.set("units", "metric");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error("Le service de calcul des distances est momentanément indisponible.");
  const data = await response.json();
  const element = data?.rows?.[0]?.elements?.[0];
  if (data?.status !== "OK" || element?.status !== "OK" || typeof element?.distance?.value !== "number") {
    throw new Error("Google Maps n'a pas pu calculer ce trajet. Vérifiez les adresses.");
  }
  return {
    distanceMeters: element.distance.value as number,
    distanceText: String(element.distance.text || ""),
    durationText: String(element.duration?.text || ""),
  };
}

async function chargerReservation(request: NextRequest, token: string) {
  if (token) {
    const { data, error } = await supabaseAdmin
      .from("reservations")
      .select("id, reference, type, statut, statut_paiement, montant_ttc, date_trajet, heure_trajet, email, details")
      .eq("jeton_acces_hash", hashToken(token))
      .maybeSingle();
    if (error) throw error;
    return data;
  }

  const cookie = request.cookies.get("reservation_access")?.value;
  const id = verifierSessionReservation(cookie);
  if (!id) return null;
  const { data, error } = await supabaseAdmin
    .from("reservations")
    .select("id, reference, type, statut, statut_paiement, montant_ttc, date_trajet, heure_trajet, email, details")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = typeof body.token === "string" ? body.token : "";
    if (token.length > 200) {
      return NextResponse.json({ error: "Lien sécurisé invalide." }, { status: 400 });
    }

    const reservation = await chargerReservation(request, token);
    if (!reservation || reservation.type !== "reservation") {
      return NextResponse.json({ error: "Réservation introuvable ou accès non autorisé." }, { status: 404 });
    }
    if (reservation.statut_paiement !== "paye") {
      return NextResponse.json({ error: "Seules les réservations dont le paiement est confirmé peuvent être modifiées." }, { status: 409 });
    }
    if (["annulee", "annulée"].includes(String(reservation.statut || "").toLowerCase())) {
      return NextResponse.json({ error: "Cette réservation est annulée et ne peut plus être modifiée." }, { status: 409 });
    }

    const date = typeof body.date === "string" ? body.date : "";
    const heure = typeof body.heure === "string" ? body.heure : "";
    const dateHeureInitiale = dateHeureParisEnDate(String(reservation.date_trajet || ""), String(reservation.heure_trajet || ""));
    const dateHeureActuelle = dateHeureParisEnDate(date, heure);
    if (!dateHeureInitiale || !dateHeureActuelle || dateHeureInitiale.getTime() - Date.now() < 4 * 60 * 60 * 1000) {
      return NextResponse.json({ error: "La modification doit être effectuée au moins 4 heures avant le départ initial." }, { status: 400 });
    }
    if (dateHeureActuelle.getTime() <= Date.now()) {
      return NextResponse.json({ error: "La nouvelle date et heure doivent être dans le futur." }, { status: 400 });
    }

    const service = typeof body.service === "string" ? body.service : "";
    const vehicule = typeof body.vehicule === "string" ? body.vehicule : "";
    const depart = typeof body.depart === "string" ? body.depart.trim() : "";
    const arrivee = typeof body.arrivee === "string" ? body.arrivee.trim() : "";
    const tripType = body.tripType === "aller-retour" ? "aller-retour" : "simple";
    const returnDate = typeof body.returnDate === "string" ? body.returnDate : "";
    const returnTime = typeof body.returnTime === "string" ? body.returnTime : "";

    const vehiculesAutorises = ["Mercedes Classe E", "Mercedes Classe V", "Range Rover", "Mercedes Classe S", "Mercedes-Maybach Classe S"];
    const servicesAutorises = ["Transport standard", "Transfert aéroport", "Mise à disposition", "Séminaire"];
    if (!vehiculesAutorises.includes(vehicule) || !servicesAutorises.includes(service)) {
      return NextResponse.json({ error: "Le service ou le véhicule sélectionné n'est pas disponible pour une modification en ligne." }, { status: 400 });
    }

    let nouveauPrix = 0;
    let detailsTarif = "";
    let distance = "";
    let duree = "";

    if (service === "Mise à disposition") {
      const heures = Number.parseInt(String(body.dureeMiseADispo || "3"), 10);
      if (!Number.isInteger(heures) || heures < 3 || heures > 8) {
        return NextResponse.json({ error: "La mise à disposition doit être comprise entre 3 et 8 heures." }, { status: 400 });
      }
      const tarif = calculerTarifMiseADispo({ vehicule, heure, dureeHeures: heures });
      nouveauPrix = tarif.prixTTC;
      detailsTarif = tarif.detailsPrix;
      distance = tarif.distanceText;
      duree = tarif.dureeText;
    } else if (service === "Séminaire") {
      const heures = Number.parseInt(String(body.dureeSeminaire || "4"), 10);
      if (heures !== 4 && heures !== 8) {
        return NextResponse.json({ error: "La durée du séminaire doit être de 4 ou 8 heures." }, { status: 400 });
      }
      const tarif = calculerTarifSeminaire({ vehicule, heure, dureeHeures: heures as 4 | 8 });
      nouveauPrix = tarif.prixTTC;
      detailsTarif = tarif.detailsPrix;
      distance = tarif.distanceText;
      duree = tarif.dureeText;
    } else {
      if (!depart || !arrivee || depart.length > 300 || arrivee.length > 300) {
        return NextResponse.json({ error: "Renseignez un départ et une arrivée valides." }, { status: 400 });
      }
      const trajetAllerSansDistance = calculerTarifTrajet({ depart, arrivee, heure, vehicule, service, distanceMeters: 0 });
      const trajetAller = trajetAllerSansDistance || calculerTarifTrajet({
        depart, arrivee, heure, vehicule, service,
        ...(await obtenirDistance(depart, arrivee)),
      });
      if (!trajetAller) return NextResponse.json({ error: "Impossible de calculer le tarif du trajet aller." }, { status: 400 });

      if (tripType === "aller-retour") {
        if (!returnDate || !returnTime) return NextResponse.json({ error: "Renseignez la date et l'heure du retour." }, { status: 400 });
        const retourDateHeure = dateHeureParisEnDate(returnDate, returnTime);
        if (!retourDateHeure || retourDateHeure.getTime() <= dateHeureActuelle.getTime()) {
          return NextResponse.json({ error: "Le retour doit avoir lieu après le départ aller." }, { status: 400 });
        }
        const trajetRetourSansDistance = calculerTarifTrajet({ depart: arrivee, arrivee: depart, heure: returnTime, vehicule, service, distanceMeters: 0 });
        const trajetRetour = trajetRetourSansDistance || calculerTarifTrajet({
          depart: arrivee, arrivee: depart, heure: returnTime, vehicule, service,
          ...(await obtenirDistance(arrivee, depart)),
        });
        if (!trajetRetour) return NextResponse.json({ error: "Impossible de calculer le tarif du trajet retour." }, { status: 400 });
        nouveauPrix = calculerTarifAllerRetour(trajetAller.prixTTC, trajetRetour.prixTTC);
        detailsTarif = `Aller : ${trajetAller.prixTTC} € TTC (${trajetAller.detailsPrix}) + Retour : ${trajetRetour.prixTTC} € TTC (${trajetRetour.detailsPrix}) − remise aller-retour : 10 € TTC`;
        distance = `${trajetAller.distanceText} aller / ${trajetRetour.distanceText} retour`;
        duree = `${trajetAller.dureeText} aller / ${trajetRetour.dureeText} retour`;
      } else {
        nouveauPrix = trajetAller.prixTTC;
        detailsTarif = trajetAller.detailsPrix;
        distance = trajetAller.distanceText;
        duree = trajetAller.dureeText;
      }
    }

    const ancienPrix = Number(reservation.montant_ttc);
    if (!Number.isFinite(ancienPrix) || ancienPrix <= 0) {
      return NextResponse.json({ error: "Le montant initial de cette réservation doit être vérifié par notre équipe." }, { status: 409 });
    }

    // Si le nouveau trajet coûte moins cher, le prix initial reste dû : aucun remboursement ni réduction.
    const montantFinal = Math.max(ancienPrix, nouveauPrix);
    const supplement = Math.max(0, Math.round((nouveauPrix - ancienPrix) * 100) / 100);

    // Deuxième étape facultative : le client confirme la modification après avoir
    // vu le calcul. Le serveur crée alors le dossier d'attente et, si nécessaire,
    // une session Stripe limitée au seul supplément.
    if (body.confirmer === true) {
      if (supplement > 0 && !process.env.STRIPE_SECRET_KEY) {
        return NextResponse.json({ error: "Le paiement sécurisé est momentanément indisponible." }, { status: 503 });
      }
      const detailsPrestation = {
        service, vehicule, depart, arrivee, date, heure, tripType,
        returnDate, returnTime,
        dureeMiseADispo: body.dureeMiseADispo || null,
        dureeSeminaire: body.dureeSeminaire || null,
        details_tarif: detailsTarif,
        distance,
        duree,
      };
      const detailsModification = {
        montant_initial_ttc: ancienPrix,
        nouveau_prix_calcule_ttc: nouveauPrix,
        montant_final_ttc: montantFinal,
        supplement_ttc: supplement,
        details_prestation: detailsPrestation,
      };

      const { data: demande, error: erreurDemande } = await supabaseAdmin
        .from("demandes_reservation")
        .insert({
          reservation_id: reservation.id,
          type_demande: "modification",
          message: "Modification effectuée directement par le client.",
          statut: "en_attente",
          nouvelle_date_trajet: date,
          nouvelle_heure_trajet: heure,
          nouveau_depart: depart || null,
          nouvelle_arrivee: arrivee || null,
          nouveau_vehicule: vehicule,
          montant_ttc_propose: montantFinal,
          details_modification: detailsModification,
        })
        .select("id")
        .single();

      if (erreurDemande || !demande) {
        console.error("Création du dossier de modification impossible :", erreurDemande?.message);
        return NextResponse.json({ error: "La modification n'a pas pu être préparée. Aucun changement n'a été appliqué." }, { status: 500 });
      }

      if (supplement > 0) {
        const originRecu = request.headers.get("origin");
        const originesAutorisees = new Set([
          "https://www.sudidfexecutivetransport.fr",
          "https://sudidfexecutivetransport.fr",
          "http://localhost:3000",
        ]);
        const origin = originRecu && originesAutorisees.has(originRecu)
          ? originRecu
          : "https://www.sudidfexecutivetransport.fr";
        const retourSucces = new URL("/reservation/ma-reservation", origin);
        retourSucces.searchParams.set("modification", "success");
        const retourAnnulation = new URL("/reservation/ma-reservation", origin);
        retourAnnulation.searchParams.set("modification", "cancelled");
        // Les anciens liens sécurisés utilisent un jeton dans l'URL plutôt qu'un cookie.
        // On le conserve au retour de Stripe afin que le client retrouve son dossier.
        if (token) {
          retourSucces.searchParams.set("token", token);
          retourAnnulation.searchParams.set("token", token);
        }

        const session = await stripe.checkout.sessions.create({
          mode: "payment",
          customer_email: reservation.email || undefined,
          line_items: [{
            price_data: {
              currency: "eur",
              product_data: {
                name: `Supplément de modification - ${reservation.reference}`,
                description: "Paiement du seul supplément de votre réservation SUD IDF Executive Transport.",
              },
              unit_amount: Math.round(supplement * 100),
            },
            quantity: 1,
          }],
          metadata: {
            operation: "modification",
            demande_modification_id: String(demande.id),
            reservation_id: String(reservation.id),
          },
          success_url: retourSucces.toString(),
          cancel_url: retourAnnulation.toString(),
        });
        return NextResponse.json({
          success: true,
          paiementSupplementNecessaire: true,
          supplementTTC: supplement,
          checkoutUrl: session.url,
          message: "Votre modification est préparée. Le changement sera appliqué après confirmation du paiement.",
        });
      }

      const { error: erreurApplication } = await supabaseAdmin.rpc(
        "traiter_modification_reservation",
        { p_demande_id: demande.id, p_stripe_session_id: null }
      );
      if (erreurApplication) {
        console.error("Application de la modification sans supplément impossible :", erreurApplication.message);
        return NextResponse.json({ error: "La modification est enregistrée mais n'a pas pu être appliquée. Contactez notre équipe." }, { status: 409 });
      }
      return NextResponse.json({
        success: true,
        paiementSupplementNecessaire: false,
        supplementTTC: 0,
        montantFinalTTC: montantFinal,
        message: "Votre modification est confirmée. Aucun supplément n'est à régler.",
      });
    }

    return NextResponse.json({
      success: true,
      ancienPrixTTC: ancienPrix,
      nouveauPrixCalculeTTC: nouveauPrix,
      montantFinalTTC: montantFinal,
      supplementTTC: supplement,
      paiementSupplementNecessaire: supplement > 0,
      detailsTarif,
      distance,
      duree,
      nouvellePrestation: { service, vehicule, depart, arrivee, date, heure, tripType, returnDate, returnTime },
    });
  } catch (error) {
    console.error("Erreur de calcul du tarif de modification :", error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Impossible de calculer le nouveau tarif pour le moment.",
    }, { status: 500 });
  }
}
