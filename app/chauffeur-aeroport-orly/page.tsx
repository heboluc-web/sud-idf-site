
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chauffeur Aéroport Orly | Sud IDF Executive Transport",

  description:
    "Chauffeur aéroport Orly premium depuis Paris, l’Essonne et l’Île-de-France. Transferts privés et professionnels vers Orly sur réservation.",

  keywords: [
    "chauffeur aéroport Orly",
    "VTC Orly",
    "chauffeur Orly",
    "transfert aéroport Orly",
    "chauffeur privé Orly",
    "transport premium Orly",
    "VTC aéroport Orly",
    "chauffeur aéroport Paris Orly",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-aeroport-orly",
  },
};

const faqs = [
  {
    question: "Proposez-vous des transferts vers et depuis Orly ?",
    answer:
      "Oui, nous organisons vos transferts privés vers et depuis l'aéroport Paris-Orly depuis Paris, l'Essonne et toute l'Île-de-France.",
  },
  {
    question: "Peut-on réserver un chauffeur pour un voyage professionnel ?",
    answer:
      "Oui, notre service est adapté aux dirigeants, entreprises, collaborateurs, hôtels et voyageurs d'affaires.",
  },
  {
    question: "Quels véhicules composent votre flotte ?",
    answer:
      "Notre flotte comprend notamment Mercedes Classe E, Classe V, Classe S, Mercedes-Maybach et Range Rover Autobiography.",
  },
  {
    question: "Comment se déroule l'accueil à l'aéroport ?",
    answer:
      "Votre prise en charge est organisée à l'avance. Nous assurons le suivi des horaires de vol et un accueil personnalisé selon les modalités convenues.",
  },
  {
    question: "Comment réserver votre chauffeur ?",
    answer:
      "Vous pouvez effectuer votre réservation directement sur notre site en renseignant votre trajet, la date, l'heure et les informations nécessaires.",
  },
];

const services = [
  {
    category: "DÉPART AÉROPORT",
    title: "Votre départ depuis Paris-Orly",
    description:
      "Rejoignez votre terminal dans un véhicule confortable avec une prise en charge organisée selon votre horaire de vol.",
    image: "/images/orly-accueil.png",
    alt: "Chauffeur professionnel et véhicule premium devant un terminal aéroportuaire",
    href: "/reservation",
    link: "Organiser mon départ",
  },
  {
    category: "CONFORT EXÉCUTIF",
    title: "Un voyage dans un confort privilégié",
    description:
      "Profitez d'un habitacle raffiné et d'une prestation adaptée aux déplacements privés, professionnels et VIP.",
    image: "/images/vehicule-interieur.png",
    alt: "Intérieur cuir beige raffiné d'un véhicule de transport premium",
    href: "/chauffeur-business",
    link: "Découvrir notre service business",
  },
];

export default function ChauffeurAeroportOrly() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* FAQ SEO */}
      <Script
        id="faq-schema-orly"
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

      {/* BANNIÈRE PRINCIPALE */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden border-b border-amber-500/20 md:min-h-[680px]">

        <Image
          src="/images/orly-hero.png"
          alt="Véhicule premium pour les transferts vers l'aéroport Paris-Orly"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">

          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-amber-400">
            AÉROPORT PARIS-ORLY · ÎLE-DE-FRANCE
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Chauffeur aéroport
            <span className="block text-amber-400">
              Orly
            </span>
          </h1>

          <div className="mt-7 h-1 w-24 rounded-full bg-amber-400" />

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
            Votre chauffeur privé pour vos transferts vers
            et depuis l'aéroport Paris-Orly. Profitez d'un
            transport haut de gamme pour vos déplacements
            personnels et professionnels.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="/reservation"
              className="rounded-lg border border-amber-400 bg-amber-400 px-8 py-4 text-center text-sm font-bold tracking-wider text-black transition hover:bg-transparent hover:text-amber-400"
            >
              RÉSERVER MON CHAUFFEUR
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-amber-400 px-8 py-4 text-center text-sm font-semibold tracking-wider text-amber-400 transition hover:bg-amber-400 hover:text-black"
            >
              NOUS CONTACTER
            </a>

          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="border-b border-amber-500/20 px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
            VOTRE TRANSPORT PRIVÉ
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
            Votre chauffeur privé pour l'aéroport Paris-Orly
          </h2>

          <p className="mt-8 text-base leading-8 text-neutral-400">
            Sud IDF Executive Transport assure vos transferts
            vers et depuis l'aéroport Paris-Orly avec un service
            de chauffeur privé premium, ponctuel et confortable.
            Nous accompagnons les particuliers, les entreprises
            et les voyageurs exigeants dans leurs déplacements.
          </p>

          <p className="mt-5 text-base leading-8 text-neutral-400">
            Depuis Paris, Corbeil-Essonnes, Évry-Courcouronnes,
            Melun, Fontainebleau et toute l'Île-de-France,
            nous organisons votre prise en charge sur réservation
            en fonction de votre destination et de vos horaires.
          </p>

        </div>
      </section>

      {/* CARTES DE PRESTATIONS */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              NOS PRESTATIONS
            </p>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Des transferts adaptés à vos déplacements
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-400">
              Pour un départ en voyage, un retour d'aéroport
              ou un déplacement professionnel, bénéficiez
              d'une prestation de transport adaptée à vos besoins.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-black transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
              >

                <div className="relative aspect-[16/9] overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                </div>

                <div className="p-8">

                  <p className="text-[10px] font-semibold tracking-[0.3em] text-amber-400">
                    {service.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-amber-400">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-neutral-400">
                    {service.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
                    {service.link}
                    <span aria-hidden="true">→</span>
                  </span>

                </div>

              </a>
            ))}

          </div>
        </div>
      </section>

      {/* QUALITÉ DE SERVICE */}
      <section className="border-b border-amber-500/20 bg-black px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              L'EXIGENCE SUD IDF
            </p>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Un service premium jusque dans les détails
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Nous mettons l'accent sur la qualité de l'accueil,
              le confort à bord et le professionnalisme de chaque
              prestation. Votre déplacement est organisé avec
              attention pour vous offrir une expérience agréable.
            </p>

            <ul className="mt-8 space-y-5 text-sm leading-7 text-neutral-300">

              {[
                "Accueil personnalisé et tenue professionnelle",
                "Suivi des horaires de vols",
                "Assistance pour les bagages",
                "Confort, discrétion et confidentialité",
                "Bouteilles d'eau et équipements de confort à bord",
                "Ponctualité et sérieux",
                "Transport adapté aux particuliers et aux entreprises",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-lg text-amber-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>

          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-2xl border border-amber-500/30 md:min-h-[480px]">

            <Image
              src="/images/vehicule-interieur.png"
              alt="Habitacle raffiné avec sièges en cuir beige et équipements de confort"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

        </div>
      </section>

      {/* FLOTTE */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              NOTRE FLOTTE
            </p>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Le véhicule adapté à votre déplacement
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-400">
              Berlines exécutives, véhicule spacieux et SUV
              de prestige : notre flotte répond aux différents
              besoins de transport privé et professionnel.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {[
              "Mercedes Classe E",
              "Mercedes Classe V",
              "Mercedes Classe S",
              "Mercedes-Maybach",
              "Range Rover Autobiography",
            ].map((vehicle) => (
              <div
                key={vehicle}
                className="flex min-h-[125px] items-center justify-center rounded-2xl border border-amber-500/20 bg-black p-6 text-center"
              >
                <h3 className="text-base font-semibold text-amber-400">
                  {vehicle}
                </h3>
              </div>
            ))}

          </div>

          <p className="mt-8 text-center text-sm text-neutral-500">
            Le véhicule proposé dépend de la prestation et des disponibilités.
          </p>

        </div>
      </section>

      {/* MAILLAGE SEO */}
      <section className="border-b border-amber-500/20 bg-black px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-semibold text-amber-400 md:text-4xl">
            Découvrez nos autres services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-neutral-400">
            Retrouvez nos différentes prestations de
            chauffeur privé et de transport exécutif.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {[
              ["Chauffeur privé Orly", "/chauffeur-prive-orly"],
              ["Transfert Orly", "/transfert-orly"],
              ["Chauffeur business", "/chauffeur-business"],
              ["Chauffeur privé CDG", "/chauffeur-prive-cdg"],
              ["Chauffeur aéroport CDG", "/chauffeur-aeroport-cdg"],
              ["Chauffeur privé Essonne", "/chauffeur-prive-essonne"],
              ["Réserver un chauffeur", "/reservation"],
            ].map(([title, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-amber-500/30 px-6 py-4 text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                {title} →
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-3xl font-semibold text-amber-400 md:text-4xl">
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-amber-500/20 bg-black p-6"
              >

                <summary className="cursor-pointer list-none text-base font-semibold text-white group-open:text-amber-400">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-xl text-amber-400">+</span>
                  </span>
                </summary>

                <p className="mt-5 text-sm leading-7 text-neutral-400">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden px-6 py-28 text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl">

          <p className="text-xs uppercase tracking-[0.5em] text-amber-400">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
            Votre chauffeur privé pour Orly
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
            Organisez votre prochain transfert vers ou depuis
            l'aéroport Paris-Orly avec Sud IDF Executive Transport.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/reservation"
              className="rounded-lg border border-amber-400 bg-amber-400 px-10 py-4 text-sm font-bold tracking-wider text-black transition hover:bg-transparent hover:text-amber-400"
            >
              RÉSERVER MON CHAUFFEUR
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-amber-400 px-10 py-4 text-sm font-semibold tracking-wider text-amber-400 transition hover:bg-amber-400 hover:text-black"
            >
              NOUS CONTACTER
            </a>

          </div>
        </div>
      </section>

    

      <section aria-label="Nos services complémentaires autour d’Orly" className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">SUD IDF Executive Transport</p>
          <h2 className="mx-auto mb-5 max-w-3xl text-center text-2xl font-semibold text-white md:text-3xl">Nos services complémentaires autour d’Orly</h2>
          <p className="mx-auto mb-9 max-w-3xl text-center text-sm leading-7 text-zinc-300 md:text-base">Retrouvez nos solutions de transport privé pour vos déplacements professionnels et personnels.</p>
          <nav aria-label="Liens vers nos autres services" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/transfert-orly" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transfert aéroport Orly</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-essonne" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé en Essonne</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-corbeil-essonnes" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé à Corbeil-Essonnes</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-evry" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé à Évry</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transfert-cdg" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transfert CDG</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-business" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur business</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/mise-a-disposition" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Mise à disposition</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
