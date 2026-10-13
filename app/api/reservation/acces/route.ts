import { creerSessionReservation } from "@/lib/reservation-access";
import { NextRequest, NextResponse } from "next/server";
import { createHash, randomInt } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const EMAIL_ENTREPRISE = "contact@sudidfexecutivetransport.fr";
const EXPEDITEUR_NOM = "SUD IDF Executive Transport";

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function reponseErreur(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

async function envoyerCode(email: string, code: string) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || EMAIL_ENTREPRISE;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY est absente des variables d'environnement.");
  }

  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: EXPEDITEUR_NOM, email: senderEmail },
      to: [{ email }],
      subject: "Votre code de vérification - SUD IDF Executive Transport",
      htmlContent: `
        <div style="font-family:Arial,sans-serif;color:#222;line-height:1.6">
          <h2 style="color:#b89b5e">${EXPEDITEUR_NOM}</h2>
          <p>Voici votre code de vérification :</p>
          <p style="font-size:30px;font-weight:bold;letter-spacing:8px">${code}</p>
          <p>Ce code expire dans 10 minutes. Ne le communiquez à personne.</p>
          <p>Si vous n'avez pas demandé ce code, ignorez ce message.</p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    console.error("Erreur Brevo :", response.status, await response.text());
    throw new Error("L'envoi du code par e-mail a échoué.");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const action = body.action;

    if (action === "demander-code") {
      const reference =
        typeof body.reference === "string" ? body.reference.trim() : "";
      const email =
        typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

      if (
        !reference ||
        reference.length > 100 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        email.length > 254
      ) {
        return reponseErreur("Référence ou adresse e-mail invalide.");
      }

      const { data: reservation, error } = await supabaseAdmin
        .from("reservations")
        .select("id, reference, email")
        .eq("reference", reference)
        .ilike("email", email)
        .maybeSingle();

      if (error) {
        console.error("Recherche réservation :", error.message);
        return reponseErreur("Service momentanément indisponible.", 500);
      }

      // Même réponse, que la réservation existe ou non, pour limiter
      // la divulgation des références enregistrées.
      if (!reservation) {
        return NextResponse.json({
          success: true,
          message:
            "Si les informations correspondent à un dossier, un code sera envoyé à l'adresse associée.",
        });
      }

      const code = String(randomInt(0, 1_000_000)).padStart(6, "0");
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

      // Invalider les anciens codes de cette réservation.
      const { error: deleteError } = await supabaseAdmin
        .from("reservation_access_codes")
        .delete()
        .eq("reservation_id", reservation.id);

      if (deleteError) {
        console.error("Suppression des anciens codes :", deleteError.message);
        return reponseErreur("Impossible de préparer le code.", 500);
      }

      const { error: insertError } = await supabaseAdmin
        .from("reservation_access_codes")
        .insert({
          reservation_id: reservation.id,
          code_hash: hash(code),
          expires_at: expiresAt,
          attempts: 0,
        });

      if (insertError) {
        console.error("Enregistrement du code :", insertError.message);
        return reponseErreur("Impossible de préparer le code.", 500);
      }

      await envoyerCode(email, code);

      return NextResponse.json({
        success: true,
        message:
          "Si les informations correspondent à un dossier, un code sera envoyé à l'adresse associée.",
      });
    }

    if (action === "verifier-code") {
      const reference =
        typeof body.reference === "string" ? body.reference.trim() : "";
      const email =
        typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
      const code = typeof body.code === "string" ? body.code.trim() : "";

      if (
        !reference ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !/^\d{6}$/.test(code)
      ) {
        return reponseErreur("Informations ou code invalide.");
      }

      const { data: reservation, error: reservationError } =
        await supabaseAdmin
          .from("reservations")
          .select("id, reference, email")
          .eq("reference", reference)
          .ilike("email", email)
          .maybeSingle();

      if (reservationError || !reservation) {
        return reponseErreur("Code invalide ou expiré.", 400);
      }

      const { data: acces, error: accesError } = await supabaseAdmin
        .from("reservation_access_codes")
        .select("id, code_hash, expires_at, attempts")
        .eq("reservation_id", reservation.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (accesError || !acces) {
        return reponseErreur("Code invalide ou expiré.", 400);
      }

      if (acces.attempts >= 5 || new Date(acces.expires_at).getTime() < Date.now()) {
        await supabaseAdmin
          .from("reservation_access_codes")
          .delete()
          .eq("id", acces.id);

        return reponseErreur("Code invalide ou expiré.", 400);
      }

      if (hash(code) !== acces.code_hash) {
        await supabaseAdmin
          .from("reservation_access_codes")
          .update({ attempts: acces.attempts + 1 })
          .eq("id", acces.id);

        return reponseErreur("Code invalide ou expiré.", 400);
      }

            const session = creerSessionReservation(reservation.id);

      const response = NextResponse.json({
        success: true,
        message: "Code vérifié. Vous pouvez accéder à votre réservation.",
      });

      response.cookies.set(session.cookieName, session.value, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/api/reservation",
        maxAge: session.maxAge,
      });

      return response;
    }

    return reponseErreur("Action inconnue.");
  } catch (error) {
    console.error("API d'accès à la réservation :", error);
    return reponseErreur("Une erreur est survenue. Réessayez plus tard.", 500);
  }
}
