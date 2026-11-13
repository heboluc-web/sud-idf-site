
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chauffeur Privé CDG | Sud IDF Executive Transport",

  description:
    "Chauffeur privé CDG premium : transferts depuis Paris, Essonne et Île-de-France pour entreprises, hôtels, agences de voyages et voyageurs.",

  keywords: [
    "chauffeur privé CDG",
    "VTC CDG",
    "transfert CDG",
    "chauffeur Roissy",
    "chauffeur aéroport CDG",
    "transport premium CDG",
    "VTC Roissy Charles de Gaulle",
  ],

  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/chauffeur-prive-cdg",
  },
};

export default function ChauffeurPriveCDG() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* GRANDE BANNIÈRE IMMERSIVE CDG */}
      <section className="relative isolate w-full min-h-[650px] h-[85vh] max-h-[950px] overflow-hidden">

        <img
          src="/images/cdg-hero-premium.png"
          alt="Mercedes premium devant l'aéroport Paris Charles-de-Gaulle au coucher du soleil"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* ÉCLAIRCISSEMENT DE L'IMAGE */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">

          <p className="text-amber-400 uppercase tracking-[0.35em] text-xs md:text-sm font-semibold mb-6">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl mb-8 drop-shadow-lg">
            Chauffeur privé
            <span className="block text-amber-400 font-semibold mt-2">
              Aéroport Paris-CDG
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white max-w-2xl leading-relaxed mb-10 drop-shadow-md">
            L'excellence de votre transport privé au départ et à destination
            de l'aéroport Paris-Charles-de-Gaulle.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/reservation"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold px-9 py-4 rounded-md shadow-xl shadow-black/30 transition duration-300"
            >
              Réserver mon chauffeur
            </a>

            <a
              href="/contact"
              className="inline-block border border-white/80 bg-black/20 backdrop-blur-sm hover:border-amber-400 hover:text-amber-400 px-9 py-4 rounded-md transition duration-300"
            >
              Nous contacter
            </a>

          </div>

        </div>
      </section>

      {/* PRÉSENTATION DU SERVICE */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="max-w-3xl mx-auto text-center mb-16">

          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Votre expérience de transport
          </p>

          <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
            Votre chauffeur privé pour
            <span className="text-amber-400"> l'aéroport CDG</span>
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            Sud IDF Executive Transport assure vos transferts en
            chauffeur privé vers et depuis l'aéroport Paris-CDG,
            au départ de Paris, de l'Essonne et de toute l'Île-de-France.
          </p>

        </div>

        {/* LES ENGAGEMENTS */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="group border border-amber-500/30 bg-neutral-950 p-8 rounded-xl hover:border-amber-400 hover:bg-neutral-900 transition duration-300">
            <div className="text-amber-400 text-3xl mb-5">✦</div>
            <h3 className="text-xl text-amber-400 font-semibold mb-4">
              Déplacements professionnels
            </h3>
            <p className="text-gray-400 leading-7">
              Un service de transport exécutif pour les entreprises,
              dirigeants, collaborateurs et voyageurs d'affaires.
            </p>
          </div>

          <div className="group border border-amber-500/30 bg-neutral-950 p-8 rounded-xl hover:border-amber-400 hover:bg-neutral-900 transition duration-300">
            <div className="text-amber-400 text-3xl mb-5">✦</div>
            <h3 className="text-xl text-amber-400 font-semibold mb-4">
              Accueil aéroport
            </h3>
            <p className="text-gray-400 leading-7">
              Une prise en charge organisée à l'arrivée ou au départ
              de Paris-Charles-de-Gaulle, sur réservation.
            </p>
          </div>

          <div className="group border border-amber-500/30 bg-neutral-950 p-8 rounded-xl hover:border-amber-400 hover:bg-neutral-900 transition duration-300">
            <div className="text-amber-400 text-3xl mb-5">✦</div>
            <h3 className="text-xl text-amber-400 font-semibold mb-4">
              Confort et discrétion
            </h3>
            <p className="text-gray-400 leading-7">
              Ponctualité, confort et discrétion sont au cœur de
              chaque prestation, pour vos déplacements privés
              comme professionnels.
            </p>
          </div>

        </div>

        {/* NOS PRESTATIONS AVEC PHOTOGRAPHIES */}
        <div className="mt-24">

          <div className="text-center mb-14">

            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Découvrez nos prestations
            </p>

            <h2 className="text-3xl md:text-5xl font-light mb-5">
              L'excellence de vos déplacements
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Un accompagnement premium pour tous vos déplacements
              privés et professionnels.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* CARTE 1 */}
            <a
              href="/transfert-cdg"
              className="group block overflow-hidden rounded-xl border border-amber-500/30 bg-neutral-950 hover:border-amber-400 transition duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/cdg-hero.png"
                  alt="Transfert en Mercedes vers l'aéroport CDG"
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Transfert aéroport
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg text-amber-400 font-semibold mb-3">
                  Transfert CDG
                </h3>
                <p className="text-gray-400 text-sm leading-6">
                  Service premium vers Roissy-Charles-de-Gaulle.
                </p>
                <p className="text-amber-400 text-sm mt-5 group-hover:translate-x-2 transition duration-300">
                  Découvrir la prestation →
                </p>
              </div>
            </a>

            {/* CARTE 2 */}
            <a
              href="/chauffeur-prive-paris"
              className="group block overflow-hidden rounded-xl border border-amber-500/30 bg-neutral-950 hover:border-amber-400 transition duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/cdg-classe-e.png"
                  alt="Mercedes Classe E pour chauffeur privé"
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Transport privé
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg text-amber-400 font-semibold mb-3">
                  Chauffeur privé Paris
                </h3>
                <p className="text-gray-400 text-sm leading-6">
                  Déplacements premium à Paris et en Île-de-France.
                </p>
                <p className="text-amber-400 text-sm mt-5 group-hover:translate-x-2 transition duration-300">
                  Découvrir la prestation →
                </p>
              </div>
            </a>

            {/* CARTE 3 */}
            <a
              href="/chauffeur-business"
              className="group block overflow-hidden rounded-xl border border-amber-500/30 bg-neutral-950 hover:border-amber-400 transition duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/cdg-range-rover.png"
                  alt="Range Rover pour transport exécutif"
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Transport exécutif
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg text-amber-400 font-semibold mb-3">
                  Chauffeur business
                </h3>
                <p className="text-gray-400 text-sm leading-6">
                  Transport exécutif pour entreprises et professionnels.
                </p>
                <p className="text-amber-400 text-sm mt-5 group-hover:translate-x-2 transition duration-300">
                  Découvrir la prestation →
                </p>
              </div>
            </a>

            {/* CARTE 4 */}
            <a
              href="/reservation"
              className="group block overflow-hidden rounded-xl border border-amber-500/30 bg-neutral-950 hover:border-amber-400 transition duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/cdg-interieur.png"
                  alt="Intérieur raffiné d'un véhicule de transport premium"
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Votre réservation
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg text-amber-400 font-semibold mb-3">
                  Réserver un chauffeur
                </h3>
                <p className="text-gray-400 text-sm leading-6">
                  Réservation de votre chauffeur privé premium.
                </p>
                <p className="text-amber-400 text-sm mt-5 group-hover:translate-x-2 transition duration-300">
                  Réserver maintenant →
                </p>
              </div>
            </a>

          </div>
        </div>

      </section>

      {/* APPEL À LA RÉSERVATION */}
      <section className="relative overflow-hidden border-t border-amber-500/30 bg-neutral-950 py-24 px-6 text-center">

        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Votre prochain déplacement commence ici.
          </h2>

          <p className="text-gray-400 text-lg mb-9">
            Réservez votre chauffeur privé pour vos transferts CDG.
          </p>

          <a
            href="/reservation"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold px-10 py-4 rounded-md shadow-lg shadow-amber-500/10 transition duration-300"
          >
            Réserver maintenant
          </a>

        </div>

      </section>

    </main>
  );
}
