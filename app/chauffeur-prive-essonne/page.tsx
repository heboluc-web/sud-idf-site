import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé en Essonne | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé haut de gamme en Essonne et en Île-de-France. Transferts Orly, CDG, déplacements business et transport premium 24h/24.",

  keywords: [
    "chauffeur privé Essonne",
    "VTC Essonne",
    "chauffeur privé Corbeil-Essonnes",
    "transfert Orly Essonne",
    "transfert CDG Essonne",
    "chauffeur business Essonne",
    "transport premium Essonne",
  ],
};

export default function ChauffeurPriveEssonne() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Chauffeur privé en Essonne
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service de chauffeur privé
          premium en Essonne pour tous vos déplacements personnels,
          professionnels et événements privés.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous assurons vos trajets vers Orly, Roissy Charles-de-Gaulle,
            Paris, gares et rendez-vous professionnels avec ponctualité,
            discrétion et confort.
          </p>

          <p>
            Nos chauffeurs privés interviennent notamment à
            Corbeil-Essonnes, Évry-Courcouronnes, Melun,
            Fontainebleau et dans toute l’Île-de-France.
          </p>

          <p>
            Notre service premium est adapté aux particuliers,
            entreprises, dirigeants, hôtels, événements et déplacements VIP.
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
              Réservez un chauffeur privé premium vers l’aéroport d’Orly.
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
              Service haut de gamme vers Roissy Charles-de-Gaulle.
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