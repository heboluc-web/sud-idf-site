
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé Orly | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé premium vers l’aéroport d’Orly. Transferts haut de gamme, ponctualité et confort pour tous vos déplacements en Île-de-France.",

  keywords: [
    "chauffeur privé Orly",
    "VTC Orly",
    "transfert Orly",
    "chauffeur aéroport Orly",
    "transport premium Orly",
    "chauffeur privé aéroport",
    "VTC aéroport Orly",
  ],

  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/chauffeur-prive-orly",
  },
};

const services = [
  {
    title: "Transfert Orly",
    description:
      "Service premium de transfert vers l’aéroport d’Orly.",
    image: "/images/orly-accueil.png",
    alt: "Véhicule premium devant l'aéroport Paris-Orly",
    href: "/transfert-orly",
  },
  {
    title: "Chauffeur privé Paris",
    description:
      "Déplacements premium à Paris et en Île-de-France.",
    image: "/images/essonne-chauffeur.png",
    alt: "Véhicule avec chauffeur pour les déplacements à Paris",
    href: "/chauffeur-prive-paris",
  },
  {
    title: "Chauffeur business",
    description:
      "Transport exécutif pour professionnels et entreprises.",
    image: "/images/essonne-interieur.png",
    alt: "Intérieur raffiné d'un véhicule de transport exécutif",
    href: "/chauffeur-business",
  },
  {
    title: "Réserver un chauffeur",
    description:
      "Réservation rapide de votre chauffeur privé premium.",
    image: "/images/vehicule-interieur.png",
    alt: "Habitacle confortable d'un véhicule premium",
    href: "/reservation",
  },
];

export default function ChauffeurPriveOrly() {
  return (
    <main className="min-h-screen bg-black text-white">

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

          <div className="hidden items-center gap-8 text-xs tracking-[0.25em] text-neutral-300 md:flex">
            <a href="/chauffeur-prive-paris" className="hover:text-amber-400">
              PARIS
            </a>
            <a href="/chauffeur-prive-orly" className="text-amber-400">
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
          src="/images/orly-hero.png"
          alt="Véhicule premium avec chauffeur devant l'aéroport Paris-Orly"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl pt-12">

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              SUD IDF EXECUTIVE TRANSPORT
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Chauffeur privé
              <span className="block text-amber-400">
                Orly
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-200 md:text-xl">
              Un service de chauffeur privé premium vers l’aéroport d’Orly
              pour vos déplacements personnels et professionnels.
              Confort, ponctualité et discrétion à chaque trajet.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/reservation"
                className="rounded-md border border-amber-400 bg-amber-500 px-9 py-4 text-center font-bold text-black transition hover:bg-amber-400"
              >
                RÉSERVER UN CHAUFFEUR
              </a>

              <a
                href="/contact"
                className="rounded-md border border-white/70 px-9 py-4 text-center font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
              >
                NOUS CONTACTER
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* POINTS FORTS */}
      <section className="border-y border-amber-500/20 bg-neutral-950 px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["✈", "Transfert Orly", "Départ et arrivée"],
            ["◆", "Véhicules premium", "Confort haut de gamme"],
            ["◷", "Ponctualité", "Service fiable et organisé"],
            ["♛", "Professionnels et particuliers", "Un service sur mesure"],
          ].map(([icon, title, description]) => (
            <div key={title} className="flex items-center justify-center gap-4">
              <span className="text-3xl text-amber-400">{icon}</span>
              <div>
                <h2 className="font-semibold text-white">{title}</h2>
                <p className="text-sm text-neutral-400">{description}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              VTC AÉROPORT ORLY
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Un service premium pour vos transferts Orly
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-neutral-400">
              <p>
                Nous assurons vos transferts vers Orly avec ponctualité,
                discrétion et confort haut de gamme depuis Paris,
                l’Essonne et toute l’Île-de-France.
              </p>

              <p>
                Nos prestations de transport premium sont adaptées
                aux voyageurs business, déplacements privés,
                transferts hôtels, gares et voyages longue distance.
                Les agences de voyages et les professionnels du tourisme
                peuvent également faire appel à notre service pour leurs clients.
              </p>

              <p>
                Réservez votre chauffeur privé pour Orly afin de bénéficier
                d’un service fiable, confortable et disponible sur réservation.
              </p>
            </div>
          </div>

          <div className="relative min-h-[350px] overflow-hidden rounded-2xl border border-amber-500/30 md:min-h-[480px]">
            <Image
              src="/images/orly-accueil.png"
              alt="Accueil et prise en charge par chauffeur privé à l'aéroport d'Orly"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Nos prestations
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Des solutions de transport adaptées à vos besoins
            </h2>

            <p className="mt-7 text-lg leading-8 text-neutral-400">
              Particuliers, professionnels, entreprises et agences de voyages :
              bénéficiez d'un service de chauffeur privé adapté à vos déplacements.
            </p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-2xl border border-amber-500/25 bg-black transition duration-300 hover:-translate-y-2 hover:border-amber-400"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-4 text-lg font-bold text-amber-400">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-7 text-neutral-400">
                    {service.description}
                  </p>

                  <span className="mt-6 block font-semibold text-amber-400">
                    Découvrir →
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Nos engagements
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Pourquoi choisir SUD IDF pour vos trajets Orly ?
            </h2>
          </div>

          <div className="space-y-5 text-neutral-300">
            {[
              "Transferts depuis Paris, l’Essonne et toute l’Île-de-France",
              "Véhicules haut de gamme : Maybach, Classe S, Range Rover, Classe E et Classe V selon disponibilité",
              "Service adapté aux voyageurs business, particuliers et agences de voyages",
              "Ponctualité, discrétion et confort",
              "Prise en charge sur réservation",
            ].map((item) => (
              <p key={item} className="flex gap-4 leading-7">
                <span className="font-bold text-amber-400">✓</span>
                {item}
              </p>
            ))}
          </div>

        </div>
      </section>

      {/* LIENS SEO */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-bold text-amber-400">
            Découvrez nos autres services
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <a
              href="/transfert-orly"
              className="group overflow-hidden rounded-2xl border border-amber-500/30 bg-black transition hover:-translate-y-1 hover:border-amber-400"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/corbeil-essonnes-transfert-orly.png"
                  alt="Véhicule premium pour un transfert vers l'aéroport d'Orly"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="mb-3 text-xl text-amber-400">
                  Transfert Orly
                </h3>
                <p className="text-neutral-400">
                  Service premium de transfert vers l’aéroport d’Orly.
                </p>
                <span className="mt-5 block font-semibold text-amber-400">
                  Découvrir →
                </span>
              </div>
            </a>

            <a
              href="/chauffeur-prive-paris"
              className="group overflow-hidden rounded-2xl border border-amber-500/30 bg-black transition hover:-translate-y-1 hover:border-amber-400"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/paris-seine-hero.png"
                  alt="Chauffeur privé et véhicule premium à Paris"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="mb-3 text-xl text-amber-400">
                  Chauffeur privé Paris
                </h3>
                <p className="text-neutral-400">
                  Déplacements premium à Paris et en Île-de-France.
                </p>
                <span className="mt-5 block font-semibold text-amber-400">
                  Découvrir →
                </span>
              </div>
            </a>

            <a
              href="/chauffeur-business"
              className="group overflow-hidden rounded-2xl border border-amber-500/30 bg-black transition hover:-translate-y-1 hover:border-amber-400"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/corbeil-essonnes-business.png"
                  alt="Véhicule haut de gamme pour le transport business"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="mb-3 text-xl text-amber-400">
                  Chauffeur business
                </h3>
                <p className="text-neutral-400">
                  Transport exécutif pour professionnels et entreprises.
                </p>
                <span className="mt-5 block font-semibold text-amber-400">
                  Découvrir →
                </span>
              </div>
            </a>

            <a
              href="/reservation"
              className="group overflow-hidden rounded-2xl border border-amber-500/30 bg-black transition hover:-translate-y-1 hover:border-amber-400"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/accueil-avion-mercedes.png"
                  alt="Véhicule Mercedes premium pour votre réservation de chauffeur"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="mb-3 text-xl text-amber-400">
                  Réserver un chauffeur
                </h3>
                <p className="text-neutral-400">
                  Réservation rapide de votre chauffeur privé premium.
                </p>
                <span className="mt-5 block font-semibold text-amber-400">
                  Réserver →
                </span>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* APPEL À L'ACTION */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Réservez votre chauffeur privé pour Orly
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
            Organisez votre transfert vers ou depuis l'aéroport d'Orly
            avec un service de transport premium.
          </p>

          <a
            href="/reservation"
            className="mt-10 inline-flex rounded-md border border-amber-400 bg-amber-500 px-10 py-5 font-bold text-black transition hover:bg-amber-400"
          >
            RÉSERVER MAINTENANT
          </a>
        </div>
      </section>

    </main>
  );
}
