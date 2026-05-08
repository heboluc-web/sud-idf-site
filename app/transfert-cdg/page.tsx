import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Transfert CDG Chauffeur Privé | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé haut de gamme vers l'aéroport Charles-de-Gaulle depuis l’Essonne et toute l’Île-de-France.",

  keywords: [
    "transfert CDG",
    "chauffeur privé CDG",
    "VTC Roissy",
    "transfert Roissy Charles-de-Gaulle",
    "chauffeur aéroport CDG",
    "transport premium CDG",
  ],
};

export default function TransfertCDG() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Transfert CDG en chauffeur privé
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service premium de transfert
          vers l’aéroport Charles-de-Gaulle pour particuliers,
          entreprises et voyageurs exigeants.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous assurons vos trajets vers Roissy Charles-de-Gaulle depuis
            Corbeil-Essonnes, Évry-Courcouronnes, Melun,
            Fontainebleau, Paris et toute l’Île-de-France.
          </p>

          <p>
            Nos chauffeurs privés garantissent ponctualité,
            discrétion, sécurité et confort haut de gamme
            pour tous vos transferts aéroports.
          </p>

          <p>
            Notre service premium est disponible 24h/24 pour
            les départs, arrivées, voyages business et déplacements privés.
          </p>

        </div>

        {/* MAILLAGE SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/transfert-orly"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Transfert Orly
            </h2>

            <p className="text-gray-400">
              Chauffeur privé premium vers l’aéroport d’Orly.
            </p>
          </a>

          <a
            href="/chauffeur-prive-essonne"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé Essonne
            </h2>

            <p className="text-gray-400">
              Service premium dans toute l’Essonne.
            </p>
          </a>

          <a
            href="/mise-a-disposition"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Mise à disposition
            </h2>

            <p className="text-gray-400">
              Véhicule avec chauffeur pour vos déplacements longue durée.
            </p>
          </a>

          <a
            href="/reservation"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Réserver un chauffeur
            </h2>

            <p className="text-gray-400">
              Réservez rapidement votre transfert premium vers CDG.
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}