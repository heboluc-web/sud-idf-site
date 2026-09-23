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

  const [formError, setFormError] = useState("");
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
          ? 7
          : value === "Range Rover"
            ? 3
            : value === "Mercedes Classe S" ||
              value === "Mercedes-Maybach Classe S" ||
              value === "Mercedes Classe E"
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
    const heures = Math.max(2, parseInt(form.dureeMiseADispo || "2", 10));
    const heureCourse = parseInt(form.heure.split(":")[0] || "12", 10);
    const estNuit = heureCourse >= 19 || heureCourse < 7;

    const tarifsHoraires: Record<string, number> = {
      "Mercedes Classe E": 90,
      "Mercedes Classe V": 100,
      "Mercedes Classe S": 130,
      "Mercedes-Maybach Classe S": 170,
      "Range Rover": 120,
    };

    const tarifHoraire = tarifsHoraires[form.vehicule] || 100;
    const tarifHoraireFinal = estNuit
      ? Math.round(tarifHoraire * 1.2)
      : tarifHoraire;
    const prixTTC = heures * tarifHoraireFinal;
    const kmInclus = heures * 25;

    setForm((prev) => ({
      ...prev,
      distance: `${Math.round(kmInclus)} km inclus`,
      duree: `${heures} h`,
      prix: `${Math.round(prixTTC)} € TTC`,
      detailsPrix: `${heures} h / ${Math.round(kmInclus)} km inclus${
        estNuit ? " — tarif nuit" : ""
      }`,
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

    if (form.service === "Mise à disposition") {
      calculerMiseADispo();
      return;
    }

    if (serviceSansAdresse) {
      if (
        form.service === "Mariage" ||
        form.service === "VIP" ||
        form.service === "Longue distance"
      ) {
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

      const dureeSeminaire = form.dureeSeminaire || "4";
      const estForfait8h = dureeSeminaire === "8";
      const tarifsSeminaire: Record<string, Record<string, number>> = {
        "Mercedes Classe E": { "4": 350, "8": 650 },
        "Mercedes Classe V": { "4": 430, "8": 780 },
        "Range Rover": { "4": 500, "8": 850 },
        "Mercedes Classe S": { "4": 520, "8": 920 },
        "Mercedes-Maybach Classe S": { "4": 680, "8": 1180 },
      };

      const heureCourse = parseInt(form.heure.split(":")[0] || "12", 10);
      const estNuit = heureCourse >= 19 || heureCourse < 7;
      const tarifBase =
        tarifsSeminaire[form.vehicule]?.[dureeSeminaire] ??
        (estForfait8h ? 780 : 430);
      const prixTTC = estNuit ? Math.round(tarifBase * 1.2) : tarifBase;
      const kmInclus = estForfait8h ? 200 : 100;

      setForm((prev) => ({
        ...prev,
        distance: `${kmInclus} km inclus`,
        duree: `${dureeSeminaire} h`,
        prix: `${prixTTC} € TTC`,
        detailsPrix: `Forfait séminaire : ${dureeSeminaire} h / ${kmInclus} km inclus${
          estNuit ? " — tarif nuit" : ""
        }`,
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

        const texteTrajet = `${form.depart} ${form.arrivee}`.toLowerCase();
        const heureCourse = parseInt(form.heure.split(":")[0] || "12", 10);
        const estNuit = heureCourse >= 19 || heureCourse < 7;

        const contientParis = texteTrajet.includes("paris");
        const contientCDG =
          texteTrajet.includes("cdg") ||
          texteTrajet.includes("charles de gaulle") ||
          texteTrajet.includes("roissy");
        const contientOrly = texteTrajet.includes("orly");
        const contientLeBourget =
          texteTrajet.includes("le bourget") ||
          texteTrajet.includes("93350");
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

        const tarifsJour: Record<string, Record<string, number>> = {
          "Mercedes Classe E": {
            parisOrly: 129,
            parisCDG: 149,
            cdgOrly: 179,
            parisLeBourget: 149,
            parisDisney: 179,
            parisVersailles: 149,
            parisBeauvais: 249,
            parisChantilly: 199,
          },
          "Mercedes Classe V": {
            parisOrly: 169,
            parisCDG: 189,
            cdgOrly: 229,
            parisLeBourget: 189,
            parisDisney: 219,
            parisVersailles: 189,
            parisBeauvais: 299,
            parisChantilly: 249,
          },
          "Range Rover": {
            parisOrly: 199,
            parisCDG: 219,
            cdgOrly: 259,
            parisLeBourget: 219,
            parisDisney: 259,
            parisVersailles: 219,
            parisBeauvais: 349,
            parisChantilly: 289,
          },
          "Mercedes Classe S": {
            parisOrly: 179,
            parisCDG: 199,
            cdgOrly: 239,
            parisLeBourget: 229,
            parisDisney: 249,
            parisVersailles: 199,
            parisBeauvais: 329,
            parisChantilly: 279,
          },
          "Mercedes-Maybach Classe S": {
            parisOrly: 249,
            parisCDG: 279,
            cdgOrly: 299,
            parisLeBourget: 299,
            parisDisney: 329,
            parisVersailles: 279,
            parisBeauvais: 399,
            parisChantilly: 349,
          },
        };

        const tarifsKmJour: Record<string, number> = {
          "Mercedes Classe E": 2.2,
          "Mercedes Classe V": 2.8,
          "Range Rover": 3.2,
          "Mercedes Classe S": 3.5,
          "Mercedes-Maybach Classe S": 4.5,
        };

        const minimumJour: Record<string, number> = {
          "Mercedes Classe E": 55,
          "Mercedes Classe V": 70,
          "Range Rover": 80,
          "Mercedes Classe S": 90,
          "Mercedes-Maybach Classe S": 120,
        };

        const tarifsVehicule =
          tarifsJour[form.vehicule] || tarifsJour["Mercedes Classe V"];
        const tarifKmJour = tarifsKmJour[form.vehicule] || 2.8;
        const minimumJourVehicule = minimumJour[form.vehicule] || 70;
        const tarifKm = estNuit ? tarifKmJour * 1.2 : tarifKmJour;
        const minimum = estNuit
          ? Math.round(minimumJourVehicule * 1.2)
          : minimumJourVehicule;

        const tarifsNuit = (tarif: number) => Math.round(tarif * 1.2);

        let prixTTC = 0;
        let detailsPrix = "";

        if (form.service === "Transport standard") {
          const distanceKm =
            typeof element.distance?.value === "number"
              ? element.distance.value / 1000
              : Number(
                  distanceText
                    .replace(",", ".")
                    .replace(/[^0-9.]/g, "")
                );

          if (!Number.isFinite(distanceKm) || distanceKm <= 0) return;

          const prixKilometrique = distanceKm * tarifKm;
          prixTTC = Math.max(prixKilometrique, minimum);
          detailsPrix = `Transport standard régional — ${distanceKm.toFixed(
            1
          )} km × ${tarifKm.toFixed(2).replace(".", ",")} €/km${
            prixKilometrique < minimum
              ? ` — minimum ${minimum} €`
              : ""
          }`;
        } else if (contientParis && contientCDG) {
          prixTTC = tarifsVehicule.parisCDG;
          detailsPrix = "Forfait Paris ↔ CDG";
        } else if (contientParis && contientOrly) {
          prixTTC = tarifsVehicule.parisOrly;
          detailsPrix = "Forfait Paris ↔ Orly";
        } else if (contientCDG && contientOrly) {
          prixTTC = tarifsVehicule.cdgOrly;
          detailsPrix = "Forfait CDG ↔ Orly";
        } else if (contientParis && contientLeBourget) {
          prixTTC = tarifsVehicule.parisLeBourget;
          detailsPrix = "Forfait Paris ↔ Le Bourget";
        } else if (contientParis && contientDisney) {
          prixTTC = tarifsVehicule.parisDisney;
          detailsPrix = "Forfait Paris ↔ Disneyland";
        } else if (contientParis && contientVersailles) {
          prixTTC = tarifsVehicule.parisVersailles;
          detailsPrix = "Forfait Paris ↔ Versailles";
        } else if (contientParis && contientBeauvais) {
          prixTTC = tarifsVehicule.parisBeauvais;
          detailsPrix = "Forfait Paris ↔ Beauvais";
        } else if (contientParis && contientChantilly) {
          prixTTC = tarifsVehicule.parisChantilly;
          detailsPrix = "Forfait Paris ↔ Chantilly";
        } else {
          const distanceKm =
            typeof element.distance?.value === "number"
              ? element.distance.value / 1000
              : Number(
                  distanceText
                    .replace(",", ".")
                    .replace(/[^0-9.]/g, "")
                );

          if (!Number.isFinite(distanceKm) || distanceKm <= 0) return;

          const prixKilometrique = distanceKm * tarifKm;
          prixTTC = Math.max(prixKilometrique, minimum);
          detailsPrix = `Transport régional — ${distanceKm.toFixed(
            1
          )} km × ${tarifKm.toFixed(2).replace(".", ",")} €/km${
            prixKilometrique < minimum
              ? ` — minimum ${minimum} €`
              : ""
          }`;
        }

        if (estNuit) {
          if (form.service !== "Transport standard") {
            prixTTC = tarifsNuit(prixTTC);
          }
          detailsPrix += " — tarif nuit";
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
    if (form.vehicule === "Mercedes Classe V") return 7;
    if (form.vehicule === "Range Rover") return 3;
    if (
      form.vehicule === "Mercedes Classe E" ||
      form.vehicule === "Mercedes Classe S"
    )
      return 3;
    return 10;
  };

  const getMaxBagagesPour = (passagers: number, vehicule: string) => {
    if (vehicule === "Range Rover") return 3;

    if (
      vehicule === "Mercedes Classe E" ||
      vehicule === "Mercedes Classe S" ||
      vehicule === "Mercedes-Maybach Classe S"
    ) {
      return 3;
    }

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
      setFormError("⚠️ Merci de remplir tous les champs obligatoires.");
      return;
    }

    setFormError("");

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
    const handleStripeCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formElement = formRef.current;


setFormError("");
    try {
      // Récupération des données du formulaire
      const formData = new FormData(formElement);
      const formDataObject = Object.fromEntries(formData.entries());

      // On conserve les informations déjà présentes dans l'état du formulaire
      const reservationData = {
  ...formDataObject,
  ...form,
  name: formDataObject.nom,
phone: formDataObject.telephone,
amount: formDataObject.prix,
};

      // Si aucun tarif TTC n'est disponible :
      // il s'agit d'une demande de devis, on conserve FormSubmit.
      const amountNumber = Number(
       String(formDataObject.prix || "")
          .replace(",", ".")
          .replace(/[^\d.]/g, "")
      );

      if (!Number.isFinite(amountNumber) || amountNumber <= 0) {
        const response = await fetch(
          "https://formsubmit.co/contact@sudidfexecutivetransport.fr",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(
              Object.entries(reservationData).reduce(
                (acc, [key, value]) => {
                  acc[key] = String(value ?? "");
                  return acc;
                },
                {} as Record<string, string>
              )
            ).toString(),
          }
        );

        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi de la demande de devis.");
        }

        window.location.href = "/merci?type=devis";
        return;
      }

      // Réservation avec paiement : création de la session Stripe
      const response = await fetch(
        "/api/stripe/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservationData),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.url) {
        throw new Error(
          result.error || "Impossible de créer le paiement Stripe."
        );
      }

      // Redirection vers Stripe Checkout
      window.location.href = result.url;
    } catch (error) {
      console.error("Erreur réservation / paiement :", error);
      setFormError(
        error instanceof Error
          ? `⚠️ ${error.message}`
          : "⚠️ Impossible de traiter la réservation. Veuillez réessayer."
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
          onSubmit={handleStripeCheckout}
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
<option>Mercedes Classe E</option>
<option>Mercedes Classe S</option>
<option>Mercedes-Maybach Classe S</option>
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
                : form.vehicule === "Mercedes Classe E" ||
                  form.vehicule === "Mercedes Classe S" ||
                  form.vehicule === "Mercedes-Maybach Classe S"
                  ? "Berline : maximum 3 bagages (2 grandes valises + 1 valise cabine)."
                  : parseInt(form.passagers, 10) <= 3
                    ? "Classe V (1 à 3 passagers) : jusqu’à 10 valises."
                    : "Classe V (4 à 7 passagers) : maximum 6 valises."}
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
              <option value="4">4 heures</option>
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
              <option value="8">Séminaire : 8 heures / 200 km — 680 € TTC</option>
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
              {formError}
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