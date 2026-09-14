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
      baggages,
    } = data;

    if (!amount || !email || !name) {
      return NextResponse.json(
        {
          error: "Informations de réservation incomplètes.",
        },
        { status: 400 }
      );
    }

    // Le montant arrive actuellement sous une forme comme :
    // "165 € TTC" ou "165 TTC"
    const amountNumber = Number(
      String(amount).replace(",", ".").replace(/[^\d.]/g, "")
    );

    if (!Number.isFinite(amountNumber) || amountNumber <= 0) {
      return NextResponse.json(
        {
          error: "Montant de réservation invalide.",
        },
        { status: 400 }
      );
    }

    const amountInCents = Math.round(amountNumber * 100);

    const origin =
      req.headers.get("origin") ||
      "https://www.sudidfexecutivetransport.fr";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      payment_method_types: ["card"],

      customer_email: email,

      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Réservation chauffeur privé - ${service || "Transport"}`,
              description:
                "Sud IDF Executive Transport - paiement intégral de la réservation",
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
        baggages: String(baggages || ""),
        amount: String(amountNumber),
      },

      success_url: `${origin}/merci?payment=success&session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${origin}/reservation?payment=cancelled`,
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Erreur Stripe Checkout :", error);

    return NextResponse.json(
      {
        error: "Impossible de créer la session de paiement Stripe.",
      },
      { status: 500 }
    );
  }
}