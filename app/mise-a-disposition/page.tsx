import Link from "next/link";

export const metadata = {
  title:
    "Mise à disposition chauffeur privé | Sud IDF Executive Transport",

  description:
    "Service premium de mise à disposition avec chauffeur privé en Essonne, Paris et Île-de-France. Véhicule haut de gamme avec chauffeur pour entreprises, événements et déplacements longue durée.",

  keywords: [
    "mise à disposition chauffeur privé",
    "chauffeur privé premium",
    "chauffeur business",
    "transport VIP",
    "chauffeur événementiel",
    "chauffeur privé Essonne",
    "mise à disposition Paris",
  ],
};

export default function MiseADispositionPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Mise à disposition avec chauffeur privé
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service premium de mise à
          disposition avec chauffeur privé en Essonne, Seine-et-Marne,
          Paris et toute l’Île-de-France.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Profitez de véhicules haut de gamme avec chauffeur professionnel
            pour vos déplacements personnels, professionnels,
            événements privés et rendez-vous business.
          </p>

          <p>
            Notre service s’adapte à vos besoins :
            séminaires, shopping, mariage, déplacements VIP,
            événements d’entreprise et transport longue durée.
          </p>

          <p>
            Votre chauffeur reste disponible pendant toute la durée de votre
            réservation afin de garantir confort,
            flexibilité, discrétion et ponctualité.
          </p>

          <p>
            Nous intervenons notamment à :
            Corbeil-Essonnes, Évry-Courcouronnes,
            Melun, Fontainebleau, Paris,
            Orly et Roissy Charles-de-Gaulle.
          </p>

        </div>

        {/* MAILLAGE SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/chauffeur-business"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur business
            </h2>

            <p className="text-gray-400">
              Transport exécutif premium pour entreprises et dirigeants.
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
              Service premium dans toute l’Essonne et l’Île-de-France.
            </p>
          </a>

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

        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            href="/reservation"
            className="block w-full max-w-xl rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 px-8 py-5 text-center text-lg font-semibold text-black shadow-lg transition hover:scale-105"
          >
            Réserver votre chauffeur
          </Link>
        </div>

      </div>
    </main>
  );
}