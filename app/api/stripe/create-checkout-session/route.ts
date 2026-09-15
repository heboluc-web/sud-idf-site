import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      amount,
      name,
      email,
      phone,
      service,
      date,
      time,
      depart,
      arrivee,
      vehicle,
      passengers,
      bagages,
    } = data;

    // ==============================
    // VALIDATION DES INFORMATIONS
    // ==============================

    if (!name || !email || !amount) {
      return NextResponse.json(
        {
          error: "Informations de réservation incomplètes.",
        },
        { status: 400 }
      );
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof amount !== "string"
    ) {
      return NextResponse.json(
        {
          error: "Format des informations de réservation invalide.",
        },
        { status: 400 }
      );
    }

    // ==============================
    // VALIDATION DU MONTANT
    // ==============================

    const amountMatch = amount.match(/(\d+(?:[.,]\d{1,2})?)/);

    if (!amountMatch) {
      return NextResponse.json(
        {
          error: "Montant de réservation invalide.",
        },
        { status: 400 }
      );
    }

    const amountNumber = Number(
      amountMatch[1].replace(",", ".")
    );

    if (
      !Number.isFinite(amountNumber) ||
      amountNumber <= 0 ||
      amountNumber > 10000
    ) {
      return NextResponse.json(
        {
          error: "Montant de réservation invalide.",
        },
        { status: 400 }
      );
    }

    // On travaille en centimes pour éviter les problèmes
    // d'arrondi lors du paiement Stripe.
    const amountInCents = Math.round(amountNumber * 100);

    if (amountInCents < 100) {
      return NextResponse.json(
        {
          error: "Le montant minimum de paiement est de 1 €.",
        },
        { status: 400 }
      );
    }

    // ==============================
    // ORIGINE DU SITE
    // ==============================

    const origin =
      req.headers.get("origin") ||
      "https://www.sudidfexecutivetransport.fr";

    const allowedOrigins = [
      "http://localhost:3000",
      "https://www.sudidfexecutivetransport.fr",
      "https://sudidfexecutivetransport.fr",
    ];

    if (!allowedOrigins.includes(origin)) {
      return NextResponse.json(
        {
          error: "Origine de requête non autorisée.",
        },
        { status: 403 }
      );
    }

    // ==============================
    // CREATION SESSION STRIPE
    // ==============================

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      payment_method_types: ["card"],

      customer_email: email.trim(),

      line_items: [
        {
          price_data: {
            currency: "eur",

            product_data: {
              name: `Réservation chauffeur privé - ${
                service || "Transport"
              }`,

              description:
                "SUD IDF Executive Transport - paiement intégral de la réservation",
            },

            unit_amount: amountInCents,
          },

          quantity: 1,
        },
      ],

      metadata: {
        name: String(name || ""),
        email: String(email || ""),
        phone: String(phone || ""),
        service: String(service || ""),
        date: String(date || ""),
        time: String(time || ""),
        depart: String(depart || ""),
        arrivee: String(arrivee || ""),
        vehicle: String(vehicle || ""),
        passengers: String(passengers || ""),
        bagages: String(bagages || ""),

        // Montant réellement utilisé par Stripe
        amount: String(amountNumber.toFixed(2)),
      },

      success_url:
        `${origin}/merci?payment=success&session_id={CHECKOUT_SESSION_ID}`,

      cancel_url:
        `${origin}/reservation?payment=cancelled`,
    });

    // ==============================
    // REPONSE
    // ==============================

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(
      "Erreur Stripe Checkout :",
      error
    );

    return NextResponse.json(
      {
        error:
          "Impossible de créer la session de paiement Stripe.",
      },
      { status: 500 }
    );
  }
}