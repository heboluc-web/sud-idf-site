"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const GOLD = "#D4AF37";

type LocationType = "aeroport" | "gare";
type TripType = "aller" | "aller-retour";

export default function ReservationGreeterPage() {
  const [locationType, setLocationType] = useState<LocationType>("aeroport");
  const [tripType, setTripType] = useState<TripType>("aller");
  const [passengers, setPassengers] = useState("1");
  const [returnPassengers, setReturnPassengers] = useState(passengers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
  setReturnPassengers(passengers);
}, [passengers]);

 const passengerCount = Math.max(1, Number.parseInt(passengers, 10) || 1);
const returnPassengerCount = Math.max(1, Number.parseInt(returnPassengers, 10) || 1);

const singleTripPrice = 300 + Math.max(0, passengerCount - 4) * 90;
const returnTripPrice = 300 + Math.max(0, returnPassengerCount - 4) * 90;

const totalPrice =
  tripType === "aller-retour"
    ? singleTripPrice + returnTripPrice - 20
    : singleTripPrice;
  const priceLabel = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(totalPrice),
    [totalPrice]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      payload[key] = String(value).trim();
    });

    payload.booking_kind = "greeter_autonome";
    payload.greeter_location_type = locationType;
    payload.tripType = tripType;
    payload.passengers = String(passengerCount);

    try {
      const response = await fetch("/api/greeter/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || result.message || "Impossible de préparer le paiement. Vérifiez les informations saisies.");
      }
      const checkoutUrl = result.url || result.checkoutUrl;
      if (!checkoutUrl) {
        throw new Error("Le lien de paiement n'a pas été retourné. Merci de réessayer.");
      }
      window.location.href = checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Merci de réessayer.");
      setLoading(false);
    }
  }

  const inputClass = "w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400";
  const labelClass = "mb-2 block text-sm font-medium text-zinc-200";
  const sectionClass = "rounded-2xl border border-amber-500/25 bg-zinc-900/80 p-5 sm:p-6";

  return (
    <main
      className="min-h-screen px-4 py-10 text-white sm:px-6"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.72)), url('/images/greeter-accueil-aeroport.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <a href="/" className="inline-block" aria-label="Retour à l'accueil SUD IDF Executive Transport">
            <img src="/logo.png" alt="SUD IDF Executive Transport" className="mx-auto mb-5 h-20 w-auto object-contain" />
          </a>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">SUD IDF EXECUTIVE TRANSPORT</p>
          <h1 className="text-3xl font-bold tracking-wide sm:text-4xl">Réservation Service Greeter</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-300 sm:text-base">
            Réservez votre accueil personnalisé à l'aéroport ou en gare, sans prestation de transport avec chauffeur.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <section className={sectionClass}>
            <h2 className="mb-5 text-xl font-semibold text-amber-400">1. Votre prestation</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="greeter_location_type">Lieu d'accueil *</label>
                <select id="greeter_location_type" name="greeter_location_type" className={inputClass} value={locationType} onChange={(e) => setLocationType(e.target.value as LocationType)} required>
                  <option value="aeroport">Aéroport</option>
                  <option value="gare">Gare</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="tripType">Type de prestation *</label>
                <select id="tripType" name="tripType" className={inputClass} value={tripType} onChange={(e) => setTripType(e.target.value as TripType)} required>
                  <option value="aller">Aller simple</option>
                  <option value="aller-retour">Aller-retour (2 accueils)</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="passengers">Nombre de passagers *</label>
                <input id="passengers" name="passengers" type="number" min="1" step="1" inputMode="numeric" className={inputClass} value={passengers} onChange={(e) => setPassengers(e.target.value)} required />
              </div>
              <div>
                <label className={labelClass} htmlFor="baggageCount">Nombre de bagages à l'arrivée *</label>
                <input id="baggageCount" name="baggageCount" type="number" min="0" step="1" inputMode="numeric" className={inputClass} placeholder="Ex. : 3" required />
              </div>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className="mb-5 text-xl font-semibold text-amber-400">2. Coordonnées du client</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">Nom et prénom *</label>
                <input id="name" name="name" autoComplete="name" className={inputClass} placeholder="Nom et prénom" required />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">Téléphone *</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="06..." required />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="email">Adresse e-mail *</label>
                <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="vous@exemple.fr" required />
              </div>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className="mb-5 text-xl font-semibold text-amber-400">3. Informations d'arrivée</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="arrivalLocation">{locationType === "aeroport" ? "Aéroport d'arrivée" : "Gare d'arrivée"} *</label>
                <input id="arrivalLocation" name="arrivalLocation" className={inputClass} placeholder={locationType === "aeroport" ? "Ex. : Paris-Orly" : "Ex. : Gare de Lyon"} required />
              </div>
              {locationType === "aeroport" && (
                <div>
                  <label className={labelClass} htmlFor="arrivalTerminal">Terminal *</label>
                  <input id="arrivalTerminal" name="arrivalTerminal" className={inputClass} placeholder="Ex. : Terminal 3" required />
                </div>
              )}
              <div>
                <label className={labelClass} htmlFor="arrivalCarrier">{locationType === "aeroport" ? "Compagnie aérienne" : "Compagnie ferroviaire"} *</label>
                <input id="arrivalCarrier" name="arrivalCarrier" className={inputClass} placeholder={locationType === "aeroport" ? "Ex. : Air France" : "Ex. : SNCF"} required />
              </div>
              <div>
                <label className={labelClass} htmlFor="arrivalNumber">{locationType === "aeroport" ? "Numéro de vol" : "Numéro de train"} *</label>
                <input id="arrivalNumber" name="arrivalNumber" className={inputClass} placeholder={locationType === "aeroport" ? "Ex. : AF1234" : "Ex. : TGV 6123"} required />
              </div>
              <div>
                <label className={labelClass} htmlFor="arrivalDate">Date d'arrivée *</label>
                <input id="arrivalDate" name="arrivalDate" type="date" className={inputClass} required />
              </div>
              <div>
                <label className={labelClass} htmlFor="arrivalTime">Heure d'arrivée prévue *</label>
                <input id="arrivalTime" name="arrivalTime" type="time" className={inputClass} required />
              </div>
            </div>
          </section>

          {tripType === "aller-retour" && (
            <section className={sectionClass}>
              <h2 className="mb-2 text-xl font-semibold text-amber-400">4. Informations du trajet retour</h2>
              <p className="mb-5 text-sm text-zinc-400">Ces informations sont nécessaires pour organiser le second accueil prévu dans votre réservation.</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="returnDepartureLocation">Lieu de départ du retour *</label>
                  <input id="returnDepartureLocation" name="returnDepartureLocation" className={inputClass} placeholder="Aéroport ou gare de départ" required />
                </div>
                <div>
                  <label className={labelClass} htmlFor="returnCarrier">Compagnie du retour *</label>
                  <input id="returnCarrier" name="returnCarrier" className={inputClass} placeholder="Compagnie aérienne ou ferroviaire" required />
                </div>
                <div>
                  <label className={labelClass} htmlFor="returnNumber">Numéro de vol ou de train du retour *</label>
                  <input id="returnNumber" name="returnNumber" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass} htmlFor="returnDepartureDate">Date de départ du retour *</label>
                  <input id="returnDepartureDate" name="returnDepartureDate" type="date" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass} htmlFor="returnDepartureTime">Heure de départ du retour *</label>
                  <input id="returnDepartureTime" name="returnDepartureTime" type="time" className={inputClass} required />
                </div>

<div>
  <label className={labelClass} htmlFor="returnPassengers">
    Nombre de passagers au retour *
  </label>
  <input
    id="returnPassengers"
    name="returnPassengers"
    type="number"
    min="1"
    step="1"
    inputMode="numeric"
    className={inputClass}
    value={returnPassengers}
    onChange={(e) => setReturnPassengers(e.target.value)}
    required
  />
</div>

                <div>
                  <label className={labelClass} htmlFor="returnBaggageCount">Nombre de bagages pour le retour *</label>
                  <input id="returnBaggageCount" name="returnBaggageCount" type="number" min="0" step="1" inputMode="numeric" className={inputClass} required />
                </div>
              </div>
            </section>
          )}

          <section className="rounded-2xl border border-amber-400/60 bg-zinc-950 p-6 shadow-lg shadow-amber-950/20">
            <h2 className="text-xl font-semibold text-amber-400">Récapitulatif de votre prestation</h2>
            <div className="mt-4 flex items-center justify-between gap-4 border-b border-zinc-800 pb-3 text-zinc-300">
              <span>Service Greeter {tripType === "aller-retour" ? "aller-retour" : "aller simple"}</span>
              <span className="text-right">{passengerCount} passager{passengerCount > 1 ? "s" : ""}</span>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="font-semibold">TOTAL TTC</span>
              <span className="text-3xl font-bold text-amber-400">{priceLabel}</span>
            </div>
            <p className="mt-3 text-xs leading-5 text-zinc-500">Tarif pour le service Greeter seul, sans transport avec chauffeur. De 1 à 4 passagers : 300 € TTC par accueil. Au-delà : 90 € TTC par passager supplémentaire et par accueil. Aller-retour : deux accueils avec une remise globale de 20 € TTC.</p>
          </section>

          <div>
            <label className="flex items-start gap-3 text-sm text-zinc-300">
              <input type="checkbox" name="termsAccepted" value="oui" className="mt-1 h-4 w-4 accent-amber-400" required />
              <span>Je confirme l'exactitude des informations communiquées et j'accepte les conditions générales de vente applicables à la prestation. *</span>
            </label>
          </div>

          {error && <p role="alert" className="rounded-lg border border-red-500/40 bg-red-950/40 p-4 text-sm text-red-200">{error}</p>}

          <button type="submit" disabled={loading} className="w-full rounded-xl bg-amber-400 px-6 py-4 text-base font-bold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Préparation du paiement…" : `Réserver et payer ${priceLabel}`}
          </button>
          <p className="text-center text-xs text-zinc-500">Le paiement sera sécurisé via Stripe. La réservation sera confirmée après validation effective du paiement.</p>
        </form>

        <footer className="mt-10 text-center text-xs text-zinc-600">
          <a href="/service-greeter" className="text-amber-400 hover:underline">Découvrir le service Greeter</a>
          <span className="mx-2">·</span>
          <a href="/" className="text-amber-400 hover:underline">Retour au site</a>
        </footer>
      </div>
    </main>
  );
}
