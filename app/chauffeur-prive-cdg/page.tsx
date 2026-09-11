import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé CDG | Sud IDF Executive Transport",

  description:
    "Chauffeur privé CDG premium : transferts depuis Paris, Essonne et Île-de-France pour entreprises, hôtels, agences de voyages et voyageurs.",

  keywords: [
    "chauffeur privé CDG",
    "VTC CDG",
    "transfert CDG",
    "chauffeur Roissy",
    "chauffeur aéroport CDG",
    "transport premium CDG",
    "VTC Roissy Charles de Gaulle",
  ],

  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/chauffeur-prive-cdg",
  },
};

export default function ChauffeurPriveCDG() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Chauffeur privé CDG
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Chauffeur privé pour vos transferts à l’aéroport CDG
        </h2>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport assure vos transferts en
          chauffeur privé vers et depuis l’aéroport Paris-CDG,
          au départ de Paris, de l’Essonne et de toute l’Île-de-France.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous proposons un transport premium vers Roissy-Charles-de-Gaulle
            pour les déplacements professionnels, les voyages privés et les
            transferts depuis ou vers les hôtels et les gares.
          </p>

          <p>
            Ponctualité, confort et discrétion sont au cœur de chaque trajet,
            avec une prise en charge sur réservation.
          </p>

          <p>
            La prise en charge peut être organisée au départ ou à l’arrivée
            de l’aéroport Paris-Charles-de-Gaulle, avec un service adapté
            aux voyageurs individuels comme aux déplacements professionnels.
          </p>

        </div>

        {/* LIENS SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/transfert-cdg"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Transfert CDG
            </h2>

            <p className="text-gray-400">
              Service premium vers Roissy Charles-de-Gaulle.
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
              Transport exécutif pour entreprises et professionnels.
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