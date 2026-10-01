import { NextResponse } from "next/server";

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
  const result = String(value ?? "").trim();
  return result || "Non renseigné";
}

function construireDetailsHtml(data: Record<string, unknown>): string {
  const lignes = [
    ["Nom", data.nom],
    ["E-mail", data.email],
    ["Téléphone", data.telephone],
    ["Véhicule", data.vehicule],
    ["Nombre de passagers", data.passagers],
    ["Bagages", data.bagages],
    ["Service", data.service],
    ["Départ", data.depart],
    ["Arrivée", data.arrivee],
    ["Date", data.date],
    ["Heure", data.heure],
    ["Durée mise à disposition", data.dureeMiseADispo],
    ["Durée séminaire", data.dureeSeminaire],
    ["Distance", data.distance],
    ["Durée du trajet", data.duree],
    ["Prix", data.prix],
    ["Détails du prix", data.detailsPrix],
    ["Tarification", data.tarification],
  ];

  const tableau = lignes
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:600;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:10px;border:1px solid #ddd;">
            ${escapeHtml(valeur(value))}
          </td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#222;">
      <h2 style="color:#b89b5e;">
        SUD IDF Executive Transport
      </h2>

      <h3>Demande de devis</h3>

      <table style="border-collapse:collapse;width:100%;max-width:750px;">
        <tbody>
          ${tableau}
        </tbody>
      </table>

      <div style="margin-top:20px;">
        <strong>Message du client :</strong>
        <div style="margin-top:8px;padding:15px;background:#f7f7f7;border-left:4px solid #b89b5e;white-space:pre-wrap;">
          ${escapeHtml(valeur(data.message))}
        </div>
      </div>
    </div>
  `;
}

async function envoyerEmailBrevo({
  destinataire,
  nomDestinataire,
  sujet,
  html,
}: {
  destinataire: string;
  nomDestinataire?: string;
  sujet: string;
  html: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error(
      "BREVO_API_KEY est absente des variables d'environnement."
    );
  }

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
        email: EXPEDITEUR_EMAIL,
      },
      to: [
        {
          email: destinataire,
          name: nomDestinataire || destinataire,
        },
      ],
      subject: sujet,
      htmlContent: html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erreur Brevo :", response.status, errorText);

    throw new Error(
      `Erreur Brevo ${response.status}: ${
        errorText || "Erreur inconnue"
      }`
    );
  }

  return response.json();
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Record<string, unknown>;

    const nom = valeur(data.nom);
    const email = valeur(data.email);

    if (nom === "Non renseigné") {
      return NextResponse.json(
        {
          success: false,
          error: "Le nom est obligatoire.",
        },
        { status: 400 }
      );
    }

    if (email === "Non renseigné") {
      return NextResponse.json(
        {
          success: false,
          error: "L'adresse e-mail est obligatoire.",
        },
        { status: 400 }
      );
    }

    const detailsHtml = construireDetailsHtml(data);

    await envoyerEmailBrevo({
      destinataire: ENTREPRISE_EMAIL,
      nomDestinataire: EXPEDITEUR_NOM,
      sujet: `📋 Nouvelle demande de devis - ${nom}`,
      html: `
        ${detailsHtml}

        <div style="margin-top:25px;padding:15px;background:#111;color:#fff;">
          <strong>
            Cette demande de devis a été envoyée depuis le site internet.
          </strong>
        </div>
      `,
    });

    await envoyerEmailBrevo({
      destinataire: email,
      nomDestinataire: nom,
      sujet: "Votre demande de devis - SUD IDF Executive Transport",
      html: `
        <div style="font-family:Arial,sans-serif;color:#222;line-height:1.6;">

          <h2 style="color:#b89b5e;">
            SUD IDF Executive Transport
          </h2>

          <p>Bonjour ${escapeHtml(nom)},</p>

          <p>
            Nous vous remercions pour votre demande de devis.
          </p>

          <p>
            Nous vous confirmons que votre demande a bien été prise en compte
            et qu'elle est actuellement en cours de traitement.
          </p>

          <p>
            Une réponse personnalisée vous sera adressée dans les plus brefs délais.
          </p>

          <p>
            Si des informations complémentaires sont nécessaires pour établir
            votre devis, nous reprendrons directement contact avec vous.
          </p>

          <p style="margin-top:25px;">
            Bien cordialement,
          </p>

          <p style="margin-top:20px;">
  <img
    src="https://www.sudidfexecutivetransport.fr/signature-email.png"
    alt="SUD IDF Executive Transport"
    style="display:block;width:600px;max-width:100%;height:auto;border:0;"
  />
</p>
          
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Demande de devis envoyée avec succès.",
    });
  } catch (error) {
    console.error("Erreur API demande de devis :", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue lors de l'envoi de la demande de devis.",
      },
      { status: 500 }
    );
  }
}
