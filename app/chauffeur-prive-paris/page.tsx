import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé Paris | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé premium à Paris et en Île-de-France. Transferts Orly, CDG, déplacements business et transport haut de gamme.",

  keywords: [
    "chauffeur privé Paris",
    "VTC Paris",
    "chauffeur premium Paris",
    "transfert Orly Paris",
    "transfert CDG Paris",
    "chauffeur business Paris",
    "transport VIP Paris",
  ],
};

export default function ChauffeurPriveParis() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Chauffeur privé à Paris
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service de chauffeur privé
          premium à Paris pour tous vos déplacements personnels,
          professionnels et événements privés.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous assurons vos trajets vers Orly, Roissy Charles-de-Gaulle,
            gares parisiennes, hôtels, rendez-vous business et événements
            avec ponctualité, discrétion et confort haut de gamme.
          </p>

          <p>
            Notre service de transport premium est adapté aux particuliers,
            entreprises, dirigeants, hôtels et déplacements VIP
            dans tout Paris et l’Île-de-France.
          </p>

          <p>
            Réservez facilement votre chauffeur privé premium
            pour vos déplacements longue distance,
            transferts aéroports et transport exécutif.
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
              Chauffeur privé premium vers l’aéroport d’Orly.
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