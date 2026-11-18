import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Chauffeur VTC Disneyland Paris | Transfert Premium",
  description:
    "Chauffeur VTC Disneyland Paris : transferts privés depuis Paris, les aéroports et toute l’Île-de-France. Service premium, ponctualité et confort.",
  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-vtc-disneyland-paris",
  },
};

export default function ChauffeurVtcDisneylandParis() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-2xl border-b border-amber-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">

          <Link href="/" className="flex flex-col">
            <span className="text-xl tracking-[0.5em] uppercase text-white font-light">
              SUD IDF
            </span>

            <span className="text-[10px] tracking-[0.7em] uppercase text-amber-400 mt-1">
              Executive Transport
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.25em] uppercase text-neutral-300">
            <Link href="/" className="hover:text-amber-400 transition">
              Accueil
            </Link>

            <Link href="/transfert-orly" className="hover:text-amber-400 transition">
              Orly
            </Link>

            <Link href="/transfert-cdg" className="hover:text-amber-400 transition">
              CDG
            </Link>

            <Link href="/reservation" className="hover:text-amber-400 transition">
              Réserver
            </Link>

            <Link href="/contact" className="hover:text-amber-400 transition">
              Contact
            </Link>
          </div>

        </div>
      </nav>


      
{/* ================= HERO ================= */}
<section className="relative isolate flex min-h-[680px] h-[82vh] max-h-[950px] w-full items-center overflow-hidden">
  <Image
    src="/images/disneyland-paris-hero.png"
    alt="Mercedes Classe V noire devant le château de Disneyland Paris"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
    <div className="max-w-3xl">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-amber-400 md:text-sm">
        SUD IDF EXECUTIVE TRANSPORT
      </p>

      <h1 className="text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
        Chauffeur privé
        <span className="mt-2 block font-semibold text-amber-400">
          Disneyland Paris
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-100 md:text-xl">
        Rejoignez Disneyland Paris dans un véhicule haut de gamme avec un
        chauffeur professionnel. Transferts depuis Paris, les aéroports,
        les gares, les hôtels et toute l’Île-de-France.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/reservation"
          className="rounded-md border border-amber-400 bg-amber-400 px-8 py-4 text-center text-sm font-semibold text-black transition hover:bg-transparent hover:text-amber-400"
        >
          Réserver votre chauffeur
        </Link>

        <Link
          href="/contact"
          className="rounded-md border border-white/70 bg-black/20 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-28 px-6 bg-neutral-950 border-t border-amber-500/10">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-amber-400 tracking-[0.35em] uppercase font-light mb-10 text-center">
            Votre chauffeur privé pour Disneyland Paris
          </h2>

          <div className="space-y-6 text-neutral-300 leading-8 text-base md:text-lg">

            <p>
              Vous recherchez un <strong className="text-white">
                chauffeur VTC Disneyland Paris
              </strong>{" "}
              pour rejoindre le parc dans les meilleures conditions ?
              SUD IDF Executive Transport vous accompagne pour vos déplacements
              privés et professionnels vers Disneyland Paris.
            </p>

            <p>
              Notre service de chauffeur privé vous permet de voyager dans un
              véhicule confortable, avec une prise en charge adaptée à votre
              horaire et à votre lieu de départ. Paris, aéroports, gares ou
              communes d’Île-de-France : nous organisons votre transfert vers
              Disneyland Paris selon vos besoins.
            </p>

            <p>
              Pour une journée en famille, un séjour à Disneyland Paris,
              un déplacement professionnel ou une prestation VIP, nous
              privilégions la ponctualité, le confort et la discrétion.
            </p>

          </div>
        </div>
      </section>


    
{/* ================= SERVICES ================= */}
<section className="border-t border-amber-500/10 bg-black px-6 py-28">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
        Nos prestations
      </p>

      <h2 className="mt-5 text-3xl font-light text-white md:text-5xl">
        Votre chauffeur pour chaque étape de votre séjour
      </h2>

      <p className="mt-6 text-base leading-8 text-neutral-400">
        Depuis Paris, les aéroports ou les gares, profitez d'une prise en
        charge personnalisée vers Disneyland Paris et les hôtels du secteur
        de Val d'Europe.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Paris → Disneyland Paris",
          href: "/chauffeur-prive-paris",
          description:
            "Une Mercedes Classe S pour rejoindre le parc depuis Paris dans un cadre confortable et raffiné.",
          image: "/images/disneyland-paris-transfert-paris.png",
          alt: "Mercedes Classe S à Paris avec la tour Eiffel en arrière-plan",
        },
        {
          title: "Aéroports → Disneyland",
          href: "/reservation",
          description:
            "Votre transfert depuis Orly, Roissy Charles-de-Gaulle ou Beauvais avec un véhicule premium.",
          image: "/images/disneyland-paris-aeroports.png",
          alt: "Range Rover noir devant le terminal de l'aéroport CDG",
        },
        {
          title: "Gare de Marne-la-Vallée",
          href: "/chauffeur-prive-gare",
          description:
            "Une prise en charge organisée à la gare TGV de Marne-la-Vallée–Chessy pour rejoindre votre destination.",
          image: "/images/disneyland-paris-gare.png",
          alt: "Mercedes Classe V devant la gare de Marne-la-Vallée Chessy",
        },
        {
          title: "Hôtels Disneyland Paris",
          href: "/mise-a-disposition",
          description:
            "Un service de chauffeur privé pour vos arrivées et départs des hôtels de Disneyland Paris.",
          image: "/images/disneyland-paris-hotels.png",
          alt: "Berline de prestige devant le Disneyland Hotel",
        },
      ].map((service) => (
        <Link
          key={service.title}
          href={service.href}
          aria-label={`Découvrir : ${service.title}`}
          className="group block overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-amber-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-amber-400">
              {service.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-400">
              {service.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* ================= EXPERIENCE ================= */}
      <section className="relative isolate overflow-hidden py-32 px-6 border-t border-amber-500/10">

        <Image
          src="/images/disneyland-paris-hero.png"
          alt="Véhicule premium devant Disneyland Paris"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/65" />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-amber-400 uppercase tracking-[0.4em] text-xs mb-6">
              UNE EXPÉRIENCE PREMIUM
            </p>

            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Un trajet vers Disneyland Paris pensé pour votre confort
            </h2>

            <div className="space-y-5 text-neutral-400 leading-7">

              <p>
                Votre chauffeur vous accueille à l’adresse indiquée lors de
                votre réservation et vous accompagne jusqu’à votre destination.
              </p>

              <p>
                Nous adaptons la prestation au nombre de passagers, aux bagages
                et aux contraintes particulières de votre déplacement.
              </p>

              <p>
                Notre objectif est simple : vous permettre de commencer votre
                séjour à Disneyland Paris dans les meilleures conditions.
              </p>

            </div>

          </div>


          <div className="bg-black/85 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-10">

            <h3 className="text-2xl text-amber-400 mb-8">
              Pourquoi choisir notre service ?
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-white font-medium mb-2">
                  Chauffeur professionnel
                </p>

                <p className="text-neutral-500 text-sm leading-6">
                  Une prise en charge sérieuse et une attention particulière
                  portée à la ponctualité.
                </p>
              </div>


              <div>
                <p className="text-white font-medium mb-2">
                  Confort premium
                </p>

                <p className="text-neutral-500 text-sm leading-6">
                  Une flotte adaptée aux déplacements privés, professionnels
                  et aux familles.
                </p>
              </div>


              <div>
                <p className="text-white font-medium mb-2">
                  Réservation simple
                </p>

                <p className="text-neutral-500 text-sm leading-6">
                  Demandez votre trajet directement depuis notre formulaire
                  de réservation.
                </p>
              </div>


              <div>
                <p className="text-white font-medium mb-2">
                  Service personnalisé
                </p>

                <p className="text-neutral-500 text-sm leading-6">
                  Chaque demande est étudiée selon votre lieu de départ,
                  votre destination et vos besoins.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SEO LOCAL ================= */}
      <section className="py-32 px-6 bg-black border-t border-amber-500/10">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-amber-400 tracking-[0.35em] uppercase font-light mb-12 text-center">
            Chauffeur Disneyland depuis l’Île-de-France
          </h2>

          <div className="text-neutral-400 leading-8 space-y-6">

            <p>
              SUD IDF Executive Transport propose un service de{" "}
              <strong className="text-white">
                chauffeur privé Disneyland Paris
              </strong>{" "}
              pour les clients au départ de Paris, de l’Essonne, de
              Seine-et-Marne et plus largement de toute l’Île-de-France.
            </p>

            <p>
              Nous pouvons organiser des transferts depuis les aéroports,
              les gares, les hôtels, les entreprises ou votre domicile.
              Le trajet est préparé en fonction de votre réservation et
              de vos horaires.
            </p>

            <p>
              Vous souhaitez rejoindre Disneyland Paris depuis Orly ou CDG ?
              Consultez également nos services de transfert aéroport.
            </p>

          </div>


          
<div className="grid md:grid-cols-2 gap-8 mt-12">

  <Link
    href="/transfert-orly"
    className="group overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 transition hover:border-amber-400"
  >
    <div className="relative h-64 overflow-hidden">
      <Image
        src="/images/orly-hero.png"
        alt="Véhicule premium pour un transfert vers Orly"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <div className="p-7">
      <h3 className="text-lg text-amber-400 mb-3">
        Transfert depuis Orly
      </h3>

      <p className="text-neutral-400 leading-7">
        Chauffeur privé pour vos déplacements depuis ou vers l’aéroport
        Paris-Orly.
      </p>
    </div>
  </Link>

  <Link
    href="/transfert-cdg"
    className="group overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-950 transition hover:border-amber-400"
  >
    <div className="relative h-64 overflow-hidden">
      <Image
        src="/images/cdg-range-rover.png"
        alt="Véhicule premium pour un transfert vers CDG"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <div className="p-7">
      <h3 className="text-lg text-amber-400 mb-3">
        Transfert depuis CDG
      </h3>

      <p className="text-neutral-400 leading-7">
        Service chauffeur premium depuis ou vers Roissy
        Charles-de-Gaulle.
      </p>
    </div>
  </Link>

</div>
          </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-32 px-6 bg-neutral-950 border-t border-amber-500/10">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-amber-400 tracking-[0.35em] uppercase font-light mb-16 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6">

            <div className="border border-amber-500/20 rounded-3xl p-8 bg-black">
              <h3 className="text-xl text-white mb-4">
                Proposez-vous un chauffeur VTC pour Disneyland Paris ?
              </h3>

              <p className="text-neutral-400 leading-7">
                Oui. Nous proposons des transferts privés vers Disneyland
                Paris depuis Paris, les aéroports, les gares et différentes
                communes d’Île-de-France.
              </p>
            </div>


            <div className="border border-amber-500/20 rounded-3xl p-8 bg-black">
              <h3 className="text-xl text-white mb-4">
                Peut-on réserver un chauffeur depuis Orly ou CDG ?
              </h3>

              <p className="text-neutral-400 leading-7">
                Oui. Nous organisons des transferts privés depuis Paris-Orly
                et Roissy Charles-de-Gaulle vers Disneyland Paris.
              </p>
            </div>


            <div className="border border-amber-500/20 rounded-3xl p-8 bg-black">
              <h3 className="text-xl text-white mb-4">
                Peut-on être pris en charge à notre hôtel ?
              </h3>

              <p className="text-neutral-400 leading-7">
                Oui. Indiquez simplement l’adresse de prise en charge lors
                de votre réservation afin que nous puissions organiser
                votre transfert.
              </p>
            </div>


            <div className="border border-amber-500/20 rounded-3xl p-8 bg-black">
              <h3 className="text-xl text-white mb-4">
                Comment réserver votre chauffeur Disneyland Paris ?
              </h3>

              <p className="text-neutral-400 leading-7">
                Vous pouvez effectuer votre demande directement depuis notre
                formulaire de réservation. Nous vous confirmons ensuite les
                modalités de votre prestation.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-32 px-6 bg-black border-t border-amber-500/20 text-center">

        <p className="text-amber-400 uppercase tracking-[0.4em] text-xs mb-6">
          DISNEYLAND PARIS
        </p>

        <h2 className="text-3xl md:text-5xl font-light mb-8">
          Réservez votre chauffeur privé
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10 leading-7">
          Préparez votre transfert vers Disneyland Paris avec SUD IDF
          Executive Transport.
        </p>

        <Link
          href="/reservation"
          className="inline-block bg-amber-500 text-black px-12 py-5 rounded-full tracking-[0.3em] text-xs uppercase hover:bg-amber-400 transition-all duration-500"
        >
          RÉSERVER MAINTENANT
        </Link>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-amber-500/20 bg-black py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-xl uppercase tracking-[0.4em] text-white font-light">
            SUD IDF
          </h3>

          <p className="mt-3 text-xs uppercase tracking-[0.5em] text-amber-400">
            Executive Transport
          </p>

          <p className="mt-8 text-sm text-neutral-500">
            Chauffeur privé premium en Île-de-France
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-neutral-500">

            <Link href="/" className="hover:text-amber-400 transition">
              Accueil
            </Link>

            <Link
              href="/reservation"
              className="hover:text-amber-400 transition"
            >
              Réservation
            </Link>

            <Link
              href="/contact"
              className="hover:text-amber-400 transition"
            >
              Contact
            </Link>

            <Link
              href="/mentions-legales"
              className="hover:text-amber-400 transition"
            >
              Mentions légales
            </Link>

          </div>

          <p className="mt-10 text-xs text-neutral-600">
            © 2026 SUD IDF EXECUTIVE TRANSPORT
          </p>

        </div>

      </footer>

    </main>
  );
}