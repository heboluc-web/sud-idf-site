import Stripe from "stripe";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey)
  : null;

const ALLOWED_ORIGINS = new Set([
  "http://localhost:3000",
  "https://www.sudidfexecutivetransport.fr",
  "https://sudidfexecutivetransport.fr",
]);

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === value;
}

function isTime(value: string): boolean {
  return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
}

function isNonNegativeInteger(value: unknown): value is number {
  return typeof value === "number" &&
    Number.isSafeInteger(value) &&
    value >= 0;
}

function getOrigin(request: Request): string {
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin && ALLOWED_ORIGINS.has(requestOrigin)) {
    return requestOrigin;
  }

  // Requests without an Origin header are sent to the production site.
  if (!requestOrigin) {
    return "https://www.sudidfexecutivetransport.fr";
  }

  return "";
}

export async function POST(request: Request) {
  try {
    if (!stripe) {
      console.error("STRIPE_SECRET_KEY is missing.");
      return NextResponse.json(
        { error: "Le paiement est momentanément indisponible." },
        { status: 500 }
      );
    }

    const origin = getOrigin(request);
    if (!origin) {
      return NextResponse.json(
        { error: "Origine de la requête non autorisée." },
        { status: 403 }
      );
    }

    const body = await request.json();

    const name = cleanString(body.name);
    const email = cleanString(body.email).toLowerCase();
    const phone = cleanString(body.phone);

    const greeterLocationType = cleanString(body.greeter_location_type);
    const tripType = cleanString(body.tripType);

    const passengers = Number(body.passengers);
    const baggageCount = Number(body.baggageCount);
    const returnPassengers = Number(body.returnPassengers);

    const arrivalLocation = cleanString(body.arrivalLocation);
    const arrivalTerminal = cleanString(body.arrivalTerminal);
    const arrivalCarrier = cleanString(body.arrivalCarrier);
    const arrivalNumber = cleanString(body.arrivalNumber);
    const arrivalDate = cleanString(body.arrivalDate);
    const arrivalTime = cleanString(body.arrivalTime);

    const returnDepartureLocation = cleanString(body.returnDepartureLocation);
    const returnCarrier = cleanString(body.returnCarrier);
    const returnNumber = cleanString(body.returnNumber);
    const returnDepartureDate = cleanString(body.returnDepartureDate);
    const returnDepartureTime = cleanString(body.returnDepartureTime);
    const returnBaggageCount = Number(body.returnBaggageCount);

    const termsAccepted = cleanString(body.termsAccepted);

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Veuillez renseigner votre nom, votre adresse e-mail et votre téléphone." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Veuillez renseigner une adresse e-mail valide." },
        { status: 400 }
      );
    }

    if (
      greeterLocationType !== "aeroport" &&
      greeterLocationType !== "gare"
    ) {
      return NextResponse.json(
        { error: "Veuillez sélectionner un lieu de prestation valide." },
        { status: 400 }
      );
    }

    if (tripType !== "aller" && tripType !== "aller-retour") {
      return NextResponse.json(
        { error: "Veuillez sélectionner un type de trajet valide." },
        { status: 400 }
      );
    }

    if (!Number.isSafeInteger(passengers) || passengers < 1) {
      return NextResponse.json(
        { error: "Le nombre de passagers indiqué est invalide." },
        { status: 400 }
      );
    }

    if (
  tripType === "aller-retour" &&
  (!Number.isSafeInteger(returnPassengers) || returnPassengers < 1)
) {
  return NextResponse.json(
    { error: "Le nombre de passagers au retour est invalide." },
    { status: 400 }
  );
}

    if (!isNonNegativeInteger(baggageCount)) {
      return NextResponse.json(
        { error: "Le nombre de bagages indiqué est invalide." },
        { status: 400 }
      );
    }

    if (
      !arrivalLocation ||
      !arrivalCarrier ||
      !arrivalNumber ||
      !isDate(arrivalDate) ||
      !isTime(arrivalTime) ||
      (greeterLocationType === "aeroport" && !arrivalTerminal)
    ) {
      return NextResponse.json(
        { error: "Veuillez compléter toutes les informations obligatoires concernant l'arrivée (lieu, terminal si aéroport, compagnie, numéro, date et heure)." },
        { status: 400 }
      );
    }

    if (termsAccepted !== "oui") {
      return NextResponse.json(
        { error: "Vous devez accepter les conditions pour continuer." },
        { status: 400 }
      );
    }

    if (tripType === "aller-retour") {
      if (
        !returnDepartureLocation ||
        !returnCarrier ||
        !returnNumber ||
        !isDate(returnDepartureDate) ||
        !isTime(returnDepartureTime) ||
        !isNonNegativeInteger(returnBaggageCount)
      ) {
        return NextResponse.json(
          { error: "Veuillez compléter toutes les informations obligatoires concernant le trajet retour." },
          { status: 400 }
        );
      }
    }
    // Le montant est calculé exclusivement côté serveur.
    // Tarifs Greeter autonome : 300 € TTC jusqu'à 4 passagers,
    // puis 90 € TTC par passager supplémentaire et par trajet.
   const singleTripPrice = 300 + Math.max(0, passengers - 4) * 90;
const returnTripPrice = 300 + Math.max(0, returnPassengers - 4) * 90;

const totalPrice =
  tripType === "aller-retour"
    ? singleTripPrice + returnTripPrice - 20
    : singleTripPrice;
    const amountInCents = totalPrice * 100;

    const metadata: Record<string, string> = {
      booking_kind: "greeter_autonome",
      service: "Service Greeter autonome",
      name,
      email,
      phone,
      greeter_location_type: greeterLocationType,
      tripType,
      passengers: String(passengers),
      returnPassengers: String(returnPassengers),
      baggageCount: String(baggageCount),
      arrivalLocation,
      arrivalTerminal,
      arrivalCarrier,
      arrivalNumber,
      arrivalDate,
      arrivalTime,
      returnDepartureLocation: tripType === "aller-retour" ? returnDepartureLocation : "",
      returnCarrier: tripType === "aller-retour" ? returnCarrier : "",
      returnNumber: tripType === "aller-retour" ? returnNumber : "",
      returnDepartureDate: tripType === "aller-retour" ? returnDepartureDate : "",
      returnDepartureTime: tripType === "aller-retour" ? returnDepartureTime : "",
      returnBaggageCount: tripType === "aller-retour" ? String(returnBaggageCount) : "",
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: amountInCents,
            product_data: {
              name: `Service Greeter autonome - ${
                tripType === "aller-retour" ? "aller-retour" : "aller simple"
              }`,
              description:
                "Accueil personnalisé en aéroport ou en gare - SUD IDF Executive Transport",
            },
          },
        },
      ],
      metadata,
      payment_intent_data: {
        metadata,
      },
      success_url: `${origin}/merci?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/reservation/greeter?payment=cancelled`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Impossible de créer la page de paiement. Veuillez réessayer." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erreur création paiement Greeter :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de la préparation du paiement. Veuillez réessayer." },
      { status: 500 }
    );
      }
}