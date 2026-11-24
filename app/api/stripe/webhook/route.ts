
import { supabaseAdmin } from "@/lib/supabase-admin";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { randomBytes, createHash } from "node:crypto";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
function creerReference(): string {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const suffixe = randomBytes(4).toString("hex").toUpperCase();
  return `SID-${date}-${suffixe}`;
}


function creerJetonAcces(): string {
  return randomBytes(32).toString("base64url");
}

function hasherJeton(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const ENTREPRISE_EMAIL = "contact@sudidfexecutivetransport.fr";
const EXPEDITEUR_EMAIL = "contact@sudidfexecutivetransport.fr";
const EXPEDITEUR_NOM = "SUD IDF Executive Transport";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function construireEnteteEmail(titre: string, sousTitre: string): string {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
      style="background:#111111;border-collapse:collapse;">
      <tr>
        <td align="center" style="padding:25px 15px;text-align:center;">

          <table role="presentation" cellpadding="0" cellspacing="0"
            style="border-collapse:collapse;margin:0 auto;">
            <tr>
              <td width="288" height="128"
                style="width:288px;height:128px;background:#ffffff;
                border:2px solid #ffffff;padding:0;">
                <img
                  src="https://www.sudidfexecutivetransport.fr/logo.png"
                  alt="SUD IDF Executive Transport"
                  width="288"
                  height="128"
                  style="display:block;width:288px;height:128px;
                  object-fit:fill;border:0;"
                />
              </td>
            </tr>
          </table>

          <h1 style="color:#D4AF37;font-family:Arial,Helvetica,sans-serif;
            font-size:23px;margin:20px 0 8px;">
            ${escapeHtml(titre)}
          </h1>

          <p style="color:#ffffff;font-family:Arial,Helvetica,sans-serif;
            font-size:14px;margin:0;">
            ${escapeHtml(sousTitre)}
          </p>

        </td>
      </tr>
    </table>
  `;
}


function valeur(value: unknown): string {
  const texte = String(value ?? "").trim();
  return texte || "Non renseigné";
}

function construireDetailsHtml(
  metadata: Stripe.Metadata,
  amountTotal: string,
  sessionId: string,
  pourClient: boolean = false
): string {
  const estGreeter =
  metadata.booking_kind === "greeter_autonome" ||
  (
    metadata.booking_kind !== "greeter_avec_vtc" &&
    String(metadata.service || "").toLowerCase().includes("greeter")
  );

const estGreeterAvecVTC =
  metadata.booking_kind === "greeter_avec_vtc";

  const montant = escapeHtml(amountTotal);

  const ligne = (label: string, value: unknown) => `
    <tr>
      <td style="padding:11px 13px;border:1px solid #ded6c3;background:#f7f5ef;color:#292929;font-weight:bold;width:42%;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:11px 13px;border:1px solid #ded6c3;color:#292929;">
        ${escapeHtml(valeur(value))}
      </td>
    </tr>
  `;

  const section = (titre: string) => `
    <tr>
      <td colspan="2" style="padding:12px 14px;background:#171717;color:#d4af37;font-weight:bold;letter-spacing:0.5px;border:1px solid #171717;">
        ${escapeHtml(titre)}
      </td>
    </tr>
  `;

  let lignes = "";

  if (estGreeterAvecVTC) {
  lignes += section("INFORMATIONS CLIENT");
  lignes += ligne("Nom", metadata.name);
  lignes += ligne("Téléphone", metadata.phone);
  lignes += ligne("E-mail", metadata.email);

  lignes += section("PRESTATION VTC");
  lignes += ligne("Service", metadata.service);
  lignes += ligne("Départ", metadata.depart);
  lignes += ligne("Arrivée", metadata.arrivee);
  lignes += ligne("Date", metadata.date);
  lignes += ligne("Heure", metadata.time);
  lignes += ligne("Véhicule", metadata.vehicle);
  lignes += ligne("Nombre de passagers", metadata.passengers);
  lignes += ligne("Bagages", metadata.bagages);
  lignes += ligne(
    "Type de trajet VTC",
    metadata.tripType === "aller-retour" ? "Aller-retour" : "Aller simple"
  );

  if (metadata.tripType === "aller-retour") {
    lignes += ligne("Date du retour", metadata.returnDate);
    lignes += ligne("Heure du retour", metadata.returnTime);
  }

  lignes += section("OPTION GREETER");
  lignes += ligne("Service Greeter", "Oui");
  lignes += ligne(
    "Type de prestation Greeter",
    metadata.greeterTripType === "aller-retour"
      ? "Aller-retour"
      : "Aller simple"
  );

  lignes += ligne("Numéro de vol aller", metadata.numeroVol);
  lignes += ligne("Numéro de vol retour", metadata.numeroVolRetour);
  lignes += ligne("Numéro de train aller", metadata.numeroTrain);
  lignes += ligne("Numéro de train retour", metadata.numeroTrainRetour);

} else if (estGreeter) {
    lignes += section("INFORMATIONS CLIENT");
    lignes += ligne("Nom", metadata.name);
    lignes += ligne("Téléphone", metadata.phone);
    lignes += ligne("E-mail", metadata.email);
    lignes += ligne(
      "Lieu de prestation",
      metadata.greeter_location_type === "aeroport"
        ? "Aéroport"
        : metadata.greeter_location_type === "gare"
          ? "Gare"
          : metadata.greeter_location_type
    );
    lignes += ligne(
      "Type de trajet",
      metadata.tripType === "aller-retour" ? "Aller-retour" : "Aller simple"
    );

    lignes += section("TRAJET ALLER");
    lignes += ligne("Nombre de passagers", metadata.passengers);
    lignes += ligne("Bagages", metadata.baggageCount);
    lignes += ligne("Lieu d'arrivée", metadata.arrivalLocation);

    if (metadata.greeter_location_type === "aeroport") {
      lignes += ligne("Terminal", metadata.arrivalTerminal);
    }

    lignes += ligne("Compagnie aérienne ou ferroviaire", metadata.arrivalCarrier);
    lignes += ligne("Numéro de vol ou de train", metadata.arrivalNumber);
    lignes += ligne("Date d'arrivée", metadata.arrivalDate);
    lignes += ligne("Heure d'arrivée", metadata.arrivalTime);

    if (metadata.tripType === "aller-retour") {
      lignes += section("TRAJET RETOUR");
      lignes += ligne("Nombre de passagers au retour", metadata.returnPassengers);
      lignes += ligne("Bagages du retour", metadata.returnBaggageCount);
      lignes += ligne("Lieu de départ du retour", metadata.returnDepartureLocation);
      lignes += ligne("Compagnie du retour", metadata.returnCarrier);
      lignes += ligne("Numéro du vol ou train retour", metadata.returnNumber);
      lignes += ligne("Date du retour", metadata.returnDepartureDate);
      lignes += ligne("Heure du retour", metadata.returnDepartureTime);
    }
  } else {
    const champsConnus: Record<string, string> = {
      name: "Nom",
      phone: "Téléphone",
      service: "Service",
      depart: "Départ",
      arrivee: "Arrivée",
      date: "Date",
      time: "Heure",
      vehicle: "Véhicule",
      passengers: "Nombre de passagers",
      bagages: "Bagages",
    };

    for (const [cle, libelle] of Object.entries(champsConnus)) {
      lignes += ligne(libelle, metadata[cle]);
    }

    const champsAffiches = new Set(Object.keys(champsConnus));

    for (const [cle, value] of Object.entries(metadata)) {
      const cleNormalisee = cle.toLowerCase();

      if (
        pourClient &&
        (
          cleNormalisee.includes("distance") ||
          cleNormalisee.includes("kilometre") ||
          cleNormalisee.includes("kilomètre") ||
          cleNormalisee.includes("tarif") ||
          cleNormalisee.includes("montant") ||
          cleNormalisee.includes("price") ||
          cleNormalisee.includes("amount") ||
          cleNormalisee === "km"
        )
      ) {
        continue;
      }

      if (
        champsAffiches.has(cle) ||
        ["booking_kind", "email", "amount", "amountTotal", "payment_status", "stripe_session"].includes(cle)
      ) {
        continue;
      }

      lignes += ligne(cle, value);
    }
  }

  lignes += section("RÉCAPITULATIF DU PAIEMENT");
  lignes += ligne("Montant TTC", montant);

  lignes += `
    <tr>
      <td style="padding:11px 13px;border:1px solid #ded6c3;background:#f7f5ef;color:#292929;font-weight:bold;">
        Statut du paiement
      </td>
      <td style="padding:11px 13px;border:1px solid #ded6c3;color:#16803c;font-weight:bold;">
        PAIEMENT CONFIRMÉ
      </td>
    </tr>
    <tr>
      <td style="padding:11px 13px;border:1px solid #ded6c3;background:#f7f5ef;color:#292929;font-weight:bold;">
        Référence Stripe
      </td>
      <td style="padding:11px 13px;border:1px solid #ded6c3;color:#292929;word-break:break-all;">
        ${escapeHtml(sessionId)}
      </td>
    </tr>
  `;

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#222;line-height:1.5;">
      <h2 style="margin-bottom:8px;color:#171717;">
        Réservation confirmée
      </h2>

      <p>
        Le paiement Stripe a été confirmé pour cette réservation.
      </p>

      <table style="border-collapse:collapse;width:100%;max-width:700px;">
        <tbody>
          ${lignes}
        </tbody>
      </table>

      <p style="margin-top:25px;">
        <strong>SUD IDF Executive Transport</strong><br>
        L’excellence au service de vos déplacements professionnels
      </p>
    </div>
  `;
}

async function envoyerEmailBrevo({
  destinataire,
  nomDestinataire,
  sujet,
  htmlContent,
  idempotencyKey,
}: {
  destinataire: string;
  nomDestinataire?: string;
  sujet: string;
  htmlContent: string;
  idempotencyKey: string;
}) {
  const apiKey =
  process.env.BREVO_API_KEY ||
  process.env.CLÉ_API_BREVO;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY manquante.");
  }

  const response = await fetch(BREVO_API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey,
      "Idempotency-Key": idempotencyKey,
    },

    body: JSON.stringify({
      sender: {
        email: EXPEDITEUR_EMAIL,
        name: EXPEDITEUR_NOM,
      },

      to: [
        {
          email: destinataire,
          ...(nomDestinataire
            ? { name: nomDestinataire }
            : {}),
        },
      ],

      subject: sujet,

      htmlContent,
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    console.error("❌ Erreur Brevo :", {
      status: response.status,
      response: responseText,
      destinataire,
    });

    throw new Error(
      `Brevo a refusé l'envoi : ${response.status}`
    );
  }

  console.log("📧 E-mail Brevo envoyé :", {
    destinataire,
    status: response.status,
    response: responseText,
  });

  return responseText;
}

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Signature Stripe manquante." },
      { status: 400 }
    );
  }

  const webhookSecret = 
     process.env.STRIPE_WEBHOOK_SECRET ||
     process.env["SECRET DU WEBHOOK STRIPE"];

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET manquant.");

    return NextResponse.json(
      { error: "Configuration Stripe webhook manquante." },
      { status: 500 }
    );
  }

  try {
    const body = await req.text();

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    if (event.type === "checkout.session.completed") {
      const session =
        event.data.object as Stripe.Checkout.Session;

      const customerEmail =
        session.customer_details?.email ||
        session.customer_email ||
        "";

      const customerName =
        session.customer_details?.name ||
        session.metadata?.name ||
        "Client";

      const metadata = session.metadata || {};

      const amountTotal =
        typeof session.amount_total === "number"
          ? `${(session.amount_total / 100).toFixed(2)} €`
          : "Non renseigné";

      console.log("✅ Paiement Stripe confirmé :", {
        sessionId: session.id,
        paymentStatus: session.payment_status,
        email: customerEmail,
        amountTotal: session.amount_total,
        metadata,
      });

      // --------------------------------------------------
      // On envoie les e-mails uniquement si le paiement
      // est effectivement marqué comme payé.
      // --------------------------------------------------

      if (session.payment_status !== "paid") {
        console.log(
          "ℹ️ Session Stripe terminée mais paiement non confirmé :",
          session.payment_status
        );

        return NextResponse.json({
          received: true,
        });
      }

      
      // Enregistrement de la réservation payée dans Supabase
      const emailReservation = customerEmail || metadata.email || "";
      const nomReservation = metadata.name || customerName || "Client";

      if (!emailReservation) {
        throw new Error("E-mail client manquant pour enregistrer la réservation.");
      }

      const { data: reservationExistante, error: rechercheErreur } =
        await supabaseAdmin
          .from("reservations")
          .select("id, reference")
          .eq("stripe_session_id", session.id)
          .maybeSingle();

      if (rechercheErreur) {
        throw rechercheErreur;
      }

      let lienGestionReservation = "";
let referenceReservation = reservationExistante?.reference || "";

      if (!reservationExistante) {
        const jetonAcces = creerJetonAcces();
        referenceReservation = creerReference();

        const { data: reservationCreee, error: insertionErreur } =
          await supabaseAdmin
            .from("reservations")
            .insert({
              reference: referenceReservation,
              type: "reservation",
              statut: "en_attente",
              statut_paiement: "paye",
              stripe_session_id: session.id,
              nom: nomReservation,
              email: emailReservation,
              telephone: metadata.phone || null,
              service: metadata.service || null,
              vehicule: metadata.vehicle || null,
passagers: metadata.passengers || null,
bagages: metadata.baggageCount || metadata.bagages || null,
depart: metadata.depart || metadata.arrivalLocation || null,
arrivee: metadata.arrivee || metadata.arrivalLocation || null,
date_trajet: metadata.date || metadata.arrivalDate || null,
heure_trajet: metadata.time || metadata.arrivalTime || null,
              montant_ttc:
                typeof session.amount_total === "number"
                  ? session.amount_total / 100
                  : null,
             details: {
  ...metadata,
  booking_kind: metadata.booking_kind || "reservation_vtc",
  tripType: metadata.tripType || null,
  returnDate: metadata.returnDate || metadata.returnDepartureDate || null,
  returnTime: metadata.returnTime || metadata.returnDepartureTime || null,
  stripe_session_id: session.id,
},
              jeton_acces_hash: hasherJeton(jetonAcces),
            })
            .select("id, reference")
            .single();

        if (insertionErreur) {
          throw insertionErreur;
        }

        const siteUrl = (
          process.env.NEXT_PUBLIC_SITE_URL ||
          process.env.SITE_URL ||
          "https://www.sudidfexecutivetransport.fr"
        ).replace(/\/+$/, "");

        lienGestionReservation =
          `${siteUrl}/reservation/gerer?token=${encodeURIComponent(jetonAcces)}`;

        console.log("Réservation enregistrée dans Supabase :", {
          reference: reservationCreee.reference,
          sessionId: session.id,
        });
      } else {
        console.log(
          "Réservation déjà enregistrée pour cette session Stripe :",
          reservationExistante.reference
        );
      }


      const detailsHtmlEntreprise = construireDetailsHtml(
  metadata,
  amountTotal,
  session.id
);

const detailsHtmlClient = construireDetailsHtml(
  metadata,
  amountTotal,
  session.id,
  true
);

      const nomClient =
        metadata.name ||
        customerName ||
        "Client";

      // --------------------------------------------------
      // 1. NOTIFICATION À SUD IDF
      // --------------------------------------------------

      await envoyerEmailBrevo({
        destinataire: ENTREPRISE_EMAIL,

        nomDestinataire:
          "SUD IDF Executive Transport",

        sujet: `✅ Réservation payée - ${
          metadata.name || "Client"
        } - ${amountTotal}`,

        htmlContent: `
          <div style="font-family:Arial,Helvetica,sans-serif;">
           ${construireEnteteEmail(
             "SUD IDF Executive Transport",
             "Nouvelle réservation payée"
          )}

            ${detailsHtmlEntreprise}
          </div>
        `,

        idempotencyKey: `${event.id}-entreprise`,
      });

      // --------------------------------------------------
      // 2. CONFIRMATION AU CLIENT
      // --------------------------------------------------

      if (customerEmail) {
        await envoyerEmailBrevo({
          destinataire: customerEmail,

          nomDestinataire: nomClient,

          sujet: `✅ Confirmation de votre réservation - SUD IDF Executive Transport`,

          htmlContent: `
            <div style="font-family:Arial,Helvetica,sans-serif;">      
  ${construireEnteteEmail(
    "SUD IDF Executive Transport",
    "Confirmation de votre réservation"
  )}
              <p>
                Bonjour ${escapeHtml(nomClient)},
              </p>
              <p>
  <strong>Votre référence de réservation :</strong>
  ${escapeHtml(referenceReservation || "En cours de génération")}
</p>
              <p>
                Nous vous confirmons la bonne réception de votre
                réservation ainsi que de votre paiement.
              </p>

              
              ${
                lienGestionReservation
                  ? `<p>Pour demander une modification ou une annulation, utilisez votre <a href="${escapeHtml(lienGestionReservation)}">espace de gestion de réservation</a>. Toute demande reste soumise à confirmation.</p>`
                  : ""
              }

              ${detailsHtmlClient}

              <div style="margin-top:25px;padding-top:20px;border-top:1px solid #d4af37;">
  <p style="margin-bottom:12px;">
    Merci pour votre confiance.
  </p>
  <img
    src="https://www.sudidfexecutivetransport.fr/signature-email.png"
    alt="Signature SUD IDF Executive Transport"
    width="420"
    style="display:block;width:100%;max-width:420px;height:auto;border:0;"
  />
</div>
            </div>
          `,

          idempotencyKey: `${event.id}-client`,
        });
      } else {
        console.warn(
          "⚠️ Aucun e-mail client disponible dans la session Stripe."
        );
      }
 
      
      // 3. ALERTE E-MAIL PRIORITAIRE : prise en charge dans moins de 4 heures

const dateReservation = String(
  metadata.date || metadata.arrivalDate || ""
).trim();

const heureReservation = String(
  metadata.time || metadata.arrivalTime || ""
).trim();

const dateHeureTrajet = new Date(
  `${dateReservation}T${heureReservation}:00+01:00`
);

const heuresAvantTrajet =
  dateHeureTrajet.getTime() - Date.now();

const reservationPrioritaire =
  /^\d{4}-\d{2}-\d{2}$/.test(dateReservation) &&
  /^\d{2}:\d{2}$/.test(heureReservation) &&
  Number.isFinite(dateHeureTrajet.getTime()) &&
  heuresAvantTrajet >= 0 &&
  heuresAvantTrajet < 4 * 60 * 60 * 1000;

      if (reservationPrioritaire) {
      try {
        await envoyerEmailBrevo({
          destinataire: "contact@sudidfexecutivetransport.fr",
          nomDestinataire: "SUD IDF Executive Transport",
          sujet: `🚨 NOUVELLE RÉSERVATION PAYÉE - ${nomClient}`,
          htmlContent: `
            <div style="font-family:Arial,Helvetica,sans-serif;color:#222;">
              ${construireEnteteEmail(
  "SUD IDF Executive Transport",
  "Nouvelle réservation payée"
)}
              <div style="padding:20px;border:1px solid #d4af37;">
                <h2 style="color:#b8860b;">🚨 Alerte prioritaire</h2>
                <p>Un paiement Stripe vient d’être confirmé.</p>
                <p><strong>Client :</strong> ${escapeHtml(nomClient)}</p>
                <p><strong>Montant payé :</strong> ${escapeHtml(String(amountTotal))}</p>
                <p><strong>Lieu de prise en charge :</strong> ${escapeHtml(String(metadata.depart || metadata.arrivalLocation || "Non renseigné"))}</p>
<p><strong>Date :</strong> ${escapeHtml(String(metadata.date || metadata.arrivalDate || "Non renseignée"))}</p>
<p><strong>Heure :</strong> ${escapeHtml(String(metadata.time || metadata.arrivalTime || "Non renseignée"))}</p>
              </div>
            </div>
          `,
          idempotencyKey: `${event.id}-alerte-prioritaire`,
              });
    } catch (emailAlerteError) {
      console.error(
        "Échec de l'alerte e-mail prioritaire à SUD IDF :",
        emailAlerteError
      );
    }
  }

    // --------------------------------------------------
    // NOTIFICATIONS DE REMBOURSEMENT STRIPE
    // Aucun remboursement n'est créé ici.
    // --------------------------------------------------

    if (
  (event.type as string) === "refund.created" ||
  (event.type as string) === "refund.updated"
) {
      const refund = (
  event.data as unknown as { object: Stripe.Refund }
).object;
      if (refund.status === "succeeded") {
        const montantRembourse = (refund.amount / 100).toFixed(2);
        const montantAffiche = `${montantRembourse} €`;

        // Retrouver la réservation liée à ce remboursement
        const { data: reservation, error: rechercheRefundErreur } =
          await supabaseAdmin
            .from("reservations")
            .select("id, reference, email, nom, stripe_refund_id")
            .eq("stripe_refund_id", refund.id)
            .maybeSingle();

        if (rechercheRefundErreur) {
          throw rechercheRefundErreur;
        }

        // Si la réservation n'est pas encore enregistrée,
        // Stripe réessaiera grâce à la réponse d'erreur.
        if (!reservation) {
          throw new Error(
            `Réservation introuvable pour le remboursement ${refund.id}`
          );
        }

        // Créer ou retrouver le suivi anti-doublon
        const { data: suiviExistant, error: suiviRechercheErreur } =
          await supabaseAdmin
              .from("suivi_notifications_remboursement")
              .select("*")
              .eq("stripe_refund_id", refund.id)
              .maybeSingle();

        if (suiviRechercheErreur) {
          throw suiviRechercheErreur;
        }

        let suivi = suiviExistant;

        if (!suivi) {
          const { data: nouveauSuivi, error: insertionSuiviErreur } =
            await supabaseAdmin
              .from("suivi_notifications_remboursement")
              .insert({
                stripe_refund_id: refund.id,
                stripe_event_id: event.id,
                reservation_id: String(reservation.id),
                reference_reservation: reservation.reference,
                montant_rembourse: Number(montantRembourse),
                statut_remboursement: "succeeded",
                email_client_envoye: false,
                email_entreprise_envoye: false,
              })
              .select("*")
              .single();

          // Une autre livraison Stripe peut avoir créé le suivi.
          if (insertionSuiviErreur) {
            if (insertionSuiviErreur.code !== "23505") {
              throw insertionSuiviErreur;
            }

            const { data: suiviRecupere, error: recuperationErreur } =
              await supabaseAdmin
                .from("suivi_notifications_remboursement")
                .select("*")
                .eq("stripe_refund_id", refund.id)
                .single();

            if (recuperationErreur) {
              throw recuperationErreur;
            }

            suivi = suiviRecupere;
          } else {
            suivi = nouveauSuivi;
          }
        }

        const reference = reservation.reference || "Non renseignée";
        const nomClient = reservation.nom || "Client";

        // E-mail client
        if (
          reservation.email &&
          !suivi.email_client_envoye
        ) {
const htmlClient = `
${construireEnteteEmail(
  "Remboursement confirmé",
  "Votre remboursement a bien été effectué."
)}
<div style="background:#ffffff;padding:30px 24px;font-family:Arial,Helvetica,sans-serif;color:#222;">

  <div style="text-align:center;margin-bottom:25px;">
    <div style="font-size:28px;font-weight:700;letter-spacing:3px;">
      <span style="color:#111111;">SUD</span>
      <span style="color:#b08d2f;">IDF</span>
    </div>
    <div style="font-size:11px;letter-spacing:2px;color:#777;margin-top:5px;">
      EXECUTIVE TRANSPORT
    </div>
    <div style="width:60px;height:2px;background:#b08d2f;margin:15px auto;"></div>
  </div>

  <p style="font-size:15px;line-height:1.8;">
    Bonjour ${escapeHtml(nomClient)},
  </p>

  <p style="font-size:15px;line-height:1.8;">
    Nous vous confirmons que le remboursement de votre réservation a bien été effectué.
  </p>

  <div style="border:1px solid #d4b45c;margin:25px 0;padding:20px;background:#faf9f6;">
    <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:#777;text-align:center;">
      Montant remboursé
    </div>
    <div style="font-size:30px;font-weight:bold;color:#b08d2f;text-align:center;margin:12px 0;">
      ${escapeHtml(montantAffiche)}
    </div>
    <div style="font-size:14px;text-align:center;color:#444;">
      Référence : ${escapeHtml(reference)}
    </div>
  </div>

  <p style="font-size:14px;line-height:1.8;color:#444;">
    Le remboursement a été effectué sur votre moyen de paiement initial.
    Le délai d'apparition des fonds dépend de votre établissement bancaire
    et peut nécessiter quelques jours.
  </p>

  <p style="font-size:14px;line-height:1.8;color:#444;">
    Nous vous souhaitons une excellente continuation.
  </p>

  <div style="border-top:1px solid #d4b45c;margin-top:30px;padding-top:20px;">
    <p style="font-size:14px;line-height:1.7;margin-bottom:5px;">
      Cordialement,
    </p>
    <p style="font-size:15px;font-weight:bold;color:#111;margin:0;">
      SUD IDF Executive Transport
    </p>
    <p style="font-size:13px;color:#b08d2f;margin-top:5px;">
      L'excellence au service de vos déplacements professionnels
    </p>
    <p style="font-size:13px;margin-top:15px;">
      <a href="https://www.sudidfexecutivetransport.fr"
         style="color:#b08d2f;text-decoration:none;">
        www.sudidfexecutivetransport.fr
      </a>
    </p>
  </div>
</div>
`;

          await envoyerEmailBrevo({
            destinataire: reservation.email,
            nomDestinataire: nomClient,
            sujet: `Confirmation de remboursement – ${reference}`,
            htmlContent: htmlClient,
            idempotencyKey: `refund-${refund.id}-client`,
          });

          const { error: majClientErreur } = await supabaseAdmin
            .from("suivi_notifications_remboursement")
            .update({
              email_client_envoye: true,
              updated_at: new Date().toISOString(),
            })
            .eq("stripe_refund_id", refund.id);

          if (majClientErreur) {
            throw majClientErreur;
          }
        }

        // E-mail entreprise
        if (!suivi.email_entreprise_envoye) {
         const htmlEntreprise = `
${construireEnteteEmail(
  "Remboursement effectué",
  "Confirmation automatique Stripe"
)}
<div style="background:#ffffff;padding:30px 24px;font-family:Arial,Helvetica,sans-serif;color:#222;">

  <div style="text-align:center;margin-bottom:25px;">
    <div style="font-size:28px;font-weight:700;letter-spacing:3px;">
      <span style="color:#111111;">SUD</span>
      <span style="color:#b08d2f;">IDF</span>
    </div>
    <div style="font-size:11px;letter-spacing:2px;color:#777;margin-top:5px;">
      EXECUTIVE TRANSPORT
    </div>
    <div style="width:60px;height:2px;background:#b08d2f;margin:15px auto;"></div>
  </div>

  <div style="background:#111111;padding:15px;text-align:center;margin-bottom:25px;">
    <div style="font-size:13px;letter-spacing:1.5px;color:#d4b45c;font-weight:bold;">
      REMBOURSEMENT CONFIRMÉ
    </div>
  </div>

  <p style="font-size:15px;line-height:1.7;">
    Un remboursement a été confirmé par Stripe à la suite d'une opération manuelle.
  </p>

  <table style="width:100%;border-collapse:collapse;margin:20px 0;font-size:14px;">
    <tr>
      <td style="padding:12px;border:1px solid #ddd;background:#f7f7f7;">
        Référence réservation
      </td>
      <td style="padding:12px;border:1px solid #ddd;font-weight:bold;">
        ${escapeHtml(reference)}
      </td>
    </tr>
    <tr>
      <td style="padding:12px;border:1px solid #ddd;background:#f7f7f7;">
        Client
      </td>
      <td style="padding:12px;border:1px solid #ddd;">
        ${escapeHtml(nomClient)}
      </td>
    </tr>
    <tr>
      <td style="padding:12px;border:1px solid #ddd;background:#f7f7f7;">
        E-mail client
      </td>
      <td style="padding:12px;border:1px solid #ddd;">
        ${escapeHtml(reservation.email || "Non renseigné")}
      </td>
    </tr>
    <tr>
      <td style="padding:12px;border:1px solid #ddd;background:#f7f7f7;">
        Montant remboursé
      </td>
      <td style="padding:12px;border:1px solid #ddd;color:#b08d2f;font-weight:bold;">
        ${escapeHtml(montantAffiche)}
      </td>
    </tr>
    <tr>
      <td style="padding:12px;border:1px solid #ddd;background:#f7f7f7;">
        Identifiant Stripe
      </td>
      <td style="padding:12px;border:1px solid #ddd;font-size:12px;word-break:break-all;">
        ${escapeHtml(refund.id)}
      </td>
    </tr>
    <tr>
      <td style="padding:12px;border:1px solid #ddd;background:#f7f7f7;">
        Statut
      </td>
      <td style="padding:12px;border:1px solid #ddd;color:#22804a;font-weight:bold;">
        REMBOURSEMENT EFFECTUÉ
      </td>
    </tr>
  </table>

  <div style="border-top:1px solid #d4b45c;margin-top:30px;padding-top:20px;">
    <p style="font-size:13px;color:#777;">
      Notification automatique de suivi — aucune action supplémentaire requise si le remboursement est confirmé dans Stripe.
    </p>
    <p style="font-size:15px;font-weight:bold;color:#111;margin-bottom:5px;">
      SUD IDF Executive Transport
    </p>
    <p style="font-size:13px;color:#b08d2f;margin-top:5px;">
      L'excellence au service de vos déplacements professionnels
    </p>
    <p style="font-size:13px;margin-top:15px;">
      www.sudidfexecutivetransport.fr
    </p>
  </div>
</div>
`;
          await envoyerEmailBrevo({
            destinataire: ENTREPRISE_EMAIL,
            sujet: `Remboursement confirmé – ${reference}`,
            htmlContent: htmlEntreprise,
            idempotencyKey: `refund-${refund.id}-entreprise`,
          });

          const { error: majEntrepriseErreur } = await supabaseAdmin
            .from("suivi_notifications_remboursement")
            .update({
              email_entreprise_envoye: true,
              updated_at: new Date().toISOString(),
            })
            .eq("stripe_refund_id", refund.id);

          if (majEntrepriseErreur) {
            throw majEntrepriseErreur;
          }
        }

        console.log("✅ Notifications remboursement traitées :", {
          refundId: refund.id,
          reference,
          montantAffiche,
        });
      }
    }

      console.log(
     "✅ Traitement des notifications après paiement Stripe terminé."
     );
    }

    return NextResponse.json({
      received: true,
    });
  } catch (error) {
    console.error("❌ Erreur webhook Stripe :", error);

    return NextResponse.json(
      {
        error: "Signature Stripe invalide ou traitement du webhook impossible.",
      },
      { status: 400 }
    );
  }
}