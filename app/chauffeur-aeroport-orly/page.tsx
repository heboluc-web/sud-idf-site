import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chauffeur Aéroport Orly | Sud IDF Executive Transport",

  description:
    "Chauffeur premium vers l’aéroport d’Orly. Service VTC haut de gamme pour transferts privés, professionnels et déplacements longue distance.",

  keywords: [
    "chauffeur aéroport Orly",
    "VTC Orly",
    "chauffeur Orly",
    "transfert aéroport Orly",
    "chauffeur privé Orly",
    "transport premium Orly",
    "VTC aéroport",
  ],
};

export default function ChauffeurAeroportOrly() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Chauffeur aéroport Orly
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport assure vos transferts
          vers l’aéroport d’Orly avec un service premium,
          ponctuel et confortable.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nos chauffeurs privés prennent en charge
            vos déplacements vers Orly depuis Paris,
            l’Essonne et toute l’Île-de-France.
          </p>

          <p>
            Nous proposons un transport haut de gamme
            adapté aux voyageurs business,
            transferts hôtels, déplacements privés
            et trajets longue distance.
          </p>

          <p>
            Réservez facilement votre chauffeur aéroport Orly
            pour bénéficier d’un service fiable,
            discret et disponible sur réservation.
          </p>

        </div>

        {/* LIENS SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/chauffeur-prive-orly"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé Orly
            </h2>

            <p className="text-gray-400">
              Service premium vers l’aéroport d’Orly.
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
              Transport haut de gamme vers Orly.
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
              Déplacements exécutifs et professionnels.
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