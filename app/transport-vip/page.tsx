import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transport VIP | Sud IDF Executive Transport",

  description:
    "Transport VIP premium en Île-de-France pour entreprises, dirigeants, hôtels et événements. Chauffeur privé haut de gamme sur réservation.",

  keywords: [
    "transport VIP",
    "chauffeur VIP",
    "transport premium",
    "chauffeur privé premium",
    "transport haut de gamme",
    "chauffeur business",
    "VTC luxe",
    "chauffeur privé haut de gamme",
    "transport VIP Île-de-France",
    "chauffeur VIP Paris",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/transport-vip",
  },
};

export default function TransportVIP() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Transport VIP
        </h1>

        <h2 className="text-2xl md:text-3xl text-amber-400 font-semibold mb-6">
          Transport VIP et chauffeur privé haut de gamme en Île-de-France
        </h2>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service de transport VIP
          premium pour vos déplacements privés et professionnels en
          Île-de-France, avec une prise en charge organisée sur réservation.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Notre service de chauffeur privé s’adresse aux particuliers comme
            aux entreprises recherchant un transport haut de gamme, avec une
            attention particulière portée au confort, à la ponctualité et à
            la discrétion.
          </p>

          <p>
            Nous accompagnons notamment les dirigeants, cadres et
            professionnels dans leurs déplacements business, ainsi que les
            hôtels, agences et organisateurs d’événements qui souhaitent
            proposer une solution de transport premium à leurs clients et
            invités.
          </p>

          <p>
            Le transport VIP peut être organisé pour des transferts vers ou
            depuis les aéroports, des rendez-vous professionnels, des
            événements privés, des séminaires ou différents déplacements en
            Île-de-France.
          </p>

          <p>
            Chaque trajet est préparé en fonction de vos besoins afin de
            garantir une expérience confortable et professionnelle. Notre
            objectif est de vous permettre de voyager dans un cadre élégant,
            discret et serein.
          </p>

          <p>
            Réservez votre transport VIP auprès de Sud IDF Executive
            Transport pour bénéficier d’un chauffeur privé premium disponible
            sur réservation.
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
              Transport exécutif adapté aux entreprises, dirigeants et
              déplacements professionnels.
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
              Service de chauffeur privé premium à Paris et en Île-de-France.
            </p>
          </a>

          <a
            href="/chauffeur-aeroport-cdg"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur aéroport CDG
            </h2>

            <p className="text-gray-400">
              Transfert premium vers ou depuis l’aéroport Paris-Charles-de-
              Gaulle.
            </p>
          </a>

          <a
            href="/chauffeur-aeroport-orly"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur aéroport Orly
            </h2>

            <p className="text-gray-400">
              Chauffeur privé premium pour vos transferts vers ou depuis
              l’aéroport Paris-Orly.
            </p>
          </a>

          <a
            href="/reservation"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950 md:col-span-2"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Réserver un chauffeur
            </h2>

            <p className="text-gray-400">
              Effectuez votre demande de réservation pour votre transport
              VIP ou votre déplacement professionnel.
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}