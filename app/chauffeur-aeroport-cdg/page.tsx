
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Chauffeur Aéroport CDG | Sud IDF Executive Transport",

  description:
    "Service de chauffeur premium vers l’aéroport Roissy Charles-de-Gaulle. Transport privé haut de gamme pour déplacements business et personnels.",

  keywords: [
    "chauffeur aéroport CDG",
    "VTC CDG",
    "chauffeur Roissy",
    "transfert Charles de Gaulle",
    "chauffeur privé CDG",
    "transport premium CDG",
    "VTC Roissy",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-aeroport-cdg",
  },
};

const services = [
  {
    title: "Départ vers l'aéroport CDG",
    category: "TRANSFERT AÉROPORT",
    description:
      "Rejoignez Roissy Charles-de-Gaulle depuis votre domicile, votre hôtel ou votre lieu de rendez-vous avec une prise en charge personnalisée.",
    image: "/images/cdg-classe-e.png",
    alt: "Mercedes Classe E noire pour un transfert exécutif vers CDG",
    href: "/reservation",
    link: "Organiser mon départ",
  },
  {
    title: "Accueil à l'arrivée",
    category: "ACCUEIL PRIVÉ",
    description:
      "Après votre vol, profitez d'un transfert confortable vers Paris, l'Essonne ou votre destination en Île-de-France.",
    image: "/images/cdg-range-rover.png",
    alt: "Range Rover Autobiography noir pour un accueil aéroport premium",
    href: "/reservation",
    link: "Organiser mon accueil",
  },
  {
    title: "Voyages business et VIP",
    category: "TRANSPORT EXÉCUTIF",
    description:
      "Une prestation destinée aux dirigeants, professionnels, voyageurs d'affaires et clients recherchant un service haut de gamme.",
    image: "/images/cdg-interieur.png",
    alt: "Intérieur cuir beige d'un véhicule de transport exécutif",
    href: "/chauffeur-business",
    link: "Découvrir notre service business",
  },
];

const faqs = [
  {
    question: "Proposez-vous des transferts vers l'aéroport CDG ?",
    answer:
      "Oui, Sud IDF Executive Transport organise des transferts privés vers l'aéroport Roissy Charles-de-Gaulle depuis Paris, l'Essonne et toute l'Île-de-France.",
  },
  {
    question: "Assurez-vous également les retours depuis CDG ?",
    answer:
      "Oui, nous organisons les prises en charge à l'arrivée de l'aéroport CDG pour rejoindre votre domicile, votre hôtel ou votre destination professionnelle.",
  },
  {
    question: "Quels véhicules proposez-vous ?",
    answer:
      "Notre flotte comprend notamment les Mercedes Classe E, Classe V, Classe S, Mercedes-Maybach et Range Rover Autobiography.",
  },
  {
    question: "Proposez-vous des prestations pour les entreprises ?",
    answer:
      "Oui, nos prestations s'adressent aux entreprises, dirigeants, hôtels, collaborateurs et voyageurs d'affaires.",
  },
  {
    question: "Comment réserver un chauffeur pour CDG ?",
    answer:
      "Vous pouvez effectuer votre réservation directement depuis notre formulaire en ligne en renseignant votre trajet, vos horaires et les informations nécessaires à votre prise en charge.",
  },
];

export default function ChauffeurAeroportCDG() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* FAQ SEO */}
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

      {/* BANNIÈRE PRINCIPALE */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden border-b border-amber-500/20 md:min-h-[680px]">

        <Image
          src="/images/cdg-hero.png"
          alt="Service de chauffeur privé devant l'aéroport Roissy Charles-de-Gaulle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">

          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-amber-400">
            ROISSY CHARLES-DE-GAULLE · CDG
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Chauffeur aéroport
            <span className="block text-amber-400">
              CDG
            </span>
          </h1>

          <div className="mt-7 h-1 w-24 rounded-full bg-amber-400" />

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
            Votre chauffeur privé pour l'aéroport
            Paris-Charles-de-Gaulle. Profitez d'un
            transport exécutif haut de gamme pour
            vos déplacements professionnels et personnels.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="/reservation"
              className="rounded-lg border border-amber-400 bg-amber-400 px-8 py-4 text-center text-sm font-bold tracking-wider text-black transition hover:bg-transparent hover:text-amber-400"
            >
              RÉSERVER MON TRANSFERT CDG
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
            VOTRE TRANSPORT EXÉCUTIF
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
            Votre chauffeur privé pour l'aéroport Paris-Charles-de-Gaulle
          </h2>

          <p className="mt-8 text-base leading-8 text-neutral-400">
            Sud IDF Executive Transport vous accompagne pour
            vos déplacements vers et depuis l'aéroport
            Roissy Charles-de-Gaulle. Nous proposons une
            solution de transport premium destinée aux
            particuliers, entreprises, dirigeants et voyageurs exigeants.
          </p>

          <p className="mt-5 text-base leading-8 text-neutral-400">
            Depuis Paris, Corbeil-Essonnes, Évry-Courcouronnes,
            Melun, Fontainebleau et toute l'Île-de-France,
            bénéficiez d'une prise en charge personnalisée
            dans un véhicule adapté à votre déplacement.
          </p>

        </div>
      </section>

      {/* PRESTATIONS ILLUSTRÉES */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              NOS PRESTATIONS AÉROPORTUAIRES
            </p>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Votre transfert CDG, du départ à l'arrivée
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-400">
              Une organisation adaptée à votre voyage,
              avec un service de chauffeur privé pour
              chaque étape de votre déplacement.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-black transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
              >

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                </div>

                <div className="p-7">

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

          <div className="relative min-h-[340px] overflow-hidden rounded-2xl border border-amber-500/30 md:min-h-[480px]">

            <Image
              src="/images/cdg-interieur.png"
              alt="Intérieur raffiné et sièges en cuir beige d'un véhicule premium"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              L'EXIGENCE SUD IDF
            </p>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Le confort exécutif jusque dans les détails
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Chaque déplacement mérite une attention particulière.
              Nous mettons l'accent sur la qualité de l'accueil,
              le confort du véhicule et le professionnalisme
              de chaque prestation.
            </p>

            <ul className="mt-8 space-y-5 text-sm leading-7 text-neutral-300">

              {[
                "Accueil personnalisé et tenue professionnelle",
                "Suivi des horaires de vols",
                "Assistance pour les bagages",
                "Confort et discrétion",
                "Bouteilles d'eau et équipements de confort à bord",
                "Ponctualité et confidentialité",
                "Transport adapté aux particuliers et aux entreprises",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-lg text-amber-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>

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
              Des véhicules pour chaque exigence
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-400">
              Berlines exécutives, véhicule spacieux et SUV de prestige :
              notre flotte permet de répondre à différents besoins
              de transport privé et professionnel.
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
            Retrouvez également nos autres prestations de
            transport privé et de chauffeur exécutif.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {[
              ["Chauffeur privé CDG", "/chauffeur-prive-cdg"],
              ["Transfert CDG", "/transfert-cdg"],
              ["Transfert Orly", "/transfert-orly"],
              ["Chauffeur business", "/chauffeur-business"],
              ["Mise à disposition", "/mise-a-disposition"],
              ["Transport VIP", "/transport-vip"],
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
            Votre chauffeur privé pour CDG
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
            Organisez votre prochain transfert vers ou depuis
            Roissy Charles-de-Gaulle avec Sud IDF Executive Transport.
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

    

      <section aria-label="Nos services complémentaires autour de CDG" className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">SUD IDF Executive Transport</p>
          <h2 className="mx-auto mb-5 max-w-3xl text-center text-2xl font-semibold text-white md:text-3xl">Nos services complémentaires autour de CDG</h2>
          <p className="mx-auto mb-9 max-w-3xl text-center text-sm leading-7 text-zinc-300 md:text-base">Préparez vos déplacements avec nos prestations de chauffeur privé en Île-de-France.</p>
          <nav aria-label="Liens vers nos autres services" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/transfert-cdg" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transfert aéroport CDG</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-paris" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé à Paris</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-essonne" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé en Essonne</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transfert-orly" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transfert Orly</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-business" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur business</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transport-vip" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transport VIP</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-gare" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transfert depuis les gares</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
