import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const runtime = "nodejs";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const ENTREPRISE_EMAIL = "contact@sudidfexecutivetransport.fr";
const EXPEDITEUR_EMAIL = "contact@sudidfexecutivetransport.fr";
const EXPEDITEUR_NOM = "SUD IDF Executive Transport";

function hasherJeton(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function trouverReservation(token: string) {
  if (!token || token.length > 200) {
    return null;
  }

  const jetonHash = hasherJeton(token);

  const { data, error } = await supabaseAdmin
    .from("reservations")
    .select(
      "id, reference, type, statut, statut_paiement, stripe_session_id, montant_ttc, date_trajet, heure_trajet, depart, arrivee, service, vehicule"
    )
    .eq("jeton_acces_hash", jetonHash)
    .maybeSingle();

  if (error) {
    console.error("Erreur de recherche de réservation :", error.message);
    throw new Error("Erreur lors de la vérification du lien sécurisé.");
  }

  return data;
}

async function notifierEntreprise({
  reference,
  typeDemande,
  message,
}: {
  reference: string;
  typeDemande: "modification" | "annulation";
  message: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY est absente des variables d'environnement.");
  }

  const libelle =
    typeDemande === "modification"
      ? "Demande de modification"
      : "Demande d'annulation";

  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: EXPEDITEUR_NOM,
        email: process.env.BREVO_SENDER_EMAIL || EXPEDITEUR_EMAIL,
      },
      to: [{ email: ENTREPRISE_EMAIL, name: EXPEDITEUR_NOM }],
      subject: `${libelle} - ${reference}`,
      htmlContent: `
        <div style="font-family:Arial,sans-serif;color:#222;line-height:1.6;">
          <h2 style="color:#b89b5e;">SUD IDF Executive Transport</h2>
          <h3>${escapeHtml(libelle)}</h3>
          <p>Une demande a été transmise depuis le lien sécurisé du client.</p>
          <p><strong>Référence :</strong> ${escapeHtml(reference)}</p>
          <p><strong>Type :</strong> ${escapeHtml(libelle)}</p>
          <p><strong>Message du client :</strong></p>
          <div style="padding:15px;background:#f7f7f7;border-left:4px solid #b89b5e;white-space:pre-wrap;">
            ${escapeHtml(message || "Aucun message complémentaire.")}
          </div>
          <p>La demande est en attente de traitement. Aucune modification ni annulation n'a été automatiquement acceptée.</p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Erreur notification Brevo :", response.status, details);
    throw new Error("L'e-mail de notification n'a pas pu être envoyé.");
  }
}

async function rembourserReservation(
  reservation: {
    id: string;
    stripe_session_id: string | null;
  },
  pourcentage: 50 | 100
) {
  if (!reservation.stripe_session_id) {
    throw new Error("Aucune session Stripe associée.");
  }

  // Verrou atomique : une seule demande peut poursuivre.
  const { data: verrouille, error: erreurVerrou } =
    await supabaseAdmin.rpc("verrouiller_annulation", {
      p_reservation_id: reservation.id,
    });

  if (erreurVerrou) throw erreurVerrou;

  if (verrouille !== true) {
    throw new Error(
      "Réservation déjà annulée, remboursée ou en cours de traitement."
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(
      reservation.stripe_session_id
    );

    if (
      session.payment_status !== "paid" ||
      typeof session.amount_total !== "number" ||
      !session.payment_intent
    ) {
      throw new Error("Paiement Stripe non confirmé.");
    }

    const montantCentimes = Math.floor(
      (session.amount_total * pourcentage) / 100
    );

    if (montantCentimes <= 0) {
      throw new Error("Montant du remboursement invalide.");
    }

    const remboursement = await stripe.refunds.create(
      {
        payment_intent:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent.id,
        amount: montantCentimes,
      },
      {
        idempotencyKey: `reservation-${reservation.id}-remboursement`,
      }
    );

    const statut =
      pourcentage === 100 ? "rembourse" : "rembourse_partiel";

    const { error: erreurMaj } = await supabaseAdmin
      .from("reservations")
      .update({
        stripe_refund_id: remboursement.id,
        montant_rembourse: montantCentimes / 100,
        statut_remboursement: statut,
        remboursement_traite_at: new Date().toISOString(),
        statut: "annulee",
        annulation_en_cours: false,
      })
      .eq("id", reservation.id);

    if (erreurMaj) {
      // Ne pas relancer aveuglément le remboursement :
      // Stripe peut déjà l'avoir exécuté.
      throw new Error(
        `Remboursement Stripe ${remboursement.id} effectué, mais mise à jour Supabase échouée.`
      );
    }

    return {
      remboursementId: remboursement.id,
      montant: montantCentimes / 100,
      pourcentage,
    };
 
  } catch (erreur) {
    // Ne jamais libérer le verrou si Stripe a confirmé
    // le remboursement mais que Supabase n'a pas été mis à jour.
    const { data: controle, error: erreurControle } =
      await supabaseAdmin
        .from("reservations")
        .select("stripe_refund_id")
        .eq("id", reservation.id)
        .maybeSingle();

    if (erreurControle) {
      console.error(
        "Impossible de vérifier le remboursement :",
        erreurControle
      );
    } else if (!controle?.stripe_refund_id) {
      // À ce stade, le résultat Stripe peut être incertain :
      // on conserve le verrou par sécurité.
      console.error(
        "État du remboursement incertain. Verrou conservé.",
        erreur
      );
    }

    throw erreur;
  }

}


function convertirDateHeureParisEnUTC(
  date: string,
  heure: string
): Date | null {
  const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  const heureMatch = /^(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(heure);

  if (!dateMatch || !heureMatch) return null;

  const [, annee, mois, jour] = dateMatch;
  const [, h, m, s = "0"] = heureMatch;

  const cible = Date.UTC(
    Number(annee),
    Number(mois) - 1,
    Number(jour),
    Number(h),
    Number(m),
    Number(s)
  );

  const format = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  let estimation = cible;

  for (let i = 0; i < 4; i++) {
    const parties = format.formatToParts(new Date(estimation));
    const valeurs = Object.fromEntries(
      parties.map((partie) => [partie.type, partie.value])
    );

    const representationUTC = Date.UTC(
      Number(valeurs.year),
      Number(valeurs.month) - 1,
      Number(valeurs.day),
      Number(valeurs.hour),
      Number(valeurs.minute),
      Number(valeurs.second)
    );

    const correction = cible - representationUTC;
    if (correction === 0) break;

    estimation += correction;
  }

  const resultat = new Date(estimation);
  const verif = Object.fromEntries(
    format.formatToParts(resultat).map((partie) => [
      partie.type,
      partie.value,
    ])
  );

  if (
    verif.year !== annee ||
    verif.month !== mois ||
    verif.day !== jour ||
    verif.hour !== h ||
    verif.minute !== m ||
    verif.second !== s.padStart(2, "0")
  ) {
    return null;
  }

  return resultat;
}


export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token") ?? "";

  try {
    const reservation = await trouverReservation(token);

    if (!reservation) {
      return NextResponse.json(
        { error: "Lien invalide ou expiré. Vérifiez votre e-mail." },
        { status: 404 }
      );
    }

    return NextResponse.json({ reservation });
  } catch {
    return NextResponse.json(
      { error: "Impossible de vérifier le lien pour le moment." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const token = typeof body.token === "string" ? body.token : "";
    const typeDemande = body.type_demande;
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!token || token.length > 200) {
      return NextResponse.json(
        { error: "Lien sécurisé manquant ou invalide." },
        { status: 400 }
      );
    }

    if (
      typeDemande !== "modification" &&
      typeDemande !== "annulation"
    ) {
      return NextResponse.json(
        { error: "Le type de demande est invalide." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Votre message ne doit pas dépasser 2 000 caractères." },
        { status: 400 }
      );
    }

    if (typeDemande === "modification" && !message) {
      return NextResponse.json(
        { error: "Précisez les modifications souhaitées." },
        { status: 400 }
      );
    }

    const reservation = await trouverReservation(token);

    if (!reservation) {
      return NextResponse.json(
        { error: "Lien invalide ou expiré. Vérifiez votre e-mail." },
        { status: 404 }
      );
    }
    
    
    const dateHeureTrajet =
      reservation.date_trajet && reservation.heure_trajet
      ? convertirDateHeureParisEnUTC(
        reservation.date_trajet,
        reservation.heure_trajet
      )
    : null;


    const dateTrajetValide =
      dateHeureTrajet !== null &&
      !Number.isNaN(dateHeureTrajet.getTime());

    const heuresAvantTrajet = dateTrajetValide
      ? (dateHeureTrajet.getTime() - Date.now()) / 3600000
      : null;

    const modificationEligible =
      typeDemande === "modification" &&
      heuresAvantTrajet !== null &&
      heuresAvantTrajet >= 4;

    const annulationEligible =
      typeDemande === "annulation" &&
      heuresAvantTrajet !== null &&
      heuresAvantTrajet >= 0;

    const tauxRemboursement = !annulationEligible
      ? 0
      : heuresAvantTrajet! >= 48
        ? 100
        : 50;

    const montantRemboursementPrevu =
      typeof reservation.montant_ttc === "number"
        ? Math.round(
            (reservation.montant_ttc * tauxRemboursement) / 100 * 100
          ) / 100
        : null;

    
if (typeDemande === "annulation") {
  if (!annulationEligible) {
    return NextResponse.json(
      {
        error: "L'annulation n'est plus possible après le départ.",
      },
      { status: 400 }
    );
  }
}
    const { error } = await supabaseAdmin
      .from("demandes_reservation")
      .insert({
        reservation_id: reservation.id,
        type_demande: typeDemande,
        message: message || null,
        statut: "en_attente",
      });

    if (error) {
      console.error("Erreur d'enregistrement de la demande :", error.message);
      return NextResponse.json(
        { error: "Impossible d'enregistrer votre demande pour le moment." },
        { status: 500 }
      );
    }


    try {
      await notifierEntreprise({
        reference: reservation.reference,
        typeDemande,
        message,
      });
    } catch (error) {
      console.error("Demande enregistrée, mais notification échouée :", error);
      return NextResponse.json(
        {
          success: true,
          notification: false,
          message:
            "Votre demande est enregistrée, mais la notification par e-mail a échoué. Notre équipe devra vérifier la demande.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      success: true,
      notification: true,
      message: "Votre demande a été enregistrée et notre équipe a été notifiée.",
    });
  } catch {
    return NextResponse.json(
      { error: "Une erreur est survenue lors du traitement de votre demande." },
      { status: 500 }
    );
  }
}
