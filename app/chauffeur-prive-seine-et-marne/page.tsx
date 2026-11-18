
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé Seine-et-Marne | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé haut de gamme en Seine-et-Marne. Transferts Orly, CDG, Melun, Fontainebleau, Vaux-le-Vicomte, déplacements business et transport VIP.",

  keywords: [
    "chauffeur privé Seine-et-Marne",
    "VTC Seine-et-Marne",
    "chauffeur privé Melun",
    "chauffeur privé Fontainebleau",
    "transfert Orly Seine-et-Marne",
    "transfert CDG Seine-et-Marne",
    "chauffeur business Seine-et-Marne",
    "transport premium Seine-et-Marne",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive-seine-et-marne",
  },
};

const places = [
  {
    title: "Château de Fontainebleau",
    description:
      "Un service de transport élégant pour vos visites, séjours, rendez-vous et événements dans l'environnement prestigieux du château.",
    image: "/images/seine-et-marne-hero.png",
    alt: "Mercedes Classe S devant le château de Fontainebleau",
  },
  {
    title: "Melun et les bords de Seine",
    description:
      "Vos déplacements privés et professionnels dans le centre de Melun et les communes environnantes, avec un chauffeur ponctuel et discret.",
    image: "/images/melun-bords-de-seine.png",
    alt: "Véhicule premium sur les bords de Seine à Melun",
  },
  {
    title: "Château de Vaux-le-Vicomte",
    description:
      "Rejoignez un domaine d'exception pour une visite, une réception, un mariage ou un événement privé.",
    image: "/images/vaux-le-vicomte-classe-v.png",
    alt: "Mercedes Classe V devant le château de Vaux-le-Vicomte",
  },
];


const services = [
  {
    title: "Transferts aéroports",
    description:
      "Vos transferts depuis la Seine-et-Marne vers Orly et Roissy Charles-de-Gaulle, ainsi que vos trajets retour.",
    image: "/images/orly-hero.png",
    alt: "Mercedes avec chauffeur pour les transferts aéroport",
    href: "/transfert-orly",
  },
  {
    title: "Déplacements professionnels",
    description:
      "Un transport exécutif pour les dirigeants, collaborateurs, clients et partenaires de votre entreprise.",
    image: "/images/seine-et-marne-business.png",
    alt: "Véhicule premium pour les déplacements professionnels",
    href: "/chauffeur-business",
  },
  {
    title: "Événements et réceptions",
    description:
      "Une prise en charge personnalisée pour vos mariages, réceptions, événements privés et rendez-vous importants.",
    image: "/images/vaux-le-vicomte-classe-v.png",
    alt: "Mercedes devant un domaine de réception en Seine-et-Marne",
    href: "/reservation",
  },
  {
    title: "Mise à disposition",
    description:
      "Un chauffeur dédié pendant la durée réservée pour vos réunions, visites et programmes à plusieurs étapes.",
    image: "/images/seine-et-marne-hero.png",
    alt: "Véhicule haut de gamme avec chauffeur privé",
    href: "/chauffeur-prive-mise-a-disposition",
  },
];

const faqs = [
  [
    "Proposez-vous des transferts vers Orly et CDG ?",
    "Oui, nous assurons les transferts premium vers les aéroports d’Orly et Roissy Charles-de-Gaulle depuis toute la Seine-et-Marne et l’Île-de-France.",
  ],
  [
    "Intervenez-vous dans toute la Seine-et-Marne ?",
    "Nos chauffeurs privés interviennent notamment à Melun, Fontainebleau, Sénart et dans toute la Seine-et-Marne.",
  ],
  [
    "Peut-on réserver un chauffeur business ?",
    "Oui, notre service business est destiné aux entreprises, dirigeants, hôtels, séminaires et déplacements professionnels.",
  ],
  [
    "Êtes-vous disponible 24h/24 ?",
    "Notre service de chauffeur privé premium est disponible 24h/24 et 7j/7 sur réservation.",
  ],
];

export default function ChauffeurPriveSeineEtMarne() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* FAQ SCHEMA SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          }),
        }}
      />

      {/* NAVIGATION */}
      <nav className="relative z-20 border-b border-amber-500/20 bg-black px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="block">
            <div className="text-xl tracking-[0.45em] text-white">
              SUD IDF
            </div>
            <div className="mt-1 text-[10px] tracking-[0.5em] text-amber-400">
              EXECUTIVE TRANSPORT
            </div>
          </a>

          <div className="hidden items-center gap-7 text-xs tracking-[0.2em] text-neutral-300 md:flex">
            <a href="/chauffeur-prive-paris" className="hover:text-amber-400">
              PARIS
            </a>
            <a href="/chauffeur-prive-essonne" className="hover:text-amber-400">
              ESSONNE
            </a>
            <a href="/chauffeur-prive-orly" className="hover:text-amber-400">
              ORLY
            </a>
            <a href="/chauffeur-prive-cdg" className="hover:text-amber-400">
              CDG
            </a>
            <a href="/chauffeur-business" className="hover:text-amber-400">
              BUSINESS
            </a>
            <a href="/reservation" className="hover:text-amber-400">
              RÉSERVATION
            </a>
            <a href="/contact" className="hover:text-amber-400">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* BANNIÈRE PRINCIPALE */}
      <section className="relative isolate min-h-[620px] h-[78vh] max-h-[900px] w-full overflow-hidden">
        <Image
          src="/images/seine-et-marne-hero.png"
          alt="Mercedes Classe S devant le château de Fontainebleau"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl pt-12">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
              SUD IDF EXECUTIVE TRANSPORT
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Chauffeur privé
              <span className="block text-amber-400">
                en Seine-et-Marne
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-100 md:text-xl">
              Découvrez la Seine-et-Marne avec un service de chauffeur
              privé haut de gamme. De Melun à Fontainebleau, des domaines
              historiques aux rendez-vous professionnels, profitez d'un
              transport élégant, ponctuel et discret.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/reservation"
                className="rounded-md border border-amber-400 bg-amber-500 px-9 py-4 text-center font-bold tracking-[0.12em] text-black transition hover:bg-amber-400"
              >
                RÉSERVER UN CHAUFFEUR
              </a>

              <a
                href="/contact"
                className="rounded-md border border-white/70 px-9 py-4 text-center font-semibold tracking-[0.12em] text-white transition hover:border-amber-400 hover:text-amber-400"
              >
                NOUS CONTACTER
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
            Confort · Élégance · Discrétion
          </p>

          <h2 className="mt-6 text-3xl font-light leading-tight md:text-5xl">
            Votre chauffeur privé au cœur de la Seine-et-Marne
          </h2>

          <div className="mx-auto mt-9 max-w-4xl space-y-6 text-left text-lg leading-8 text-neutral-300">
            <p>
              Située aux portes de Paris, la Seine-et-Marne offre un
              territoire riche en patrimoine, en espaces naturels,
              en destinations touristiques et en pôles économiques.
              Des déplacements quotidiens aux occasions exceptionnelles,
              chaque trajet mérite une prise en charge de qualité.
            </p>

            <p>
              SUD IDF Executive Transport vous accompagne pour vos
              déplacements personnels et professionnels dans le
              département. Nous organisons vos transferts vers les
              aéroports, vos trajets vers Paris, vos rendez-vous
              d'affaires et vos déplacements vers les hôtels,
              domaines et lieux de réception.
            </p>

            <p>
              Notre priorité est de vous offrir une expérience de
              transport fondée sur la ponctualité, la discrétion,
              le confort à bord et une présentation professionnelle.
              Votre trajet est préparé avec attention selon les
              informations communiquées lors de votre réservation.
            </p>
          </div>
        </div>
      </section>

      {/* LIEUX EMBLÉMATIQUES */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
              Patrimoine et destinations
            </p>

            <h2 className="mt-5 text-3xl font-light md:text-5xl">
              La Seine-et-Marne dans toute son élégance
            </h2>

            <p className="mt-7 text-lg leading-8 text-neutral-400">
              Des centres-villes aux grands domaines historiques,
              nous vous accompagnons vers les destinations qui font
              le caractère et le prestige du département.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {places.map((place) => (
              <article
                key={place.title}
                className="group overflow-hidden rounded-2xl border border-amber-500/20 bg-black transition duration-300 hover:-translate-y-1 hover:border-amber-400/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-semibold text-amber-400">
                    {place.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {place.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
              Nos prestations
            </p>

            <h2 className="mt-5 text-3xl font-light md:text-5xl">
              Un transport adapté à chaque déplacement
            </h2>

            <p className="mt-7 text-lg leading-8 text-neutral-400">
              Pour vos voyages, vos rendez-vous et vos événements,
              bénéficiez d'un accompagnement professionnel en
              Seine-et-Marne et dans toute l'Île-de-France.
            </p>
          </div>

          
<div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
  {services.map((service) => (
    <a
      key={service.title}
      href={service.href}
      className="group overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-amber-400/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-400">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-neutral-400">
          {service.description}
        </p>

        <span className="mt-6 inline-block text-sm font-semibold text-amber-400">
          Découvrir →
        </span>
      </div>
    </a>
  ))}
</div>

        </div>
      </section>

      {/* CLIENTÈLE BUSINESS */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
              Entreprises · Hôtels · Événements
            </p>

            <h2 className="mt-5 text-3xl font-light leading-tight md:text-4xl">
              Un partenaire transport pour vos besoins professionnels
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-neutral-400">
              <p>
                SUD IDF Executive Transport accompagne les entreprises,
                hôtels, agences de voyages et organisateurs d'événements
                pour leurs besoins de transport en Seine-et-Marne.
              </p>

              <p>
                Transferts de dirigeants, accueil de clients,
                déplacements entre plusieurs rendez-vous, séminaires
                et événements : nous organisons vos prestations
                selon votre programme.
              </p>

              <p>
                Pour vos besoins réguliers ou vos opérations ponctuelles,
                nous pouvons étudier une organisation adaptée à votre
                activité et à vos exigences.
              </p>
            </div>

            <a
              href="/contact"
              className="mt-9 inline-flex rounded-md border border-amber-400 px-8 py-4 text-sm font-semibold tracking-[0.12em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
            >
              NOUS CONTACTER
            </a>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-amber-500/20">
            <Image
              src="/images/seine-et-marne-business.png"
              alt="Service de transport exécutif SUD IDF Executive Transport"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
            Notre secteur d'intervention
          </p>

          <h2 className="mt-5 text-3xl font-light md:text-5xl">
            Melun, Fontainebleau, Sénart et au-delà
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-400">
            Nous intervenons dans les principales communes de Seine-et-Marne
            et organisons également vos déplacements vers Paris,
            l'Essonne, les aéroports et les autres départements
            d'Île-de-France.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              ["Melun", "/chauffeur-prive-melun"],
              ["Fontainebleau", "/chauffeur-prive-fontainebleau"],
              ["Corbeil-Essonnes", "/chauffeur-prive-corbeil-essonnes"],
              ["Évry-Courcouronnes", "/chauffeur-prive-evry"],
              ["Paris", "/chauffeur-prive-paris"],
              ["Orly", "/chauffeur-prive-orly"],
              ["CDG", "/chauffeur-prive-cdg"],
            ].map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="rounded-full border border-amber-500/30 px-6 py-3 text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                {place}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-light text-amber-400 md:text-4xl">
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-amber-500/20 bg-black p-6"
              >
                <summary className="cursor-pointer list-none text-base font-medium text-white transition group-open:text-amber-400">
                  {question}
                </summary>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden px-6 py-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.13),transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.45em] text-amber-400">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h2 className="mt-7 text-3xl font-light leading-tight md:text-5xl">
            Votre destination en Seine-et-Marne.
            <span className="block text-amber-400">
              Notre engagement, votre confort.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Confiez vos déplacements à un service de chauffeur privé
            premium. Organisons ensemble votre prochaine prestation
            en Seine-et-Marne et en Île-de-France.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/reservation"
              className="rounded-md border border-amber-400 bg-amber-500 px-10 py-5 font-bold tracking-[0.12em] text-black transition hover:bg-amber-400"
            >
              RÉSERVER MON CHAUFFEUR
            </a>

            <a
              href="/contact"
              className="rounded-md border border-amber-500/50 px-10 py-5 font-semibold tracking-[0.12em] text-amber-400 transition hover:border-amber-400 hover:bg-amber-500/10"
            >
              NOUS CONTACTER
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
            <section className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">SUD IDF Executive Transport</p>
          <h2 className="mt-3 text-center text-2xl font-semibold text-white">Un chauffeur privé en Seine-et-Marne et vers l’Île-de-France</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-zinc-400">Pour vos déplacements depuis la Seine-et-Marne, retrouvez nos services à Melun et Fontainebleau, ainsi que nos solutions de transfert aéroport, de transport business et de mise à disposition avec chauffeur.</p>
          <nav className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/chauffeur-prive-melun" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Chauffeur privé à Melun <span className="float-right text-amber-400">→</span></a>
            <a href="/chauffeur-prive-fontainebleau" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Chauffeur privé à Fontainebleau <span className="float-right text-amber-400">→</span></a>
            <a href="/chauffeur-prive-essonne" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Chauffeur privé en Essonne <span className="float-right text-amber-400">→</span></a>
            <a href="/transfert-orly" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Transfert Orly <span className="float-right text-amber-400">→</span></a>
            <a href="/transfert-cdg" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Transfert CDG <span className="float-right text-amber-400">→</span></a>
            <a href="/chauffeur-business" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Chauffeur business <span className="float-right text-amber-400">→</span></a>
          </nav>
        </div>
      </section>

<footer className="border-t border-amber-500/20 bg-black px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg tracking-[0.35em] text-white">
              SUD IDF
            </div>
            <div className="mt-1 text-[9px] tracking-[0.45em] text-amber-400">
              EXECUTIVE TRANSPORT
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
              Chauffeur privé premium en Île-de-France pour particuliers,
              entreprises, hôtels et événements.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Navigation
            </h3>
            <div className="mt-5 space-y-3 text-sm text-neutral-500">
              <a href="/" className="block hover:text-amber-400">Accueil</a>
              <a href="/reservation" className="block hover:text-amber-400">Réservation</a>
              <a href="/chauffeur-prive-paris" className="block hover:text-amber-400">Paris</a>
              <a href="/contact" className="block hover:text-amber-400">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Contact
            </h3>
            <div className="mt-5 space-y-3 text-sm text-neutral-500">
              <p>06 68 86 36 73</p>
              <p>contact@sudidfexecutivetransport.fr</p>
              <p>Corbeil-Essonnes · Seine-et-Marne · Île-de-France</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-5 border-t border-amber-500/10 pt-6 text-xs text-neutral-600">
          <a href="/mentions-legales" className="hover:text-amber-400">
            Mentions légales
          </a>
          <a href="/cgv" className="hover:text-amber-400">
            CGV
          </a>
          <a href="/confidentialite" className="hover:text-amber-400">
            Confidentialité
          </a>
        </div>
      </footer>
    </main>
  );
}
