
import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

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
      "id, reference, type, statut, date_trajet, heure_trajet, depart, arrivee, service, vehicule"
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
        email: EXPEDITEUR_EMAIL,
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
