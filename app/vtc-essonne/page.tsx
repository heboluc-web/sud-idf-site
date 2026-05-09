import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "VTC Essonne | Sud IDF Executive Transport",

  description:
    "Service VTC premium en Essonne. Chauffeur privé haut de gamme pour transferts aéroports, déplacements business et transport longue distance.",

  keywords: [
    "VTC Essonne",
    "chauffeur privé Essonne",
    "transport premium Essonne",
    "VTC 91",
    "chauffeur business Essonne",
    "transfert Orly Essonne",
    "transfert CDG Essonne",
  ],
};

export default function VTCEssonne() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          VTC Essonne
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service VTC premium
          dans toute l’Essonne pour vos déplacements privés,
          professionnels et transferts aéroports.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous assurons vos trajets depuis Évry,
            Corbeil-Essonnes, Massy,
            Sainte-Geneviève-des-Bois et tout le département.
          </p>

          <p>
            Nos chauffeurs privés premium vous accompagnent
            vers Orly, Roissy Charles-de-Gaulle,
            gares parisiennes, hôtels et rendez-vous business.
          </p>

          <p>
            Réservez votre VTC en Essonne
            pour bénéficier d’un transport fiable,
            confortable et disponible sur réservation.
          </p>

        </div>

        {/* LIENS SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/chauffeur-prive-essonne"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé Essonne
            </h2>

            <p className="text-gray-400">
              Service premium dans tout le département.
            </p>
          </a>

          <a
            href="/chauffeur-prive-evry"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé Évry
            </h2>

            <p className="text-gray-400">
              Déplacements premium à Évry et alentours.
            </p>
          </a>

          <a
            href="/transfert-orly"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Transfert Orly
            </h2>

            <p className="text-gray-400">
              Chauffeur privé premium vers Orly.
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
              Réservation rapide de votre VTC premium.
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}