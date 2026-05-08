import type { Metadata } from "next";

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
};

export default function TransfertOrly() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Transfert Orly en chauffeur privé
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service premium de transfert
          vers l’aéroport d’Orly pour les particuliers, entreprises,
          dirigeants et voyageurs exigeants.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous assurons vos trajets vers Orly depuis Évry-Courcouronnes,
            Corbeil-Essonnes, Melun, Sénart, Fontainebleau,
            Paris et toute l’Île-de-France.
          </p>

          <p>
            Nos chauffeurs privés garantissent ponctualité,
            discrétion, sécurité et confort haut de gamme pour
            tous vos transferts aéroports.
          </p>

          <p>
            Notre service est disponible 24h/24 pour les départs,
            arrivées, déplacements business et voyages privés.
          </p>

        </div>

        {/* MAILLAGE SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/transfert-cdg"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Transfert CDG
            </h2>

            <p className="text-gray-400">
              Service premium vers Roissy Charles-de-Gaulle.
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
              Chauffeur privé premium dans toute l’Essonne.
            </p>
          </a>

          <a
            href="/chauffeur-business"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
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
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Réserver un chauffeur
            </h2>

            <p className="text-gray-400">
              Réservation rapide de votre transfert Orly premium.
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}