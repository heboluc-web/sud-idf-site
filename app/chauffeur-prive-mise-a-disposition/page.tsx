
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chauffeur privé mise à disposition | Service Premium",
  description:
    "Chauffeur privé mise à disposition à Paris et en Île-de-France : véhicule avec chauffeur à l’heure pour réunions, séminaires, événements et déplacements professionnels.",

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive-mise-a-disposition",
  },
};

const services = [
  {
    title: "Réunions professionnelles",
    text: "Enchaînez vos rendez-vous à Paris et en Île-de-France avec un chauffeur dédié et un véhicule disponible selon votre agenda.",
    image: "/images/mise-a-disposition-reunions.png",
    alt: "Mercedes-Maybach noire devant un lieu de réunions professionnelles",
    href: "/reservation",
  },
  {
    title: "Séminaires et conférences",
    text: "Organisation des déplacements des participants, transferts entre hôtels et lieux d’événements et accompagnement pendant la journée.",
    image: "/images/mise-a-disposition-congres.png",
    alt: "Mercedes Classe S devant un centre de conférences",
    href: "/reservation",
  },
  {
    title: "Événements privés",
    text: "Un chauffeur à vos côtés pour vos soirées, réceptions, visites et événements nécessitant plusieurs déplacements.",
    image: "/images/mise-a-disposition-fashion-week.png",
    alt: "Mercedes Classe E lors d'un événement de mode à Paris",
    href: "/reservation",
  },
  {
    title: "Déplacements VIP",
    text: "Un service discret et personnalisé pour les dirigeants, invités et clients recherchant confort et tranquillité.",
    image: "/images/mise-a-disposition-hero.png",
    alt: "Flotte de véhicules de prestige devant un hôtel parisien",
    href: "/reservation",
  },
  {
    title: "Start-up et networking",
    text: "Accompagnez vos rendez-vous, rencontres professionnelles et événements de networking avec un chauffeur dédié.",
    image: "/images/mise-a-disposition-startup.png",
    alt: "Range Rover noir devant un lieu de networking professionnel",
    href: "/reservation",
  },
  {
    title: "Transferts combinés",
    text: "Associez votre mise à disposition à des transferts depuis les aéroports, les gares ou d’autres destinations franciliennes.",
    image: "/images/mise-a-disposition-hero.png",
    alt: "Véhicules premium de la flotte SUD IDF Executive Transport",
    href: "/reservation",
  },
];

const areas = [
  ["Paris", "/chauffeur-prive-paris"],
  ["Essonne", "/vtc-essonne"],
  ["Hauts-de-Seine", "/chauffeur-prive-paris"],
  ["Seine-et-Marne", "/chauffeur-prive-paris"],
  ["Yvelines", "/chauffeur-vtc-versailles"],
  ["Val-de-Marne", "/chauffeur-prive-paris"],
  ["Val-d’Oise", "/chauffeur-prive-paris"],
  ["Seine-Saint-Denis", "/chauffeur-prive-paris"],
];

const relatedLinks = [
  ["/chauffeur-vtc-disneyland-paris", "Chauffeur VTC Disneyland Paris"],
  ["/chauffeur-vtc-versailles", "Chauffeur VTC Versailles"],
  ["/chauffeur-vtc-parc-asterix", "Chauffeur VTC Parc Astérix"],
  ["/chauffeur-vtc-mariage", "Chauffeur VTC Mariage"],
];

const faqs = [
  [
    "Qu’est-ce qu’une mise à disposition avec chauffeur ?",
    "Il s’agit d’une prestation pendant laquelle un chauffeur et son véhicule restent disponibles pour vous pendant la durée réservée, selon le programme défini.",
  ],
  [
    "Combien de temps puis-je réserver un chauffeur ?",
    "La mise à disposition est proposée à partir de 2 heures, avec plusieurs durées possibles selon vos besoins.",
  ],
  [
    "La mise à disposition convient-elle aux entreprises ?",
    "Oui. Elle est particulièrement adaptée aux réunions, rendez-vous clients, séminaires, conférences et déplacements de dirigeants.",
  ],
  [
    "Puis-je effectuer plusieurs trajets pendant la prestation ?",
    "Oui. C’est précisément l’intérêt de la mise à disposition : votre chauffeur vous accompagne au fil des différents déplacements prévus.",
  ],
  [
    "Comment obtenir le tarif ?",
    "Le tarif dépend notamment de la durée et du véhicule choisi. Les demandes spécifiques peuvent faire l’objet d’un devis personnalisé.",
  ],
];

export default function ChauffeurPriveMiseADisposition() {
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
          src="/images/mise-a-disposition-hero.png"
          alt="Flotte de véhicules premium devant un établissement haut de gamme"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl pt-12">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              SUD IDF EXECUTIVE TRANSPORT
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Chauffeur privé
              <span className="block text-amber-400">
                mise à disposition
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-200 md:text-xl">
              Un véhicule avec chauffeur dédié pendant la durée de votre choix
              pour vos rendez-vous, réunions, séminaires, événements et
              déplacements professionnels à Paris et en Île-de-France.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/reservation"
                className="rounded-md border border-amber-400 bg-amber-500 px-9 py-4 text-center text-sm font-bold tracking-[0.15em] text-black transition hover:bg-amber-400"
              >
                RÉSERVER
              </a>

              <a
                href="/contact"
                className="rounded-md border border-white/70 px-9 py-4 text-center text-sm tracking-[0.15em] text-white transition hover:border-amber-400 hover:text-amber-400"
              >
                NOUS CONTACTER
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Service avec chauffeur à l’heure
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.12em] text-amber-400 md:text-4xl">
              Un chauffeur dédié selon votre programme
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-400">
              La mise à disposition vous permet de conserver votre chauffeur
              pendant plusieurs heures, sans multiplier les réservations. Le
              véhicule reste à votre disposition selon les conditions définies
              lors de votre réservation.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                aria-label={`${service.title} — réserver un chauffeur`}
                className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-amber-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-7">
                  <h3 className="text-lg font-semibold tracking-[0.08em] text-amber-400">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-neutral-400">
                    {service.text}
                  </p>
                  <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 transition group-hover:text-amber-300">
                    Réserver ce service →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VÉHICULES ET PRESTATIONS */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              Confort · Flexibilité · Discrétion
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.12em] text-white md:text-4xl">
              Une solution adaptée aux journées chargées
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Lorsque votre programme comporte plusieurs rendez-vous ou
              déplacements, la mise à disposition simplifie votre organisation.
              Vous bénéficiez d’un chauffeur qui connaît votre planning et
              vous accompagne au fil de la journée.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-400">
              La durée de la prestation est définie à l’avance. Pour les
              demandes spécifiques, nous pouvons établir un tarif personnalisé
              selon vos besoins.
            </p>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-amber-500/20">
            <Image
              src="/images/mise-a-disposition-hero.png"
              alt="Flotte de berlines et SUV premium pour les prestations avec chauffeur"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl rounded-3xl border border-amber-500/20 bg-black p-8 md:p-10">
          <h3 className="text-xl tracking-[0.14em] text-amber-400">
            Pourquoi choisir la mise à disposition ?
          </h3>

          <ul className="mt-7 grid gap-5 text-sm leading-7 text-neutral-400 md:grid-cols-2 lg:grid-cols-3">
            <li>✓ Chauffeur dédié pendant la durée réservée</li>
            <li>✓ Véhicule premium et confortable</li>
            <li>✓ Organisation selon votre planning</li>
            <li>✓ Déplacements multiples facilités</li>
            <li>✓ Service discret et professionnel</li>
            <li>✓ Adapté aux particuliers et aux entreprises</li>
          </ul>
        </div>
      </section>

      {/* ÉVÉNEMENTS PROFESSIONNELS */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              Événements et entreprises
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.14em] text-white md:text-4xl">
              Un accompagnement pour vos événements de prestige
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Congrès, salons professionnels, lancements de produits,
              rencontres de start-up, Fashion Week ou réunions d'affaires :
              organisez les déplacements de vos invités et collaborateurs
              avec une prestation de transport adaptée à votre événement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-amber-500/20">
              <Image
                src="/images/mise-a-disposition-startup.png"
                alt="Range Rover devant un événement professionnel de networking"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <h3 className="absolute bottom-7 left-7 text-2xl font-semibold text-white">
                Start-up et networking
              </h3>
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-amber-500/20">
              <Image
                src="/images/mise-a-disposition-fashion-week.png"
                alt="Mercedes Classe E lors d'un événement de mode"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <h3 className="absolute bottom-7 left-7 text-2xl font-semibold text-white">
                Fashion Week et soirées
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Mise à disposition à Paris et en Île-de-France
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {areas.map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="flex min-h-[100px] items-center justify-center rounded-2xl border border-amber-500/15 bg-black p-6 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                Chauffeur privé à {place}
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
            {relatedLinks.map(([href, label], index) => (
              <span key={href} className="flex items-center gap-4">
                <a href={href} className="text-amber-400 hover:text-white">
                  {label}
                </a>
                {index !== relatedLinks.length - 1 && (
                  <span className="text-neutral-700">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-amber-500/15 bg-black p-6"
              >
                <summary className="cursor-pointer list-none text-base text-white transition group-open:text-amber-400">
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

      {/* APPEL À L'ACTION */}
      <section className="px-6 py-28 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-amber-400">
          SUD IDF Executive Transport
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-light tracking-[0.14em] text-white md:text-5xl">
          Réservez votre chauffeur privé à l’heure
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
          Indiquez-nous votre durée et votre programme pour organiser une
          prestation adaptée à vos besoins.
        </p>

        <a
          href="/reservation"
          className="mt-10 inline-flex rounded-md border border-amber-400 bg-amber-500 px-10 py-4 text-sm font-bold tracking-[0.18em] text-black transition hover:bg-transparent hover:text-amber-400"
        >
          RÉSERVER
        </a>
      </section>

      {/* FOOTER */}
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
              entreprises et événements.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Navigation
            </h3>

            <div className="mt-5 space-y-3 text-sm text-neutral-500">
              <a href="/" className="block hover:text-amber-400">
                Accueil
              </a>

              <a href="/reservation" className="block hover:text-amber-400">
                Réservation
              </a>

              <a href="/contact" className="block hover:text-amber-400">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-neutral-500">
              <p>06 68 86 36 73</p>
              <p>contact@sudidfexecutivetransport.fr</p>
              <p>Corbeil-Essonnes · Île-de-France</p>
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
