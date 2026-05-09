import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Transport VIP | Sud IDF Executive Transport",

  description:
    "Service de transport VIP premium en Île-de-France. Chauffeur privé haut de gamme pour déplacements business, événements et transferts aéroports.",

  keywords: [
    "transport VIP",
    "chauffeur VIP",
    "transport premium",
    "chauffeur privé premium",
    "transport haut de gamme",
    "chauffeur business",
    "VTC luxe",
  ],
};

export default function TransportVIP() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Transport VIP
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service
          de transport VIP premium pour tous vos déplacements
          privés et professionnels en Île-de-France.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nos chauffeurs privés assurent vos trajets
            avec discrétion, ponctualité et confort haut de gamme
            pour une expérience de transport premium.
          </p>

          <p>
            Nous accompagnons les entreprises,
            dirigeants, hôtels, événements privés,
            rendez-vous business et transferts aéroports.
          </p>

          <p>
            Réservez votre transport VIP
            pour bénéficier d’un service fiable,
            élégant et disponible sur réservation.
          </p>

        </div>

        {/* LIENS SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/chauffeur-business"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur business
            </h2>

            <p className="text-gray-400">
              Transport exécutif pour professionnels.
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

        <div className="mt-16 grid md:grid-cols-3 gap-6">

          <a
            href="/chauffeur-business"
            className="border border-amber-500/20 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur business
            </h2>

            <p className="text-gray-400">
              Service exécutif pour professionnels et entreprises.
            </p>
          </a>

          <a
            href="/chauffeur-prive-paris"
            className="border border-amber-500/20 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé Paris
            </h2>

            <p className="text-gray-400">
              Transport premium à Paris et Île-de-France.
            </p>
          </a>

          <a
            href="/chauffeur-aeroport-cdg"
            className="border border-amber-500/20 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur aéroport CDG
            </h2>

            <p className="text-gray-400">
              Transfert premium vers Roissy Charles-de-Gaulle.
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}