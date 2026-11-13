
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé Melun | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé haut de gamme à Melun et en Île-de-France. Transferts Orly, CDG, déplacements business et transport premium 24h/24.",

  keywords: [
    "chauffeur privé Melun",
    "VTC Melun",
    "transfert Orly Melun",
    "transfert CDG Melun",
    "chauffeur business Melun",
    "transport premium Melun",
    "chauffeur privé Seine-et-Marne",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive-melun",
  },
};

const faqs = [
  {
    question: "Proposez-vous des transferts vers Orly et CDG ?",
    answer:
      "Oui, nous assurons les transferts premium vers les aéroports d’Orly et Roissy Charles-de-Gaulle depuis Melun et toute la Seine-et-Marne.",
  },
  {
    question: "Intervenez-vous uniquement à Melun ?",
    answer:
      "Nos chauffeurs privés interviennent à Melun, Fontainebleau, Sénart ainsi que dans toute l’Île-de-France.",
  },
  {
    question: "Peut-on réserver un chauffeur business ?",
    answer:
      "Oui, notre service business est destiné aux entreprises, dirigeants et déplacements professionnels.",
  },
  {
    question: "Êtes-vous disponible 24h/24 ?",
    answer:
      "Notre service de chauffeur privé premium est disponible 24h/24 et 7j/7 sur réservation.",
  },
];

const services = [
  {
    title: "Transfert Orly",
    description:
      "Réservez un chauffeur privé premium vers l’aéroport d’Orly.",
    image: "/images/orly-accueil.png",
    alt: "Véhicule avec chauffeur pour transfert vers Orly",
    href: "/transfert-orly",
  },
  {
    title: "Transfert CDG",
    description:
      "Service haut de gamme vers Roissy Charles-de-Gaulle.",
    image: "/images/cdg-hero-premium.png",
    alt: "Véhicule premium pour transfert vers Roissy CDG",
    href: "/transfert-cdg",
  },
  {
    title: "Chauffeur business",
    description:
      "Transport exécutif pour entreprises et professionnels.",
    image: "/images/essonne-interieur.png",
    alt: "Intérieur confortable d'un véhicule premium",
    href: "/chauffeur-business",
  },
  {
    title: "Réserver un chauffeur",
    description:
      "Réservation rapide de votre chauffeur privé premium.",
    image: "/images/vehicule-interieur.png",
    alt: "Habitacle raffiné d'un véhicule avec chauffeur",
    href: "/reservation",
  },
];

export default function ChauffeurPriveMelun() {
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
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* BANNIÈRE PRINCIPALE */}
      <section className="relative isolate w-full min-h-[620px] h-[78vh] max-h-[900px] overflow-hidden">

        <Image
          src="/images/melun-seine-hero.png"
          alt="Mercedes Classe V noire devant les bords de Seine et le pont de Melun"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl pt-12">

            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
              SUD IDF EXECUTIVE TRANSPORT
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Chauffeur privé
              <span className="block text-amber-400">
                à Melun
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-8 max-w-2xl mb-10">
              Sud IDF Executive Transport propose un service de chauffeur
              privé premium à Melun pour tous vos déplacements personnels,
              professionnels et événements privés.
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

      {/* POINTS FORTS */}
      <section className="border-y border-amber-500/20 bg-neutral-950 px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl text-amber-400">♧</span>
            <div>
              <h2 className="font-semibold text-white">Confort premium</h2>
              <p className="text-sm text-gray-400">Véhicules haut de gamme</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl text-amber-400">◷</span>
            <div>
              <h2 className="font-semibold text-white">Ponctualité</h2>
              <p className="text-sm text-gray-400">Déplacements en toute sérénité</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl text-amber-400">◇</span>
            <div>
              <h2 className="font-semibold text-white">Disponibilité 24h/24</h2>
              <p className="text-sm text-gray-400">7j/7 sur réservation</p>
            </div>
          </div>

        </div>
      </section>

      {/* PRÉSENTATION LOCALE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative min-h-[350px] md:min-h-[470px] rounded-2xl overflow-hidden border border-amber-500/30">
            <Image
              src="/images/melun-seine-hero.png"
              alt="Les bords de Seine, le pont et la collégiale de Melun"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div>
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              VTC Melun & Île-de-France
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              Un service premium pour vos déplacements
            </h2>

            <div className="space-y-5 text-gray-300 text-lg leading-8">
              <p>
                Nous assurons vos trajets vers Orly, Roissy
                Charles-de-Gaulle, Paris, gares et rendez-vous professionnels
                avec ponctualité, discrétion et confort.
              </p>

              <p>
                Nos chauffeurs privés interviennent notamment à Melun,
                Fontainebleau, Sénart et dans toute l’Île-de-France.
              </p>

              <p>
                Notre service premium est adapté aux particuliers,
                entreprises, dirigeants, hôtels, événements et déplacements VIP.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-neutral-950 border-y border-amber-500/20 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Nos prestations
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Découvrez nos services de transport privé
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              Des solutions de transport adaptées à vos besoins,
              avec une qualité de service haut de gamme.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group block bg-black border border-amber-500/25 rounded-2xl overflow-hidden hover:border-amber-400 hover:-translate-y-2 transition duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-7 mb-6">
                    {service.description}
                  </p>

                  <span className="text-amber-400 font-semibold text-sm">
                    Découvrir →
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Notre secteur
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Votre chauffeur privé à Melun et en Seine-et-Marne
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-10">
            Depuis Melun, nous assurons vos déplacements vers Fontainebleau,
            Sénart, Paris et les principales destinations d’Île-de-France.
            Nous prenons également en charge vos transferts vers les
            aéroports d’Orly et de Roissy-CDG.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Melun",
              "Fontainebleau",
              "Sénart",
              "Seine-et-Marne (77)",
              "Essonne (91)",
              "Paris",
              "Aéroport Orly",
              "Aéroport CDG",
              "Île-de-France",
            ].map((place) => (
              <span
                key={place}
                className="border border-amber-500/30 rounded-full px-5 py-3 text-amber-300 text-sm"
              >
                {place}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-950 border-y border-amber-500/20 py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Informations pratiques
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-black border border-amber-500/25 rounded-2xl p-6"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4">
                  <span className="text-lg font-semibold text-white group-open:text-amber-400">
                    {faq.question}
                  </span>
                  <span className="text-amber-400 text-2xl">
                    +
                  </span>
                </summary>

                <p className="text-gray-400 leading-8 mt-5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* APPEL À L'ACTION FINAL */}
      <section className="bg-gradient-to-b from-neutral-950 to-black py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-5">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Organisez votre prochain déplacement avec SUD IDF
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Pour un transfert aéroport, un déplacement professionnel
            ou une prestation privée, faites confiance à un service
            de transport premium à Melun et en Île-de-France.
          </p>

          <a
            href="/reservation"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-md transition duration-300"
          >
            Réserver maintenant
          </a>

        </div>
      </section>

    </main>
  );
}
