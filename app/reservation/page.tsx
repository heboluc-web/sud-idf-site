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

  const [formError, setFormError] = useState(false);

  useEffect(() => {
    if (!window.google) return;

    const departAutocomplete = new window.google.maps.places.Autocomplete(
      departRef.current as HTMLInputElement,
      {
        componentRestrictions: { country: "fr" },
      }
    );

    const arriveeAutocomplete = new window.google.maps.places.Autocomplete(
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
  }, [form.depart, form.arrivee]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculerTrajet = () => {

    if (!window.google || !form.depart || !form.arrivee) return;

    const service = new window.google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [form.depart],
        destinations: [form.arrivee],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response: any, status: any) => {

        if (
          status === "OK" &&
          response &&
          response.rows[0].elements[0].status === "OK"
        ) {

          const element = response.rows[0].elements[0];

          const distanceText = element.distance?.text || "";
          const dureeText = element.duration?.text || "";

          const distanceKm = parseFloat(
            distanceText.replace(",", ".").replace(" km", "")
          );

          // ================= TARIFS =================

          const tarifs = {
            "Mercedes Classe V": {
              prixKm: 1.8,
              minimum: 55,
              orly: 120,
              cdg: 150,
            },

            "Range Rover": {
              prixKm: 2.4,
              minimum: 75,
              orly: 160,
              cdg: 190,
            },
          };

          const vehiculeTarif =
            tarifs[form.vehicule as keyof typeof tarifs];

          if (!vehiculeTarif) return;

          // ================= CALCUL BASE =================

          let prixHT =
            distanceKm * vehiculeTarif.prixKm;

          prixHT = Math.max(
            prixHT,
            vehiculeTarif.minimum
          );

          // ================= SERVICES PREMIUM =================

          if (form.service === "Mise à disposition") {
            prixHT += 120;
          }

          // services uniquement sur devis
          const servicesSurDevis = [
            "Mariage",
            "VIP",
            "Séminaire / Journée entreprise",
            "Longue distance",
            "Événement",
          ];

          if (servicesSurDevis.includes(form.service)) {

            setForm((prev) => ({
              ...prev,
              distance: distanceText,
              duree: dureeText,
              prix: "Sur devis",
              detailsPrix: `
Demande premium personnalisée

✔ Étude sur mesure
✔ Tarif personnalisé
✔ Service haut de gamme
✔ Réponse rapide
`,
            }));

            return;
          }

          // ================= NUIT =================

          const heureCourse =
            parseInt(form.heure.split(":")[0] || "12");

          if (heureCourse >= 22 || heureCourse <= 6) {
            prixHT += 25;
          }

          // ================= DETAILS PRIX =================

          let detailsPrix = "";

          // ===== ORLY =====

          if (
            form.arrivee.includes("Orly") ||
            form.depart.includes("Orly")
          ) {

            // Zone 1
            if (distanceKm <= 40) {

              prixHT = vehiculeTarif.orly;

            }

            // Zone 2
            else if (distanceKm <= 60) {

              prixHT = vehiculeTarif.orly + 20;

            }

            // Zone 3
            else {

              prixHT =
                vehiculeTarif.orly +
                20 +
                ((distanceKm - 60) * vehiculeTarif.prixKm * 1.5);

            }

            detailsPrix =
              `Forfait Orly : ${prixHT.toFixed(0)} € HT`;

          }

          // ===== CDG =====

          else if (

            form.arrivee.includes("Charles de Gaulle") ||
            form.arrivee.includes("CDG") ||
            form.arrivee.includes("Roissy") ||
            form.depart.includes("Charles de Gaulle") ||
            form.depart.includes("CDG") ||
            form.depart.includes("Roissy")

          ) {

            // Zone 1
            if (distanceKm <= 65) {

              prixHT = vehiculeTarif.cdg;

            }

            // Zone 2
            else if (distanceKm <= 80) {

              prixHT = vehiculeTarif.cdg + 20;

            }

            // Zone 3
            else {

              prixHT =
                vehiculeTarif.cdg +
                20 +
                ((distanceKm - 80) * vehiculeTarif.prixKm * 1.8);

            }

            detailsPrix =
              `Forfait CDG : ${prixHT.toFixed(0)} € HT`;

          }

          // ===== STANDARD =====

          else {

            detailsPrix =
              `Course minimum / trajet classique : ${prixHT.toFixed(0)} € HT`;

          }

          // ================= TVA =================

          const prixTTC = prixHT * 1.1;
          const montantTVA = prixHT * 0.1;

          setForm((prev) => ({
            ...prev,
            distance: distanceText,
            duree: dureeText,
            prix: `${Math.round(prixTTC)} € TTC`,
            detailsPrix: `
${detailsPrix}

TVA 10% : ${montantTVA.toFixed(0)} €
Total TTC : ${Math.round(prixTTC)} €
`,
          }));
        }
      }
    );
  };

  useEffect(() => {
    if (form.depart && form.arrivee) {
      calculerTrajet();
    }
  }, [form.vehicule, form.service, form.heure]);

  const getMaxPassagers = () => {
    if (form.vehicule === "Mercedes Classe V") return 7;
    if (form.vehicule === "Range Rover") return 4;
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
            Remplissez le formulaire, nous vous répondrons rapidement
          </p>

          <form
            action="https://formsubmit.co/contact@sudidfexecutivetransport.fr"
            method="POST"
            className="space-y-6"
          >

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nouvelle réservation VTC" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://www.sudidfexecutivetransport.fr/merci" />

            <textarea
              hidden
              readOnly
              name="trajet_infos"
              value={`Distance estimée : ${form.distance}
Durée estimée : ${form.duree}
Tarif TTC : ${form.prix}`}
            ></textarea>

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
              required
              type="number"
              min="1"
              max={getMaxPassagers()}
              placeholder={`Nombre de passagers (max ${getMaxPassagers()})`}
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <input
              name="bagages"
              value={form.bagages}
              onChange={handleChange}
              required
              type="number"
              min="0"
              placeholder="Nombre de bagages"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            >
              <option value="">Type de prestation</option>
              <option>Transport standard</option>
              <option>Transfert aéroport</option>
              <option>Mise à disposition</option>
              <option>Transport gare</option>
              <option>Événement</option>
              <option>Mariage</option>
              <option>VIP</option>
              <option>Séminaire / Journée entreprise</option>
            </select>

            <input
              ref={departRef}
              name="depart"
              value={form.depart}
              onChange={handleChange}
              required
              placeholder="Adresse de départ"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            <input
              ref={arriveeRef}
              name="arrivee"
              value={form.arrivee}
              onChange={handleChange}
              required
              placeholder="Adresse d’arrivée"
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            />

            {form.distance && (
              <div className="bg-black/40 border border-yellow-500 rounded-xl p-4 text-white space-y-3">

                <p>
                  📍 Distance estimée : <strong>{form.distance}</strong>
                </p>

                <p>
                  ⏱️ Temps estimé : <strong>{form.duree}</strong>
                </p>

                <div className="border-t border-yellow-500/30 pt-3">

                  <p className="text-2xl text-yellow-400 font-bold">
                    💰 {form.prix}
                  </p>

                  <div className="mt-3 border-t border-yellow-500/20 pt-3">

                    <pre className="text-sm text-gray-300 whitespace-pre-line leading-7">
                      {form.detailsPrix}
                    </pre>

                  </div>

                </div>

              </div>
            )}

            <div className="flex gap-4">

              <input
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                type="date"
                className="w-1/2 p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
              />

              <input
                name="heure"
                value={form.heure}
                onChange={handleChange}
                required
                type="time"
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
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition"
            >
              Envoyer ma demande
            </button>

          </form>

        </div>

      </main>
    </>
  );
}