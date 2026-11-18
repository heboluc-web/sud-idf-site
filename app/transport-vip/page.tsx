import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transport VIP | Sud IDF Executive Transport",

  description:
    "Transport VIP premium en Île-de-France pour entreprises, dirigeants, hôtels et événements. Chauffeur privé haut de gamme sur réservation.",

  keywords: [
    "transport VIP",
    "chauffeur VIP",
    "transport premium",
    "chauffeur privé premium",
    "transport haut de gamme",
    "chauffeur business",
    "VTC luxe",
    "chauffeur privé haut de gamme",
    "transport VIP Île-de-France",
    "chauffeur VIP Paris",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/transport-vip",
  },
};

const services = [
  {
    title: "Chauffeur business",
    description:
      "Transport exécutif adapté aux entreprises, dirigeants et déplacements professionnels.",
    href: "/chauffeur-business",
    image: "/images/corbeil-essonnes-business.png",
    alt: "Véhicule avec chauffeur pour les déplacements business",
  },
  {
    title: "Chauffeur privé Paris",
    description:
      "Service de chauffeur privé premium à Paris et en Île-de-France.",
    href: "/chauffeur-prive-paris",
    image: "/images/paris-seine-hero.png",
    alt: "Véhicule premium dans un décor parisien",
  },
  {
    title: "Chauffeur aéroport CDG",
    description:
      "Transfert premium vers ou depuis l’aéroport Paris-Charles-de-Gaulle.",
    href: "/chauffeur-aeroport-cdg",
    image: "/images/cdg-hero-premium.png",
    alt: "Chauffeur privé pour un transfert à l'aéroport Charles-de-Gaulle",
  },
  {
    title: "Chauffeur aéroport Orly",
    description:
      "Chauffeur privé premium pour vos transferts vers ou depuis l’aéroport Paris-Orly.",
    href: "/chauffeur-aeroport-orly",
    image: "/images/corbeil-essonnes-transfert-orly.png",
    alt: "Véhicule premium pour un transfert vers l'aéroport d'Orly",
  },
  {
    title: "Mise à disposition",
    description:
      "Un chauffeur privé à l’heure ou à la journée pour vos rendez-vous, événements et déplacements sur mesure.",
    href: "/mise-a-disposition",
    image: "/images/mise-a-disposition-hero.png",
    alt: "Service de chauffeur privé en mise à disposition",
  },
  {
    title: "Réserver un chauffeur",
    description:
      "Effectuez votre demande de réservation pour votre transport VIP ou votre déplacement professionnel.",
    href: "/reservation",
    image: "/images/accueil-avion-mercedes.png",
    alt: "Mercedes avec chauffeur pour une réservation VIP",
  },
];

export default function TransportVIP() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* BANNIÈRE PRINCIPALE */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden border-b border-amber-500/20">
        <Image
          src="/images/accueil-avion-mercedes.png"
          alt="Mercedes avec chauffeur pour un service de transport VIP"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.38em] text-amber-400">
              Élégance · Confort · Discrétion
            </p>

            <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-7xl">
              Transport <span className="font-serif italic text-amber-400">VIP</span>
            </h1>

            <div className="mb-8 flex items-center gap-4 text-amber-400">
              <span className="h-px w-16 bg-amber-400" />
              <span className="text-xl">✦</span>
              <span className="h-px w-16 bg-amber-400" />
            </div>

            <h2 className="mb-6 text-2xl font-semibold leading-snug text-white md:text-3xl">
              Transport VIP et chauffeur privé haut de gamme en Île-de-France
            </h2>

            <p className="max-w-xl text-lg leading-8 text-gray-200">
              Sud IDF Executive Transport propose un service de transport VIP
              premium pour vos déplacements privés et professionnels en
              Île-de-France, avec une prise en charge organisée sur réservation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/reservation"
                className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 font-semibold uppercase tracking-wider text-black shadow-lg transition hover:-translate-y-1 hover:brightness-110"
              >
                Réserver un chauffeur
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-amber-400 px-8 py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-amber-400 hover:text-black"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="bg-neutral-950 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              L’exigence SUD IDF
            </p>
            <h2 className="mb-8 text-3xl font-semibold leading-tight md:text-4xl">
              Une expérience de transport pensée pour vos déplacements VIP
            </h2>

            <div className="space-y-6 text-lg leading-8 text-gray-300">
              <p>
                Notre service de chauffeur privé s’adresse aux particuliers comme
                aux entreprises recherchant un transport haut de gamme, avec une
                attention particulière portée au confort, à la ponctualité et à
                la discrétion.
              </p>

              <p>
                Nous accompagnons notamment les dirigeants, cadres et
                professionnels dans leurs déplacements business, ainsi que les
                hôtels, agences et organisateurs d’événements qui souhaitent
                proposer une solution de transport premium à leurs clients et
                invités.
              </p>

              <p>
                Le transport VIP peut être organisé pour des transferts vers ou
                depuis les aéroports, des rendez-vous professionnels, des
                événements privés, des séminaires ou différents déplacements en
                Île-de-France.
              </p>

              <p>
                Chaque trajet est préparé en fonction de vos besoins afin de
                garantir une expérience confortable et professionnelle. Notre
                objectif est de vous permettre de voyager dans un cadre élégant,
                discret et serein.
              </p>

              <p>
                Réservez votre transport VIP auprès de Sud IDF Executive
                Transport pour bénéficier d’un chauffeur privé premium disponible
                sur réservation.
              </p>
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden rounded-3xl border border-amber-500/30">
            <Image
              src="/images/corbeil-essonnes-business.png"
              alt="Véhicule haut de gamme pour les déplacements professionnels"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                SUD IDF Executive Transport
              </p>
              <p className="mt-2 text-2xl font-semibold">
                Le sens du service et de la discrétion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="relative isolate overflow-hidden border-y border-amber-500/20 px-6 py-20">
        <Image
          src="/images/place-vendome-flotte-sud-idf.png"
          alt="Véhicules de prestige dans un environnement parisien"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Votre confort, notre priorité
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Les exigences d’un transport VIP
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
              Chaque déplacement est organisé avec attention afin de vous
              proposer un accompagnement professionnel, confortable et discret.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-500/40 bg-black/75 p-8 shadow-2xl backdrop-blur-sm md:p-10">
            <h3 className="mb-7 text-2xl font-semibold tracking-wide text-amber-400">
              Les avantages
            </h3>
            <ul className="space-y-5 text-lg text-gray-100">
              <li>✓ Chauffeur professionnel et ponctuel</li>
              <li>✓ Véhicule premium et confortable</li>
              <li>✓ Prise en charge organisée sur réservation</li>
              <li>✓ Discrétion et confidentialité</li>
              <li>✓ Accompagnement des particuliers et professionnels</li>
              <li>✓ Prestations adaptées à vos déplacements et événements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LIENS SEO AVEC IMAGES */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Pour prolonger votre visite
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Découvrez nos services de chauffeur privé
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              Des solutions de transport premium pour vos déplacements
              professionnels, vos transferts aéroport et vos trajets à Paris.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-2xl border border-amber-500/30 bg-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="mb-3 text-xl font-semibold text-amber-400">
                    {service.title}
                  </h3>
                  <p className="leading-7 text-gray-300">
                    {service.description}
                  </p>
                  <span className="mt-6 block font-semibold uppercase tracking-wider text-amber-400">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPEL À L'ACTION */}
      <section className="border-t border-amber-500/20 bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            SUD IDF Executive Transport
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Organisez votre prochain déplacement VIP
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Réservez votre chauffeur privé pour vos déplacements personnels,
            professionnels ou événementiels en Île-de-France.
          </p>
          <Link
            href="/reservation"
            className="mt-9 inline-flex rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-9 py-4 font-semibold uppercase tracking-wider text-black shadow-lg transition hover:-translate-y-1 hover:brightness-110"
          >
            Réserver votre chauffeur
          </Link>
        </div>
      </section>
    

      <section aria-label="Découvrez nos prestations haut de gamme" className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">SUD IDF Executive Transport</p>
          <h2 className="mx-auto mb-5 max-w-3xl text-center text-2xl font-semibold text-white md:text-3xl">Découvrez nos prestations haut de gamme</h2>
          <p className="mx-auto mb-9 max-w-3xl text-center text-sm leading-7 text-zinc-300 md:text-base">Pour vos déplacements privés, professionnels ou événementiels, découvrez nos services complémentaires.</p>
          <nav aria-label="Liens vers nos autres services" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/chauffeur-business" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur business</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/mise-a-disposition" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Mise à disposition</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transport-longue-distance" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transport longue distance</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transfert-orly" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transfert Orly</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transfert-cdg" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transfert CDG</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/mariage" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transport pour mariage</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-paris" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé à Paris</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
