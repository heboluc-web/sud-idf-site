
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chauffeur Privé Paris | Sud IDF Executive Transport",
  description:
    "Chauffeur privé haut de gamme à Paris : transferts aéroports, gares, hôtels, Place Vendôme, événements, déplacements business et transport VIP avec SUD IDF Executive Transport.",
  keywords: [
    "chauffeur privé Paris",
    "VTC Paris",
    "chauffeur premium Paris",
    "transfert Orly Paris",
    "transfert CDG Paris",
    "chauffeur business Paris",
    "transport VIP Paris",
    "chauffeur privé Place Vendôme",
    "chauffeur privé Notre-Dame Paris",
  ],
  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/chauffeur-prive-paris",
  },
};

const parisPlaces = [
  {
    title: "La tour Eiffel et les quais de Seine",
    description:
      "Un cadre emblématique pour vos déplacements privés, rendez-vous professionnels et arrivées dans la capitale.",
    image: "/images/paris-seine-hero.png",
    alt: "Mercedes Classe S devant la tour Eiffel et les quais de Seine à Paris",
  },
  {
    title: "La Place Vendôme",
    description:
      "Au cœur du Paris du luxe, accompagnez vos clients, partenaires et invités dans l'un des quartiers les plus prestigieux de la capitale.",
    image: "/images/place-vendome-flotte-sud-idf.png",
    alt: "Flotte de véhicules SUD IDF Executive Transport sur la Place Vendôme",
  },
  {
    title: "Le jardin des Tuileries",
    description:
      "Entre le Louvre et la place de la Concorde, profitez d'un environnement remarquable pour vos visites et déplacements privés.",
    image: "/images/jardin-tuileries-paris.jpg",
    alt: "Jardin des Tuileries à Paris",
  },
  {
    title: "Notre-Dame de Paris",
    description:
      "Découvrez le patrimoine historique de Paris et les abords de la cathédrale avec un service de transport confortable et discret.",
    image: "/images/notre-dame-quai-montebello.png",
    alt: "Cathédrale Notre-Dame de Paris vue depuis le quai de Montebello",
  },
  {
    title: "Notre-Dame et la Seine",
    description:
      "Une autre perspective sur l'île de la Cité et les quais parisiens, au fil de vos déplacements dans le centre historique.",
    image: "/images/notre-dame-vue-seine.png",
    alt: "Vue de Notre-Dame de Paris depuis la Seine",
  },
  {
    title: "Le pont de l'Archevêché",
    description:
      "Un point de vue architectural remarquable pour découvrir Notre-Dame et son environnement historique.",
    image: "/images/notre-dame-vue-pont-archeveche.png",
    alt: "Notre-Dame de Paris vue depuis le pont de l'Archevêché",
  },
];

const services = [
  {
    title: "Transferts aéroports",
    text: "Prise en charge pour vos départs et arrivées à Orly et Roissy Charles-de-Gaulle, avec une organisation adaptée à votre voyage.",
    href: "/transfert-orly",
  },
  {
    title: "Gares parisiennes",
    text: "Vos transferts depuis et vers les principales gares de Paris, avec une prise en charge organisée selon vos horaires.",
    href: "/chauffeur-prive-gare",
  },
  {
    title: "Déplacements business",
    text: "Un service exécutif pour les dirigeants, collaborateurs, clients et partenaires lors de leurs rendez-vous professionnels.",
    href: "/chauffeur-business",
  },
  {
    title: "Mise à disposition",
    text: "Un chauffeur dédié pendant plusieurs heures pour vos réunions, visites, événements et programmes à plusieurs étapes.",
    href: "/chauffeur-prive-mise-a-disposition",
  },
  {
    title: "Événements et VIP",
    text: "Une prestation personnalisée pour vos réceptions, événements privés, salons, congrès et déplacements de prestige.",
    href: "/reservation",
  },
  {
    title: "Longue distance",
    text: "Des déplacements privés et professionnels au départ de Paris vers les destinations de votre choix.",
    href: "/reservation",
  },
];

const fleet = [
  "Mercedes-Maybach",
  "Mercedes Classe S",
  "Range Rover",
  "Mercedes Classe E",
  "Mercedes Classe V",
];

const faqs = [
  [
    "Proposez-vous des transferts depuis Paris vers les aéroports ?",
    "Oui, SUD IDF Executive Transport assure les transferts depuis Paris vers les aéroports d'Orly et de Roissy Charles-de-Gaulle, ainsi que les trajets retour.",
  ],
  [
    "Votre service est-il adapté aux déplacements professionnels ?",
    "Oui, nos prestations s'adressent notamment aux dirigeants, entreprises, collaborateurs, clients et partenaires qui recherchent un transport exécutif.",
  ],
  [
    "Peut-on réserver un chauffeur à l'heure à Paris ?",
    "Oui, la mise à disposition permet de bénéficier d'un chauffeur et de son véhicule pendant la durée réservée, selon le programme défini.",
  ],
  [
    "Quels véhicules sont proposés ?",
    "Selon les disponibilités et les besoins de la prestation, nous proposons des véhicules de gamme premium tels que Mercedes-Maybach, Classe S, Range Rover, Classe E et Classe V.",
  ],
  [
    "Intervenez-vous uniquement dans Paris ?",
    "Non, nous intervenons à Paris, dans toute l'Île-de-France et pour des trajets longue distance sur réservation.",
  ],
];

export default function ChauffeurPriveParis() {
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

          <div className="hidden items-center gap-7 text-xs tracking-[0.2em] text-neutral-300 md:flex">
            <a href="/chauffeur-prive-paris" className="text-amber-400">
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

      {/* GRANDE BANNIÈRE PARIS */}
      <section className="relative isolate min-h-[650px] h-[82vh] max-h-[950px] w-full overflow-hidden">
        <Image
          src="/images/paris-seine-hero.png"
          alt="Mercedes Classe S devant la tour Eiffel et les quais de Seine à Paris"
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
              <span className="block text-amber-400">à Paris</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-100 md:text-xl">
              Découvrez Paris avec un service de transport exécutif
              haut de gamme. Transferts aéroports, gares, hôtels,
              rendez-vous professionnels et événements : nous organisons
              vos déplacements avec élégance, ponctualité et discrétion.
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

      {/* INTRODUCTION COMMERCIALE */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
            L'excellence au service de vos déplacements professionnels
          </p>

          <h2 className="mt-6 text-3xl font-light leading-tight md:text-5xl">
            Paris mérite un service de transport à la hauteur de son prestige
          </h2>

          <div className="mx-auto mt-9 max-w-4xl space-y-6 text-left text-lg leading-8 text-neutral-300">
            <p>
              Capitale internationale des affaires, de la culture, de la
              mode et du luxe, Paris accueille chaque jour des dirigeants,
              voyageurs, visiteurs, entreprises et personnalités venus du
              monde entier. Pour chacun de ces déplacements, la qualité
              de la prise en charge contribue pleinement à l'expérience.
            </p>

            <p>
              SUD IDF Executive Transport vous accompagne dans la capitale
              avec un service de chauffeur privé premium destiné aux
              particuliers comme aux professionnels. Que vous souhaitiez
              rejoindre un hôtel, un siège social, une gare, un aéroport,
              un lieu de réception ou un rendez-vous important, nous
              organisons votre transport selon votre programme.
            </p>

            <p>
              Notre approche repose sur la ponctualité, la discrétion,
              la présentation professionnelle et le confort à bord.
              Chaque réservation est préparée avec attention afin de
              vous permettre de profiter pleinement de votre trajet,
              sans vous préoccuper de l'organisation du déplacement.
            </p>

            <p>
              Depuis Paris, nous assurons également vos déplacements
              vers l'ensemble de l'Île-de-France et les destinations
              longue distance, sur réservation.
            </p>
          </div>
        </div>
      </section>

      {/* PARIS ET SES LIEUX EMBLÉMATIQUES */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
              Paris, ville d'exception
            </p>

            <h2 className="mt-5 text-3xl font-light md:text-5xl">
              Découvrez les lieux emblématiques de la capitale
            </h2>

            <p className="mt-7 text-lg leading-8 text-neutral-400">
              De la tour Eiffel à la Place Vendôme, des jardins historiques
              aux rives de la Seine, profitez d'un service de transport
              premium au cœur des quartiers les plus remarquables de Paris.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {parisPlaces.map((place) => (
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
        Nos prestations à Paris
      </p>

      <h2 className="mt-5 text-3xl font-light md:text-5xl">
        Un chauffeur privé pour chaque occasion
      </h2>

      <p className="mt-7 text-lg leading-8 text-neutral-400">
        Un déplacement ponctuel ou un programme sur plusieurs heures :
        nos prestations s'adaptent à vos besoins personnels et professionnels.
      </p>
    </div>

    <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Transferts aéroports",
          text: "Prise en charge pour vos départs et arrivées à Orly et Roissy Charles-de-Gaulle.",
          image: "/images/orly-accueil.png",
          href: "/transfert-orly",
        },
        {
          title: "Gares parisiennes",
          text: "Vos transferts depuis et vers les principales gares de Paris.",
          image: "/images/notre-dame-vue-seine.png",
          href: "/chauffeur-prive-gare",
        },
        {
          title: "Déplacements business",
          text: "Un service exécutif pour les dirigeants, collaborateurs, clients et partenaires.",
          image: "/images/mise-a-disposition-reunions.png",
          href: "/chauffeur-business",
        },
        {
          title: "Mise à disposition",
          text: "Un chauffeur dédié pour vos réunions, visites et programmes à plusieurs étapes.",
          image: "/images/mise-a-disposition-congres.png",
          href: "/chauffeur-prive-mise-a-disposition",
        },
        {
          title: "Événements et VIP",
          text: "Une prestation personnalisée pour vos réceptions, salons, congrès et événements de prestige.",
          image: "/images/mise-a-disposition-fashion-week.png",
          href: "/reservation",
        },
        {
          title: "Longue distance",
          text: "Des déplacements privés et professionnels au départ de Paris vers vos destinations.",
          image: "/images/cdg-range-rover.png",
          href: "/reservation",
        },
      ].map((service) => (
        <a
          key={service.title}
          href={service.href}
          className="group overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-amber-400/60"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title + " - SUD IDF Executive Transport"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-7">
            <h3 className="text-xl font-semibold text-amber-400">
              {service.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-400">
              {service.text}
            </p>

            <span className="mt-7 inline-block text-sm font-semibold text-amber-400">
              Découvrir →
            </span>
          </div>
        </a>
      ))}

    </div>
  </div>
</section>


      {/* CLIENTÈLE PROFESSIONNELLE */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
              Entreprises · Hôtels · Événements
            </p>

            <h2 className="mt-5 text-3xl font-light leading-tight md:text-4xl">
              Votre partenaire transport pour les déplacements professionnels
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-neutral-400">
              <p>
                SUD IDF Executive Transport accompagne les entreprises,
                établissements hôteliers, agences de voyages et organisateurs
                d'événements dans la gestion de leurs besoins de transport.
              </p>

              <p>
                Accueil de clients, transferts de dirigeants, déplacements
                entre plusieurs rendez-vous, séminaires, congrès, salons
                professionnels ou événements de prestige : nous mettons
                notre savoir-faire au service de votre organisation.
              </p>

              <p>
                Pour les professionnels recherchant un partenaire de
                transport fiable, nous étudions également les besoins
                réguliers et les prestations sur mesure.
              </p>
            </div>

            <a
              href="/contact"
              className="mt-9 inline-flex rounded-md border border-amber-400 px-8 py-4 text-sm font-semibold tracking-[0.12em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
            >
              DEMANDER UN PARTENARIAT
            </a>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-amber-500/20">
            <Image
              src="/images/place-vendome-flotte-sud-idf.png"
              alt="Véhicules premium SUD IDF Executive Transport à Paris"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FLOTTE */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
            Notre sélection de véhicules
          </p>

          <h2 className="mt-5 text-3xl font-light md:text-5xl">
            Le confort d'une flotte premium
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-400">
            Selon la disponibilité et la nature de votre prestation,
            nous proposons différentes catégories de véhicules pour
            répondre aux besoins des voyageurs individuels, des familles,
            des dirigeants et des professionnels.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {fleet.map((vehicle) => (
              <div
                key={vehicle}
                className="rounded-xl border border-amber-500/25 bg-neutral-950 px-5 py-7 text-center text-sm font-semibold tracking-wide text-amber-400"
              >
                {vehicle}
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm text-neutral-500">
            Les véhicules sont proposés selon disponibilité et confirmation
            lors de la réservation.
          </p>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-light text-amber-400 md:text-4xl">
            Paris et toute l'Île-de-France
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-neutral-400">
            Notre service de chauffeur privé intervient dans Paris,
            les départements franciliens, les aéroports et les principales
            destinations de la région. Nous assurons également les
            déplacements longue distance sur réservation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              ["Essonne", "/chauffeur-prive-essonne"],
              ["Corbeil-Essonnes", "/chauffeur-prive-corbeil-essonnes"],
              ["Évry-Courcouronnes", "/chauffeur-prive-evry"],
              ["Melun", "/chauffeur-prive-melun"],
              ["Fontainebleau", "/chauffeur-prive-fontainebleau"],
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
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-light text-amber-400 md:text-4xl">
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-amber-500/20 bg-neutral-950 p-6"
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

      {/* RÉSERVATION */}
      <section className="relative overflow-hidden px-6 py-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.13),transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.45em] text-amber-400">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h2 className="mt-7 text-3xl font-light leading-tight md:text-5xl">
            Paris, votre destination.
            <span className="block text-amber-400">
              Notre engagement, votre confort.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Confiez vos déplacements à un service de chauffeur privé
            premium. Organisons ensemble votre prochaine prestation
            à Paris et en Île-de-France.
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
              CONTACTER NOTRE ÉQUIPE
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
              <a href="/chauffeur-prive-mise-a-disposition" className="block hover:text-amber-400">Mise à disposition</a>
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
              <p>Corbeil-Essonnes · Paris · Île-de-France</p>
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
