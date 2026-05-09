import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé Évry-Courcouronnes | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé haut de gamme à Évry-Courcouronnes et en Île-de-France. Transferts Orly, CDG, déplacements business et transport premium 24h/24.",

  keywords: [
    "chauffeur privé Évry",
    "chauffeur privé Évry-Courcouronnes",
    "VTC Évry",
    "transfert Orly Évry",
    "transfert CDG Évry",
    "chauffeur business Évry",
    "transport premium Évry",
    "chauffeur privé Essonne",
  ],
};

export default function ChauffeurPriveEvry() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

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
                "name": "Proposez-vous des transferts vers Orly et CDG ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Oui, nous assurons les transferts premium vers les aéroports d’Orly et Roissy Charles-de-Gaulle depuis Évry-Courcouronnes et toute l’Essonne."
                }
              },
              {
                "@type": "Question",
                "name": "Intervenez-vous uniquement à Évry-Courcouronnes ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Nos chauffeurs privés interviennent à Évry-Courcouronnes, Corbeil-Essonnes, Melun ainsi que dans toute l’Île-de-France."
                }
              },
              {
                "@type": "Question",
                "name": "Peut-on réserver un chauffeur business ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Oui, notre service business est destiné aux entreprises, dirigeants et déplacements professionnels."
                }
              },
              {
                "@type": "Question",
                "name": "Êtes-vous disponible 24h/24 ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Notre service de chauffeur privé premium est disponible 24h/24 et 7j/7 sur réservation."
                }
              }
            ]
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Chauffeur privé à Évry-Courcouronnes
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-8">
          Sud IDF Executive Transport propose un service de chauffeur privé
          premium à Évry-Courcouronnes pour tous vos déplacements personnels,
          professionnels et événements privés.
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-8">

          <p>
            Nous assurons vos trajets vers Orly, Roissy Charles-de-Gaulle,
            Paris, gares et rendez-vous professionnels avec ponctualité,
            discrétion et confort.
          </p>

          <p>
            Nos chauffeurs privés interviennent notamment à
            Évry-Courcouronnes, Corbeil-Essonnes, Melun ainsi que dans
            toute l’Île-de-France.
          </p>

          <p>
            Notre service premium est adapté aux particuliers,
            entreprises, dirigeants, hôtels, événements et déplacements VIP.
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
              Réservez un chauffeur privé premium vers l’aéroport d’Orly.
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

        {/* FAQ SEO */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-amber-400 mb-10">
            Questions fréquentes
          </h2>

          <div className="space-y-6">

            <div className="bg-neutral-950 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">
                Proposez-vous des transferts vers Orly et CDG ?
              </h3>

              <p className="text-gray-400 leading-7">
                Oui, nous assurons les transferts premium vers les aéroports
                d’Orly et Roissy Charles-de-Gaulle depuis Évry-Courcouronnes
                et toute l’Essonne.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">
                Intervenez-vous uniquement à Évry-Courcouronnes ?
              </h3>

              <p className="text-gray-400 leading-7">
                Nos chauffeurs privés interviennent à Évry-Courcouronnes,
                Corbeil-Essonnes, Melun ainsi que dans toute
                l’Île-de-France.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">
                Peut-on réserver un chauffeur business ?
              </h3>

              <p className="text-gray-400 leading-7">
                Oui, notre service business est destiné aux entreprises,
                dirigeants et déplacements professionnels.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-xl text-white mb-3">
                Êtes-vous disponible 24h/24 ?
              </h3>

              <p className="text-gray-400 leading-7">
                Notre service de chauffeur privé premium est disponible
                24h/24 et 7j/7 sur réservation.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}