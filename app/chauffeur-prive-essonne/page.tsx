
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chauffeur Privé en Essonne | Sud IDF Executive Transport",
  description:
    "Service de chauffeur privé haut de gamme en Essonne et en Île-de-France. Transferts Orly, CDG, déplacements business et transport premium 24h/24.",
  keywords: [
    "chauffeur privé Essonne",
    "VTC Essonne",
    "chauffeur privé Corbeil-Essonnes",
    "transfert Orly Essonne",
    "transfert CDG Essonne",
    "chauffeur business Essonne",
    "transport premium Essonne",
  ],
  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive-essonne",
  },
};

const services = [
  {
    title: "Transfert aéroport Orly",
    description:
      "Un chauffeur privé pour vos départs et arrivées à l'aéroport de Paris-Orly, avec un accueil personnalisé et une prise en charge soignée.",
    image: "/images/orly-accueil.png",
    alt: "Service de chauffeur privé et transfert aéroport",
    href: "/transfert-orly",
    link: "Découvrir le transfert Orly",
  },
  {
    title: "Transfert aéroport CDG",
    description:
      "Rejoignez Roissy Charles-de-Gaulle depuis l'Essonne dans une Mercedes Classe V, avec confort, ponctualité et discrétion.",
    image: "/images/essonne-chauffeur.png",
    alt: "Chauffeur professionnel devant une Mercedes Classe V noire",
    href: "/transfert-cdg",
    link: "Découvrir le transfert CDG",
  },
  {
    title: "Chauffeur business",
    description:
      "Une prestation exécutive destinée aux dirigeants, entreprises, hôtels, collaborateurs et déplacements professionnels.",
    image: "/images/essonne-interieur.png",
    alt: "Intérieur beige raffiné de Mercedes Classe V",
    href: "/chauffeur-business",
    link: "Découvrir le service business",
  },
  {
    title: "Réservation privée",
    description:
      "Organisez vos déplacements personnels ou professionnels avec une réservation simple et une prestation adaptée à vos besoins.",
    image: "/images/vehicule-interieur.png",
    alt: "Habitacle confortable d'un véhicule haut de gamme",
    href: "/reservation",
    link: "Réserver votre chauffeur",
  },
];

const faqs = [
  {
    question: "Proposez-vous des transferts vers Orly et CDG ?",
    answer:
      "Oui, nous assurons les transferts premium vers les aéroports d’Orly et Roissy Charles-de-Gaulle depuis toute l’Essonne et l’Île-de-France.",
  },
  {
    question: "Intervenez-vous dans toute l’Essonne ?",
    answer:
      "Nos chauffeurs privés interviennent à Corbeil-Essonnes, Évry-Courcouronnes et dans les principales communes de l’Essonne, ainsi que dans toute l’Île-de-France.",
  },
  {
    question: "Peut-on réserver un chauffeur business ?",
    answer:
      "Oui, notre service business est destiné aux entreprises, dirigeants, hôtels, séminaires et déplacements professionnels.",
  },
  {
    question: "Êtes-vous disponible 24h/24 ?",
    answer:
      "Notre service de chauffeur privé premium est disponible 24h/24 et 7j/7 sur réservation.",
  },
];

export default function ChauffeurPriveEssonne() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* DONNEES STRUCTUREES FAQ */}
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

      {/* HERO */}
      <section className="relative min-h-[570px] md:min-h-[650px] flex items-center overflow-hidden">

        <Image
          src="/images/essonne-hero.png"
          alt="Service de chauffeur privé haut de gamme en Essonne avec Mercedes Classe V"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">

          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-7">
            Chauffeur privé haut de gamme en Essonne
          </h1>

          <p className="text-gray-200 text-lg md:text-xl leading-8 max-w-2xl mb-9">
            L'excellence au service de vos déplacements professionnels.
            Profitez d'un transport privé premium en Mercedes Classe V,
            pour vos transferts aéroport, rendez-vous professionnels
            et déplacements personnels.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/reservation"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition duration-300"
            >
              Réserver un chauffeur
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-8 py-4 rounded-lg transition duration-300"
            >
              Nous contacter
            </a>

          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Votre partenaire transport
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-7">
            Un service de chauffeur privé en Essonne pensé pour votre confort
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-5">
            SUD IDF Executive Transport vous accompagne pour vos
            déplacements personnels, professionnels et événementiels
            au départ ou à destination de l'Essonne.
          </p>

          <p className="text-gray-400 leading-8">
            Depuis Corbeil-Essonnes, Évry-Courcouronnes et les communes
            environnantes, nous organisons vos transferts vers Paris,
            les aéroports, les gares, les hôtels et vos lieux de rendez-vous.
            Chaque prestation est réalisée avec une attention particulière
            portée à la ponctualité, à la discrétion et à la qualité du service.
          </p>

        </div>
      </section>

      {/* CARTES SERVICES CLIQUABLES */}
      <section className="bg-neutral-950 border-y border-amber-500/20 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Nos prestations
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Découvrez nos services de transport privé
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto leading-7">
              Des solutions de transport adaptées à vos besoins,
              avec une qualité de service haut de gamme.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group block bg-black border border-amber-500/25 rounded-2xl overflow-hidden hover:border-amber-400 hover:-translate-y-2 transition duration-300 shadow-lg"
              >

                <div className="relative aspect-[4/3] overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-amber-400 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-7 mb-6">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm group-hover:text-amber-300">
                    {service.link}
                    <span aria-hidden="true">→</span>
                  </span>

                </div>

              </a>
            ))}

          </div>
        </div>
      </section>

      {/* EXPERIENCE ET CONFORT */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="relative min-h-[350px] md:min-h-[470px] rounded-2xl overflow-hidden border border-amber-500/30">

            <Image
              src="/images/essonne-chauffeur.png"
              alt="Chauffeur professionnel en tenue devant une Mercedes Classe V noire"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

          <div>

            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              L'expérience SUD IDF
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-7">
              Bien plus qu'un simple déplacement
            </h2>

            <p className="text-gray-300 leading-8 mb-7">
              Nous mettons l'accent sur la qualité de l'accueil,
              le confort du véhicule et le professionnalisme
              de chaque prestation.
            </p>

            <ul className="space-y-5 text-gray-300">

              {[
                "Accueil personnalisé et tenue professionnelle",
                "Ponctualité et suivi des vols et des trains",
                "Assistance pour les bagages",
                "Confort, discrétion et confidentialité",
                "Bouteilles d'eau et équipements de confort à bord",
                "Transport adapté aux particuliers et aux entreprises",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}

            </ul>

          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="bg-neutral-950 py-20 border-y border-amber-500/20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Notre secteur
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-7">
            Votre chauffeur privé en Essonne et en Île-de-France
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-9">
            Nous intervenons notamment à Corbeil-Essonnes,
            Évry-Courcouronnes et dans les communes de l'Essonne.
            Nos prestations couvrent également Paris, la Seine-et-Marne,
            les aéroports d'Orly et de Roissy-CDG.
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {[
              "Corbeil-Essonnes",
              "Évry-Courcouronnes",
              "Essonne (91)",
              "Seine-et-Marne (77)",
              "Paris",
              "Aéroport Orly",
              "Aéroport CDG",
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
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="text-center mb-12">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Informations pratiques
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Questions fréquentes
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-neutral-950 border border-amber-500/25 rounded-2xl p-6 md:p-7"
            >

              <h3 className="text-lg md:text-xl text-amber-400 font-semibold mb-4">
                {faq.question}
              </h3>

              <p className="text-gray-400 leading-8">
                {faq.answer}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* APPEL A L'ACTION FINAL */}
      <section className="border-t border-amber-500/30 bg-gradient-to-b from-neutral-950 to-black py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Organisez votre prochain déplacement avec SUD IDF
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-9">
            Pour un transfert aéroport, un déplacement professionnel
            ou une prestation privée, faites confiance à un service
            de transport premium en Essonne et en Île-de-France.
          </p>

          <a
            href="/reservation"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 rounded-lg transition duration-300"
          >
            Réserver maintenant
          </a>

        </div>
      </section>

    </main>
  );
}
