
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé Fontainebleau | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé haut de gamme à Fontainebleau et en Île-de-France. Transferts Orly, CDG, déplacements business et transport premium 24h/24.",

  keywords: [
    "chauffeur privé Fontainebleau",
    "VTC Fontainebleau",
    "transfert Orly Fontainebleau",
    "transfert CDG Fontainebleau",
    "chauffeur business Fontainebleau",
    "transport premium Fontainebleau",
    "chauffeur privé Seine-et-Marne",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive-fontainebleau",
  },
};

const services = [
  {
    title: "Transfert aéroport Orly",
    description:
      "Un chauffeur privé pour vos départs et arrivées à l'aéroport de Paris-Orly, avec un accueil personnalisé et une prise en charge soignée.",
    image: "/images/orly-accueil.png",
    alt: "Véhicule avec chauffeur pour transfert vers l'aéroport d'Orly",
    href: "/transfert-orly",
    link: "Découvrir le transfert Orly",
  },
  {
    title: "Transfert aéroport CDG",
    description:
      "Rejoignez Roissy Charles-de-Gaulle depuis Fontainebleau dans un véhicule haut de gamme, avec confort, ponctualité et discrétion.",
    image: "/images/cdg-hero-premium.png",
    alt: "Véhicule haut de gamme pour transfert vers Roissy CDG",
    href: "/transfert-cdg",
    link: "Découvrir le transfert CDG",
  },
  {
    title: "Chauffeur business",
    description:
      "Une prestation exécutive destinée aux dirigeants, entreprises, hôtels, collaborateurs et déplacements professionnels.",
    image: "/images/essonne-interieur.png",
    alt: "Intérieur raffiné et confortable d'un véhicule Mercedes",
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
      "Oui, nous assurons les transferts premium vers les aéroports d’Orly et Roissy Charles-de-Gaulle depuis Fontainebleau et toute la Seine-et-Marne.",
  },
  {
    question: "Intervenez-vous uniquement à Fontainebleau ?",
    answer:
      "Nos chauffeurs privés interviennent à Fontainebleau, Melun, Sénart ainsi que dans toute l’Île-de-France.",
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

export default function ChauffeurPriveFontainebleau() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* DONNEES STRUCTUREES FAQ SEO */}
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

      {/* HERO IMMERSIF */}
      <section className="relative isolate w-full min-h-[620px] h-[78vh] max-h-[900px] overflow-hidden">

        <Image
          src="/images/fontainebleau-chateau-hero.png"
          alt="Range Rover noir avec chauffeur privé devant le château de Fontainebleau"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl pt-12">

            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
              SUD IDF EXECUTIVE TRANSPORT
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Chauffeur privé
              <span className="block text-amber-400">
                à Fontainebleau
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-8 max-w-2xl mb-10">
              L'excellence au service de vos déplacements professionnels.
              Profitez d'un transport privé premium pour vos transferts
              aéroport, rendez-vous professionnels et déplacements personnels.
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

      {/* PRESENTATION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm mb-4">
              Votre partenaire transport
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              Votre chauffeur privé à Fontainebleau
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-8">
              <p>
                Sud IDF Executive Transport propose un service de chauffeur
                privé premium à Fontainebleau pour tous vos déplacements
                personnels, professionnels et événements privés.
              </p>

              <p>
                Nous assurons vos trajets vers Orly, Roissy
                Charles-de-Gaulle, Paris, les gares et vos rendez-vous
                professionnels avec ponctualité, discrétion et confort.
              </p>

              <p>
                Nos chauffeurs privés interviennent notamment à
                Fontainebleau, Melun, Sénart et dans toute l'Île-de-France.
              </p>
            </div>
          </div>

          <div className="relative min-h-[350px] md:min-h-[470px] rounded-2xl overflow-hidden border border-amber-500/30">
            <Image
              src="/images/essonne-chauffeur.png"
              alt="Chauffeur professionnel devant un véhicule haut de gamme"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* CARTES SERVICES */}
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
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative min-h-[350px] md:min-h-[470px] rounded-2xl overflow-hidden border border-amber-500/30">
            <Image
              src="/images/essonne-interieur.png"
              alt="Intérieur beige raffiné d'un véhicule Mercedes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              L'expérience SUD IDF
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Bien plus qu'un simple déplacement
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-8">
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
      <section className="bg-neutral-950 py-24 px-6 border-y border-amber-500/20">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Notre secteur
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Votre chauffeur privé à Fontainebleau et en Île-de-France
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-10">
            Nos chauffeurs privés interviennent à Fontainebleau,
            Melun, Sénart et dans les communes de Seine-et-Marne.
            Nous assurons également vos déplacements vers Paris,
            les aéroports d'Orly et de Roissy-CDG.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Fontainebleau",
              "Melun",
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
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Informations pratiques
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-neutral-950 border border-amber-500/25 rounded-2xl p-7"
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

        </div>
      </section>

      {/* APPEL A L'ACTION FINAL */}
      <section className="border-t border-amber-500/30 bg-gradient-to-b from-neutral-950 to-black py-24 px-6">
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
            de transport premium à Fontainebleau et en Île-de-France.
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
