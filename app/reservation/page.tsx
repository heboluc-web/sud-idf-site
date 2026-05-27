"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export default function Reservation() {

  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    vehicule: "",
    passagers: "",
    bagages: "",
    service: "",
    depart: "",
    arrivee: "",
    date: "",
    heure: "",
    message: "",
    distance: "",
    duree: "",
    prix: "",
    detailsPrix: "",
  });

  const departRef = useRef<HTMLInputElement>(null);
  const arriveeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    if (!window.google) return;

    const departAutocomplete =
      new window.google.maps.places.Autocomplete(
        departRef.current as HTMLInputElement,
        {
          componentRestrictions: { country: "fr" },
        }
      );

    const arriveeAutocomplete =
      new window.google.maps.places.Autocomplete(
        arriveeRef.current as HTMLInputElement,
        {
          componentRestrictions: { country: "fr" },
        }
      );

    departAutocomplete.addListener("place_changed", () => {

      const place = departAutocomplete.getPlace();

      setForm((prev) => ({
        ...prev,
        depart: place.formatted_address || place.name || "",
      }));

    });

    arriveeAutocomplete.addListener("place_changed", () => {

      const place = arriveeAutocomplete.getPlace();

      setForm((prev) => ({
        ...prev,
        arrivee: place.formatted_address || place.name || "",
      }));

    });

  }, []);

  useEffect(() => {

  if (form.depart && form.arrivee) {
    calculerTrajet();
  }

}, [
  form.depart,
  form.arrivee,
  form.vehicule,
  form.service,
  form.heure
]);

  const handleChange = (e: any) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const calculerTrajet = () => {

    if (!window.google || !form.depart || !form.arrivee) return;

    const service =
      new window.google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [form.depart],
        destinations: [form.arrivee],
        travelMode:
          window.google.maps.TravelMode.DRIVING,
        unitSystem:
          window.google.maps.UnitSystem.METRIC,
      },

      (response: any, status: any) => {

        if (
          status === "OK" &&
          response &&
          response.rows[0].elements[0].status === "OK"
        ) {

          const element =
            response.rows[0].elements[0];

          const distanceText =
            element.distance?.text || "";

          const dureeText =
            element.duration?.text || "";

          const distanceKm = parseFloat(
            distanceText
              .replace(",", ".")
              .replace(" km", "")
          );

          // ================= TARIFS =================

         const tarifs = {
  "Mercedes Classe V": {
    prixKm: 2,
    minimum: 65,

    // ===== AÉROPORTS =====
    cdg77: 160,
    cdgEssonne: 150,

    orly77: 130,
    orlyEssonne: 120,

    // ===== MISE À DISPO =====
    miseADispo: 95,
  },

  "Range Rover": {
    prixKm: 2.8,
    minimum: 95,

    // ===== AÉROPORTS =====
    cdg77: 200,
    cdgEssonne: 190,

    orly77: 180,
    orlyEssonne: 170,

    // ===== MISE À DISPO =====
    miseADispo: 120,
  },
};

          const vehiculeTarif =
            tarifs[
              form.vehicule as keyof typeof tarifs
            ];

          if (!vehiculeTarif) return;

          // ================= PRIX BASE =================

          let prixHT = 0;

          // ================= DETECTION =================

          const texteTrajet =
            `${form.depart} ${form.arrivee}`.toLowerCase();

          const seineEtMarne =
            texteTrajet.includes("77") ||
            texteTrajet.includes("seine-et-marne") ||
            texteTrajet.includes("melun") ||
            texteTrajet.includes("fontainebleau") ||
            texteTrajet.includes("nemours") ||
            texteTrajet.includes("meaux");

          const aeroportCDG =
            texteTrajet.includes("roissy") ||
            texteTrajet.includes("charles de gaulle") ||
            texteTrajet.includes("cdg");

          const aeroportOrly =
            texteTrajet.includes("orly");

          // ================= CDG =================

          if (aeroportCDG) {
  prixHT = seineEtMarne
    ? vehiculeTarif.cdg77
    : vehiculeTarif.cdgEssonne;
}

          // ================= ORLY =================

          else if (aeroportOrly) {
  prixHT = seineEtMarne
    ? vehiculeTarif.orly77
    : vehiculeTarif.orlyEssonne;
}

          // ================= MISE A DISPO =================

          else if (form.service === "Mise à disposition") {
  prixHT = vehiculeTarif.miseADispo;
}

else {
  prixHT = Math.max(
    distanceKm * vehiculeTarif.prixKm,
    vehiculeTarif.minimum
  );
}

          // ================= NUIT =================

          const heureCourse =
            parseInt(
              form.heure.split(":")[0] || "12"
            );

          if (
            heureCourse >= 22 ||
            heureCourse <= 6
          ) {

            prixHT += 25;

          }

          // ================= TVA =================

          const prixTTC = prixHT * 1.1;

          // ================= UPDATE =================

          setForm((prev) => ({
            ...prev,
            distance: distanceText,
            duree: dureeText,
            prix: `${Math.round(prixTTC)} € TTC`,
            detailsPrix: "",
          }));

        }

      }
    );
  };

  const getMaxPassagers = () => {

    if (form.vehicule === "Mercedes Classe V")
      return 7;

    if (form.vehicule === "Range Rover")
      return 4;

    return 10;

  };

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />

      <main className="min-h-screen bg-black text-white px-6 py-20">

        <div className="max-w-3xl mx-auto bg-black/70 backdrop-blur-md p-8 rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/10">

          <h1 className="text-4xl text-center mb-6">
            Réserver votre chauffeur
          </h1>

          <p className="text-center text-gray-400 mb-12">
            Remplissez le formulaire
          </p>

          <form
            action="https://formsubmit.co/contact@sudidfexecutivetransport.fr"
            method="POST"
            className="space-y-6"
          >

            <input type="hidden" name="_captcha" value="false" />

            <input
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
              placeholder="Nom / Prénom"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <input
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              required
              placeholder="Téléphone"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <select
              name="vehicule"
              value={form.vehicule}
              onChange={handleChange}
              required
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            >
              <option value="">Type de véhicule</option>
              <option>Mercedes Classe V</option>
              <option>Range Rover</option>
            </select>

            <input
              name="passagers"
              value={form.passagers}
              onChange={handleChange}
              type="number"
              min="1"
              max={getMaxPassagers()}
              placeholder={`Passagers max ${getMaxPassagers()}`}
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <input
              name="bagages"
              value={form.bagages}
              onChange={handleChange}
              type="number"
              min="0"
              placeholder="Bagages"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            >

              <option>Type de transport </option>
              <option>Transport standard</option>
<option>Transfert aéroport</option>
<option>Mise à disposition</option>
<option>Mariage</option>
<option>VIP</option>
<option>Longue distance</option>
<option>Séminaire</option>
            </select>

            <input
              ref={departRef}
              name="depart"
              value={form.depart}
              onChange={handleChange}
              required
              placeholder="Départ"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <input
              ref={arriveeRef}
              name="arrivee"
              value={form.arrivee}
              onChange={handleChange}
              required
              placeholder="Arrivée"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            {form.distance && (

              <div className="bg-black border border-yellow-500 rounded-xl p-5 space-y-4">

                <p>
                  📍 Distance estimée :
                  <strong> {form.distance}</strong>
                </p>

                <p>
                  ⏱️ Temps estimé :
                  <strong> {form.duree}</strong>
                </p>

                <div className="border-t border-yellow-500/30 pt-4">

                  <p className="text-3xl text-yellow-400 font-bold">
                    💰 {form.prix}
                  </p>

                </div>

              </div>

            )}

            <div className="flex gap-4">

              <input
                name="date"
                value={form.date}
                onChange={handleChange}
                type="date"
                required
                className="w-1/2 p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
              />

              <input
                name="heure"
                value={form.heure}
                onChange={handleChange}
                type="time"
                required
                className="w-1/2 p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
              />

            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Informations complémentaires"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-xl"
            >
              Envoyer ma demande
            </button>

          </form>

        </div>

      </main>
    </>
  );
}