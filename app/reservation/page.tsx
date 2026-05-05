"use client";

import { useState } from "react";

export default function Reservation() {

  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    passagers: "",
    bagages: "",
    service: "",
    depart: "",
    arrivee: "",
    date: "",
    heure: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto bg-black/70 backdrop-blur-md p-8 rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/10">

        <h1 className="text-4xl text-center mb-6">
          Réserver votre chauffeur
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Remplissez le formulaire, nous vous répondrons rapidement
        </p>

        <form
  id="reservationForm"
  action="https://formsubmit.co/contact@sudidfexecutivetransport.fr"
  method="POST"
          className="space-y-6"
        >

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nouvelle réservation VTC" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://www.sudidfexecutivetransport.fr/merci" />
          <input type="hidden" name="_autoresponse" value="Merci pour votre demande. Nous vous répondrons rapidement." />

          <input name="nom" onChange={handleChange} type="text" placeholder="Nom / Prénom" required className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20" />

          <input name="email" onChange={handleChange} type="email" placeholder="Email" required className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20" />

          <input name="telephone" onChange={handleChange} type="tel" placeholder="Téléphone" required className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20" />

          <input name="passagers" onChange={handleChange} type="number" placeholder="Nombre de passagers" min="1" required className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20" />

          <input name="bagages" onChange={handleChange} type="number" placeholder="Nombre de bagages" min="0" required className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20" />

          <select name="service" onChange={handleChange} required className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20">
            <option value="">Type de prestation</option>
            <option>Transfert aéroport</option>
            <option>Transport gare</option>
            <option>Mise à disposition</option>
            <option>Événement</option>
          </select>

          <input name="depart" onChange={handleChange} type="text" placeholder="Adresse de départ" required className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20" />

          <input name="arrivee" onChange={handleChange} type="text" placeholder="Adresse d’arrivée" required className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20" />

          <div className="flex gap-4">
            <input name="date" onChange={handleChange} type="date" required className="w-1/2 p-3 bg-neutral-900 rounded-xl border border-amber-500/20" />
            <input name="heure" onChange={handleChange} type="time" required className="w-1/2 p-3 bg-neutral-900 rounded-xl border border-amber-500/20" />
          </div>

          <textarea name="message" onChange={handleChange} placeholder="Informations complémentaires" className="w-full p-3 bg-neutral-900 rounded-xl border border-amber-500/20"></textarea>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition"
          >
            Envoyer ma demande
          </button>

        </form>

        {/* WHATSAPP */}
        <button
  type="button"
  onClick={() => {

    const formEl = document.getElementById("reservationForm") as HTMLFormElement

    if (!formEl) return

    // 🔒 validation native (FIABLE)
    if (!formEl.checkValidity()) {
      formEl.reportValidity()
      return
    }

    const data = new FormData(formEl)

    const message = `Bonjour, je souhaite réserver :

Nom: ${data.get("nom")}
Téléphone: ${data.get("telephone")}
Email: ${data.get("email")}

Passagers: ${data.get("passagers")}
Bagages: ${data.get("bagages")}

Service: ${data.get("service")}

Départ: ${data.get("depart")}
Arrivée: ${data.get("arrivee")}

Date: ${data.get("date")}
Heure: ${data.get("heure")}

Message: ${data.get("message")}`

    window.open(`https://wa.me/33668863673?text=${encodeURIComponent(message)}`, "_blank")
  }}
>
  📲 Envoyer via WhatsApp
</button>

        {/* MESSAGE ERREUR DESIGN */}
        {error && (
          <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center text-red-400 text-sm">
            ⚠️ {error}
          </div>
        )}

        {/* APPEL */}
        <div className="flex justify-center mt-6">
          <a
            href="/appel"
            className="border border-amber-500 text-amber-400 px-8 py-3 rounded-xl text-lg hover:bg-amber-500 hover:text-black transition shadow-md"
          >
            📞 Appeler
          </a>
        </div>

      </div>
    </main>
  );
}