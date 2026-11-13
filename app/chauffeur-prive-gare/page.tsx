
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chauffeur privé gare | VTC gare Paris et Île-de-France",
  description:
    "Chauffeur privé gare à Paris et en Île-de-France. VTC pour vos transferts depuis et vers les principales gares parisiennes, avec un service premium, ponctuel et confortable.",

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive-gare",
  },
};

const services = [
  [
    "Départ vers une gare",
    "Votre chauffeur vient vous chercher à l’adresse indiquée et vous accompagne directement jusqu’à votre gare.",
  ],
  [
    "Accueil à l’arrivée",
    "À votre arrivée, bénéficiez d’une prise en charge confortable pour rejoindre votre domicile, hôtel ou rendez-vous.",
  ],
  [
    "Gares parisiennes",
    "Transferts vers les principales gares de Paris avec une prise en charge adaptée à votre horaire.",
  ],
  [
    "Déplacements professionnels",
    "Une solution confortable pour rejoindre vos rendez-vous depuis ou vers une gare parisienne.",
  ],
  [
    "Bagages",
    "Un transport porte-à-porte pensé pour simplifier vos déplacements avec vos bagages.",
  ],
  [
    "Service VIP",
    "Une prestation discrète et personnalisée pour les voyageurs recherchant confort et sérénité.",
  ],
];

const stations = [
  {
    name: "Gare de Lyon",
    image: "/images/gare-de-lyon-hero.png",
    alt: "Range Rover noir devant la Gare de Lyon à Paris",
  },
  {
    name: "Gare du Nord",
    image: "/images/gare-du-nord.png",
    alt: "Gare du Nord à Paris et véhicule avec chauffeur privé",
  },
  {
    name: "Gare Montparnasse",
    image: "/images/gare-montparnasse.png",
    alt: "Gare Montparnasse et service de chauffeur privé",
  },
  {
    name: "Gare de l’Est",
    image: "/images/gare-de-l-est.png",
    alt: "Gare de l’Est à Paris et véhicule premium",
  },
  {
    name: "Gare Saint-Lazare",
    image: "/images/gare-saint-lazare-range-rover.png",
    alt: "Range Rover noir devant la Gare Saint-Lazare",
  },
  {
    name: "Gare d’Austerlitz",
    image: "/images/gare-d-austerlitz.png",
    alt: "Gare d’Austerlitz à Paris et chauffeur privé",
  },
];

const areas = [
  ["Paris", "/chauffeur-prive-paris"],
  ["Essonne", "/vtc-essonne"],
  ["Seine-et-Marne", "/chauffeur-prive-paris"],
  ["Hauts-de-Seine", "/chauffeur-prive-paris"],
  ["Yvelines", "/chauffeur-vtc-versailles"],
  ["Val-de-Marne", "/chauffeur-prive-paris"],
  ["Val-d’Oise", "/chauffeur-prive-paris"],
  ["Seine-Saint-Denis", "/chauffeur-prive-paris"],
];

const faqs = [
  [
    "Proposez-vous un chauffeur privé pour les gares de Paris ?",
    "Oui. Nous assurons les transferts vers et depuis les principales gares parisiennes.",
  ],
  [
    "Pouvez-vous venir me chercher directement à mon domicile ?",
    "Oui. Votre chauffeur peut venir vous chercher à l’adresse indiquée lors de votre réservation.",
  ],
  [
    "Prenez-vous en charge les bagages ?",
    "Oui. Le transport porte-à-porte permet de voyager confortablement avec vos bagages.",
  ],
  [
    "Proposez-vous des transferts gare vers aéroport ?",
    "Oui. Nous pouvons organiser des transferts entre une gare, un aéroport ou toute autre adresse selon votre itinéraire.",
  ],
  [
    "Comment réserver un chauffeur pour une gare ?",
    "Vous pouvez effectuer votre demande depuis notre formulaire de réservation ou nous contacter directement pour une prestation personnalisée.",
  ],
];

export default function ChauffeurPriveGare() {
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
      <section className="relative isolate h-[78vh] min-h-[620px] max-h-[900px] w-full overflow-hidden">
        <Image
          src="/images/gare-de-lyon-hero.png"
          alt="Véhicule Range Rover avec chauffeur devant la Gare de Lyon à Paris"
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

            <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Chauffeur privé
              <span className="block text-amber-400">pour vos trajets en gare</span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
              Un service de chauffeur privé VTC pour vos transferts depuis et
              vers les principales gares de Paris et d’Île-de-France. Confort,
              ponctualité et prise en charge personnalisée.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/reservation"
                className="rounded-md border border-amber-400 bg-amber-500 px-9 py-4 text-center font-bold text-black transition hover:bg-amber-400"
              >
                Réserver un chauffeur
              </a>

              <a
                href="/contact"
                className="rounded-md border border-white/70 px-9 py-4 text-center font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION DES SERVICES */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Transfert gare
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Votre chauffeur pour vos trajets en gare
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-400">
              Voyage professionnel, départ en vacances ou retour à Paris :
              votre chauffeur vous accompagne depuis votre adresse jusqu’à la
              gare ou vient vous récupérer directement à votre arrivée.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, text], index) => (
              <div
                key={title}
                className="rounded-2xl border border-amber-500/25 bg-neutral-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-400"
              >
                <span className="mb-5 block text-3xl text-amber-400">
                  {["◆", "✦", "▣", "◇", "▤", "♛"][index]}
                </span>

                <h3 className="text-xl font-semibold text-amber-400">
                  {title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-neutral-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LES SIX GARES */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Paris et Île-de-France
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Les principales gares desservies
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-400">
              Réservez votre chauffeur privé pour rejoindre ou quitter les
              principales gares parisiennes.
            </p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {stations.map((station) => (
              <a
                key={station.name}
                href="/reservation"
                className="group block overflow-hidden rounded-2xl border border-amber-500/25 bg-black transition duration-300 hover:-translate-y-2 hover:border-amber-400"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={station.image}
                    alt={station.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <h3 className="absolute bottom-5 left-5 right-5 text-xl font-bold text-white">
                    {station.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between gap-3 p-5">
                  <span className="text-sm text-neutral-400">
                    Transfert avec chauffeur privé
                  </span>
                  <span className="text-xl text-amber-400">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONFORT ET PONCTUALITÉ */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Confort et ponctualité
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Un chauffeur privé pour voyager sereinement
            </h2>

            <p className="mt-7 text-lg leading-8 text-neutral-400">
              Rejoindre une gare peut rapidement devenir contraignant avec les
              transports en commun, les bagages ou les horaires matinaux.
              Avec un chauffeur privé, votre trajet est organisé directement
              depuis votre adresse.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-400">
              Pour un départ comme pour une arrivée, nous privilégions une
              prise en charge simple, confortable et ponctuelle.
            </p>
          </div>

          <div className="relative min-h-[350px] overflow-hidden rounded-2xl border border-amber-500/30 md:min-h-[480px]">
            <Image
              src="/images/vehicule-interieur.png"
              alt="Intérieur raffiné et confortable d'un véhicule premium"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl rounded-2xl border border-amber-500/25 bg-neutral-950 p-8 md:p-10">
          <h3 className="text-xl font-semibold text-amber-400">
            Votre transfert gare
          </h3>

          <ul className="mt-7 grid gap-5 text-sm leading-7 text-neutral-400 md:grid-cols-2 lg:grid-cols-3">
            <li>✓ Prise en charge à l’adresse de votre choix</li>
            <li>✓ Chauffeur professionnel et ponctuel</li>
            <li>✓ Véhicule premium et confortable</li>
            <li>✓ Transport porte-à-porte</li>
            <li>✓ Service adapté aux particuliers et entreprises</li>
            <li>✓ Assistance avec les bagages</li>
          </ul>
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-amber-400 md:text-4xl">
            Chauffeur gare à Paris et en Île-de-France
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-center text-lg leading-8 text-neutral-400">
            Nous intervenons à Paris et dans les différents départements
            d’Île-de-France pour vos transferts vers et depuis les gares.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="flex min-h-[110px] items-center justify-center rounded-2xl border border-amber-500/25 bg-black p-6 text-center text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                Chauffeur privé gare à {place}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-amber-400 md:text-4xl">
            Nos autres services
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/chauffeur-prive-orly"
              className="rounded-2xl border border-amber-500/25 bg-neutral-950 p-7 text-center text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Chauffeur VTC Orly
            </a>

            <a
              href="/chauffeur-prive-cdg"
              className="rounded-2xl border border-amber-500/25 bg-neutral-950 p-7 text-center text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Chauffeur VTC CDG
            </a>

            <a
              href="/transport-longue-distance"
              className="rounded-2xl border border-amber-500/25 bg-neutral-950 p-7 text-center text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Transport longue distance
            </a>

            <a
              href="/chauffeur-prive-mise-a-disposition"
              className="rounded-2xl border border-amber-500/25 bg-neutral-950 p-7 text-center text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Mise à disposition
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-amber-400 md:text-4xl">
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-amber-500/25 bg-black p-6"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white transition group-open:text-amber-400">
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

      {/* APPEL À L'ACTION FINAL */}
      <section className="bg-gradient-to-b from-neutral-950 to-black px-6 py-28 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-amber-400">
          SUD IDF Executive Transport
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold text-white md:text-5xl">
          Votre chauffeur privé pour la gare
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
          Organisez votre transfert depuis ou vers votre gare et voyagez dans
          un véhicule premium avec chauffeur.
        </p>

        <a
          href="/reservation"
          className="mt-10 inline-flex rounded-md border border-amber-400 bg-amber-500 px-10 py-5 font-bold text-black transition hover:bg-amber-400"
        >
          Réserver un chauffeur
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
