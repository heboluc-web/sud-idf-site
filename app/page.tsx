'use client'

import { useEffect, useState } from 'react'

export default function SudIdfExecutiveTransport() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    date: '',
    message: ''
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const [visible, setVisible] = useState(false)
useEffect(() => {
  setVisible(true)
}, [])

const [visibleSections, setVisibleSections] = useState<{[key:string]: boolean}>({})

 useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section")

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()

      if (rect.top < window.innerHeight - 100) {
        setVisibleSections((prev) => ({
          ...prev,
          [section.id]: true,
        }))
      }
    })
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll()

  return () => window.removeEventListener("scroll", handleScroll)
}, [])

  return (
  <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
    <div className="text-center mt-32 mb-16">
  <img 
    src="/logo.png"
    alt="Logo"
    className="w-28 mx-auto mb-6 animate-fade-in"
  />

  <h1 className="text-4xl md:text-6xl text-amber-400 tracking-widest mb-4">
    Chauffeur privé VTC
  </h1>

  <p className="text-gray-300 mb-6">
    Transport haut de gamme en Île-de-France
  </p>

  <a
    href="/reservation"
    className="inline-block px-6 py-3 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition"
  >
    Réserver maintenant
  </a>
</div>

     {/* ================= NAVBAR ================= */}
<nav className="fixed top-0 w-full bg-black/90 backdrop-blur-2xl border-b border-amber-500/20 z-50">
  <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">

    <div className="flex flex-col">
      <span className="text-xl tracking-[0.5em] uppercase text-white font-light">SUD IDF</span>
      <span className="text-[10px] tracking-[0.7em] uppercase text-amber-400 mt-1">
        Executive Transport
      </span>
    </div>

    <div className="hidden md:flex items-center gap-14 text-[11px] tracking-[0.35em] uppercase text-neutral-300 font-light">
      <a href="#signature" className="hover:text-amber-400 transition">Qui nous sommes</a>
      <a href="#services" className="hover:text-amber-400 transition">Services</a>
      <a href="#fleet" className="hover:text-amber-400 transition">Flotte</a>
      <a href="#trust" className="hover:text-amber-400 transition">Références</a>
      <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
    </div>
  </div>
</nav>

{/* ================= HERO ================= */}
<section
 className="relative w-full h-[115vh] min-h-[900px] overflow-hidden flex items-center justify-center pt-32">

  {/* VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover scale-110"
  >
    <source src="/background.mp4" type="video/mp4" />
  </video>

  {/* OVERLAY DARK */}
  <div className="absolute inset-0 bg-black/70" />

  {/* CONTENU */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-10">

    {/* LOGO */}
    <img
      src="/logo.png"
      alt="Logo"
      className="w-72 md:w-96 lg:w-[420px] mb-10 drop-shadow-[0_0_80px_rgba(212,175,55,0.35)]"
    />

    <h1 className="text-4xl md:text-5xl font-light text-center mb-6 tracking-wide">
  Chauffeur privé haut de gamme
</h1>

<p className="text-center text-gray-400 mb-12 text-lg">
  Réservez votre chauffeur en quelques secondes — service premium 24/7
</p>
    {/* DESCRIPTION */}
    <p className="text-neutral-50 max-w-xl mb-10 text-sm md:text-base">
      L'execellence au service de vos déplacements professionnels.
    </p>

    {/* BOUTON */}
    <a
  href="/reservation"
  className="border border-white px-10 py-4 text-sm tracking-[0.3em] uppercase text-white hover:bg-white hover:text-black transition duration-500 mb-24"
>
      RÉSERVER MAINTENANT
    </a>

  </div>

</section>


         {/* ================= QUI NOUS SOMMES ================= */}
<section
  id="signature"
  className={`py-24 md:py-28 px-6 bg-black border-t border-amber-500/20 transition-all duration-1000 ${
    visibleSections["signature"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  }`}
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* TEXTE */}
    <div className="transition-all duration-700 hover:translate-y-[-4px]">
      <h2 className="text-3xl md:text-4xl tracking-[0.6em] uppercase text-amber-400 mb-10 font-light">
        Qui nous sommes
      </h2>

      <p className="text-neutral-300 leading-relaxed text-base mb-6 tracking-wide">
        SUD IDF EXECUTIVE TRANSPORT est une structure spécialisée dans le transport exécutif dédié aux entreprises, hôtelleries, groupes,
        directions générales, cabinets d’expertise, événementiels, navettes et bien d'autres professionnels.
      </p>

      <p className="text-neutral-400 leading-relaxed text-sm mb-6">
        Notre positionnement repose sur trois piliers fondamentaux : fiabilité opérationnelle,
        discrétion absolue et excellence du service.
        Chaque mission est organisée avec rigueur afin de garantir une prestation conforme
        aux standards des maisons de prestige et de l’aviation privée.
      </p>

      <p className="text-neutral-400 leading-relaxed text-sm mb-6">
        La sécurité, la pontualité, la confidentialité et le confort sont nos priorités
        pour assurer la tranquilité de nos clients.
      </p>
 
      

      <p className="text-neutral-500 leading-relaxed text-sm">
        L’ensemble des opérations est supervisé personnellement par
        <span className="text-amber-400"> Lucas Chamberlain</span>,
        Responsable Dirigeant.
      </p>
    </div>

    {/* PHOTO + PROFIL */}
    <div className="bg-neutral-900/50 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-10 text-center transition-all duration-700 hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]">

      {/* PHOTO */}
      <div className="flex justify-center mb-8">
        <img
          src="/lucas.jpg"
          alt="Fondateur"
          className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border border-amber-500 shadow-[0_0_40px_rgba(212,175,55,0.25)]"
        />
      </div>

      {/* NOM */}
      <h3 className="text-lg tracking-[0.4em] uppercase text-white font-light mb-3">
        Lucas Chamberlain
      </h3>

      {/* FONCTION */}
      <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">
        Responsable Dirigeant
      </p>

      {/* TRAIT */}
      <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6" />

      {/* SIGNATURE */}
     <div className="flex justify-center mt-4 mb-4">
        <div className="bg-neutral-900 px-5 py-3 rounded-lg border border-amber-500/20">
          <img src="/signature.png" alt="Signature" className="h-14 object-contain" />
        </div>
      </div>

    </div>
  </div>
</section>

   {/* ================= SERVICES ================= */}
      <section
  id="services"
  className={`py-40 px-6 bg-neutral-950 transition-all duration-1000 ${visibleSections["services"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
>
        <div className="max-w-7xl mx-auto text-center">
         <h2 className="text-4xl tracking-[0.7em] uppercase text-amber-400 mb-12 font-light">
            Services
          </h2>
         
           <p className="text-neutral-400 max-w-2xl mx-auto mt-6 mb-16">
      Des solutions de transport exécutif conçues pour répondre aux exigences
      des entreprises et des clients les plus prestigieux.
    </p>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              ['Transferts Aéroports', 'Navette avec accueil personnalisé, gestion des bagages et suivi en temps réel.'],
              ['Mise à disposition', 'Véhicule avec chauffeur dédié pour réunions, séminaires,conférences et événements.'],
              ['Transport Business', 'Image premium, ponctualité, sécurité, confort, discrétion et confidentialité totale.']
            ].map((item, index) => (
              <div key={index} className="p-12 bg-black/70 backdrop-blur-xl rounded-3xl border border-amber-500/20 hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(212,175,55,0.15)] transition-all duration-700">
                <h3 className="text-xs mb-8 tracking-[0.4em] uppercase text-neutral-200 font-light">{item[0]}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



{/* ================= FLOTTE ================= */}
<section
  id="fleet"
  className={`py-40 px-6 bg-black border-t border-amber-500/20 text-center transition-all duration-1000 ease-out ${visibleSections["fleet"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
>
<h2 className="text-4xl tracking-[0.7em] uppercase text-amber-400 mb-20 font-light">
    Notre Flotte
  </h2>

  <h3 className="text-2xl tracking-[0.6em] uppercase text-white mb-16 font-light">
    Mercedes Classe V · 8 Places
  </h3>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl mx-auto mb-16">
  {[
    '/classev.jpg',
    '/classev1.jpg',
    '/classev2.jpg',
    '/classev3.jpg',
    '/classev4.jpg',
    '/classev5.jpg',
    '/classev6.jpg',
    '/classev7.jpg',
    '/classev8.jpg'
  ].map((img, index) => (
    <div
      key={index}
      className="
        group relative bg-neutral-900 rounded-3xl overflow-hidden
        border border-amber-500/20
        transition-all duration-700 ease-out
        hover:-translate-y-4
        hover:border-amber-400
        hover:shadow-[0_25px_100px_rgba(212,175,55,0.35)]
      "
    >
      <img
        src={img}
        alt="Mercedes Classe V"
        className="
          w-full aspect-[4/3] object-cover
          transition-all duration-1000
          group-hover:scale-110
          group-hover:brightness-110
        "
      />

      <div className="
        absolute inset-0
        bg-gradient-to-t from-black/60 via-black/10 to-transparent
        opacity-60 group-hover:opacity-30
        transition duration-700
      " />

      <div className="absolute bottom-8 left-8 text-left">
        <h4 className="text-sm tracking-[0.4em] uppercase text-white font-light">
          Executive Van · 8 Places
        </h4>
      </div>
    </div>
  ))}
</div>
<h3 className="text-2xl tracking-[0.6em] uppercase text-white mb-16 font-light">
    Range Rover Autobiography
  </h3>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl mx-auto">
  {[
    '/rangerover1.jpg',
    '/rangerover.jpg',
    '/rangerover2.jpg',
    '/rangerover3.jpg',
    '/rangerover4.jpg',
    '/rangerover5.jpg'
  ].map((img, index) => (
    <div
      key={index}
      className="
        group relative bg-neutral-900 rounded-3xl overflow-hidden
        border border-amber-500/20
        transition-all duration-700 ease-out
        hover:-translate-y-4
        hover:border-amber-400
        hover:shadow-[0_25px_100px_rgba(212,175,55,0.35)]
      "
    >
      <img
        src={img}
        alt="Range Rover Autobiography"
        className="
          w-full aspect-[4/3] object-cover
          transition-all duration-1000
          group-hover:scale-110
          group-hover:brightness-110
        "
      />

      <div className="
        absolute inset-0
        bg-gradient-to-t from-black/60 via-black/10 to-transparent
        opacity-60 group-hover:opacity-30
        transition duration-700
      " />

      <div className="absolute bottom-8 left-8 text-left">
        <h4 className="text-sm tracking-[0.4em] uppercase text-white font-light">
          SUV Prestige · Intérieur Beige
        </h4>
      </div>
    </div>
  ))}
</div>

</section>  

    {/* ================= TRUST ================= */}
      <section
  id="trust"
  className={`py-40 px-6 bg-neutral-950 text-center transition-all duration-1000 ${visibleSections["trust"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
>
        <h2 className="text-4xl tracking-[0.7em] uppercase text-amber-400 mb-16 font-light">
          Ils nous font confiance
        </h2>

        <div className="grid md:grid-cols-4 gap-16 max-w-6xl mx-auto">
          {[
            { logo: '/logo1.png', label: 'Cabinets d’Avocats & Juridiques' },
            { logo: '/logo2.png', label: 'Groupes Industriels & Sièges Sociaux' },
            { logo: '/logo3.png', label: 'Hôtellerie & Centres de Conférences' },
            { logo: '/logo4.png', label: 'Directions Générales & Comités Exécutifs' }
          ].map((partner, index) => (
            <div key={index} className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition duration-500">
              <img
                src={partner.logo}
                alt={partner.label}
                className="h-14 mb-6 grayscale hover:grayscale-0 transition duration-500"
              />
              <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase font-light">
                {partner.label}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= CTA CORPORATE ================= */}
      <section className="py-32 px-6 bg-black border-t border-amber-500/20 text-center">
        <h2 className="text-3xl tracking-[0.6em] uppercase text-white mb-10 font-light">
          Demande de devis corporate
        </h2>
        <a href="#contact" className="px-16 py-6 border border-amber-500 text-amber-400 rounded-full tracking-[0.4em] text-xs hover:bg-amber-500 hover:text-black transition-all duration-500 inline-block">
          OBTENIR UN DEVIS
        </a>

      </section>

      {/* ================= CONTACT ================= */}
      <section
  id="contact"
  className={`py-40 px-6 bg-black border-t border-amber-500/20 text-center transition-all duration-1000 ${visibleSections["contact"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
>
        <h2 className="text-4xl tracking-[0.7em] uppercase text-amber-400 mb-16 font-light">
          Contact
        </h2>

        <form
  action="https://formsubmit.co/heboluc@hotmail.it"
  method="POST"
>
  <input type="hidden" name="_next" value="https://www.sudidfexecutivetransport.fr/merci" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="Demande de devis corporate" />
  <input type="hidden" name="_template" value="table" />

          <input
            type="text"
            name="name"
            placeholder="Nom & Prénom"
            required
            className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white focus:outline-none focus:border-amber-400"
          />

          <input
            type="text"
            name="company"
            placeholder="Entreprise"
            className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white focus:outline-none focus:border-amber-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white"
           />

          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            required
            className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white focus:outline-none focus:border-amber-400"
          />

          <input
            type="date"
            name="date"
            required
            className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white focus:outline-none focus:border-amber-400"
          />

          <textarea
            name="message"
            placeholder="Décrivez votre besoin (lieu, horaire, nombre de passagers...)"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white focus:outline-none focus:border-amber-400"
          />

          <button
            type="submit"
            className="px-12 py-5 bg-amber-500 text-black rounded-full tracking-[0.4em] text-xs hover:bg-amber-400 transition-all duration-500"
          >
            ENVOYER LA DEMANDE
          </button>
        </form>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-24 text-center border-t border-amber-500/20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10" />
          <p className="text-neutral-500 text-sm tracking-[0.5em] uppercase font-light">
            © 2026 Sud IDF Executive Transport
          </p>
          <p className="text-neutral-600 text-xs mt-6 tracking-wider font-light">
            Au capital social de 1 000€ · SIRET 101 146 637 00018 - TVA FR61 101 146 637
          </p>
          <p className="text-neutral-600 text-xs mt-2 tracking-wider font-light">
            Siège social : Corbeil-Essonnes, France.
          </p>
          <div className="mt-16 border-t border-amber-500/20 pt-6 text-center text-xs text-neutral-500">

  <div className="flex justify-center gap-6 mb-3">
    <a href="/cgv" className="hover:text-amber-400">CGV</a>
    <a href="/mentions-legales" className="hover:text-amber-400">Mentions légales</a>
    <a href="/confidentialite" className="hover:text-amber-400">Confidentialité</a>
  </div>

  <p>© SUD IDF EXECUTIVE TRANSPORT</p>

</div>  
        </div>
</footer>
</div>
)
}