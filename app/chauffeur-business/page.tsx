import Link from "next/link";

export const metadata = {
  title:
    "Chauffeur business premium | Sud IDF Executive Transport",

  description:
    "Service de chauffeur business premium pour entreprises, dirigeants et professionnels en Essonne, Paris et Île-de-France.",

  keywords: [
    "chauffeur business",
    "transport exécutif",
    "chauffeur entreprise",
    "chauffeur dirigeant",
    "chauffeur privé business",
    "transport premium entreprise",
    "chauffeur VIP Paris",
  ],
};

export default function ChauffeurBusinessPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <section className="mx-auto max-w-5xl">

        <h1 className="mb-10 text-5xl font-bold leading-tight">
          Chauffeur business premium
        </h1>

        <div className="space-y-8 text-xl leading-10 text-gray-200">

          <p>
            Sud IDF Executive Transport accompagne les entreprises,
            dirigeants et professionnels avec un service de transport
            business haut de gamme en Île-de-France.
          </p>

          <p>
            Nous assurons vos déplacements professionnels avec
            ponctualité, discrétion, sécurité et confort premium
            dans toute la région parisienne.
          </p>

          <p>
            Notre service est idéal pour :
            rendez-vous d’affaires, séminaires,
            hôtels, salons professionnels,
            déplacements VIP et mise à disposition.
          </p>

          <p>
            Nos chauffeurs professionnels garantissent une expérience
            premium adaptée aux exigences des entreprises,
            directions générales et clients business.
          </p>

          <p>
            Nous intervenons notamment à :
            Paris, La Défense, Évry-Courcouronnes,
            Corbeil-Essonnes, Melun, Orly
            et Roissy Charles-de-Gaulle.
          </p>

        </div>

        {/* MAILLAGE SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/mise-a-disposition"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Mise à disposition
            </h2>

            <p className="text-gray-400">
              Véhicule avec chauffeur pour vos événements et déplacements longue durée.
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

        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            href="/reservation"
            className="block w-full max-w-xl rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 px-8 py-5 text-center text-lg font-semibold text-black shadow-lg transition hover:scale-105"
          >
            Réserver un chauffeur
          </Link>
        </div>

      </section>
    </main>
  );
}