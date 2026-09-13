import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title:
    "Chauffeur Business Premium | Entreprises & Dirigeants | Sud IDF Executive Transport",

  description:
    "Chauffeur business premium pour entreprises, dirigeants et professionnels à Paris, en Essonne et en Île-de-France. Transport exécutif sur réservation.",

  keywords: [
    "chauffeur business",
    "transport exécutif",
    "chauffeur entreprise",
    "chauffeur dirigeant",
    "chauffeur privé business",
    "transport premium entreprise",
    "chauffeur VIP Paris",
    "chauffeur business Essonne",
    "chauffeur business Paris",
    "transport exécutif entreprise",
    "chauffeur professionnel Île-de-France",
  ],

  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/chauffeur-business",
  },
};

export default function ChauffeurBusinessPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">

      {/* FAQ SCHEMA SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name":
                  "Proposez-vous un service de chauffeur business pour entreprises ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Oui, nous accompagnons entreprises, dirigeants, hôtels et professionnels avec un service de transport exécutif premium à Paris, en Essonne et en Île-de-France."
                }
              },
              {
                "@type": "Question",
                "name":
                  "Dans quelles zones intervenez-vous pour les déplacements professionnels ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Nous intervenons notamment à Paris, La Défense, Évry-Courcouronnes, Corbeil-Essonnes, Melun, ainsi qu'aux aéroports Paris-Orly et Paris-Charles-de-Gaulle."
                }
              },
              {
                "@type": "Question",
                "name":
                  "Peut-on réserver une mise à disposition avec chauffeur ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Oui, une mise à disposition avec chauffeur peut être organisée sur réservation pour les réunions, séminaires, événements et déplacements professionnels nécessitant plusieurs trajets."
                }
              },
              {
                "@type": "Question",
                "name":
                  "Comment réserver un chauffeur business ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "La réservation s'effectue sur demande afin de préparer la prise en charge, l'horaire, le lieu de départ et la destination selon les besoins du déplacement professionnel."
                }
              }
            ]
          }),
        }}
      />

      <section className="mx-auto max-w-5xl">

        <h1 className="mb-10 text-5xl font-bold leading-tight">
          Chauffeur business premium
        </h1>

        <h2 className="mb-6 text-3xl font-semibold text-amber-400">
          Chauffeur privé pour entreprises et déplacements professionnels
        </h2>

        <div className="space-y-8 text-xl leading-10 text-gray-200">

          <p>
            Sud IDF Executive Transport accompagne les entreprises,
            dirigeants, cadres et professionnels avec un service de chauffeur
            business premium à Paris, en Essonne et dans toute l’Île-de-France.
          </p>

          <p>
            Nous assurons vos déplacements professionnels avec une prise en
            charge organisée sur réservation, en privilégiant la ponctualité,
            la discrétion, le confort et la qualité du service.
          </p>

          <p>
            Notre service s’adapte notamment aux rendez-vous d’affaires,
            réunions, séminaires, salons professionnels, transferts entre
            hôtels et lieux de rendez-vous, ainsi qu’aux déplacements de
            dirigeants et de clients VIP.
          </p>

          <p>
            Les entreprises, hôtels, agences événementielles et professionnels
            du tourisme peuvent également faire appel à notre service pour
            organiser les déplacements de leurs clients, collaborateurs ou
            invités.
          </p>

          <p>
            Nous intervenons notamment à Paris, La Défense,
            Évry-Courcouronnes, Corbeil-Essonnes, Melun, ainsi qu’aux
            aéroports Paris-Orly et Paris-Charles-de-Gaulle.
          </p>

          <p>
            Pour les besoins nécessitant plusieurs déplacements, une mise à
            disposition avec chauffeur peut également être organisée sur
            réservation, notamment pour les réunions, séminaires et événements
            professionnels.
          </p>

        </div>

        {/* MAILLAGE SEO */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">

          <a
            href="/chauffeur-prive-mise-a-disposition"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Mise à disposition avec chauffeur
            </h2>

            <p className="text-gray-400">
              Véhicule avec chauffeur pour vos réunions, séminaires,
              événements et déplacements professionnels.
            </p>
          </a>

          <a
            href="/transport-vip"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Transport VIP
            </h2>

            <p className="text-gray-400">
              Service de transport premium pour dirigeants, entreprises,
              hôtels et événements.
            </p>
          </a>

          <a
            href="/chauffeur-prive-paris"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur privé Paris
            </h2>

            <p className="text-gray-400">
              Chauffeur privé premium pour vos déplacements à Paris et
              en Île-de-France.
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
              Service de chauffeur privé premium dans toute l’Essonne.
            </p>
          </a>

          <a
            href="/chauffeur-aeroport-orly"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur aéroport Orly
            </h2>

            <p className="text-gray-400">
              Transferts professionnels vers ou depuis l’aéroport
              Paris-Orly.
            </p>
          </a>

          <a
            href="/chauffeur-aeroport-cdg"
            className="border border-amber-500/30 rounded-2xl p-6 bg-neutral-950 hover:border-amber-400 transition"
          >
            <h2 className="text-xl text-amber-400 mb-3">
              Chauffeur aéroport CDG
            </h2>

            <p className="text-gray-400">
              Transferts professionnels vers ou depuis l’aéroport
              Paris-Charles-de-Gaulle.
            </p>
          </a>

        </div>

        {/* FAQ SEO */}
        <div className="mt-24">

          <h2 className="text-3xl font-semibold text-amber-400 mb-10">
            Questions fréquentes sur le chauffeur business
          </h2>

          <div className="space-y-6">

            <div className="bg-neutral-950 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">
                Proposez-vous un service de chauffeur business pour entreprises ?
              </h3>

              <p className="text-gray-400 leading-7">
                Oui, nous accompagnons entreprises, dirigeants, hôtels et
                professionnels avec un service de transport exécutif premium
                à Paris, en Essonne et en Île-de-France.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">
                Dans quelles zones intervenez-vous pour les déplacements professionnels ?
              </h3>

              <p className="text-gray-400 leading-7">
                Nous intervenons notamment à Paris, La Défense,
                Évry-Courcouronnes, Corbeil-Essonnes, Melun, ainsi qu’aux
                aéroports Paris-Orly et Paris-Charles-de-Gaulle.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">
                Peut-on réserver une mise à disposition avec chauffeur ?
              </h3>

              <p className="text-gray-400 leading-7">
                Oui, une mise à disposition avec chauffeur peut être organisée
                sur réservation pour les réunions, séminaires, événements et
                déplacements professionnels nécessitant plusieurs trajets.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">
                Comment réserver un chauffeur business ?
              </h3>

              <p className="text-gray-400 leading-7">
                La réservation s’effectue sur demande afin de préparer la
                prise en charge, l’horaire, le lieu de départ et la destination
                selon les besoins du déplacement professionnel.
              </p>
            </div>

          </div>
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