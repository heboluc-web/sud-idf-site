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
  action="https://formsubmit.co/contact@sudidfexecutivetransport.fr"
  method="POST"
  className="space-y-6"
>
          <input type="hidden" name="_next" value="http://localhost:3000/merci" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nouvelle réservation VTC" />
          <input type="hidden" name="_template" value="table" />
          

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
            const message = `Bonjour, je souhaite réserver :

Nom: ${form.nom}
Téléphone: ${form.telephone}
Email: ${form.email}

Nombre de passagers: ${form.passagers}
Nombre de bagages: ${form.bagages}

Service: ${form.service}

Départ: ${form.depart}
Arrivée: ${form.arrivee}

Date: ${form.date}
Heure: ${form.heure}

Message: ${form.message}`;

            window.open(`https://wa.me/33668863673?text=${encodeURIComponent(message)}`, "_blank");
          }}
          className="w-full mt-4 py-3 border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500 hover:text-black transition"
        >
          📲 Envoyer via WhatsApp
        </button>

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