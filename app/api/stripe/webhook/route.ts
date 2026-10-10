import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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

function valeur(value: unknown): string {
  const texte = String(value ?? "").trim();
  return texte || "Non renseigné";
}

function construireDetailsHtml(
  metadata: Stripe.Metadata,
  amountTotal: string,
  sessionId: string
): string {
  const champsConnus: Record<string, string> = {
    name: "Nom",
    email: "E-mail",
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

  const champsAffiches = new Set<string>();

  let lignes = "";

  for (const [cle, libelle] of Object.entries(champsConnus)) {
    if (cle === "email") {
      continue;
    }

    champsAffiches.add(cle);

    lignes += `
      <tr>
        <td style="padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;">
          ${escapeHtml(libelle)}
        </td>
        <td style="padding:10px;border:1px solid #ddd;">
          ${escapeHtml(valeur(metadata[cle]))}
        </td>
      </tr>
    `;
  }

  // Ajout des éventuels champs supplémentaires présents dans Stripe
  for (const [cle, value] of Object.entries(metadata)) {
    if (champsAffiches.has(cle)) {
      continue;
    }

    if (
      cle === "amount" ||
      cle === "amountTotal" ||
      cle === "payment_status" ||
      cle === "stripe_session"
    ) {
      continue;
    }

    lignes += `
      <tr>
        <td style="padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;">
          ${escapeHtml(cle)}
        </td>
        <td style="padding:10px;border:1px solid #ddd;">
          ${escapeHtml(valeur(value))}
        </td>
      </tr>
    `;
  }

  lignes += `
    <tr>
      <td style="padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;">
        Montant TTC
      </td>
      <td style="padding:10px;border:1px solid #ddd;font-weight:bold;">
        ${escapeHtml(amountTotal)}
      </td>
    </tr>

    <tr>
      <td style="padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;">
        Statut du paiement
      </td>
      <td style="padding:10px;border:1px solid #ddd;color:#16803c;font-weight:bold;">
        PAIEMENT CONFIRMÉ
      </td>
    </tr>

    <tr>
      <td style="padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;">
        Session Stripe
      </td>
      <td style="padding:10px;border:1px solid #ddd;">
        ${escapeHtml(sessionId)}
      </td>
    </tr>
  `;

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#222;line-height:1.5;">
      <h2 style="margin-bottom:8px;color:#111;">
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

      const detailsHtml = construireDetailsHtml(
        metadata,
        amountTotal,
        session.id
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
            <div style="background:#111;padding:20px;margin-bottom:20px;">
              <h1 style="color:#d4af37;margin:0;">
                SUD IDF Executive Transport
              </h1>
              <p style="color:white;margin:8px 0 0;">
                Nouvelle réservation payée
              </p>
            </div>

            ${detailsHtml}
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
              <div style="background:#111;padding:20px;margin-bottom:20px;">
                <h1 style="color:#d4af37;margin:0;">
                  SUD IDF Executive Transport
                </h1>
                <p style="color:white;margin:8px 0 0;">
                  Confirmation de votre réservation
                </p>
              </div>

              <p>
                Bonjour ${escapeHtml(nomClient)},
              </p>

              <p>
                Nous vous confirmons la bonne réception de votre
                réservation ainsi que de votre paiement.
              </p>

              ${detailsHtml}

              <p style="margin-top:25px;">
                Merci pour votre confiance.
              </p>

              <p>
                <strong>SUD IDF Executive Transport</strong><br>
                L’excellence au service de vos déplacements professionnels
              </p>
            </div>
          `,

          idempotencyKey: `${event.id}-client`,
        });
      } else {
        console.warn(
          "⚠️ Aucun e-mail client disponible dans la session Stripe."
        );
      }
 
      
      // 3. ALERTE E-MAIL PRIORITAIRE À SUD IDF APRÈS PAIEMENT
      try {
        await envoyerEmailBrevo({
          destinataire: "contact@sudidfexecutivetransport.fr",
          nomDestinataire: "SUD IDF Executive Transport",
          sujet: `🚨 NOUVELLE RÉSERVATION PAYÉE - ${nomClient}`,
          htmlContent: `
            <div style="font-family:Arial,Helvetica,sans-serif;color:#222;">
              <div style="background:#111;padding:20px;text-align:center;">
                <h1 style="color:#d4af37;margin:0;">
                  SUD IDF Executive Transport
                </h1>
                <p style="color:white;">Nouvelle réservation payée</p>
              </div>
              <div style="padding:20px;border:1px solid #d4af37;">
                <h2 style="color:#b8860b;">🚨 Alerte prioritaire</h2>
                <p>Un paiement Stripe vient d’être confirmé.</p>
                <p><strong>Client :</strong> ${escapeHtml(nomClient)}</p>
                <p><strong>Montant payé :</strong> ${escapeHtml(String(amountTotal))}</p>
                <p><strong>Départ :</strong> ${escapeHtml(String(metadata.depart || "Non renseigné"))}</p>
                <p><strong>Date :</strong> ${escapeHtml(String(metadata.date || "Non renseignée"))}</p>
                <p><strong>Heure :</strong> ${escapeHtml(String(metadata.time || "Non renseignée"))}</p>
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



      console.log(
        "✅ Notifications Brevo envoyées après paiement Stripe."
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