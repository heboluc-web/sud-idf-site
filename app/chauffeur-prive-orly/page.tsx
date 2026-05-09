import type { Metadata } from "next";

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
};

export default function ChauffeurPriveOrly() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Chauffeur privé Orly
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service de
          chauffeur privé premium vers l’aéroport d’Orly
          pour vos déplacements personnels et professionnels.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous assurons vos transferts vers Orly avec ponctualité,
            discrétion et confort haut de gamme depuis Paris,
            l’Essonne et toute l’Île-de-France.
          </p>

          <p>
            Nos prestations de transport premium sont adaptées
            aux voyageurs business, déplacements privés,
            transferts hôtels, gares et voyages longue distance.
          </p>

          <p>
            Réservez votre chauffeur privé pour Orly
            afin de bénéficier d’un service fiable,
            confortable et disponible sur réservation.
          </p>

        </div>

        {/* LIENS SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/transfert-orly"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Transfert Orly
            </h2>

            <p className="text-gray-400">
              Service premium de transfert vers l’aéroport d’Orly.
            </p>
          </a>

          <a
            href="/chauffeur-prive-paris"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé Paris
            </h2>

            <p className="text-gray-400">
              Déplacements premium à Paris et en Île-de-France.
            </p>
          </a>

          <a
            href="/chauffeur-business"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur business
            </h2>

            <p className="text-gray-400">
              Transport exécutif pour professionnels et entreprises.
            </p>
          </a>

          <a
            href="/reservation"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Réserver un chauffeur
            </h2>

            <p className="text-gray-400">
              Réservation rapide de votre chauffeur privé premium.
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}