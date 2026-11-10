
import Image from "next/image";
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
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-business",
  },
};

const services = [
  {
    title: "Rendez-vous d'affaires",
    subtitle: "Déplacements professionnels",
    description:
      "Un chauffeur privé pour vos réunions, rendez-vous clients et déplacements d'affaires en toute sérénité.",
    image: "/images/beauvais-classe-e.png",
    alt: "Mercedes Classe E noire pour déplacements professionnels",
    href: "/chauffeur-prive-paris",
    link: "Découvrir le service",
  },
  {
    title: "Mise à disposition",
    subtitle: "Service sur mesure",
    description:
      "Une mise à disposition avec chauffeur pour vos séminaires, événements, réunions et déplacements multiples.",
    image: "/images/beauvais-classe-s.png",
    alt: "Mercedes Classe S pour transport exécutif",
    href: "/mise-a-disposition",
    link: "Découvrir la prestation",
  },
  {
    title: "Prestations prestige",
    subtitle: "Dirigeants et clients VIP",
    description:
      "Une expérience de transport haut de gamme adaptée aux dirigeants, invités de marque et clients exigeants.",
    image: "/images/beauvais-maybach.png",
    alt: "Mercedes-Maybach pour transport de prestige",
    href: "/transport-vip",
    link: "Découvrir le transport VIP",
  },
];

const faq = [
  {
    question:
      "Proposez-vous un service de chauffeur business pour entreprises ?",
    answer:
      "Oui, nous accompagnons entreprises, dirigeants, hôtels et professionnels avec un service de transport exécutif premium à Paris, en Essonne et en Île-de-France.",
  },
  {
    question:
      "Dans quelles zones intervenez-vous pour les déplacements professionnels ?",
    answer:
      "Nous intervenons notamment à Paris, La Défense, Évry-Courcouronnes, Corbeil-Essonnes, Melun, ainsi qu'aux aéroports Paris-Orly et Paris-Charles-de-Gaulle.",
  },
  {
    question:
      "Peut-on réserver une mise à disposition avec chauffeur ?",
    answer:
      "Oui, une mise à disposition avec chauffeur peut être organisée sur réservation pour les réunions, séminaires, événements et déplacements professionnels nécessitant plusieurs trajets.",
  },
  {
    question: "Comment réserver un chauffeur business ?",
    answer:
      "La réservation s'effectue sur demande afin de préparer la prise en charge, l'horaire, le lieu de départ et la destination selon les besoins du déplacement professionnel.",
  },
];

export default function ChauffeurBusinessPage() {
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
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-amber-500/30 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">

          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
              Transport exécutif · Entreprises · Dirigeants
            </p>

            <h1 className="mb-7 text-4xl font-bold leading-tight md:text-6xl">
              Chauffeur business
              <span className="block text-amber-400">
                premium
              </span>
            </h1>

            <h2 className="mb-6 text-xl font-semibold text-gray-200 md:text-2xl">
              Chauffeur privé pour entreprises et déplacements professionnels
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-gray-300">
              Sud IDF Executive Transport accompagne les entreprises,
              dirigeants, cadres et professionnels avec un service de
              chauffeur business premium à Paris, en Essonne et dans toute
              l’Île-de-France.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/reservation"
                className="rounded-xl bg-amber-500 px-7 py-4 font-bold text-black transition hover:bg-amber-400"
              >
                Réserver un chauffeur
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-amber-500 px-7 py-4 font-bold text-amber-400 transition hover:bg-amber-500 hover:text-black"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-2xl border border-amber-500/30 md:h-[430px]">
            <Image
              src="/images/beauvais-classe-e.png"
              alt="Mercedes Classe E noire pour transport exécutif et déplacements professionnels"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* PRESENTATION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Votre partenaire mobilité
          </p>

          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Un service de chauffeur privé pensé pour les professionnels
          </h2>

          <div className="space-y-6 text-lg leading-8 text-gray-300">

            <p>
              Nous assurons vos déplacements professionnels avec une prise
              en charge organisée sur réservation, en privilégiant la
              ponctualité, la discrétion, le confort et la qualité du service.
            </p>

            <p>
              Notre service s'adapte notamment aux rendez-vous d'affaires,
              réunions, séminaires, salons professionnels, transferts entre
              hôtels et lieux de rendez-vous, ainsi qu'aux déplacements de
              dirigeants et de clients VIP.
            </p>

            <p>
              Les entreprises, hôtels, agences événementielles et
              professionnels du tourisme peuvent également faire appel
              à notre service pour organiser les déplacements de leurs
              clients, collaborateurs ou invités.
            </p>

            <p>
              Nous intervenons notamment à Paris, La Défense,
              Évry-Courcouronnes, Corbeil-Essonnes, Melun, ainsi qu'aux
              aéroports Paris-Orly et Paris-Charles-de-Gaulle.
            </p>

          </div>
        </div>
      </section>

      {/* CARTES PRESTATIONS */}
      <section className="border-y border-amber-500/30 bg-neutral-950 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
              Nos prestations business
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Des solutions de transport adaptées aux entreprises
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              Des prestations exécutives adaptées aux exigences
              des professionnels, dirigeants et entreprises.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group overflow-hidden rounded-2xl border border-amber-500/30 bg-black transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">

                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-400">
                    {service.subtitle}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <span className="font-semibold text-amber-400">
                    {service.link} →
                  </span>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* QUALITE DE SERVICE */}
      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <div className="relative h-[350px] overflow-hidden rounded-2xl border border-amber-500/30">
              <Image
                src="/images/beauvais-classe-s.png"
                alt="Mercedes Classe S, berline de prestige pour les déplacements de dirigeants"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
              L'exigence SUD IDF
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Un service exécutif au cœur de votre activité
            </h2>

            <p className="mb-8 leading-8 text-gray-300">
              Nous mettons à votre disposition un service de transport
              haut de gamme, fiable et confidentiel, pour vous accompagner
              dans tous vos déplacements professionnels.
            </p>

            <ul className="space-y-4 text-gray-300">
              {[
                "Ponctualité et organisation",
                "Discrétion et confidentialité",
                "Confort et équipements premium à bord",
                "Suivi des horaires de vols et de trains",
                "Assistance pour les bagages",
                "Accompagnement de vos clients et collaborateurs",
                "Service flexible et adapté à vos contraintes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="font-bold text-amber-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* MAILLAGE SEO */}
      <section className="border-y border-amber-500/30 bg-neutral-950 px-6 py-16">

        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Découvrez nos autres services
          </p>

          <h2 className="mb-10 text-3xl font-bold">
            Nos solutions de transport privé
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              ["Mise à disposition", "/mise-a-disposition"],
              ["Transport VIP", "/transport-vip"],
              ["Chauffeur privé Paris", "/chauffeur-prive-paris"],
              ["Chauffeur privé Essonne", "/chauffeur-prive-essonne"],
              ["Chauffeur aéroport Orly", "/chauffeur-aeroport-orly"],
              ["Chauffeur aéroport CDG", "/chauffeur-aeroport-cdg"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-amber-500/40 px-6 py-3 text-sm font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-black"
              >
                {label} →
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <h2 className="mb-12 text-center text-3xl font-bold text-amber-400">
            Questions fréquentes sur le chauffeur business
          </h2>

          <div className="space-y-5">

            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-amber-500/30 bg-neutral-950 p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">
                  {item.question}

                  <span className="text-xl text-amber-400 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 leading-7 text-gray-400">
                  {item.answer}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-y border-amber-500/30 bg-gradient-to-r from-neutral-950 via-amber-950/20 to-neutral-950 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            SUD IDF Executive Transport
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Votre partenaire transport pour votre activité professionnelle
          </h2>

          <p className="mb-10 leading-8 text-gray-300">
            Organisez vos déplacements professionnels en toute sérénité
            avec un service de chauffeur business premium, fiable,
            discret et adapté à vos besoins.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              href="/reservation"
              className="rounded-xl bg-amber-500 px-8 py-4 font-bold text-black transition hover:bg-amber-400"
            >
              Réserver un chauffeur
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-amber-500 px-8 py-4 font-bold text-amber-400 transition hover:bg-amber-500 hover:text-black"
            >
              Nous contacter
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
