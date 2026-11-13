
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé Corbeil-Essonnes | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé haut de gamme à Corbeil-Essonnes et en Île-de-France. Transferts Orly, CDG, déplacements business et transport premium 24h/24.",

  keywords: [
    "chauffeur privé Corbeil-Essonnes",
    "VTC Corbeil-Essonnes",
    "transfert Orly Corbeil",
    "transfert CDG Corbeil",
    "chauffeur business Corbeil-Essonnes",
    "transport premium Essonne",
    "chauffeur privé Essonne",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive-corbeil-essonnes",
  },
};

export default function ChauffeurPriveCorbeil() {
  return (
    <main className="min-h-screen bg-black text-white">

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
                    "Oui, nous assurons les transferts premium vers les aéroports d’Orly et Roissy Charles-de-Gaulle depuis Corbeil-Essonnes et toute l’Essonne."
                }
              },
              {
                "@type": "Question",
                "name": "Intervenez-vous uniquement à Corbeil-Essonnes ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Nos chauffeurs privés interviennent à Corbeil-Essonnes, Évry-Courcouronnes, Melun ainsi que dans toute l’Île-de-France."
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

      {/* HERO IMMERSIF */}
      <section className="relative isolate w-full min-h-[620px] h-[78vh] max-h-[900px] overflow-hidden">

        <img
          src="/images/corbeil-essonnes-hero-premium.png"
          alt="Berline Mercedes avec chauffeur privé sur les bords de Seine à Corbeil-Essonnes"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl pt-12">

            <p className="text-amber-400 uppercase tracking-[0.35em] text-sm font-semibold mb-6">
              Sud IDF Executive Transport
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Chauffeur privé
              <span className="block text-amber-400">
                à Corbeil-Essonnes
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-8 max-w-2xl mb-10">
              L’excellence au service de vos déplacements.
              Profitez d’un transport privé haut de gamme,
              alliant élégance, ponctualité, discrétion et confort
              dans toute l’Île-de-France.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/reservation"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-9 py-4 rounded-md transition duration-300"
              >
                Réserver votre chauffeur
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center border border-white/70 hover:border-amber-400 hover:text-amber-400 text-white font-semibold px-9 py-4 rounded-md transition duration-300"
              >
                Nous contacter
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
              Votre chauffeur dans l’Essonne
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              Un service de transport premium au départ de Corbeil-Essonnes
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-8">
              <p>
                Sud IDF Executive Transport propose un service de chauffeur
                privé haut de gamme à Corbeil-Essonnes pour vos déplacements
                personnels, professionnels et événements privés.
              </p>

              <p>
                Nous assurons vos trajets vers Orly, Roissy Charles-de-Gaulle,
                Paris, les gares et vos rendez-vous professionnels avec
                ponctualité, discrétion et confort.
              </p>

              <p>
                Notre service s’adresse aux particuliers, entreprises,
                dirigeants, hôtels, organisateurs d’événements et voyageurs
                recherchant une prestation de transport soignée.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/corbeil-essonnes-seine.png"
              alt="Environnement des bords de Seine à Corbeil-Essonnes"
              className="w-full h-[430px] object-cover rounded-2xl border border-amber-500/30"
            />

            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-neutral-950 border border-amber-500/40 p-6 rounded-xl shadow-2xl">
              <p className="text-amber-400 text-3xl font-bold">
                24h/24
              </p>
              <p className="text-gray-300 text-sm mt-1">
                7 jours sur 7 sur réservation
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
              Nos prestations
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre chauffeur privé pour chaque déplacement
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              Des transferts aéroport aux déplacements professionnels,
              nous vous accompagnons avec une prestation adaptée
              à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <a
              href="/transfert-orly"
              className="group bg-black border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400 transition duration-300"
            >
              <img
                src="/images/corbeil-essonnes-transfert-orly.png"
                alt="Service de chauffeur privé pour transfert vers Orly"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-7">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  Transfert aéroport Orly
                </h3>

                <p className="text-gray-400 leading-7">
                  Rejoignez l’aéroport d’Orly depuis Corbeil-Essonnes
                  avec un chauffeur privé et un service soigné.
                </p>

                <span className="inline-block mt-6 text-amber-400 font-semibold">
                  Découvrir le service →
                </span>
              </div>
            </a>

            <a
              href="/transfert-cdg"
              className="group bg-black border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400 transition duration-300"
            >
              <img
                src="/images/cdg-hero-premium.png"
                alt="Berline avec chauffeur pour transfert vers Roissy CDG"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-7">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  Transfert aéroport CDG
                </h3>

                <p className="text-gray-400 leading-7">
                  Un transport confortable et ponctuel vers
                  Roissy Charles-de-Gaulle.
                </p>

                <span className="inline-block mt-6 text-amber-400 font-semibold">
                  Découvrir le service →
                </span>
              </div>
            </a>

            <a
              href="/chauffeur-business"
              className="group bg-black border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400 transition duration-300"
            >
              <img
                src="/images/corbeil-essonnes-business.png"
                alt="Transport exécutif pour déplacements professionnels"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-7">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  Chauffeur business
                </h3>

                <p className="text-gray-400 leading-7">
                  Un service exécutif destiné aux entreprises,
                  dirigeants et professionnels.
                </p>

                <span className="inline-block mt-6 text-amber-400 font-semibold">
                  Découvrir le service →
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CONFORT ET QUALITÉ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1">
            <img
              src="/images/corbeil-essonnes-classe-v-interieur.png"
              alt="Intérieur confortable d'un véhicule Mercedes pour transport privé"
              className="w-full h-[430px] object-cover rounded-2xl border border-amber-500/30"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
              L’expérience SUD IDF
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Le confort et l’exigence à chaque trajet
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              Chaque déplacement mérite une attention particulière.
              Nous mettons l’accent sur la qualité de l’accueil,
              la ponctualité et le confort à bord.
            </p>

            <ul className="space-y-5 text-gray-300">
              <li className="flex gap-4">
                <span className="text-amber-400 text-xl">✦</span>
                Accueil personnalisé et prise en charge soignée
              </li>

              <li className="flex gap-4">
                <span className="text-amber-400 text-xl">✦</span>
                Véhicules confortables et prestations haut de gamme
              </li>

              <li className="flex gap-4">
                <span className="text-amber-400 text-xl">✦</span>
                Ponctualité, discrétion et confidentialité
              </li>

              <li className="flex gap-4">
                <span className="text-amber-400 text-xl">✦</span>
                Accompagnement des particuliers et professionnels
              </li>
            </ul>

          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
            Notre secteur
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Au départ de Corbeil-Essonnes, dans toute l’Île-de-France
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Nos chauffeurs privés interviennent notamment à
            Corbeil-Essonnes, Évry-Courcouronnes, Melun ainsi que
            dans toute l’Île-de-France. Nous assurons également
            vos déplacements vers Paris, les aéroports et les gares.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Corbeil-Essonnes",
              "Évry-Courcouronnes",
              "Essonne",
              "Melun",
              "Seine-et-Marne",
              "Paris",
              "Orly",
              "Roissy CDG",
              "Île-de-France",
            ].map((place) => (
              <span
                key={place}
                className="border border-amber-500/30 bg-black px-5 py-3 rounded-full text-gray-300"
              >
                {place}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* CTA RESERVATION */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-black" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-5">
            Sud IDF Executive Transport
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Votre prochain déplacement commence ici
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-10">
            Pour vos trajets privés, professionnels ou vos transferts
            aéroport depuis Corbeil-Essonnes, choisissez un service
            de chauffeur privé qui place votre confort au premier plan.
          </p>

          <a
            href="/reservation"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-md transition duration-300"
          >
            Réserver votre chauffeur
          </a>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
              Besoin d’informations ?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">

            <div className="bg-black border border-amber-500/20 rounded-2xl p-7">
              <h3 className="text-xl text-amber-400 mb-3">
                Proposez-vous des transferts vers Orly et CDG ?
              </h3>

              <p className="text-gray-400 leading-7">
                Oui, nous assurons les transferts premium vers les aéroports
                d’Orly et Roissy Charles-de-Gaulle depuis Corbeil-Essonnes
                et toute l’Essonne.
              </p>
            </div>

            <div className="bg-black border border-amber-500/20 rounded-2xl p-7">
              <h3 className="text-xl text-amber-400 mb-3">
                Intervenez-vous uniquement à Corbeil-Essonnes ?
              </h3>

              <p className="text-gray-400 leading-7">
                Nos chauffeurs privés interviennent à Corbeil-Essonnes,
                Évry-Courcouronnes, Melun ainsi que dans toute
                l’Île-de-France.
              </p>
            </div>

            <div className="bg-black border border-amber-500/20 rounded-2xl p-7">
              <h3 className="text-xl text-amber-400 mb-3">
                Peut-on réserver un chauffeur business ?
              </h3>

              <p className="text-gray-400 leading-7">
                Oui, notre service business est destiné aux entreprises,
                dirigeants et déplacements professionnels.
              </p>
            </div>

            <div className="bg-black border border-amber-500/20 rounded-2xl p-7">
              <h3 className="text-xl text-amber-400 mb-3">
                Êtes-vous disponible 24h/24 ?
              </h3>

              <p className="text-gray-400 leading-7">
                Notre service de chauffeur privé premium est disponible
                24h/24 et 7j/7 sur réservation.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
