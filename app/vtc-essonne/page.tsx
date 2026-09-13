import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "VTC Essonne | Chauffeur VTC Premium dans le 91 | Sud IDF Executive Transport",

  description:
    "VTC Essonne premium pour particuliers, entreprises et professionnels. Chauffeur VTC dans le 91 pour Orly, CDG, Paris et vos déplacements en Île-de-France.",

  keywords: [
    "VTC Essonne",
    "VTC 91",
    "chauffeur VTC Essonne",
    "chauffeur privé Essonne",
    "VTC premium Essonne",
    "VTC entreprise Essonne",
    "VTC Évry",
    "VTC Corbeil-Essonnes",
    "VTC Massy",
    "VTC Sainte-Geneviève-des-Bois",
    "VTC Orly Essonne",
    "VTC CDG Essonne",
  ],

  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/vtc-essonne",
  },
};

export default function VTCEssonne() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          VTC Essonne
        </h1>

        <h2 className="text-2xl md:text-3xl text-amber-400 font-semibold mb-6">
          VTC premium dans l’Essonne pour vos déplacements
        </h2>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service VTC premium dans
          toute l’Essonne pour vos déplacements privés, professionnels et
          transferts vers les principaux pôles de transport d’Île-de-France.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous assurons vos trajets au départ ou à destination d’Évry,
            Corbeil-Essonnes, Massy, Sainte-Geneviève-des-Bois et des
            différentes communes de l’Essonne, sur réservation.
          </p>

          <p>
            Notre service VTC s’adresse aussi bien aux particuliers qu’aux
            entreprises et aux professionnels ayant besoin d’un transport
            fiable et confortable dans le 91 et vers Paris.
          </p>

          <p>
            Nous pouvons notamment organiser vos déplacements vers
            l’aéroport Paris-Orly, l’aéroport Paris-Charles-de-Gaulle,
            les gares parisiennes, les hôtels, les lieux de rendez-vous
            professionnels et différentes destinations en Île-de-France.
          </p>

          <p>
            Pour les entreprises et les professionnels, notre service peut
            accompagner les rendez-vous d’affaires, déplacements de dirigeants,
            transferts entre hôtels et lieux professionnels ainsi que les
            déplacements de clients ou collaborateurs.
          </p>

          <p>
            Chaque prise en charge est organisée sur réservation afin de
            préparer votre trajet selon votre horaire, votre lieu de départ
            et votre destination.
          </p>

          <p>
            Réservez votre VTC en Essonne auprès de Sud IDF Executive
            Transport pour bénéficier d’un service premium, confortable et
            discret pour vos déplacements dans le 91 et en Île-de-France.
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
              Découvrez notre service de chauffeur privé premium dans tout
              le département de l’Essonne.
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
              Chauffeur privé premium pour vos déplacements à
              Évry-Courcouronnes et ses alentours.
            </p>
          </a>

          <a
            href="/chauffeur-prive-corbeil-essonnes"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé Corbeil-Essonnes
            </h2>

            <p className="text-gray-400">
              Service de chauffeur privé premium au départ ou à destination
              de Corbeil-Essonnes.
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
              Chauffeur VTC premium pour vos transferts entre l’Essonne
              et l’aéroport Paris-Orly.
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
              Service de transport premium entre l’Essonne et
              l’aéroport Paris-Charles-de-Gaulle.
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
              Transport exécutif pour entreprises, dirigeants et
              professionnels.
            </p>
          </a>

          <a
            href="/reservation"
            className="border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition bg-neutral-950 md:col-span-2"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Réserver un VTC
            </h2>

            <p className="text-gray-400">
              Effectuez votre demande de réservation pour votre déplacement
              en Essonne ou vers une autre destination.
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}