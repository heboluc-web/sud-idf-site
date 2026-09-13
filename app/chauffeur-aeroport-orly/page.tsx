import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chauffeur Aéroport Orly | Sud IDF Executive Transport",

  description:
    "Chauffeur aéroport Orly premium depuis Paris, l’Essonne et l’Île-de-France. Transferts privés et professionnels vers Orly sur réservation.",

  keywords: [
    "chauffeur aéroport Orly",
    "VTC Orly",
    "chauffeur Orly",
    "transfert aéroport Orly",
    "chauffeur privé Orly",
    "transport premium Orly",
    "VTC aéroport Orly",
    "chauffeur aéroport Paris Orly",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-aeroport-orly",
  },
};

export default function ChauffeurAeroportOrly() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Chauffeur aéroport Orly
        </h1>

        <h2 className="text-2xl md:text-3xl text-amber-400 font-semibold mb-6">
          Chauffeur privé pour vos transferts vers l’aéroport d’Orly
        </h2>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport assure vos transferts vers et depuis
          l’aéroport Paris-Orly avec un service de chauffeur privé premium,
          ponctuel et confortable.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous organisons vos déplacements vers l’aéroport d’Orly depuis
            Paris, l’Essonne et toute l’Île-de-France. La prise en charge est
            effectuée sur réservation afin de vous proposer un transport
            adapté à votre horaire et à votre destination.
          </p>

          <p>
            Notre service s’adresse aussi bien aux voyageurs privés qu’aux
            entreprises et aux professionnels. Nous assurons notamment les
            transferts entre l’aéroport, les hôtels, les lieux de rendez-vous
            professionnels et les différentes destinations en Île-de-France.
          </p>

          <p>
            Pour les déplacements business, nous privilégions la ponctualité,
            la discrétion et le confort. Chaque trajet est organisé avec
            attention afin de vous permettre de rejoindre ou de quitter
            l’aéroport Paris-Orly dans les meilleures conditions.
          </p>

          <p>
            Réservez votre chauffeur aéroport Orly pour bénéficier d’un
            service fiable et haut de gamme, avec une prise en charge
            organisée à l’avance selon vos besoins.
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
              Découvrez notre service de chauffeur privé vers et depuis
              l’aéroport Paris-Orly.
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
              Organisez votre transfert premium vers ou depuis l’aéroport
              d’Orly sur réservation.
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
              Une solution adaptée aux déplacements professionnels,
              entreprises et rendez-vous business.
            </p>
          </a>

          <a
            href="/chauffeur-prive-cdg"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé CDG
            </h2>

            <p className="text-gray-400">
              Découvrez également notre service de chauffeur privé vers
              l’aéroport Paris-Charles-de-Gaulle.
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
              Effectuez votre demande de réservation pour votre transfert
              vers ou depuis l’aéroport d’Orly.
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}