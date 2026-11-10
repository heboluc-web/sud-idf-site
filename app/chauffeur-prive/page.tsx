
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé Premium en Île-de-France | Sud IDF Executive Transport",

  description:
    "Service de chauffeur privé haut de gamme en Île-de-France. Mercedes Classe E, Classe S, Maybach, Classe V et Range Rover. Transferts aéroports, déplacements professionnels et privés.",

  keywords: [
    "chauffeur privé Île-de-France",
    "VTC premium Île-de-France",
    "chauffeur privé haut de gamme",
    "chauffeur Mercedes Maybach",
    "chauffeur privé Paris",
    "transport VIP Île-de-France",
    "chauffeur privé Essonne",
    "chauffeur business",
  ],

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive",
  },
};

const services = [
  {
    title: "Transferts aéroports",
    subtitle: "Orly, CDG et Beauvais",
    description:
      "Voyagez sereinement avec un chauffeur privé pour vos départs et arrivées aux aéroports.",
    image: "/images/beauvais-classe-s.png",
    alt: "Mercedes Classe S noire pour transfert aéroport premium",
    href: "/transfert-cdg",
    link: "Découvrir nos transferts",
  },
  {
    title: "Déplacements professionnels",
    subtitle: "Une prestation exécutive",
    description:
      "Accompagnement des dirigeants, entreprises et professionnels pour leurs rendez-vous et déplacements.",
    image: "/images/cdg-classe-e.png",
    alt: "Mercedes Classe E pour déplacements professionnels",
    href: "/chauffeur-business",
    link: "Découvrir le service business",
  },
  {
    title: "Transport VIP",
    subtitle: "Élégance et distinction",
    description:
      "Un service haut de gamme adapté aux clients exigeants, événements privés et prestations prestigieuses.",
    image: "/images/beauvais-interieur.png",
    alt: "Intérieur raffiné et confortable d'un véhicule premium",
    href: "/transport-vip",
    link: "Découvrir le transport VIP",
  },
  {
    title: "Mise à disposition",
    subtitle: "Votre chauffeur à la demande",
    description:
      "Profitez d'un véhicule avec chauffeur pour vos rendez-vous, journées professionnelles et déplacements personnalisés.",
    image: "/images/cdg-range-rover.png",
    alt: "Range Rover Autobiography noir",
    href: "/mise-a-disposition",
    link: "Découvrir la prestation",
  },
];

const fleet = [
  {
    name: "Mercedes Classe E",
    description:
      "Élégance et confort pour vos déplacements quotidiens et professionnels.",
    image: "/images/beauvais-classe-e.png",
    alt: "Mercedes Classe E noire",
  },
  {
    name: "Mercedes Classe S",
    description:
      "Un niveau supérieur de raffinement pour vos déplacements exécutifs.",
    image: "/images/beauvais-classe-s.png",
    alt: "Mercedes Classe S noire",
  },
  {
    name: "Mercedes-Maybach",
    description:
      "Une expérience exclusive associant prestige, espace et confort.",
    image: "/images/beauvais-maybach.png",
    alt: "Mercedes-Maybach de prestige",
  },
  {
    name: "Mercedes Classe V",
    description:
      "Un véhicule spacieux pour les familles, groupes et déplacements VIP.",
    image: "/images/beauvais-class-v.png",
    alt: "Mercedes Classe V noire",
  },
  {
    name: "Range Rover Autobiography",
    description:
      "Le caractère d'un SUV haut de gamme associé à un confort exceptionnel.",
    image: "/images/beauvais-range-rover.png",
    alt: "Range Rover Autobiography noir",
  },
];

const faqs = [
  {
    question:
      "Dans quelles villes proposez-vous votre service de chauffeur privé ?",
    answer:
      "Nous intervenons dans toute l'Île-de-France, notamment en Essonne, à Paris, en Seine-et-Marne et dans les principaux pôles économiques de la région.",
  },
  {
    question:
      "Quels véhicules sont disponibles pour vos déplacements ?",
    answer:
      "Notre flotte comprend notamment des Mercedes Classe E, Classe S, Mercedes-Maybach, Mercedes Classe V et Range Rover Autobiography. Le véhicule est adapté à la prestation et à vos besoins.",
  },
  {
    question:
      "Proposez-vous des transferts vers les aéroports ?",
    answer:
      "Oui, nous assurons les transferts vers et depuis Paris-Orly, Paris-Charles-de-Gaulle et Beauvais, sur réservation.",
  },
  {
    question:
      "Votre service est-il adapté aux entreprises ?",
    answer:
      "Oui, nous accompagnons les entreprises, dirigeants, collaborateurs et professionnels pour leurs rendez-vous, événements et déplacements exécutifs.",
  },
  {
    question:
      "Comment réserver votre chauffeur privé ?",
    answer:
      "Vous pouvez effectuer votre réservation directement depuis notre formulaire en ligne ou nous contacter pour organiser votre déplacement.",
  },
];

export default function ChauffeurPrive() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* BANNIÈRE PRINCIPALE */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden">

        <Image
          src="/images/beauvais-maybach.png"
          alt="Mercedes-Maybach noire devant un établissement de prestige"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">

          <div className="max-w-2xl">

            <p className="text-amber-400 uppercase tracking-[0.35em] text-xs font-bold mb-5">
              SUD IDF EXECUTIVE TRANSPORT
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-7">
              Chauffeur privé premium
              <span className="block text-amber-400">
                en Île-de-France
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-8 mb-9">
              L'excellence au service de vos déplacements.
              Découvrez un transport privé haut de gamme,
              alliant élégance, confort, ponctualité et discrétion.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="/reservation"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition"
              >
                Réserver un chauffeur
              </a>

              <a
                href="/contact"
                className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-8 py-4 rounded-lg transition"
              >
                Nous contacter
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="py-20 px-6 border-b border-amber-500/20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold mb-5">
            VOTRE PARTENAIRE TRANSPORT
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Un chauffeur privé pour tous vos déplacements
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            Sud IDF Executive Transport met à votre disposition
            un service de chauffeur privé haut de gamme pour
            vos déplacements personnels et professionnels
            en Île-de-France.
          </p>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            Depuis l'Essonne, Paris et la Seine-et-Marne,
            nous organisons vos transferts vers les aéroports,
            les gares, les hôtels, les entreprises et les
            destinations de votre choix.
          </p>

          <p className="text-gray-300 text-lg leading-8">
            Notre engagement repose sur une prise en charge
            professionnelle, la ponctualité, la discrétion
            et le confort à chaque étape de votre déplacement.
          </p>

        </div>
      </section>

      {/* NOS PRESTATIONS */}
      <section className="py-20 px-6 bg-neutral-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">
              NOS PRESTATIONS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Des solutions adaptées à vos déplacements
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Découvrez nos différentes prestations de transport
              privé et choisissez le service correspondant à vos besoins.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {services.map((service) => (
              <article
                key={service.title}
                className="group bg-black border border-amber-500/25 rounded-2xl overflow-hidden hover:border-amber-400 transition duration-500"
              >

                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-6">

                  <p className="text-amber-400 text-xs uppercase tracking-widest mb-3">
                    {service.subtitle}
                  </p>

                  <h3 className="text-xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-7 text-sm mb-6">
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    className="inline-block text-amber-400 font-semibold text-sm hover:text-amber-300 transition"
                  >
                    {service.link} →
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* EXPÉRIENCE PREMIUM */}
      <section className="py-20 px-6 border-y border-amber-500/20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[350px] md:h-[430px] rounded-2xl overflow-hidden border border-amber-500/30">

            <Image
              src="/images/beauvais-interieur.png"
              alt="Habitacle raffiné et sièges confortables d'un véhicule premium"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

          <div>

            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold mb-5">
              L'EXPÉRIENCE SUD IDF
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-7">
              Bien plus qu'un simple déplacement
            </h2>

            <p className="text-gray-300 leading-8 mb-7">
              Nous accordons une attention particulière
              à la qualité de l'accueil, au confort à bord
              et au professionnalisme de chaque prestation.
            </p>

            <ul className="space-y-4 text-gray-300">

              {[
                "Accueil personnalisé et tenue professionnelle",
                "Ponctualité et organisation des trajets",
                "Assistance pour les bagages",
                "Discrétion et confidentialité",
                "Bouteilles d'eau et équipements de confort à bord",
                "Suivi des horaires de vols et de trains",
                "Transport adapté aux particuliers et entreprises",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>

          </div>
        </div>
      </section>

      {/* NOTRE FLOTTE */}
      <section className="py-20 px-6 bg-neutral-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">
              NOTRE FLOTTE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Des véhicules adaptés à chaque déplacement
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Une sélection de véhicules haut de gamme
              pour répondre à vos exigences de confort,
              d'élégance et d'espace.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {fleet.map((vehicle) => (
              <article
                key={vehicle.name}
                className="bg-black border border-amber-500/25 rounded-xl overflow-hidden hover:border-amber-400 transition"
              >

                <div className="relative h-44">

                  <Image
                    src={vehicle.image}
                    alt={vehicle.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-amber-400 font-bold mb-3">
                    {vehicle.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    {vehicle.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* MAILLAGE INTERNE */}
      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            DÉCOUVREZ NOS AUTRES SERVICES
          </p>

          <h2 className="text-3xl font-bold mb-10">
            Nos solutions de transport privé
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              { label: "VTC Essonne", href: "/vtc-essonne" },
              { label: "Chauffeur privé Paris", href: "/chauffeur-prive-paris" },
              { label: "Chauffeur privé Orly", href: "/chauffeur-prive-orly" },
              { label: "Chauffeur privé CDG", href: "/chauffeur-prive-cdg" },
              { label: "Transfert Orly", href: "/transfert-orly" },
              { label: "Transfert CDG", href: "/transfert-cdg" },
              { label: "Chauffeur business", href: "/chauffeur-business" },
              { label: "Mise à disposition", href: "/mise-a-disposition" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border border-amber-500/40 rounded-full px-5 py-3 text-amber-400 text-sm hover:bg-amber-500 hover:text-black transition"
              >
                {link.label}
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* QUESTIONS FRÉQUENTES */}
      <section className="py-20 px-6 bg-neutral-950 border-y border-amber-500/20">

        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-10">

            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">
              BESOIN D'INFORMATIONS ?
            </p>

            <h2 className="text-3xl font-bold">
              Questions fréquentes
            </h2>

          </div>

          <div className="space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-amber-500/30 rounded-xl bg-black p-5"
              >

                <summary className="cursor-pointer list-none flex justify-between gap-4 font-semibold text-white">

                  <span>{faq.question}</span>

                  <span className="text-amber-400 group-open:rotate-45 transition">
                    +
                  </span>

                </summary>

                <p className="text-gray-400 leading-7 mt-5">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>
      </section>

      {/* APPEL À L'ACTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-neutral-950 to-black">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold mb-5">
            SUD IDF EXECUTIVE TRANSPORT
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-7">
            Votre chauffeur privé en Île-de-France
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-9">
            Organisez votre prochain déplacement avec
            un service de transport premium pensé pour
            votre confort et votre tranquillité.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/reservation"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition"
            >
              Réserver un chauffeur
            </a>

            <a
              href="/contact"
              className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-8 py-4 rounded-lg transition"
            >
              Nous contacter
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}
