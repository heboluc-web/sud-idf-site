
import { NextResponse } from "next/server";
import { randomBytes, createHash } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const ENTREPRISE_EMAIL = "contact@sudidfexecutivetransport.fr";
const EXPEDITEUR_EMAIL = "contact@sudidfexecutivetransport.fr";
const EXPEDITEUR_NOM = "SUD IDF Executive Transport";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.sudidfexecutivetransport.fr"
).replace(/\/+$/, "");

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

function construireDetailsHtml(
  data: Record<string, unknown>,
  reference: string
): string {
  const lignes = [
    ["Référence de la demande", reference],
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
      <h2 style="color:#b89b5e;">SUD IDF Executive Transport</h2>
      <h3>Demande de devis</h3>
      <table style="border-collapse:collapse;width:100%;max-width:750px;">
        <tbody>${tableau}</tbody>
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
      `Erreur Brevo ${response.status}: ${errorText || "Erreur inconnue"}`
    );
  }

  return response.json();
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Record<string, unknown>;

    const nom = String(data.nom ?? "").trim();
    const email = String(data.email ?? "").trim();

    if (!nom) {
      return NextResponse.json(
        { success: false, error: "Le nom est obligatoire." },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Veuillez renseigner une adresse e-mail valide.",
        },
        { status: 400 }
      );
    }

    const reference = creerReference();

    // Le jeton brut ne sera jamais enregistré dans Supabase.
    const jetonAcces = creerJetonAcces();
    const jetonAccesHash = hasherJeton(jetonAcces);

    const lienGestion =
      `${SITE_URL}/reservation/gerer?token=${encodeURIComponent(jetonAcces)}`;

    const prixTexte = String(data.prix ?? "")
      .replace(",", ".")
      .replace(/[^\d.]/g, "");
    const prixNombre = Number(prixTexte);

    const montantTtc =
      prixTexte && Number.isFinite(prixNombre) && prixNombre > 0
        ? prixNombre
        : null;

    const { error: erreurInsertion } = await supabaseAdmin
      .from("reservations")
      .insert({
        reference,
        type: "devis",
        statut: "en_attente",
        statut_paiement: "non_paye",
        nom,
        email,
        telephone: String(data.telephone ?? ""),
        service: String(data.service ?? ""),
        vehicule: String(data.vehicule ?? ""),
        passagers: String(data.passagers ?? ""),
        bagages: String(data.bagages ?? ""),
        depart: String(data.depart ?? ""),
        arrivee: String(data.arrivee ?? ""),
        date_trajet: String(data.date ?? ""),
        heure_trajet: String(data.heure ?? ""),
        montant_ttc: montantTtc,
        details: data,
        jeton_acces_hash: jetonAccesHash,
      });

    if (erreurInsertion) {
      console.error("Erreur enregistrement Supabase :", erreurInsertion);

      return NextResponse.json(
        {
          success: false,
          error:
            "La demande n'a pas pu être enregistrée. Merci de réessayer.",
        },
        { status: 500 }
      );
    }

    const detailsHtml = construireDetailsHtml(data, reference);

    // 1. Notification à l'entreprise : contenu conservé.
    await envoyerEmailBrevo({
      destinataire: ENTREPRISE_EMAIL,
      nomDestinataire: EXPEDITEUR_NOM,
      sujet: `📋 Demande de devis ${reference} - ${nom}`,
      html: `
        ${detailsHtml}
        <div style="margin-top:25px;padding:15px;background:#111;color:#fff;">
          <strong>
            Cette demande de devis a été enregistrée depuis le site internet.
          </strong>
        </div>
      `,
    });

    // 2. Confirmation au client : signature conservée et lien sécurisé ajouté.
    await envoyerEmailBrevo({
      destinataire: email,
      nomDestinataire: nom,
      sujet: `Votre demande de devis ${reference} - SUD IDF Executive Transport`,
      html: `
       
<div style="margin:0;padding:30px 12px;background-color:#111111;font-family:Arial,Helvetica,sans-serif;color:#333333;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-collapse:collapse;">
    <tr>
      <td align="center" style="background:#111111;padding:28px 15px 24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;border-collapse:collapse;">
          <tr>
            <td width="288" height="128" style="width:288px;height:128px;background:#ffffff;border:2px solid #ffffff;padding:0;">
              <img
                src="https://www.sudidfexecutivetransport.fr/logo.png"
                alt="SUD IDF Executive Transport"
                width="288"
                height="128"
                style="display:block;width:288px;height:128px;object-fit:fill;border:0;"
              />
            </td>
          </tr>
        </table>
        <p style="color:#d4af37;font-size:12px;letter-spacing:2px;margin:16px 0 0;">
          L’EXCELLENCE AU SERVICE DE VOS DÉPLACEMENTS
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding:30px 28px 20px;">
        <h1 style="font-size:22px;color:#b89b5e;margin:0 0 22px;text-align:center;">
          Confirmation de votre demande de devis
        </h1>

        <p>Bonjour ${escapeHtml(nom)},</p>

        <p>
          Nous vous remercions pour votre demande de devis.
          Nous vous confirmons qu'elle a bien été prise en compte.
        </p>

        <div style="margin:24px 0;padding:17px;background:#f7f5f0;border-left:4px solid #b89b5e;">
          <p style="margin:0;font-size:14px;color:#555555;">VOTRE RÉFÉRENCE DE DEMANDE</p>
          <p style="margin:7px 0 0;font-size:20px;font-weight:bold;color:#111111;">
            ${escapeHtml(reference)}
          </p>
        </div>

        <p>
          Votre demande est en cours de traitement. Une réponse personnalisée
          vous sera adressée dans les meilleurs délais.
        </p>

        <div style="margin:28px 0;padding:22px;border:1px solid #b89b5e;">
          <h2 style="margin:0 0 12px;color:#b89b5e;font-size:18px;">
            Gérer votre demande
          </h2>
          <p style="font-size:14px;line-height:1.6;">
            Grâce à votre lien personnel, vous pourrez consulter les
            informations de votre dossier et transmettre une demande de
            modification ou d'annulation.
          </p>
          <p style="text-align:center;margin:25px 0;">
            <a
              href="${escapeHtml(lienGestion)}"
              style="display:inline-block;padding:14px 22px;background:#111111;color:#d4af37;text-decoration:none;font-weight:bold;border:1px solid #b89b5e;"
            >
              CONSULTER ET GÉRER MA DEMANDE
            </a>
          </p>
          <p style="font-size:11px;color:#777777;line-height:1.5;">
            Conservez cet e-mail : ce lien est personnel. Ne le partagez pas.
            Toute modification ou annulation reste soumise à confirmation
            par notre équipe.
          </p>
        </div>

        <p>
          Si des informations complémentaires sont nécessaires, nous
          reprendrons directement contact avec vous.
        </p>

        <p style="margin-top:28px;">Bien cordialement,</p>

        <p style="margin-top:20px;">
          <img
            src="https://www.sudidfexecutivetransport.fr/signature-email.png"
            alt="SUD IDF Executive Transport"
            width="450"
            style="display:block;width:450px;max-width:100%;height:auto;border:0;"
          />
        </p>
      </td>
    </tr>

    <tr>
      <td style="background:#111111;padding:18px;text-align:center;border-top:3px solid #b89b5e;">
        <p style="margin:0;color:#d4af37;font-size:12px;">
          SUD IDF EXECUTIVE TRANSPORT
        </p>
        <p style="margin:7px 0 0;color:#cccccc;font-size:11px;">
          Transport privé haut de gamme
        </p>
      </td>
    </tr>
  </table>
</div>

      `,
    });

    return NextResponse.json({
      success: true,
      reference,
      message: "Demande de devis enregistrée et envoyée avec succès.",
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
