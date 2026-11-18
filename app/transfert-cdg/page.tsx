
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Transfert CDG Chauffeur Privé | Sud IDF Executive Transport",
  description:
    "Transfert aéroport CDG avec chauffeur privé premium depuis l'Essonne, Paris et toute l'Île-de-France. Mercedes, SUV haut de gamme, accueil personnalisé et réservation 24h/24.",
  keywords: [
    "transfert CDG",
    "chauffeur privé CDG",
    "VTC Roissy",
    "transfert Roissy Charles-de-Gaulle",
    "chauffeur aéroport CDG",
    "transport premium CDG",
  ],
  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/transfert-cdg",
  },
};

const services = [
  {
    title: "Accueil à l'aéroport",
    description:
      "Un chauffeur professionnel pour vous accueillir à votre arrivée et vous accompagner jusqu'à votre véhicule.",
    image: "/images/cdg-hero.png",
    alt: "Chauffeur professionnel accueillant un voyageur devant une berline Mercedes noire à l'aéroport",
    href: "/reservation",
    link: "Organiser mon accueil",
  },
  {
    title: "Chauffeur privé en Essonne",
    description:
      "Vos transferts entre Roissy-CDG, Corbeil-Essonnes, Évry-Courcouronnes et les communes de l'Essonne.",
    image: "/images/cdg-classe-e.png",
    alt: "Berline Mercedes Classe E noire devant un terminal aéroportuaire",
    href: "/chauffeur-prive-essonne",
    link: "Découvrir notre service",
  },
  {
    title: "Mise à disposition",
    description:
      "Un véhicule avec chauffeur pour vos rendez-vous, déplacements professionnels et journées organisées.",
    image: "/images/cdg-range-rover.png",
    alt: "SUV Range Rover noir de prestige à proximité d'un aéroport",
    href: "/mise-a-disposition",
    link: "Découvrir la prestation",
  },
  {
    title: "Transfert aéroport Orly",
    description:
      "Découvrez également notre service de transport privé vers l'aéroport de Paris-Orly.",
    image: "/images/cdg-interieur.png",
    alt: "Intérieur raffiné en cuir beige d'un véhicule haut de gamme",
    href: "/transfert-orly",
    link: "Découvrir le transfert Orly",
  },
];

const faqs = [
  {
    question:
      "Proposez-vous des transferts vers Roissy-CDG depuis l'Essonne ?",
    answer:
      "Oui, SUD IDF Executive Transport organise des transferts privés vers l'aéroport Paris-Charles-de-Gaulle depuis Corbeil-Essonnes, Évry-Courcouronnes et les autres communes de l'Essonne.",
  },
  {
    question: "Assurez-vous les prises en charge à l'arrivée à CDG ?",
    answer:
      "Oui, nous organisons les prises en charge à l'aéroport sur réservation. Les modalités d'accueil et le lieu de rendez-vous sont définis avec le client avant le trajet.",
  },
  {
    question: "Suivez-vous les horaires des vols ?",
    answer:
      "Le suivi des vols permet d'adapter la prise en charge aux informations de votre vol. Nous vous invitons à communiquer votre numéro de vol lors de la réservation.",
  },
  {
    question: "Peut-on réserver un transfert CDG de nuit ?",
    answer:
      "Oui, les transferts sont proposés 24h/24 et 7j/7 sur réservation, selon les disponibilités.",
  },
  {
    question: "Quels types de clients accompagnez-vous ?",
    answer:
      "Nous accompagnons les particuliers, dirigeants, entreprises, voyageurs d'affaires, hôtels et clients recherchant une prestation de transport privé premium.",
  },
];

export default function TransfertCDG() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* DONNEES STRUCTUREES FAQ */}
      <Script
        id="faq-schema-cdg"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* BANNIERE PRINCIPALE */}
      <section className="relative min-h-[570px] md:min-h-[650px] flex items-center overflow-hidden">

        <Image
          src="/images/cdg-hero.png"
          alt="Chauffeur privé accueillant un voyageur devant une Mercedes noire à l'aéroport"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">

          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-7">
            Transfert aéroport CDG avec chauffeur privé
          </h1>

          <p className="text-gray-200 text-lg md:text-xl leading-8 max-w-2xl mb-9">
            Rejoignez l'aéroport Paris-Charles-de-Gaulle dans les meilleures
            conditions avec notre service de transport privé premium.
            Profitez d'une flotte de véhicules haut de gamme, d'un accueil
            personnalisé et d'une prestation adaptée à vos déplacements
            personnels et professionnels.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/reservation"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition duration-300"
            >
              Réserver mon transfert CDG
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-8 py-4 rounded-lg transition duration-300"
            >
              Nous contacter
            </a>

          </div>
        </div>
      </section>

      {/* PRESENTATION DU SERVICE */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Votre transfert en toute sérénité
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-7">
            Votre chauffeur privé pour l'aéroport Paris-Charles-de-Gaulle
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-5">
            SUD IDF Executive Transport vous accompagne pour vos transferts
            depuis ou vers l'aéroport de Roissy-CDG. Nous proposons une
            solution de transport premium destinée aux particuliers,
            entreprises, dirigeants et voyageurs exigeants.
          </p>

          <p className="text-gray-400 leading-8">
            Depuis Corbeil-Essonnes, Évry-Courcouronnes, Melun,
            Fontainebleau, Paris et les autres communes d'Île-de-France,
            bénéficiez d'une prise en charge organisée selon votre
            itinéraire et vos horaires de déplacement.
          </p>

        </div>
      </section>

      {/* DEPARTS ET ARRIVEES */}
      <section className="bg-neutral-950 border-y border-amber-500/20 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Nos prestations aéroportuaires
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Votre transfert CDG, du départ à l'arrivée
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto leading-7">
              Que vous partiez en voyage ou que vous arriviez à Roissy,
              nous organisons votre déplacement avec attention et
              professionnalisme.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* DEPARTS */}
            <div className="relative min-h-[380px] rounded-2xl overflow-hidden border border-amber-500/25">

              <Image
                src="/images/cdg-classe-e.png"
                alt="Mercedes Classe E noire devant un terminal d'aéroport"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">

                <p className="text-amber-400 uppercase tracking-widest text-xs font-semibold mb-3">
                  Départs aéroport
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Votre trajet vers CDG
                </h3>

                <p className="text-gray-200 leading-7">
                  Organisez votre départ vers l'aéroport avec une prise
                  en charge planifiée à votre adresse.
                </p>

              </div>
            </div>

            {/* ARRIVEES */}
            <div className="relative min-h-[380px] rounded-2xl overflow-hidden border border-amber-500/25">

              <Image
                src="/images/cdg-range-rover.png"
                alt="Range Rover noir de prestige à proximité d'un terminal aéroportuaire"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">

                <p className="text-amber-400 uppercase tracking-widest text-xs font-semibold mb-3">
                  Arrivées aéroport
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Votre accueil à Roissy-CDG
                </h3>

                <p className="text-gray-200 leading-7">
                  Retrouvez votre chauffeur selon les modalités convenues
                  et poursuivez votre voyage confortablement.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CARTES DE SERVICES CLIQUABLES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Découvrez nos prestations
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Nos services de transport privé
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-7">
            Retrouvez nos différentes solutions de transport
            et choisissez la prestation adaptée à vos besoins.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group block bg-neutral-950 border border-amber-500/25 rounded-2xl overflow-hidden hover:border-amber-400 hover:-translate-y-2 transition duration-300 shadow-lg"
            >

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-amber-400 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm group-hover:text-amber-300">
                  {service.link}
                  <span aria-hidden="true">→</span>
                </span>

              </div>

            </a>
          ))}

        </div>
      </section>

      {/* EXPERIENCE SUD IDF */}
      <section className="bg-neutral-950 border-y border-amber-500/20 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="relative min-h-[350px] md:min-h-[470px] rounded-2xl overflow-hidden border border-amber-500/30">

              <Image
                src="/images/cdg-interieur.png"
                alt="Intérieur prestige en cuir beige d'un véhicule haut de gamme"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

            <div>

              <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
                La qualité SUD IDF
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-7">
                Un transport premium jusque dans les détails
              </h2>

              <p className="text-gray-300 leading-8 mb-7">
                Notre engagement repose sur la qualité de l'accueil,
                le confort à bord et le sérieux de chaque prestation.
                Nous veillons à organiser votre transfert dans les
                meilleures conditions.
              </p>

              <ul className="space-y-5 text-gray-300">

                {[
                  "Accueil personnalisé et tenue professionnelle",
                  "Suivi des horaires de vols",
                  "Assistance pour les bagages",
                  "Ponctualité et discrétion",
                  "Bouteilles d'eau et équipements de confort à bord",
                  "Confidentialité et qualité de service",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-amber-400 text-xl">✓</span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}

              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* ZONE DE DEPART */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="text-center">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Notre zone de prise en charge
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-7">
            Rejoignez l'aéroport CDG depuis l'Essonne et l'Île-de-France
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-9">
            Nous organisons vos transferts vers Roissy-Charles-de-Gaulle
            depuis de nombreuses communes et destinations en Île-de-France.
            Contactez-nous pour organiser votre itinéraire.
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {[
              "Corbeil-Essonnes",
              "Évry-Courcouronnes",
              "Essonne (91)",
              "Melun",
              "Fontainebleau",
              "Seine-et-Marne (77)",
              "Paris",
              "Île-de-France",
            ].map((place) => (
              <span
                key={place}
                className="border border-amber-500/30 rounded-full px-5 py-3 text-amber-300 text-sm"
              >
                {place}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-950 border-y border-amber-500/20 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Informations pratiques
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Questions fréquentes sur le transfert CDG
            </h2>

          </div>

          <div className="space-y-5">

            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-black border border-amber-500/25 rounded-2xl p-6 md:p-7"
              >

                <h3 className="text-lg md:text-xl text-amber-400 font-semibold mb-4">
                  {faq.question}
                </h3>

                <p className="text-gray-400 leading-8">
                  {faq.answer}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* RESERVATION FINALE */}
      <section className="bg-gradient-to-b from-neutral-950 to-black py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Votre prochain transfert vers CDG commence ici
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-9">
            Confiez vos déplacements aéroportuaires à un service
            de chauffeur privé premium en Essonne et en Île-de-France.
          </p>

          <a
            href="/reservation"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 rounded-lg transition duration-300"
          >
            Réserver mon transfert
          </a>

        </div>
      </section>

    

      <section aria-label="Découvrez nos autres solutions de transport" className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">SUD IDF Executive Transport</p>
          <h2 className="mx-auto mb-5 max-w-3xl text-center text-2xl font-semibold text-white md:text-3xl">Découvrez nos autres solutions de transport</h2>
          <p className="mx-auto mb-9 max-w-3xl text-center text-sm leading-7 text-zinc-300 md:text-base">Pour vos déplacements depuis CDG, retrouvez également nos services et destinations en Île-de-France.</p>
          <nav aria-label="Liens vers nos autres services" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/chauffeur-aeroport-cdg" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur aéroport CDG</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-cdg" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé à CDG</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transfert-orly" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transfert Orly</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-paris" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé à Paris</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-essonne" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé en Essonne</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-business" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur business</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-gare" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé depuis les gares</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transport-vip" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transport VIP</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
