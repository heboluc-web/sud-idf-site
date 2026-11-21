'use client'

import { useEffect, useState } from 'react'

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaShieldAlt,
  FaClock,
  FaPlane,
  FaTrain,
  FaShip,
  FaStar,
} from "react-icons/fa";

export default function SudIdfExecutiveTransport() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  })

  const [formError, setFormError] = useState(false)

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
   
      <section className="relative isolate min-h-[750px] flex items-center justify-center px-6 py-16 overflow-hidden">

        {/* IMAGE AVION + MERCEDES */}
        <div
  className="absolute inset-0 bg-black bg-no-repeat"
  style={{
    backgroundImage: "url('/images/accueil-avion-mercedes.png')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }}
/>
        {/* ASSOMBRISSEMENT POUR GARDER LES TEXTES LISIBLES */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black" />

        {/* CONTENU D'ACCUEIL CONSERVÉ */}
        <div className="relative z-10 text-center mt-32 mb-16">

          <img
            src="/logo.png"
            alt="Logo"
            className="w-28 mx-auto mb-6 animate-fade-in"
          />

          <p className="text-white font-bold uppercase tracking-[0.6em] text-xs md:text-sm mb-6">
            DISPONIBILITÉ PRIORITAIRE SUR RÉSERVATION
          </p>

          <h1 className="text-6xl md:text-8xl font-light text-amber-400 mb-4">
            Chauffeur privé VTC
          </h1>

          <p className="text-lg md:text-2xl text-white mb-6">
            Planifiez vos transferts à l'avance pour garantir disponibilité et ponctualité.
          </p>

          <p className="text-white text-lg mb-6">
            VTC haut de gamme en Île-de-France
          </p>

          <a
            href="/reservation"
            className="mt-6 inline-block bg-amber-500 text-black px-8 py-4 rounded-xl hover:bg-amber-400 transition"
          >
            Réserver maintenant
          </a>

        </div>
      </section>

     {/* ================= NAVBAR ================= */}
<nav className="fixed top-0 w-full bg-black/90 backdrop-blur-2xl border-b border-amber-500/20 z-50">
  <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">

    <div className="flex flex-col">
      <span className="text-xl tracking-[0.5em] uppercase text-white font-light">
        SUD IDF
      </span>

      <span className="text-[10px] tracking-[0.7em] uppercase text-amber-400 mt-1">
        Executive Transport
      </span>
    </div>

    <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.28em] uppercase text-neutral-300 font-light">

      <a
        href="/chauffeur-prive-essonne"
        className="hover:text-amber-400 transition"
      >
        Essonne
      </a>

      <a
        href="/transfert-orly"
        className="hover:text-amber-400 transition"
      >
        Orly
      </a>

      <a
        href="/transfert-cdg"
        className="hover:text-amber-400 transition"
      >
        CDG
      </a>

      <a
        href="/chauffeur-business"
        className="hover:text-amber-400 transition"
      >
        Business
      </a>

      <a
        href="/mise-a-disposition"
        className="hover:text-amber-400 transition"
      >
        Mise à disposition
      </a>

      <a
        href="/contact"
        className="hover:text-amber-400 transition"
      >
        Contact
      </a>

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
      L'excellence au service de tous vos déplacements professionnels, privés et événementiels.
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

{/* BLOC CONFIANCE PREMIUM */}

<section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      <div className="group border border-amber-500/15 rounded-2xl p-5 bg-neutral-950 flex flex-col justify-center text-center hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500">

  <FaShieldAlt className="text-amber-300 text-4xl mx-auto mb-5 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-all duration-500" />

  <h3 className="text-white text-lg font-medium tracking-[0.08em] uppercase mb-3">
    Chauffeur professionnel
  </h3>

  <p className="text-neutral-400">
    Discrétion et ponctualité
  </p>

</div>

      <div className="group border border-amber-500/15 rounded-2xl p-5 bg-neutral-950 flex flex-col justify-center text-center hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500">

  <FaClock className="text-amber-300 text-4xl mx-auto mb-5 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-all duration-500" />

  <h3 className="text-white text-lg font-medium tracking-[0.08em] uppercase mb-3">
    Disponible 24h/24
  </h3>

  <p className="text-neutral-400">
    Réservation à tout moment
  </p>

</div>

      <div className="group border border-amber-500/15 rounded-2xl p-5 bg-neutral-950 flex flex-col justify-center text-center hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500">

  <FaPlane className="text-amber-300 text-4xl mx-auto mb-5 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-all duration-500" />

  <h3 className="text-white text-lg font-medium tracking-[0.08em] uppercase mb-3">
    ORLY / CDG / BVA
  </h3>

  <p className="text-neutral-400">
    Transferts aéroports premium
  </p>

</div>

      <div className="group border border-amber-500/15 rounded-2xl p-5 bg-neutral-950 flex flex-col justify-center text-center hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500">

  <FaTrain className="text-amber-300 text-4xl mx-auto mb-5 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-all duration-500" />

  <h3 className="text-white text-lg font-medium tracking-[0.08em] uppercase mb-3">
    Gares
  </h3>

  <p className="text-neutral-400">
    Transferts gares premium
  </p>

</div>

      <div className="group border border-amber-500/15 rounded-2xl p-5 bg-neutral-950 flex flex-col justify-center text-center hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500">

  <FaShip className="text-amber-300 text-4xl mx-auto mb-5 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-all duration-500" />

  <h3 className="text-white text-lg font-medium tracking-[0.08em] uppercase mb-3">
    Ports
  </h3>

  <p className="text-neutral-400">
    Transferts vers les ports
  </p>

</div>

      <div className="group border border-amber-500/15 rounded-2xl p-5 bg-neutral-950 flex flex-col justify-center text-center hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500">

  <FaStar className="text-amber-300 text-4xl mx-auto mb-5 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-all duration-500" />

  <h3 className="text-white text-lg font-medium tracking-[0.08em] uppercase mb-3">
    Service Premium
  </h3>

  <p className="text-neutral-400">
    Business, VIP et particuliers
  </p>

</div>

    </div>

  </div>
</section>

{/* SECTION SUIVANTE */}

{/* ================= QUI NOUS SOMMES ================= */}
<section
  id="signature"
  className={`py-24 md:py-28 px-6 bg-black border-t border-amber-500/20 transition-all duration-1000 ${
    visibleSections["signature"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  }`}
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

    {/* TEXTE */}
    <div className="transition-all duration-700 hover:translate-y-[-4px]">
      <h2 className="text-3xl md:text-4xl tracking-[0.6em] uppercase text-amber-400 mb-10 font-light">
        Qui nous sommes
      </h2>

      <p className="text-neutral-300 leading-relaxed text-base mb-6 tracking-wide">
        SUD IDF EXECUTIVE TRANSPORT accompagne les entreprises, les professionnels, les institutions, les hôtels, les agences et les particuliers dans tous leurs besoins de transport avec chauffeur. Nous assurons des déplacements sur mesure en Île-de-France et partout en France : transferts vers les aéroports et gares, déplacements professionnels, transport de collaborateurs, rendez-vous d’affaires, événements, séminaires, circuits privés et prestations dédiées. Notre service s’adapte à chaque organisation, avec une exigence constante de qualité, de ponctualité et de confort.
      </p>

      <p className="text-neutral-400 leading-relaxed text-sm mb-6">
        Nous mettons notre savoir-faire au service d’une clientèle diversifiée, en proposant des solutions de transport adaptées aux exigences de chaque activité. Entreprises, dirigeants, collaborateurs, équipes, partenaires, établissements hôteliers, organisateurs d’événements ou particuliers : chaque client bénéficie d’un accompagnement personnalisé, d’une organisation rigoureuse et d’un service pensé pour répondre à ses contraintes et à ses attentes.
      </p>

      <p className="text-neutral-400 leading-relaxed text-sm mb-6">
        Parce que chaque déplacement compte, nous accordons une importance particulière à la ponctualité, à la fiabilité, à la discrétion et au confort. Nous nous engageons à offrir une expérience de transport professionnelle, avec une attention constante portée à la qualité de l’accueil, aux besoins de nos passagers et au bon déroulement de chaque trajet. Notre flexibilité et notre sens du service nous permettent de nous adapter aux exigences de chaque client et aux impératifs de son activité.
      </p>

      <p className="text-neutral-500 leading-relaxed text-sm">
        Chaque prestation fait l’objet d’un suivi attentif et d’une supervision directe par{" "}
        <span className="text-amber-400 whitespace-nowrap">Lucas Chamberlain</span>,
        Responsable Dirigeant.
      </p>
    </div>

    {/* PHOTO + PROFIL */}
   <div className="mt-32 bg-neutral-900/50 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-10 text-center transition-all duration-700 hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]">

      {/* PHOTO */}
      <div className="flex justify-center mb-8">
        <img
          src="/lucas.jpg"
          alt="Fondateur"
          className="w-64 h-64 md:w-72 md:h-72 object-contain object-center rounded-full border border-amber-500 shadow-[0_0_40px_rgba(212,175,55,0.25)] bg-black"
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

         
<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-8">

  {/* 1. GREETER */}
  <a href="/service-greeter" className="group block overflow-hidden rounded-3xl border border-amber-500/25 bg-black text-left transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(212,175,55,0.16)]">
    <div className="relative h-64 overflow-hidden">
      <img src="/images/greeter-accueil-aeroport.png" alt="Service GREETER - Accueil personnalisé des voyageurs" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <span className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.3em] text-amber-300">Aéroports · Gares</span>
    </div>
    <div className="p-8">
      <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-white">Service GREETER</h3>
      <p className="text-sm leading-7 text-neutral-400">Accueil personnalisé, accompagnement des voyageurs et coordination avec votre chauffeur privé.</p>
      <span className="mt-6 inline-flex gap-2 text-xs uppercase tracking-[0.2em] text-amber-400">Découvrir le service →</span>
    </div>
  </a>

  {/* 2. TRANSFERTS AÉROPORTS */}
  <a href="/transfert-orly" className="group block overflow-hidden rounded-3xl border border-amber-500/25 bg-black text-left transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(212,175,55,0.16)]">
    <div className="relative h-64 overflow-hidden">
      <img src="/images/accueil-avion-mercedes.png" alt="Mercedes avec chauffeur pour les transferts aéroports" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <span className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.3em] text-amber-300">Orly · CDG · Gares</span>
    </div>
    <div className="p-8">
      <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-white">Transferts aéroports</h3>
      <p className="text-sm leading-7 text-neutral-400">Navette avec accueil personnalisé, gestion des bagages et suivi des vols et trains.</p>
      <span className="mt-6 inline-flex gap-2 text-xs uppercase tracking-[0.2em] text-amber-400">Découvrir le service →</span>
    </div>
  </a>

  {/* 3. MISE À DISPOSITION */}
  <a href="/mise-a-disposition" className="group block overflow-hidden rounded-3xl border border-amber-500/25 bg-black text-left transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(212,175,55,0.16)]">
    <div className="relative h-64 overflow-hidden">
      <img src="/images/mise-a-disposition-hero.png" alt="Véhicule premium avec chauffeur en mise à disposition" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <span className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.3em] text-amber-300">À l’heure · À la journée</span>
    </div>
    <div className="p-8">
      <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-white">Mise à disposition</h3>
      <p className="text-sm leading-7 text-neutral-400">Un chauffeur dédié pour vos réunions, séminaires, rendez-vous et événements.</p>
      <span className="mt-6 inline-flex gap-2 text-xs uppercase tracking-[0.2em] text-amber-400">Découvrir le service →</span>
    </div>
  </a>

  {/* 4. TRANSPORT BUSINESS */}
  <a href="/chauffeur-business" className="group block overflow-hidden rounded-3xl border border-amber-500/25 bg-black text-left transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(212,175,55,0.16)]">
    <div className="relative h-64 overflow-hidden">
      <img src="/images/corbeil-essonnes-business.png" alt="Transport business avec véhicule haut de gamme" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <span className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.3em] text-amber-300">Entreprises · Dirigeants</span>
    </div>
    <div className="p-8">
      <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-white">Transport business</h3>
      <p className="text-sm leading-7 text-neutral-400">Une prestation exécutive alliant ponctualité, confort, discrétion et confidentialité.</p>
      <span className="mt-6 inline-flex gap-2 text-xs uppercase tracking-[0.2em] text-amber-400">Découvrir le service →</span>
    </div>
  </a>

</div>
        </div>
      </section>

{/* ================= SEO LINKS ================= */}
<section className="py-24 px-6 bg-black border-t border-amber-500/20">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl text-amber-400 mb-12 tracking-[0.4em] uppercase text-center">
      Nos services de chauffeur privé
    </h2>

    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

      <a
        href="/chauffeur-prive-essonne"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/corbeil-essonnes-hero-premium.png"
            alt="Chauffeur privé premium en Essonne"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">Chauffeur privé</h3>
        <p className="text-gray-400">
          Service premium en Île-de-France pour particuliers et professionnels.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-prive-paris"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/paris-seine-hero.png"
            alt="Chauffeur privé à Paris"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">Chauffeur privé Paris</h3>
        <p className="text-gray-400">
          Service premium à Paris et en Île-de-France.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-prive-orly"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/accueil-avion-mercedes.png"
            alt="Transfert chauffeur privé à l’aéroport d’Orly"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">Chauffeur privé Orly</h3>
        <p className="text-gray-400">
          Transport premium vers l’aéroport d’Orly.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-prive-cdg"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/cdg-hero-premium.png"
            alt="Transfert chauffeur privé à Roissy CDG"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">Chauffeur privé CDG</h3>
        <p className="text-gray-400">
          Chauffeur haut de gamme vers Roissy CDG.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-aeroport-beauvais"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/beauvais-hero.png"
            alt="Chauffeur privé à l’aéroport de Beauvais"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Chauffeur VTC Beauvais
        </h3>
        <p className="text-gray-400">
          Transfert privé vers et depuis l’aéroport de Beauvais BVA.
        </p>
        </div>
      </a>

      <a
        href="/transport-vip"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/place-vendome-flotte-sud-idf.png"
            alt="Transport VIP et flotte haut de gamme"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">Transport VIP</h3>
        <p className="text-gray-400">
          Déplacements exécutifs et clientèle premium.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-business"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/corbeil-essonnes-business.png"
            alt="Transport business avec chauffeur"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">Chauffeur business</h3>
        <p className="text-gray-400">
          Service professionnel pour entreprises.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-vtc-disneyland-paris"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/disneyland-paris-hero.png"
            alt="Transfert chauffeur privé à Disneyland Paris"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Chauffeur VTC Disneyland Paris
        </h3>
        <p className="text-gray-400">
          Transfert privé premium vers Disneyland Paris.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-vtc-versailles"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/vaux-le-vicomte-classe-v.png"
            alt="Véhicule avec chauffeur devant un château en Île-de-France"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Chauffeur VTC Versailles
        </h3>
        <p className="text-gray-400">
          Transfert privé premium vers Versailles.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-vtc-parc-asterix"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/parc-asterix-hero.png"
            alt="Chauffeur privé pour le Parc Astérix"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Chauffeur VTC Parc Astérix
        </h3>
        <p className="text-gray-400">
          Transport privé vers le Parc Astérix.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-vtc-mariage"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/mariage-range-rover-noir-fleurs.png"
            alt="Range Rover décoré pour un mariage"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Chauffeur VTC Mariage
        </h3>
        <p className="text-gray-400">
          Transport premium pour mariés, invités et événements.
        </p>
        </div>
      </a>

      <a
        href="/voiture-mariage-chauffeur"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/mariage-classe-v-fleurs.png"
            alt="Mercedes Classe V décorée pour un mariage"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Voiture de mariage
        </h3>
        <p className="text-gray-400">
          Voiture avec chauffeur pour votre mariage.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-prive-mise-a-disposition"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/mise-a-disposition-hero.png"
            alt="Mise à disposition avec chauffeur privé"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Mise à disposition
        </h3>
        <p className="text-gray-400">
          Chauffeur privé à l’heure pour vos déplacements et événements.
        </p>
        </div>
      </a>

      <a
        href="/transport-longue-distance"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/melun-bords-de-seine.png"
            alt="Transport longue distance avec chauffeur"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Transport longue distance
        </h3>
        <p className="text-gray-400">
          Transport privé avec chauffeur sur longue distance.
        </p>
        </div>
      </a>

      <a
        href="/service-transport-personnes-chauffeur"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/corbeil-essonnes-transfert-orly.png"
            alt="Transport privé avec chauffeur"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Service de transport de personnes
        </h3>
        <p className="text-gray-400">
          Service de transport de personnes avec chauffeur privé.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-prive-gare"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/gare-de-lyon-hero.png"
            alt="Transfert avec chauffeur depuis une gare"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Chauffeur privé gare
        </h3>
        <p className="text-gray-400">
          Transferts privés depuis et vers les gares.
        </p>
        </div>
      </a>

      <a
        href="/chauffeur-prive-port"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/port-croisiere-hero.png"
            alt="Transfert chauffeur privé vers un port de croisière"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">
          Chauffeur privé port
        </h3>
        <p className="text-gray-400">
          Transport privé vers les ports et terminaux.
        </p>
        </div>
      </a>

      <a
        href="/vtc-essonne"
        className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all duration-500"
      ><div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src="/images/seine-et-marne-hero.png"
            alt="Chauffeur privé en Essonne et Île-de-France"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
        <div className="p-6">
        <h3 className="text-xl text-amber-400 mb-3">VTC Essonne</h3>
        <p className="text-gray-400">
          Chauffeur privé premium en Essonne.
        </p>
        </div>
      </a>

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
    Mercedes Classe V 
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
    '/classev8.jpg',
    '/classev9.jpg',
    '/classev10.jpg',
    '/classev11.jpg',
    '/classev12.jpg',
    '/classev13.jpg',
    '/classev14.jpg'
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
          Executive Van 
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
  '/rangerover5.jpg',
  '/rangerover6.jpg',
  '/rangerover7.jpg',
  '/rangerover8.jpg',
  '/rangerover9.jpg',
  '/rangerover10.jpg',
  '/rangerover11.jpg'
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

<div className="relative left-[50vw] -translate-x-1/2 mt-16 mb-16 w-screen">
  <h3 className="text-2xl tracking-[0.6em] uppercase text-white font-light text-center">
    NOS BERLINES
  </h3>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl mx-auto mb-16">
  {[
    "/classe E.jpg",
    "/classe E1.jpg",
    "/classe E2.jpg",
    "/classe E3.jpg",
    "/classe E4.jpg",
    "/classe E5.jpg",
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
        alt="Mercedes Classe E"
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
          Mercedes Classe E
        </h4>
      </div>
    </div>
  ))}
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl mx-auto">
  {[
    "/classe S.jpg",
    "/classe S1.jpg",
    "/classe S2.jpg",
    "/classe S3.jpg",
    "/classe S4.jpg",
    "/classe S5.jpg",
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
        alt="Mercedes Classe S"
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
          Mercedes Classe S
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
    DEMANDE DE DEVIS CORPORATE
  </h2>

  {/* MESSAGE ERREUR */}
  {formError && (
    <div className="mb-6 px-6 py-3 bg-red-500/10 border border-red-500 text-red-400 rounded-xl max-w-xl mx-auto">
      Merci de remplir tous les champs obligatoires
    </div>
  )}

  {/* FORMULAIRE */}
  <form
  id="devisForm"
  onSubmit={async (e) => {
    e.preventDefault();

    const isEmpty = (value: string) => !value || value.trim() === "";

    if (
      isEmpty(form.name) ||
      isEmpty(form.email) ||
      isEmpty(form.phone) ||
      isEmpty(form.date) ||
      isEmpty(form.message)
    ) {
      setFormError(true);
      return;
    }

    setFormError(false);

    try {
      const response = await fetch("/api/reservation/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.name,
          company: form.company,
          email: form.email,
          telephone: form.phone,
          date: form.date,
          message: form.message,
          service: "Devis corporate",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        alert(result.error || "L'envoi a échoué. Merci de réessayer.");
        return;
      }

      window.location.href = "/merci";
    } catch {
      alert("Impossible d'envoyer la demande pour le moment. Merci de réessayer.");
    }
  }}
  className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-center"
>

    {/* INPUTS CONNECTÉS AU STATE */}
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      required
      placeholder="Nom & Prénom"
      className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white"
    />

    <input
      type="text"
      name="company"
      value={form.company}
      onChange={handleChange}
      placeholder="Entreprise"
      className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white"
    />

    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      required
      placeholder="Email"
      className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white"
    />

    <input
      type="tel"
      name="phone"
      value={form.phone}
      onChange={handleChange}
      required
      placeholder="Téléphone"
      className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white"
    />

    <input
      type="date"
      name="date"
      value={form.date}
      onChange={handleChange}
      required
      className="bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white"
    />

    <textarea
      name="message"
      value={form.message}
      onChange={handleChange}
      required
      placeholder="Décrivez votre besoin..."
      className="md:col-span-5 bg-neutral-900 border border-amber-500/20 p-4 rounded-xl text-white"
    />

    <button
      type="submit"
      className="md:col-span-5 px-12 py-5 bg-amber-500 text-black rounded-full tracking-[0.4em] text-xs hover:bg-amber-400 transition-all duration-500"
    >
      ENVOYER LA DEMANDE
    </button>
  </form>
</section>

{/* ================= SEO LINKS ================= */}
<section className="py-32 px-6 bg-neutral-950 border-t border-amber-500/10">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl md:text-4xl tracking-[0.5em] uppercase text-amber-400 mb-16 text-center font-light">
      Chauffeur privé premium en Île-de-France
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <a
        href="/chauffeur-prive-paris"
        className="bg-black border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400 transition-all duration-500"
      >
        <h3 className="text-xl text-amber-400 mb-4">
          Chauffeur privé Paris
        </h3>

        <p className="text-neutral-400 leading-7">
          Service de chauffeur privé premium à Paris
          pour déplacements business, événements
          et transferts aéroports.
        </p>
      </a>

      <a
        href="/chauffeur-prive-orly"
        className="bg-black border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400 transition-all duration-500"
      >
        <h3 className="text-xl text-amber-400 mb-4">
          Chauffeur privé Orly
        </h3>

        <p className="text-neutral-400 leading-7">
          Transport premium vers l’aéroport d’Orly
          depuis Paris et toute l’Île-de-France.
        </p>
      </a>

      <a
        href="/chauffeur-prive-cdg"
        className="bg-black border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400 transition-all duration-500"
      >
        <h3 className="text-xl text-amber-400 mb-4">
          Chauffeur privé CDG
        </h3>

        <p className="text-neutral-400 leading-7">
          Chauffeur haut de gamme vers Roissy
          Charles-de-Gaulle pour tous vos déplacements.
        </p>
      </a>

      <a
        href="/chauffeur-aeroport-orly"
        className="bg-black border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400 transition-all duration-500"
      >
        <h3 className="text-xl text-amber-400 mb-4">
          Chauffeur aéroport Orly
        </h3>

        <p className="text-neutral-400 leading-7">
          Service VTC premium vers l’aéroport d’Orly
          avec ponctualité et confort.
        </p>
      </a>

      <a
        href="/chauffeur-aeroport-cdg"
        className="bg-black border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400 transition-all duration-500"
      >
        <h3 className="text-xl text-amber-400 mb-4">
          Chauffeur aéroport CDG
        </h3>

        <p className="text-neutral-400 leading-7">
          Transferts premium vers l’aéroport
          Roissy Charles-de-Gaulle.
        </p>
      </a>

      <a
        href="/transport-vip"
        className="bg-black border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400 transition-all duration-500"
      >
        <h3 className="text-xl text-amber-400 mb-4">
          Transport VIP
        </h3>

        <p className="text-neutral-400 leading-7">
          Chauffeur privé haut de gamme
          pour clientèle business et premium.
        </p>
      </a>

    </div>
  </div>
</section>

{/* ================= FAQ SEO ================= */}
<section className="py-32 px-6 bg-black border-t border-amber-500/10">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-3xl md:text-4xl tracking-[0.5em] uppercase text-amber-400 mb-16 text-center font-light">
      Questions fréquentes
    </h2>

    <div className="space-y-8">

      <div className="border border-amber-500/20 rounded-3xl p-8 bg-neutral-950">
        <h3 className="text-xl text-white mb-4">
          Proposez-vous des transferts vers Orly et CDG ?
        </h3>

        <p className="text-neutral-400 leading-7">
          Oui, nous assurons des transferts premium vers
          les aéroports d’Orly et Roissy Charles-de-Gaulle
          depuis Paris et toute l’Île-de-France.
        </p>
      </div>

      <div className="border border-amber-500/20 rounded-3xl p-8 bg-neutral-950">
        <h3 className="text-xl text-white mb-4">
          Dans quelles zones intervenez-vous ?
        </h3>

        <p className="text-neutral-400 leading-7">
          Nous intervenons principalement en Essonne,
          Seine-et-Marne, Paris et dans toute
          l’Île-de-France pour les déplacements privés
          et professionnels.
        </p>
      </div>

      <div className="border border-amber-500/20 rounded-3xl p-8 bg-neutral-950">
        <h3 className="text-xl text-white mb-4">
          Proposez-vous un service business et VIP ?
        </h3>

        <p className="text-neutral-400 leading-7">
          Oui, nos prestations sont adaptées aux entreprises,
          dirigeants, hôtels, événements privés
          et clientèle premium.
        </p>
      </div>

      <div className="border border-amber-500/20 rounded-3xl p-8 bg-neutral-950">
        <h3 className="text-xl text-white mb-4">
          Comment réserver un chauffeur privé ?
        </h3>

        <p className="text-neutral-400 leading-7">
          Vous pouvez réserver directement via notre formulaire,
          par téléphone ou par WhatsApp pour une prise en charge rapide.
        </p>
      </div>

    </div>
  </div>
</section>

           {/* ================= FOOTER ================= */}
<footer className="border-t border-amber-500/20 bg-black py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-16 md:grid-cols-4">

      {/* BRAND */}
      <div>
        <h3 className="text-xl uppercase tracking-[0.4em] text-white font-light">
          SUD IDF
        </h3>

        <p className="mt-3 text-xs uppercase tracking-[0.5em] text-amber-400">
          Executive Transport
        </p>

        <p className="mt-8 text-sm leading-7 text-neutral-400">
          Chauffeur privé premium en Essonne, Seine-et-Marne et Île-de-France.
          Transferts Orly, CDG, déplacements business et mise à disposition 24h/24.
        </p>
      </div>

      {/* SERVICES */}
      <div>
        <h4 className="mb-6 text-sm uppercase tracking-[0.3em] text-white">
          Services
        </h4>

        <div className="flex flex-col gap-4 text-sm text-neutral-400">

          <a
            href="/transfert-orly"
            className="hover:text-amber-400 transition"
          >
            Transfert Orly
          </a>

          <a
            href="/transfert-cdg"
            className="hover:text-amber-400 transition"
          >
            Transfert CDG
          </a>

          <a
            href="/chauffeur-business"
            className="hover:text-amber-400 transition"
          >
            Chauffeur business
          </a>

          <a
            href="/mise-a-disposition"
            className="hover:text-amber-400 transition"
          >
            Mise à disposition
          </a>

          <a
            href="/contact"
            className="hover:text-amber-400 transition"
          >
            Contact
          </a>

        </div>
      </div>

      {/* ZONES */}
<div>
  <h4 className="mb-6 text-sm uppercase tracking-[0.3em] text-white">
    Zones desservies
  </h4>

  <div className="flex flex-col gap-4 text-sm text-neutral-400">

    <a
      href="/chauffeur-prive-essonne"
      className="hover:text-amber-400 transition"
    >
      Essonne
    </a>

    <a
      href="/chauffeur-prive-seine-et-marne"
      className="hover:text-amber-400 transition"
    >
      Seine-et-Marne
    </a>

    <a
      href="/chauffeur-prive-corbeil-essonnes"
      className="hover:text-amber-400 transition"
    >
      Corbeil-Essonnes
    </a>

    <a
      href="/chauffeur-prive-evry"
      className="hover:text-amber-400 transition"
    >
      Évry-Courcouronnes
    </a>

    <a
      href="/chauffeur-prive-melun"
      className="hover:text-amber-400 transition"
    >
      Melun
    </a>

    <a
      href="/chauffeur-prive-fontainebleau"
      className="hover:text-amber-400 transition"
    >
      Fontainebleau
    </a>

    <a
      href="/chauffeur-prive-paris"
      className="hover:text-amber-400 transition"
    >
      Paris
    </a>

    <a
      href="/chauffeur-prive-orly"
      className="hover:text-amber-400 transition"
    >
      Orly
    </a>

    <a
      href="/chauffeur-prive-cdg"
      className="hover:text-amber-400 transition"
    >
      Roissy CDG
    </a>

    <a
      href="/chauffeur-aeroport-orly"
      className="hover:text-amber-400 transition"
    >
      Chauffeur Aéroport Orly
    </a>

    <a
      href="/chauffeur-aeroport-cdg"
      className="hover:text-amber-400 transition"
    >
      Chauffeur Aéroport CDG
    </a>

    <a
      href="/transport-vip"
      className="hover:text-amber-400 transition"
    >
      Transport VIP
    </a>

    <a
      href="/vtc-essonne"
      className="hover:text-amber-400 transition"
    >
      VTC Essonne
    </a>

  </div>
</div>

{/* CONTACT */}
<div>
  <h4 className="mb-6 text-sm uppercase tracking-[0.3em] text-white">
    Contact
  </h4>

  <div className="space-y-4 text-sm text-neutral-400">

    <p>
      📞 06 68 86 36 73
    </p>

    <p>
      📧 contact@sudidfexecutivetransport.fr
    </p>

    <p>
      📍 Corbeil-Essonnes
    </p>

    <div className="flex flex-wrap gap-4 pt-4">

  <a
    href="https://www.instagram.com/sudidfexecutivetransport"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full border border-amber-500/30 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-black transition-all duration-300"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.facebook.com/sudidfexecutivetransport"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full border border-amber-500/30 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-black transition-all duration-300"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.tiktok.com/@sudidfexecutivetransport"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full border border-amber-500/30 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-black transition-all duration-300"
  >
    <FaTiktok />
  </a>

  <a
    href="https://www.youtube.com/@SUDIDFEXECUTIVETRANSPORT"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full border border-amber-500/30 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-black transition-all duration-300"
  >
    <FaYoutube />
  </a>

  <a
    href="https://www.linkedin.com/company/sud-idf-executive-transport"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full border border-amber-500/30 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-black transition-all duration-300"
  >
    <FaLinkedinIn />
  </a>

</div>

</div>
</div>
</div>

{/* BOTTOM */}

<div className="mt-20 border-t border-amber-500/20 pt-10 text-center">

  <div className="mb-6 flex flex-wrap justify-center gap-6 text-xs text-neutral-500">

    <a
      href="/cgv"
      className="hover:text-amber-400 transition"
    >
      CGV
    </a>

    <a
      href="/mentions-legales"
      className="hover:text-amber-400 transition"
    >
      Mentions légales
    </a>

    <a
      href="/confidentialite"
      className="hover:text-amber-400 transition"
    >
      Confidentialité
    </a>

  </div>

  <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
    © 2026 SUD IDF EXECUTIVE TRANSPORT
  </p>

  <p className="mt-4 text-xs text-neutral-600">
    SAS au capital social de 1 000€ · SIRET 101 146 637 00018 · TVA FR61 101 146 637
  </p>

  <p className="mt-2 text-xs text-neutral-600">
    Siège social : Corbeil-Essonnes, France
  </p>

</div>
</div>
</footer>

<a
  href="https://wa.me/33668863673"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
>
  💬 WhatsApp
</a>

</div>
)
}