
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chauffeur VTC Beauvais | Aéroport de Beauvais BVA",
  description:
    "Chauffeur VTC Beauvais et aéroport de Beauvais-Tillé. Transferts privés entre Paris, l’Île-de-France et l’aéroport BVA, avec un service premium, ponctuel et confortable.",
  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-aeroport-beauvais",
  },
};

const services = [
  {
    title: "Paris → Beauvais",
    description:
      "Transfert privé entre Paris et l’aéroport de Beauvais-Tillé avec une prise en charge à l’adresse de votre choix.",
    image: "/images/beauvais-classe-e.png",
    alt: "Mercedes Classe E noire pour un transfert privé vers Beauvais",
    href: "/reservation",
    link: "Organiser mon transfert",
  },
  {
    title: "Beauvais → Paris",
    description:
      "À votre arrivée à l’aéroport BVA, votre chauffeur vous accompagne vers Paris ou votre destination en Île-de-France.",
    image: "/images/beauvais-classe-v.png",
    alt: "Mercedes Classe V noire pour les transferts aéroport avec bagages",
    href: "/reservation",
    link: "Réserver mon retour",
  },
  {
    title: "Départ depuis l’Île-de-France",
    description:
      "Transport privé depuis l’Essonne, les Hauts-de-Seine, les Yvelines et les autres départements franciliens.",
    image: "/images/beauvais-range-rover.png",
    alt: "Range Rover Autobiography noir devant un terminal aéroportuaire",
    href: "/reservation",
    link: "Réserver mon chauffeur",
  },
  {
    title: "Retour d’aéroport",
    description:
      "Une solution confortable pour rejoindre votre domicile, votre hôtel, une gare ou votre lieu de rendez-vous.",
    image: "/images/beauvais-interieur.png",
    alt: "Intérieur cuir beige d'un véhicule de transport premium",
    href: "/reservation",
    link: "Organiser mon retour",
  },
  {
    title: "Voyages professionnels",
    description:
      "Un service adapté aux déplacements d’affaires et aux horaires nécessitant ponctualité et sérénité.",
    image: "/images/beauvais-classe-e.png",
    alt: "Berline Mercedes Classe E de transport exécutif",
    href: "/chauffeur-business",
    link: "Découvrir le service business",
  },
  {
    title: "Service VIP",
    description:
      "Une prestation discrète et personnalisée pour les voyageurs recherchant confort et qualité de service.",
    image: "/images/beauvais-maybach.png",
    alt: "Mercedes-Maybach de prestige pour les déplacements VIP",
    href: "/transport-vip",
    link: "Découvrir notre service VIP",
  },
];

const destinations = [
  ["Paris", "/chauffeur-prive-paris"],
  ["Essonne", "/vtc-essonne"],
  ["Yvelines", "/chauffeur-vtc-versailles"],
  ["Île-de-France", "/service-transport-personnes-chauffeur"],
];

const departments = [
  ["Paris", "/chauffeur-prive-paris"],
  ["Essonne", "/vtc-essonne"],
  ["Seine-et-Marne", "/chauffeur-prive-paris"],
  ["Hauts-de-Seine", "/chauffeur-prive-paris"],
  ["Yvelines", "/chauffeur-vtc-versailles"],
  ["Val-de-Marne", "/chauffeur-prive-paris"],
  ["Val-d’Oise", "/chauffeur-prive-paris"],
  ["Seine-Saint-Denis", "/chauffeur-prive-paris"],
];

const otherServices = [
  ["Chauffeur VTC Orly", "/chauffeur-prive-orly"],
  ["Chauffeur VTC CDG", "/chauffeur-prive-cdg"],
  ["Chauffeur privé gare", "/chauffeur-prive-gare"],
  ["Transport longue distance", "/transport-longue-distance"],
];

const faqs = [
  {
    question:
      "Proposez-vous un chauffeur VTC vers l’aéroport de Beauvais ?",
    answer:
      "Oui. Nous assurons les transferts privés vers et depuis l’aéroport de Beauvais-Tillé depuis Paris et l’Île-de-France.",
  },
  {
    question:
      "Pouvez-vous venir me chercher à l’aéroport de Beauvais ?",
    answer:
      "Oui. Nous pouvons organiser votre prise en charge à l’arrivée afin de vous conduire vers votre destination.",
  },
  {
    question: "Faites-vous les transferts Paris-Beauvais ?",
    answer:
      "Oui. Les transferts entre Paris et l’aéroport de Beauvais-Tillé font partie des prestations proposées.",
  },
  {
    question: "Intervenez-vous depuis l’Essonne ?",
    answer:
      "Oui. Nous intervenons notamment en Essonne ainsi que dans les différents départements d’Île-de-France.",
  },
  {
    question: "Comment obtenir un tarif pour Beauvais ?",
    answer:
      "Le tarif dépend notamment du lieu de départ ou d’arrivée, de l’horaire et du véhicule choisi. Vous pouvez effectuer une demande depuis notre formulaire de réservation.",
  },
];

export default function ChauffeurAeroportBeauvais() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* FAQ STRUCTURED DATA */}
      <Script
        id="faq-schema-beauvais"
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

      {/* NAVIGATION */}
      <nav className="relative z-20 border-b border-amber-500/20 bg-black px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="/" className="block shrink-0">
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

      {/* HERO BEAUVAIS */}
      <section className="relative flex min-h-[570px] items-center overflow-hidden border-b border-amber-500/20 md:min-h-[680px]">

        <Image
          src="/images/beauvais-hero.png"
          alt="Chauffeur privé et véhicule premium devant un terminal aéroportuaire"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">

          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-amber-400">
            AÉROPORT DE BEAUVAIS-TILLÉ · BVA
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Chauffeur VTC{" "}
            <span className="text-amber-400">Beauvais</span>
          </h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-amber-400" />

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
            Votre chauffeur privé pour vos transferts vers et depuis
            l’aéroport de Beauvais-Tillé. Un service premium entre Paris,
            l’Île-de-France et l’aéroport BVA.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="/reservation"
              className="rounded-lg border border-amber-400 bg-amber-400 px-8 py-4 text-center text-sm font-bold tracking-wider text-black transition hover:bg-transparent hover:text-amber-400"
            >
              RÉSERVER UN CHAUFFEUR
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-amber-400 px-8 py-4 text-center text-sm font-semibold tracking-wider text-amber-400 transition hover:bg-amber-400 hover:text-black"
            >
              DEMANDER UN DEVIS
            </a>

          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="border-b border-amber-500/20 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              Aéroport de Beauvais-Tillé
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              Votre transfert vers l’aéroport de Beauvais
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-400">
              L’aéroport de Beauvais-Tillé est situé à plusieurs dizaines
              de kilomètres de Paris. Un chauffeur privé vous permet de
              rejoindre l’aéroport directement depuis votre domicile,
              votre hôtel, une gare ou une autre adresse en Île-de-France.
            </p>

          </div>
        </div>
      </section>

      {/* SIX PRESTATIONS ILLUSTREES */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              Nos prestations
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              Des transferts adaptés à chaque voyage
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-400">
              Départ, arrivée, voyage professionnel ou prestation VIP :
              découvrez nos solutions de transport privé vers l’aéroport
              de Beauvais-Tillé.
            </p>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                </div>

                <div className="p-7">

                  <h3 className="text-lg font-semibold text-amber-400">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition group-hover:text-amber-300">
                    {service.link}
                    <span aria-hidden="true">→</span>
                  </span>

                </div>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* EXPERIENCE ET CONFORT */}
      <section className="border-b border-amber-500/20 bg-black px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div className="relative min-h-[330px] overflow-hidden rounded-2xl border border-amber-500/30 md:min-h-[480px]">

            <Image
              src="/images/beauvais-interieur.png"
              alt="Intérieur cuir beige et équipements de confort d'un véhicule premium"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              Confort et ponctualité
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              Un transport premium jusque dans les détails
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Pour un départ ou une arrivée à l’aéroport de Beauvais,
              nous organisons votre transfert autour de votre itinéraire
              et de vos horaires.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-400">
              Vous bénéficiez d’une prise en charge porte-à-porte dans
              un véhicule premium, sans avoir à gérer les transports
              en commun, le stationnement ou les changements de correspondance.
            </p>

            <ul className="mt-8 space-y-5 text-sm leading-7 text-neutral-300">

              {[
                "Accueil personnalisé et tenue professionnelle",
                "Suivi des horaires de vols",
                "Assistance pour les bagages",
                "Véhicules haut de gamme et confortables",
                "Bouteilles d’eau et équipements de confort à bord",
                "Ponctualité, discrétion et confidentialité",
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

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              Notre flotte
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              Des véhicules adaptés à vos déplacements
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-400">
              Berlines exécutives, SUV de prestige et véhicule spacieux :
              nous adaptons la prestation au type de déplacement et
              aux besoins de nos passagers.
            </p>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                name: "Mercedes Classe E",
                image: "/images/beauvais-classe-e.png",
                alt: "Mercedes Classe E noire",
                text: "Élégance et confort pour les transferts et déplacements professionnels.",
              },
              {
                name: "Mercedes Classe V",
                image: "/images/beauvais-classe-v.png",
                alt: "Mercedes Classe V noire",
                text: "Espace et confort pour les voyageurs et leurs bagages.",
              },
              {
                name: "Range Rover Autobiography",
                image: "/images/beauvais-range-rover.png",
                alt: "Range Rover Autobiography noir",
                text: "Un SUV de prestige pour vos déplacements premium.",
              },
              {
                name: "Mercedes-Maybach",
                image: "/images/beauvais-maybach.png",
                alt: "Mercedes-Maybach noire",
                text: "Une expérience de transport exclusive et raffinée.",
              },
            ].map((vehicle) => (
              <div
                key={vehicle.name}
                className="overflow-hidden rounded-2xl border border-amber-500/20 bg-black"
              >

                <div className="relative aspect-[4/3]">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-lg font-semibold text-amber-400">
                    {vehicle.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    {vehicle.text}
                  </p>

                </div>
              </div>
            ))}

          </div>

          <p className="mt-8 text-center text-sm leading-7 text-neutral-500">
            Notre flotte comprend également la Mercedes Classe S.
            Le véhicule proposé dépend de la prestation et des disponibilités.
          </p>

        </div>
      </section>

      {/* DESTINATIONS PRINCIPALES */}
      <section className="border-b border-amber-500/20 bg-black px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-semibold text-amber-400 md:text-4xl">
            Principaux transferts vers Beauvais
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-neutral-500">
            Nous assurons des transferts privés vers et depuis l’aéroport
            de Beauvais-Tillé selon votre lieu de départ et votre destination.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {destinations.map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="group flex min-h-[130px] items-center justify-center rounded-2xl border border-amber-500/20 bg-neutral-950 p-6 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                <span>
                  Chauffeur VTC Beauvais depuis {place}
                  <span className="ml-2 text-amber-400">→</span>
                </span>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* DEPARTEMENTS */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-semibold text-amber-400 md:text-4xl">
            Chauffeur VTC Beauvais en Île-de-France
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-neutral-500">
            Nous intervenons à Paris et dans les différents départements
            d’Île-de-France pour vos transferts vers l’aéroport de Beauvais-Tillé.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {departments.map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="flex min-h-[110px] items-center justify-center rounded-2xl border border-amber-500/15 bg-black p-6 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                Chauffeur VTC Beauvais à {place}
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="border-b border-amber-500/20 bg-black px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-semibold text-amber-400 md:text-4xl">
            Nos autres services aéroport
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {otherServices.map(([title, href]) => (
              <a
                key={title}
                href={href}
                className="rounded-2xl border border-amber-500/20 bg-neutral-950 p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                {title}
                <span className="ml-2 text-amber-400">→</span>
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
                className="group rounded-2xl border border-amber-500/15 bg-black p-6"
              >

                <summary className="cursor-pointer list-none text-base font-semibold text-white transition group-open:text-amber-400">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-xl text-amber-400">+</span>
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
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

          <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
            Votre chauffeur VTC pour Beauvais
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
            Organisez votre transfert vers ou depuis l’aéroport de
            Beauvais-Tillé avec un service premium et personnalisé.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/reservation"
              className="rounded-lg border border-amber-400 bg-amber-400 px-10 py-4 text-sm font-bold tracking-wider text-black transition hover:bg-transparent hover:text-amber-400"
            >
              RÉSERVER UN CHAUFFEUR
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
