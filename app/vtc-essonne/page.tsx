import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "VTC Essonne | Chauffeur VTC Premium dans le 91 | Sud IDF Executive Transport",

  description:
    "VTC Essonne premium pour particuliers, entreprises et professionnels. Chauffeur VTC dans le 91 pour Orly, CDG, Paris et vos déplacements en Île-de-France.",

  keywords: [
    "VTC Essonne",
    "VTC 91",
    "chauffeur VTC Essonne",
    "chauffeur privé Essonne",
    "VTC premium Essonne",
    "VTC entreprise Essonne",
    "VTC Évry",
    "VTC Corbeil-Essonnes",
    "VTC Massy",
    "VTC Sainte-Geneviève-des-Bois",
    "VTC Orly Essonne",
    "VTC CDG Essonne",
  ],

  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/vtc-essonne",
  },
};

const services = [
  {
    title: "Déplacements privés",
    description:
      "Un chauffeur VTC pour vos déplacements personnels dans l’Essonne et vers vos destinations en Île-de-France.",
    image: "/images/essonne-hero.png",
    alt: "Véhicule de chauffeur privé pour les déplacements en Essonne",
    href: "/chauffeur-prive-essonne",
    link: "Découvrir le service",
  },
  {
    title: "Transport professionnel",
    description:
      "Une solution de transport exécutif pour les dirigeants, entreprises, rendez-vous et déplacements d’affaires.",
    image: "/images/mise-a-disposition-congres.png",
    alt: "Transport exécutif pour un événement professionnel",
    href: "/chauffeur-business",
    link: "Découvrir le service",
  },
  {
    title: "Transferts aéroports",
    description:
      "Organisez vos transferts entre l’Essonne, Paris-Orly et Paris-Charles-de-Gaulle.",
    image: "/images/cdg-hero-premium.png",
    alt: "Véhicule premium pour un transfert vers un aéroport parisien",
    href: "/transfert-orly",
    link: "Organiser mon transfert",
  },
  {
    title: "Déplacements vers Paris",
    description:
      "Rejoignez Paris et ses principaux quartiers avec une prise en charge organisée sur réservation.",
    image: "/images/paris-seine-hero.png",
    alt: "Berline avec chauffeur dans Paris",
    href: "/chauffeur-prive-paris",
    link: "Découvrir le service",
  },
  {
    title: "Corbeil-Essonnes et Évry",
    description:
      "Un service de chauffeur privé au départ ou à destination des principales villes de l’Essonne.",
    image: "/images/corbeil-essonnes-business.png",
    alt: "Transport avec chauffeur dans le secteur de Corbeil-Essonnes",
    href: "/chauffeur-prive-corbeil-essonnes",
    link: "Voir les destinations",
  },
  {
    title: "Confort et service VIP",
    description:
      "Une prestation soignée pour vos déplacements nécessitant confort, discrétion et attention.",
    image: "/images/place-vendome-flotte-sud-idf.png",
    alt: "Flotte de véhicules haut de gamme SUD IDF Executive Transport",
    href: "/transport-vip",
    link: "Découvrir le service VIP",
  },
];

const avantages = [
  "Prise en charge organisée sur réservation",
  "Ponctualité, discrétion et professionnalisme",
  "Transferts vers Orly, CDG, Paris et les gares",
  "Prestations adaptées aux particuliers et aux professionnels",
  "Confort à bord et attention portée à chaque trajet",
  "Accompagnement des déplacements privés et professionnels",
];

const liensSeo = [
  {
    title: "Chauffeur privé Essonne",
    description:
      "Découvrez notre service de chauffeur privé premium dans tout le département de l’Essonne.",
    href: "/chauffeur-prive-essonne",
    image: "/images/essonne-hero.png",
    alt: "Véhicule de chauffeur privé en Essonne",
  },
  {
    title: "Chauffeur privé Évry",
    description:
      "Chauffeur privé premium pour vos déplacements à Évry-Courcouronnes et ses alentours.",
    href: "/chauffeur-prive-evry",
    image: "/images/evry-courcouronnes-hero-v2.png",
    alt: "Chauffeur privé à Évry-Courcouronnes",
  },
  {
    title: "Chauffeur privé Corbeil-Essonnes",
    description:
      "Service de chauffeur privé premium au départ ou à destination de Corbeil-Essonnes.",
    href: "/chauffeur-prive-corbeil-essonnes",
    image: "/images/corbeil-essonnes-transfert-orly.png",
    alt: "Berline avec chauffeur à Corbeil-Essonnes",
  },
  {
    title: "Transfert Orly",
    description:
      "Chauffeur VTC premium pour vos transferts entre l’Essonne et l’aéroport Paris-Orly.",
    href: "/transfert-orly",
    image: "/images/orly-hero.png",
    alt: "Véhicule premium pour un transfert vers Orly",
  },
  {
    title: "Transfert CDG",
    description:
      "Service de transport premium entre l’Essonne et l’aéroport Paris-Charles-de-Gaulle.",
    href: "/transfert-cdg",
    image: "/images/cdg-hero.png",
    alt: "Véhicule premium pour un transfert vers CDG",
  },
  {
    title: "Chauffeur business",
    description:
      "Transport exécutif pour entreprises, dirigeants et professionnels.",
    href: "/chauffeur-business",
    image: "/images/mise-a-disposition-congres.png",
    alt: "Transport exécutif pour les professionnels",
  },
  {
    title: "Réserver un VTC",
    description:
      "Effectuez votre demande de réservation pour votre déplacement en Essonne ou vers une autre destination.",
    href: "/reservation",
    image: "/images/place-vendome-flotte-sud-idf.png",
    alt: "Flotte de véhicules SUD IDF Executive Transport",
  },
];

export default function VTCEssonne() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* BANNIERE PRINCIPALE */}
      <section className="relative min-h-[570px] md:min-h-[650px] flex items-center overflow-hidden">
        <Image
          src="/images/essonne-hero.png"
          alt="Véhicule de chauffeur privé premium en Essonne"
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
            VTC Essonne
            <span className="block text-amber-400">
              Chauffeur premium dans le 91
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl leading-8 max-w-2xl mb-9">
            Sud IDF Executive Transport propose un service VTC premium dans
            toute l’Essonne pour vos déplacements privés, professionnels et
            transferts vers les principaux pôles de transport d’Île-de-France.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/reservation"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition duration-300"
            >
              Réserver mon chauffeur
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

      {/* PRESENTATION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Votre service VTC dans le 91
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-7">
            VTC premium dans l’Essonne pour vos déplacements
          </h2>

          <div className="space-y-5 text-gray-300 text-lg leading-8">
            <p>
              Sud IDF Executive Transport propose un service VTC premium dans
              toute l’Essonne pour vos déplacements privés, professionnels et
              transferts vers les principaux pôles de transport d’Île-de-France.
            </p>
            <p>
              Nous assurons vos trajets au départ ou à destination d’Évry,
              Corbeil-Essonnes, Massy, Sainte-Geneviève-des-Bois et des
              différentes communes de l’Essonne, sur réservation.
            </p>
            <p>
              Notre service VTC s’adresse aussi bien aux particuliers qu’aux
              entreprises et aux professionnels ayant besoin d’un transport
              fiable et confortable dans le 91 et vers Paris.
            </p>
            <p>
              Nous pouvons notamment organiser vos déplacements vers
              l’aéroport Paris-Orly, l’aéroport Paris-Charles-de-Gaulle,
              les gares parisiennes, les hôtels, les lieux de rendez-vous
              professionnels et différentes destinations en Île-de-France.
            </p>
            <p>
              Pour les entreprises et les professionnels, notre service peut
              accompagner les rendez-vous d’affaires, déplacements de dirigeants,
              transferts entre hôtels et lieux professionnels ainsi que les
              déplacements de clients ou collaborateurs.
            </p>
            <p>
              Chaque prise en charge est organisée sur réservation afin de
              préparer votre trajet selon votre horaire, votre lieu de départ
              et votre destination.
            </p>
            <p>
              Réservez votre VTC en Essonne auprès de Sud IDF Executive
              Transport pour bénéficier d’un service premium, confortable et
              discret pour vos déplacements dans le 91 et en Île-de-France.
            </p>
          </div>
        </div>
      </section>

      {/* CARTES DE PRESTATIONS */}
      <section className="bg-neutral-950 border-y border-amber-500/20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Nos prestations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Nos services de chauffeur VTC en Essonne
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-7">
              Des solutions de transport adaptées à vos déplacements privés,
              professionnels et aéroportuaires dans le 91 et en Île-de-France.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group block bg-black border border-amber-500/25 rounded-2xl overflow-hidden hover:border-amber-400 hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[350px] md:min-h-[470px] rounded-2xl overflow-hidden border border-amber-500/30">
            <Image
              src="/images/place-vendome-flotte-sud-idf.png"
              alt="Flotte de véhicules haut de gamme SUD IDF Executive Transport"
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
              Les avantages de votre chauffeur VTC en Essonne
            </h2>
            <p className="text-gray-300 leading-8 mb-7">
              Notre engagement repose sur la qualité de l’accueil, le confort
              à bord et le sérieux de chaque prestation. Nous préparons votre
              prise en charge selon les informations communiquées lors de la
              réservation.
            </p>
            <ul className="space-y-5 text-gray-300">
              {avantages.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MAILLAGE SEO EXISTANT */}
      <section className="bg-neutral-950 border-y border-amber-500/20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Nos destinations et prestations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Découvrez nos services en Essonne et en Île-de-France
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {liensSeo.map((lien) => (
              <a
                key={lien.href}
                href={lien.href}
                className="group block border border-amber-500/30 rounded-2xl overflow-hidden hover:border-amber-400 transition bg-black"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={lien.image}
                    alt={lien.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-amber-400 mb-3 font-semibold">
                    {lien.title}
                  </h3>
                  <p className="text-gray-400 leading-7">{lien.description}</p>
                  <span className="mt-4 inline-block text-sm text-amber-400 font-semibold">
                    Découvrir →
                  </span>
                </div>
              </a>
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
            Réservez votre VTC en Essonne
          </h2>
          <p className="text-gray-400 text-lg leading-8 mb-9">
            Confiez vos déplacements privés et professionnels à un service
            de chauffeur VTC premium dans le 91 et en Île-de-France.
          </p>
          <a
            href="/reservation"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 rounded-lg transition duration-300"
          >
            Réserver mon VTC
          </a>
        </div>
      </section>
    

      <section aria-label="Nos services VTC dans les villes voisines" className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">SUD IDF Executive Transport</p>
          <h2 className="mx-auto mb-5 max-w-3xl text-center text-2xl font-semibold text-white md:text-3xl">Nos services VTC dans les villes voisines</h2>
          <p className="mx-auto mb-9 max-w-3xl text-center text-sm leading-7 text-zinc-300 md:text-base">Retrouvez nos pages dédiées aux principales villes desservies et aux trajets depuis l’Essonne.</p>
          <nav aria-label="Liens vers nos autres services" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/chauffeur-prive-essonne" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé en Essonne</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-corbeil-essonnes" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé à Corbeil-Essonnes</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-evry" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé à Évry</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-prive-melun" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur privé à Melun</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transfert-orly" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transfert Orly</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
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
