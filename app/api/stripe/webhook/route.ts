import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Signature Stripe manquante." },
      { status: 400 }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

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
      const session = event.data.object as Stripe.Checkout.Session;

      const customerEmail =
        session.customer_details?.email ||
        session.customer_email ||
        "";

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

      /*
       * Envoi de l'e-mail via FormSubmit
       */
      try {
        const formSubmitResponse = await fetch(
          "https://formsubmit.co/ajax/contact@sudidfexecutivetransport.fr",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              _subject: `✅ Paiement Stripe confirmé - ${metadata.name || "Client"}`,
              _cc: customerEmail || undefined,
              _template: "table",

              "Statut du paiement": "PAIEMENT CONFIRMÉ",
              "Montant payé": amountTotal,
              "Nom": metadata.name || "",
              "Téléphone": metadata.phone || "",
              "E-mail client": customerEmail,
              "Service": metadata.service || "",
              "Départ": metadata.depart || "",
              "Arrivée": metadata.arrivee || "",
              "Date": metadata.date || "",
              "Heure": metadata.heure || "",
              "Passagers": metadata.passagers || "",
              "Bagages": metadata.bagages || "",
              "Session Stripe": session.id,
            }),
          }
        );

        if (!formSubmitResponse.ok) {
          const errorText = await formSubmitResponse.text();

          console.error(
            "❌ Erreur FormSubmit :",
            formSubmitResponse.status,
            errorText
          );
        } else {
          console.log(
            "📧 E-mail de confirmation envoyé via FormSubmit."
          );
        }
      } catch (emailError) {
        console.error(
          "❌ Erreur lors de l'envoi FormSubmit :",
          emailError
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("❌ Erreur webhook Stripe :", error);

    return NextResponse.json(
      { error: "Signature Stripe invalide." },
      { status: 400 }
    );
  }
}