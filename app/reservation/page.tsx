"use client";

import { useState, useRef, useEffect } from "react";
import Script from "next/script";

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
    dureeMiseADispo: "2",
    dureeSeminaire: "4",
    prix: "",
    detailsPrix: "",
    tarification: "",
  });

  const [formError, setFormError] = useState(false);
  const [departSuggestions, setDepartSuggestions] = useState<any[]>([]);
  const [arriveeSuggestions, setArriveeSuggestions] = useState<any[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const departTokenRef = useRef<any>(null);
  const arriveeTokenRef = useRef<any>(null);
  const departRequestIdRef = useRef(0);
  const arriveeRequestIdRef = useRef(0);
  const tarifRequestIdRef = useRef(0);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "vehicule") {
      const maxPassagers =
        value === "Mercedes Classe V"
          ? 6
          : value === "Range Rover"
            ? 3
            : 10;

      setForm((prev) => {
        const passagersActuels = parseInt(prev.passagers || "0", 10);

        return {
          ...prev,
          vehicule: value,
          passagers:
            passagersActuels > maxPassagers
              ? String(maxPassagers)
              : prev.passagers,
        };
      });

      return;
    }

    if (name === "passagers") {
      const maxPassagers = getMaxPassagers();

      if (value === "") {
        setForm((prev) => ({ ...prev, passagers: "" }));
        return;
      }

      const nombre = Number(value);
      const passagersCorriges = Math.min(
        Math.max(Number.isFinite(nombre) ? nombre : 1, 1),
        maxPassagers
      );

      setForm((prev) => {
        const nouveauNombre = String(passagersCorriges);
        const maxBagages = getMaxBagagesPour(passagersCorriges, prev.vehicule);
        const bagagesActuels = parseInt(prev.bagages || "0", 10);

        return {
          ...prev,
          passagers: nouveauNombre,
          bagages:
            bagagesActuels > maxBagages
              ? String(maxBagages)
              : prev.bagages,
        };
      });

      return;
    }

    if (name === "bagages") {
      if (value === "") {
        setForm((prev) => ({ ...prev, bagages: "" }));
        return;
      }

      const nombre = Number(value);
      const maxBagages = getMaxBagagesPour(
        parseInt(form.passagers || "0", 10),
        form.vehicule
      );
      const bagagesCorriges = Math.min(
        Math.max(Number.isFinite(nombre) ? nombre : 0, 0),
        maxBagages
      );

      setForm((prev) => ({
        ...prev,
        bagages: String(bagagesCorriges),
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getGooglePlaces = async () => {
    if (typeof window === "undefined" || !(window as any).google?.maps?.importLibrary) {
      return null;
    }

    return await (window as any).google.maps.importLibrary("places");
  };

  const searchAddress = async (
    value: string,
    field: "depart" | "arrivee"
  ) => {
    const text = value.trim();

    if (field === "depart") {
      setDepartSuggestions([]);
    } else {
      setArriveeSuggestions([]);
    }

    if (text.length < 2) return;

    const places = await getGooglePlaces();
    if (!places) return;

    const {
      AutocompleteSessionToken,
      AutocompleteSuggestion,
    } = places as any;

    const tokenRef =
      field === "depart" ? departTokenRef : arriveeTokenRef;
    const requestIdRef =
      field === "depart"
        ? departRequestIdRef
        : arriveeRequestIdRef;

    if (!tokenRef.current) {
      tokenRef.current = new AutocompleteSessionToken();
    }

    const requestId = ++requestIdRef.current;

    try {
      const { suggestions } =
        await AutocompleteSuggestion.fetchAutocompleteSuggestions({
          input: text,
          includedRegionCodes: ["fr"],
          language: "fr",
          region: "fr",
          sessionToken: tokenRef.current,
        });

      if (requestId !== requestIdRef.current) return;

      const results = suggestions
        .filter((item: any) => item.placePrediction)
        .slice(0, 5);

      if (field === "depart") {
        setDepartSuggestions(results);
      } else {
        setArriveeSuggestions(results);
      }
    } catch (error) {
      console.error("Google Autocomplete:", error);
    }
  };

  const selectAddress = async (
    suggestion: any,
    field: "depart" | "arrivee"
  ) => {
    const prediction = suggestion.placePrediction;
    if (!prediction) return;

    try {
      const place = prediction.toPlace();

      await place.fetchFields({
        fields: ["formattedAddress", "displayName"],
      });

      const address =
        place.formattedAddress ||
        place.displayName ||
        prediction.text?.toString() ||
        "";

      setForm((prev) => ({
        ...prev,
        [field]: address,
      }));

      if (field === "depart") {
        setDepartSuggestions([]);
        departTokenRef.current = null;
      } else {
        setArriveeSuggestions([]);
        arriveeTokenRef.current = null;
      }
    } catch (error) {
      console.error("Google place selection:", error);
    }
  };

  const calculerMiseADispo = () => {
    const heures = Math.max(1, parseInt(form.dureeMiseADispo || "2", 10));
    const estRangeRover = form.vehicule === "Range Rover";
    const tarifHoraireBase = estRangeRover ? 95 : 80;

    // MAD : tarif horaire progressif. Le forfait Séminaire est indépendant.
    const tarifHoraire = Math.max(60, tarifHoraireBase - 5 * (heures - 1));
    const prixTTC = heures * tarifHoraire;
    const kmInclus = heures * 25;

    setForm((prev) => ({
      ...prev,
      distance: `${Math.round(kmInclus)} km inclus`,
      duree: `${heures} h`,
      prix: `${Math.round(prixTTC)} € TTC`,
      detailsPrix: `${heures} h / ${Math.round(kmInclus)} km inclus`,
    }));
  };

  const calculerTrajet = async () => {
    const serviceSansAdresse = [
      "Mise à disposition",
      "Mariage",
      "VIP",
      "Longue distance",
      "Séminaire",
    ].includes(form.service);

    // Services sans trajet Google
    if (form.service === "Mise à disposition") {
      calculerMiseADispo();
      return;
    }

    if (serviceSansAdresse) {
      const estRangeRover = form.vehicule === "Range Rover";

      if (form.service === "Mariage" || form.service === "VIP" || form.service === "Longue distance") {
        setForm((prev) => ({
          ...prev,
          distance: "",
          duree: "",
          prix: "SUR DEVIS PERSONNALISÉ",
          detailsPrix: "Tarif établi selon les besoins de la prestation",
          tarification: "SUR DEVIS PERSONNALISÉ",
        }));
        return;
      }

      // Séminaire : choix de durée, avec le forfait défini de 4 h / 100 km = 350 € TTC.
      const dureeSeminaire = form.dureeSeminaire || "4";
      const prixTTC = 350;
      setForm((prev) => ({
        ...prev,
        distance: "100 km inclus",
        duree: `${dureeSeminaire} h`,
        prix: `${prixTTC} € TTC`,
        detailsPrix: "Forfait séminaire : 4 h / 100 km inclus",
        tarification: "",
      }));
      return;
    }

    if (!(window as any).google || !form.depart || !form.arrivee || !form.vehicule) return;

    const google = (window as any).google;
    if (!google?.maps?.DistanceMatrixService) {
      console.error("Google Distance Matrix indisponible.");
      return;
    }

    const service = new google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [form.depart],
        destinations: [form.arrivee],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
      },
      (response: any, status: any) => {
        if (
          status !== "OK" ||
          !response?.rows?.[0]?.elements?.[0] ||
          response.rows[0].elements[0].status !== "OK"
        ) {
          return;
        }

        const element = response.rows[0].elements[0];
        const distanceText = element.distance?.text || "";
        const dureeText = element.duration?.text || "";
        const distanceKm = Number(element.distance?.value || 0) / 1000;

        const texteTrajet = `${form.depart} ${form.arrivee}`.toLowerCase();
        const heureCourse = parseInt(form.heure.split(":")[0] || "12", 10);
        const estNuit = heureCourse >= 19 || heureCourse < 6;
        const estRangeRover = form.vehicule === "Range Rover";

        const tarifKmJour = estRangeRover ? 2.5 : 2;
        const tarifKmNuit = estRangeRover ? 3 : 2.5;
        const tarifKm = estNuit ? tarifKmNuit : tarifKmJour;

        const contientParis = texteTrajet.includes("paris");
        const contientCDG =
          texteTrajet.includes("cdg") ||
          texteTrajet.includes("charles de gaulle") ||
          texteTrajet.includes("roissy");
        const contientOrly = texteTrajet.includes("orly");
        const contientBeauvais =
          texteTrajet.includes("beauvais") ||
          texteTrajet.includes("tillé") ||
          texteTrajet.includes("tille") ||
          texteTrajet.includes("60000") ||
          texteTrajet.includes("rte de l'aéroport") ||
          texteTrajet.includes("route de l'aéroport");
        const contientDisney =
          texteTrajet.includes("disneyland") ||
          texteTrajet.includes("marne-la-vallée") ||
          texteTrajet.includes("marne la vallée") ||
          texteTrajet.includes("marne-la-vallee") ||
          texteTrajet.includes("coupvray") ||
          texteTrajet.includes("77700") ||
          texteTrajet.includes("val d'europe") ||
          texteTrajet.includes("val d’europe") ||
          texteTrajet.includes("hotel disney") ||
          texteTrajet.includes("hôtel disney") ||
          texteTrajet.includes("newport bay") ||
          texteTrajet.includes("sequoia lodge") ||
          texteTrajet.includes("cheyenne") ||
          texteTrajet.includes("santa fe") ||
          texteTrajet.includes("marvel") ||
          texteTrajet.includes("davy crockett") ||
          texteTrajet.includes("explorers") ||
          texteTrajet.includes("dream castle") ||
          texteTrajet.includes("magic circus") ||
          texteTrajet.includes("radisson blu");
        const contientVersailles = texteTrajet.includes("versailles");
        const contientChantilly = texteTrajet.includes("chantilly");

        let prixTTC = 0;
        let detailsPrix = "";

        const forfaits = estRangeRover
          ? {
              parisOrly: estNuit ? 120 : 100,
              parisCDG: estNuit ? 130 : 110,
              cdgOrly: estNuit ? 160 : 140,
              parisDisney: estNuit ? 160 : 140,
              parisVersailles: estNuit ? 140 : 120,
              parisBeauvais: estNuit ? 240 : 210,
              parisChantilly: estNuit ? 240 : 210,
            }
          : {
              parisOrly: estNuit ? 100 : 80,
              parisCDG: estNuit ? 110 : 90,
              cdgOrly: estNuit ? 140 : 120,
              parisDisney: estNuit ? 140 : 120,
              parisVersailles: estNuit ? 120 : 100,
              parisBeauvais: estNuit ? 210 : 180,
              parisChantilly: estNuit ? 210 : 180,
            };

        if (contientParis && contientCDG) {
          prixTTC = forfaits.parisCDG;
          detailsPrix = "Forfait Paris ↔ CDG";
        } else if (contientParis && contientOrly) {
          prixTTC = forfaits.parisOrly;
          detailsPrix = "Forfait Paris ↔ Orly";
        } else if (contientCDG && contientOrly) {
          prixTTC = forfaits.cdgOrly;
          detailsPrix = "Forfait CDG ↔ Orly";
        } else if (contientParis && contientDisney) {
          prixTTC = forfaits.parisDisney;
          detailsPrix = "Forfait Paris ↔ Disneyland";
        } else if (contientParis && contientVersailles) {
          prixTTC = forfaits.parisVersailles;
          detailsPrix = "Forfait Paris ↔ Versailles";
        } else if (contientParis && contientBeauvais) {
          prixTTC = forfaits.parisBeauvais;
          detailsPrix = "Forfait Paris ↔ Beauvais";
        } else if (contientParis && contientChantilly) {
          prixTTC = forfaits.parisChantilly;
          detailsPrix = "Forfait Paris ↔ Chantilly";
        } else {
          prixTTC = distanceKm * tarifKm;
          if (contientCDG || contientOrly) {
            prixTTC += 20;
            detailsPrix = "Tarif kilométrique + supplément aéroport de 20 €";
          } else {
            detailsPrix = `Tarif kilométrique : ${tarifKm.toFixed(2)} €/km`;
          }
        }

        const prixArrondi = Math.max(0, Math.round(prixTTC));

        setForm((prev) => ({
          ...prev,
          distance: distanceText,
          duree: dureeText,
          prix: `${prixArrondi} € TTC`,
          detailsPrix,
        }));
      }
    );
  };

  useEffect(() => {
    const servicesSansAdresse = [
      "Mise à disposition",
      "Mariage",
      "VIP",
      "Longue distance",
      "Séminaire",
    ];

    if (servicesSansAdresse.includes(form.service)) {
      void calculerTrajet();
      return;
    }

    if (form.depart.trim() && form.arrivee.trim() && form.vehicule) {
      void calculerTrajet();
    }
  }, [form.depart, form.arrivee, form.vehicule, form.heure, form.service, form.dureeMiseADispo, form.dureeSeminaire]);

  const getMaxPassagers = () => {
    if (form.vehicule === "Mercedes Classe V") return 6;
    if (form.vehicule === "Range Rover") return 3;
    return 10;
  };

  const getMaxBagagesPour = (passagers: number, vehicule: string) => {
    if (vehicule === "Range Rover") return 3;

    if (vehicule === "Mercedes Classe V") {
      return passagers >= 4 ? 6 : 10;
    }

    return 10;
  };

  const getMaxBagages = () =>
    getMaxBagagesPour(parseInt(form.passagers || "0", 10), form.vehicule);

  const sendWhatsApp = () => {
    const requiredFields = [
      form.nom,
      form.telephone,
      form.vehicule,
      form.passagers,
      form.bagages,
      form.service,
      ...(
        ["Mise à disposition", "Mariage", "VIP", "Longue distance", "Séminaire"].includes(form.service)
          ? []
          : [form.depart, form.arrivee]
      ),
      form.date,
      form.heure,
    ];

    const isValid = requiredFields.every(
      (field) => field && field.toString().trim() !== ""
    );

    const nombrePassagers = parseInt(form.passagers || "0", 10);
    const nombreBagages = parseInt(form.bagages || "0", 10);
    const maxBagages = getMaxBagagesPour(nombrePassagers, form.vehicule);

    if (
      !isValid ||
      nombrePassagers > getMaxPassagers() ||
      nombreBagages > maxBagages
    ) {
      setFormError(true);
      return;
    }

    setFormError(false);

    const message = `🚘 Nouvelle réservation SUD IDF

👤 Nom : ${form.nom}
📞 Téléphone : ${form.telephone}
📧 Email : ${form.email}

🚗 Véhicule : ${form.vehicule}
👥 Passagers : ${form.passagers}
🧳 Bagages : ${form.bagages}

🛎️ Service : ${form.service}

${
  ["Mise à disposition", "Mariage", "VIP", "Longue distance", "Séminaire"].includes(form.service)
    ? ""
    : `📍 Départ : ${form.depart}
📍 Arrivée : ${form.arrivee}

`
}📅 Date : ${form.date}
⏰ Heure : ${form.heure}

💰 Tarif : ${form.prix}
📋 Détail tarif : ${form.detailsPrix || "Aucun"}

📝 Message :
${form.message || "Aucun"}`;

    if (typeof window !== "undefined") {
      const gtag = (window as any).gtag;
      if (typeof gtag === "function") {
        gtag("event", "whatsapp_click", {
          event_category: "Lead",
          event_label: "WhatsApp",
          value: 1,
        });
      }

      window.open(
        `https://wa.me/33650038514?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&loading=async&v=weekly`}
        strategy="afterInteractive"
      />

      <div className="max-w-3xl mx-auto bg-black/70 backdrop-blur-md p-8 rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/10">

        <h1 className="text-4xl text-center mb-6">
          Réserver votre chauffeur
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Remplissez le formulaire, nous vous répondrons rapidement
        </p>

        <form
          ref={formRef}
          action="https://formsubmit.co/contact@sudidfexecutivetransport.fr"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nouvelle réservation VTC" />
          <input type="hidden" name="_replyto" value={form.email} />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://www.sudidfexecutivetransport.fr/merci"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Merci pour votre demande. Nous vous répondrons rapidement."
          />
          <input type="hidden" name="distance" value={form.distance} />
          <input type="hidden" name="duree" value={form.duree} />
          <input type="hidden" name="prix" value={form.prix} />
          <input type="hidden" name="detailsPrix" value={form.detailsPrix} />
          <input type="hidden" name="tarification" value={form.tarification} />

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
            placeholder={`Passagers max ${getMaxPassagers()}`}
            className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
          />

          <input
            name="bagages"
            value={form.bagages}
            onChange={handleChange}
            required
            type="number"
            min="0"
            max={getMaxBagages()}
            placeholder={`Bagages max ${getMaxBagages()}`}
            className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
          />

          {form.vehicule && form.passagers && (
            <p className="text-xs text-gray-400 -mt-2">
              {form.vehicule === "Range Rover"
                ? "Range Rover : maximum 3 valises."
                : parseInt(form.passagers, 10) <= 3
                  ? "Classe V (1 à 3 passagers) : jusqu’à 10 valises."
                  : "Classe V (4 à 6 passagers) : maximum 6 valises."}
            </p>
          )}

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
          >
            <option value="">Type de transport</option>
            <option>Transport standard</option>
            <option>Transfert aéroport</option>
            <option>Mise à disposition</option>
            <option>Mariage</option>
            <option>VIP</option>
            <option>Longue distance</option>
            <option>Séminaire</option>
          </select>

          {form.service === "Mise à disposition" && (
            <select
              name="dureeMiseADispo"
              value={form.dureeMiseADispo}
              onChange={handleChange}
              required
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            >
              <option value="2">Durée de mise à disposition : 2 h minimum</option>
              <option value="3">3 heures</option>
              <option value="4">4 heures / 100 km — 350 € TTC</option>
              <option value="5">5 heures</option>
              <option value="6">6 heures</option>
              <option value="7">7 heures</option>
              <option value="8">8 heures</option>
            </select>
          )}

          {form.service === "Séminaire" && (
            <select
              name="dureeSeminaire"
              value={form.dureeSeminaire}
              onChange={handleChange}
              required
              className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
            >
              <option value="4">Séminaire : 4 heures / 100 km — 350 € TTC</option>
            </select>
          )}

          {!["Mise à disposition", "Mariage", "VIP", "Longue distance", "Séminaire"].includes(form.service) && (
            <>
              <div className="relative">
                <input
                  name="depart"
                  value={form.depart}
                  onChange={(e) => {
                    handleChange(e);
                    void searchAddress(e.target.value, "depart");
                  }}
                  required
                  autoComplete="off"
                  placeholder="Départ"
                  className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
                />

                {departSuggestions.length > 0 && (
                  <div className="absolute z-50 left-0 right-0 mt-1 overflow-hidden rounded-xl border border-gray-300 bg-white text-black shadow-xl">
                    {departSuggestions.map((suggestion, index) => (
                      <button
                        key={`depart-${index}`}
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => void selectAddress(suggestion, "depart")}
                        className="block w-full px-4 py-3 text-left text-sm hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                      >
                        {suggestion.placePrediction.text.toString()}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <input
                  name="arrivee"
                  value={form.arrivee}
                  onChange={(e) => {
                    handleChange(e);
                    void searchAddress(e.target.value, "arrivee");
                  }}
                  required
                  autoComplete="off"
                  placeholder="Arrivée"
                  className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"
                />

                {arriveeSuggestions.length > 0 && (
                  <div className="absolute z-50 left-0 right-0 mt-1 overflow-hidden rounded-xl border border-gray-300 bg-white text-black shadow-xl">
                    {arriveeSuggestions.map((suggestion, index) => (
                      <button
                        key={`arrivee-${index}`}
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => void selectAddress(suggestion, "arrivee")}
                        className="block w-full px-4 py-3 text-left text-sm hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                      >
                        {suggestion.placePrediction.text.toString()}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
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

          {(form.prix || form.tarification) && (
            <div className="rounded-2xl border border-amber-500/30 bg-neutral-950 p-5 text-center">
              {form.tarification ? (
                <>
                  <p className="text-gray-400 text-sm">Tarification</p>
                  <p className="text-yellow-400 text-3xl font-bold mt-2">
                    {form.tarification}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-400 text-sm">Tarif</p>
                  <p className="text-yellow-400 text-4xl font-bold mt-1">
                    {form.prix}
                  </p>
                </>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-2xl hover:scale-[1.02] transition-all duration-300"
          >
            ✨ Envoyer ma demande
          </button>

          {formError && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
              ⚠️ Merci de remplir tous les champs obligatoires
            </div>
          )}
        </form>

        <button
          type="button"
          onClick={sendWhatsApp}
          className="w-full flex items-center justify-center gap-3 border border-yellow-500/30 bg-black hover:bg-yellow-500/10 text-yellow-400 py-4 rounded-xl transition-all duration-300 mt-4"
        >
          📲 Envoyer via WhatsApp
        </button>

        <a
          href="tel:+33668863673"
          onClick={() => {
            if (
              typeof window !== "undefined" &&
              typeof (window as any).gtag === "function"
            ) {
              (window as any).gtag("event", "phone_click", {
                event_category: "Lead",
                event_label: "Telephone",
                value: 1,
              });
            }
          }}
          className="w-full flex items-center justify-center gap-3 border border-yellow-500/30 bg-black hover:bg-yellow-500/10 text-yellow-400 py-4 rounded-xl transition-all duration-300 mt-4"
        >
          📞 Appeler maintenant
        </a>

      </div>
    </main>
  );
}