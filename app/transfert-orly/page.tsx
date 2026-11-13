
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Transfert Orly Chauffeur Privé | Sud IDF Executive Transport",
  description:
    "Service de chauffeur privé haut de gamme vers l'aéroport d'Orly depuis l’Essonne et toute l’Île-de-France.",
  keywords: [
    "transfert Orly",
    "chauffeur privé Orly",
    "VTC Orly",
    "transfert aéroport Orly",
    "chauffeur Orly Essonne",
    "transport premium Orly",
  ],
  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/transfert-orly",
  },
};

const prestations = [
  {
    titre: "Accueil personnalisé",
    description: "Accueil à l'aéroport avec pancarte nominative.",
    icon: "✦",
  },
  {
    titre: "Gestion des bagages",
    description: "Aide à la prise en charge et au chargement des bagages.",
    icon: "▣",
  },
  {
    titre: "Suivi des vols",
    description: "Suivi des horaires et adaptation en cas de retard.",
    icon: "◷",
  },
  {
    titre: "Confort et discrétion",
    description: "Véhicules haut de gamme et service professionnel.",
    icon: "◇",
  },
];

const destinations = [
  {
    titre: "Essonne",
    description: "Transferts depuis Orly vers les communes de l'Essonne.",
    href: "/chauffeur-prive-essonne",
    image: "/images/essonne-chauffeur.png",
    alt: "Véhicule de chauffeur privé en Essonne",
  },
  {
    titre: "Corbeil-Essonnes",
    description: "Votre liaison entre Orly et Corbeil-Essonnes.",
    href: "/chauffeur-prive-corbeil-essonnes",
    image: "/images/corbeil-essonnes-transfert-orly.png",
    alt: "Berline avec chauffeur pour un transfert entre Orly et Corbeil-Essonnes",
  },
  {
    titre: "Évry-Courcouronnes",
    description: "Transport privé entre l'aéroport et Évry.",
    href: "/chauffeur-prive-evry",
    image: "/images/evry-courcouronnes-hero-v2.png",
    alt: "Chauffeur privé à Évry-Courcouronnes",
  },
  {
    titre: "Melun",
    description: "Transferts aéroportuaires vers Melun et ses environs.",
    href: "/chauffeur-prive-melun",
    image: "/images/melun-seine-hero.png",
    alt: "Véhicule premium sur les bords de Seine à Melun",
  },
  {
    titre: "Fontainebleau",
    description: "Votre chauffeur privé entre Orly et Fontainebleau.",
    href: "/chauffeur-prive-fontainebleau",
    image: "/images/fontainebleau-chateau-hero.png",
    alt: "Chauffeur privé devant le château de Fontainebleau",
  },
  {
    titre: "Paris",
    description: "Transferts privés entre Orly et la capitale.",
    href: "/chauffeur-prive-paris",
    image: "/images/paris-seine-hero.png",
    alt: "Berline avec chauffeur dans Paris",
  },
];

const autresServices = [
  {
    titre: "Transfert CDG",
    description: "Service premium vers Roissy Charles-de-Gaulle.",
    href: "/transfert-cdg",
    image: "/images/cdg-hero-premium.png",
    alt: "Véhicule premium pour un transfert vers CDG",
  },
  {
    titre: "Chauffeur privé Essonne",
    description: "Chauffeur privé premium dans toute l’Essonne.",
    href: "/chauffeur-prive-essonne",
    image: "/images/essonne-hero.png",
    alt: "Véhicule de chauffeur privé en Essonne",
  },
  {
    titre: "Chauffeur business",
    description: "Transport exécutif pour professionnels et entreprises.",
    href: "/chauffeur-business",
    image: "/images/mise-a-disposition-congres.png",
    alt: "Transport exécutif pour un événement professionnel",
  },
  {
    titre: "Réserver un chauffeur",
    description: "Réservation rapide de votre transfert Orly premium.",
    href: "/reservation",
    image: "/images/orly-accueil.png",
    alt: "Accueil d'un voyageur par un chauffeur privé à l'aéroport",
  },
];

export default function TransfertOrly() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <Image
          src="/images/orly-hero.png"
          alt="Mercedes noire de chauffeur privé devant un terminal aéroportuaire"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
          <p className="text-amber-400 tracking-[0.45em] uppercase text-sm mb-6">
            Transfert aéroport
          </p>

          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight mb-8">
            Transfert Orly
            <span className="block text-amber-400">
              en chauffeur privé
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-10">
            Un service de transport haut de gamme vers l’aéroport
            d’Orly depuis l’Essonne, Paris et toute l’Île-de-France.
            Voyagez dans le confort, la sérénité et la discrétion.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/reservation"
              className="inline-block bg-amber-400 text-black font-bold px-8 py-4 rounded-full hover:bg-amber-300 transition"
            >
              Réserver mon transfert
            </a>

            <a
              href="/transfert-cdg"
              className="inline-block border border-amber-400 text-amber-400 font-bold px-8 py-4 rounded-full hover:bg-amber-400 hover:text-black transition"
            >
              Voir le transfert CDG
            </a>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {prestations.map((item) => (
            <div
              key={item.titre}
              className="border border-amber-500/40 rounded-2xl p-6 bg-neutral-950"
            >
              <div className="text-amber-400 text-3xl mb-4">
                {item.icon}
              </div>
              <h2 className="font-semibold text-lg mb-2">
                {item.titre}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">
            SUD IDF Executive Transport
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Votre transfert vers
            <span className="block text-amber-400">
              l’aéroport d’Orly
            </span>
          </h2>

          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              Sud IDF Executive Transport propose un service premium
              de transfert vers l’aéroport d’Orly pour les particuliers,
              entreprises, dirigeants et voyageurs exigeants.
            </p>

            <p>
              Nous assurons vos trajets vers Orly depuis
              Évry-Courcouronnes, Corbeil-Essonnes, Melun, Sénart,
              Fontainebleau, Paris et toute l’Île-de-France.
            </p>

            <p>
              Nos chauffeurs privés garantissent ponctualité,
              discrétion, sécurité et confort haut de gamme pour
              tous vos transferts aéroportuaires.
            </p>

            <p>
              Notre service est disponible 24h/24 pour les départs,
              arrivées, déplacements business et voyages privés.
            </p>
          </div>

          <ul className="mt-8 space-y-4 text-gray-300">
            {[
              "Accueil à l’arrivée avec pancarte nominative",
              "Aide aux bagages et accompagnement jusqu’au véhicule",
              "Suivi des vols et adaptation en cas de retard",
              "Eau, WiFi et chargeurs à bord selon équipement disponible",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-amber-400">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <div className="relative h-[280px] md:h-[340px] overflow-hidden rounded-2xl border border-amber-500/50">
            <Image
              src="/images/orly-accueil.png"
              alt="Accueil personnalisé d'un voyageur par un chauffeur privé"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-[280px] md:h-[340px] overflow-hidden rounded-2xl border border-amber-500/50">
            <Image
              src="/images/vehicule-interieur.png"
              alt="Intérieur spacieux et sièges en cuir beige d'un véhicule de transport haut de gamme"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* DESTINATIONS DESSERVIES DEPUIS ORLY */}
      <section className="border-t border-amber-500/20 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-amber-400 text-center uppercase tracking-[0.35em] text-sm mb-4">
            Nos destinations
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Votre chauffeur privé depuis Orly
          </h2>

          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Depuis l'aéroport de Paris-Orly, SUD IDF Executive Transport
            assure vos déplacements vers les principales villes de
            l'Essonne, de la Seine-et-Marne, Paris et toute l'Île-de-France.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((destination) => (
              <a
                key={destination.titre}
                href={destination.href}
                className="group overflow-hidden rounded-2xl border border-amber-500/30 bg-neutral-950 hover:border-amber-400 transition"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-amber-400 text-lg font-semibold mb-2">
                    {destination.titre}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {destination.description}
                  </p>
                  <span className="mt-4 inline-block text-sm text-amber-400 font-semibold">
                    Découvrir →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAILLAGE SEO EXISTANT */}
      <section className="border-t border-amber-500/20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Découvrez nos autres services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {autresServices.map((service) => (
              <a
                key={service.titre}
                href={service.href}
                className="group overflow-hidden rounded-2xl border border-amber-500/40 bg-black hover:border-amber-400 transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg text-amber-400 mb-3 font-semibold">
                    {service.titre}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-block text-sm text-amber-400 font-semibold">
                    Découvrir →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-center bg-black border-t border-amber-500/30">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Préparez votre prochain transfert Orly
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Faites confiance à SUD IDF Executive Transport pour
          vos déplacements aéroportuaires dans un cadre confortable
          et professionnel.
        </p>
        <a
          href="/reservation"
          className="inline-block bg-amber-400 text-black font-bold px-10 py-4 rounded-full hover:bg-amber-300 transition"
        >
          Réserver maintenant
        </a>
      </section>
    </main>
  );
}
