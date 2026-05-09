import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chauffeur Aéroport CDG | Sud IDF Executive Transport",

  description:
    "Service de chauffeur premium vers l’aéroport Roissy Charles-de-Gaulle. Transport privé haut de gamme pour déplacements business et personnels.",

  keywords: [
    "chauffeur aéroport CDG",
    "VTC CDG",
    "chauffeur Roissy",
    "transfert Charles de Gaulle",
    "chauffeur privé CDG",
    "transport premium CDG",
    "VTC Roissy",
  ],
};

export default function ChauffeurAeroportCDG() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Chauffeur aéroport CDG
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service
          de chauffeur premium vers l’aéroport
          Roissy Charles-de-Gaulle.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous assurons vos transferts vers CDG
            depuis Paris, l’Essonne et toute
            l’Île-de-France avec ponctualité,
            discrétion et confort haut de gamme.
          </p>

          <p>
            Nos prestations sont adaptées
            aux voyageurs business,
            déplacements privés,
            transferts hôtels et trajets longue distance.
          </p>

          <p>
            Réservez votre chauffeur aéroport CDG
            afin de bénéficier d’un transport fiable,
            confortable et disponible sur réservation.
          </p>

        </div>

        {/* LIENS SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/chauffeur-prive-cdg"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé CDG
            </h2>

            <p className="text-gray-400">
              Service premium vers Roissy Charles-de-Gaulle.
            </p>
          </a>

          <a
            href="/transfert-cdg"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Transfert CDG
            </h2>

            <p className="text-gray-400">
              Transport haut de gamme vers l’aéroport CDG.
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
              Déplacements exécutifs pour entreprises.
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
              Réservation rapide de votre chauffeur premium.
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}