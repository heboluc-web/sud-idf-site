import Link from "next/link";

export const metadata = {
  title: "Service Greeter aéroport et gare | SUD IDF Executive Transport",
  description:
    "Accueil personnalisé et assistance Greeter à l'aéroport et en gare : accompagnement à l'arrivée, formalités, bagages et remise à votre chauffeur privé.",
  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/service-greeter",
  },
  keywords: [
    "service greeter aéroport",
    "greeter gare Paris",
    "accueil VIP aéroport",
    "assistance arrivée aéroport",
    "accueil personnalisé gare",
    "meet and greet Paris",
    "SUD IDF Executive Transport",
  ],
};

const etapes = [
  {
    numero: "01",
    titre: "Accueil dès votre arrivée",
    texte:
      "Un agent Greeter vous accueille au point de rendez-vous convenu dès votre arrivée en aéroport ou en gare. Facilement identifiable grâce à son badge professionnel, il vous accompagne dès le début de votre parcours.",
    image: "/images/greeter-accueil-aeroport.png",
    alt: "Agent Greeter accueillant un voyageur dans le terminal d'un aéroport",
  },
  {
    numero: "02",
    titre: "Accompagnement dans les formalités",
    texte:
      "Votre Greeter vous oriente et vous accompagne dans les différentes étapes de votre parcours, notamment vers les services de contrôle aux frontières et de douane, selon les procédures et autorisations applicables.",
    image: "/images/greeter-assistance-formalites.png",
    alt: "Agent Greeter accompagnant un voyageur dans son parcours au sein de l'aéroport",
  },
  {
    numero: "03",
    titre: "Assistance à la récupération des bagages",
    texte:
      "À l'aéroport, votre agent vous accompagne jusqu'à la zone de livraison des bagages et vous assiste dans leur récupération afin de faciliter la suite de votre arrivée.",
    image: "/images/greeter-recuperation-bagages.png",
    alt: "Agent Greeter accompagnant un voyageur à la zone de récupération des bagages",
  },
  {
    numero: "04",
    titre: "Remise personnalisée à votre chauffeur",
    texte:
      "Une fois votre parcours d'arrivée terminé, le Greeter vous accompagne jusqu'au point de rencontre avec votre chauffeur SUD IDF Executive Transport. Le chauffeur prend ensuite le relais pour votre transfert.",
    image: "/images/greeter-remise-au-chauffeur.png",
    alt: "Agent Greeter présentant le voyageur à son chauffeur privé devant un véhicule haut de gamme",
  },
];

const avantages = [
  {
    titre: "Un temps précieux mieux préservé",
    texte:
      "Un accompagnement organisé pour limiter les recherches, les hésitations et les attentes évitables au cours de votre arrivée.",
  },
  {
    titre: "Un accueil personnalisé",
    texte:
      "Un interlocuteur dédié vous accueille et vous guide dès le point de rendez-vous convenu.",
  },
  {
    titre: "Un parcours plus fluide",
    texte:
      "Vous êtes orienté à travers les différentes étapes de votre arrivée, de l'accueil jusqu'à la récupération de vos bagages.",
  },
  {
    titre: "Une transition coordonnée",
    texte:
      "Votre accompagnement se poursuit jusqu'à la rencontre avec votre chauffeur privé, pour une continuité entre l'accueil et le transport.",
  },
  {
    titre: "Un service adapté aux voyageurs exigeants",
    texte:
      "Une solution appréciée des dirigeants, voyageurs internationaux, familles, délégations et clients d'entreprise.",
  },
  {
    titre: "Aéroport et gare",
    texte:
      "Un accueil personnalisé peut être organisé à l'aéroport comme en gare, selon les possibilités d'accès et les modalités du site concerné.",
  },
];

export default function ServiceGreeterPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden px-6 py-16 md:min-h-[680px] md:py-16">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/greeter-accueil-aeroport.png')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400 md:text-sm">
              SUD IDF · ACCUEIL PERSONNALISÉ · SERVICE GREETER
            </p>
            <h1 className="mb-6 text-4xl font-light leading-tight tracking-wide md:text-5xl lg:text-6xl">
              Service Greeter
              <span className="mt-2 block max-w-3xl font-serif italic text-3xl leading-tight text-amber-400 md:text-4xl lg:text-5xl">
                L'accueil VIP qui change votre expérience du voyage
              </span>
            </h1>
            <div className="mb-6 h-px w-32 bg-gradient-to-r from-amber-400 to-transparent" />
            <p className="max-w-2xl text-base leading-7 text-neutral-100 md:text-lg md:leading-8">
              Dès votre arrivée, un agent d'accueil dédié vous accompagne dans
              votre parcours à l'aéroport ou en gare, facilite vos démarches et
              vous conduit jusqu'à votre chauffeur privé.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reservation/greeter"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:brightness-110"
              >
                Réserver votre accueil Greeter
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-amber-400/80 px-8 py-4 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-amber-400 hover:text-black"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/15 bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">
              Votre temps, notre priorité
            </p>
            <h2 className="mb-8 text-3xl font-light leading-tight tracking-wide md:text-5xl">
              Ne perdez plus de temps à chercher votre chemin
            </h2>
            <div className="space-y-5 text-base leading-8 text-neutral-300">
              <p>
                Voyager doit rester une expérience agréable. Pourtant, à
                l'arrivée, les déplacements dans un grand terminal, les
                formalités, l'orientation et la récupération des bagages peuvent
                prendre du temps et devenir fatigants.
              </p>
              <p>
                Avec le service Greeter de SUD IDF Executive Transport, un
                agent d'accueil dédié vous attend au point de rendez-vous
                convenu. Il vous accompagne dans les différentes étapes de
                votre arrivée et facilite votre parcours jusqu'à votre
                chauffeur.
              </p>
              <p>
                Vous bénéficiez ainsi d'un accompagnement personnalisé pour
                réduire les attentes évitables, éviter les recherches inutiles
                et rejoindre plus sereinement votre véhicule.
              </p>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-amber-500/25">
            <img
              src="/images/greeter-accueil-gare.png"
              alt="Agent Greeter accueillant un voyageur dans une grande gare"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 right-7 text-sm uppercase tracking-[0.2em] text-white">
              Un accueil dédié dès votre arrivée
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">
              Un accompagnement à chaque étape
            </p>
            <h2 className="text-3xl font-light tracking-wide md:text-5xl">
              Comment fonctionne le service Greeter ?
            </h2>
            <p className="mt-6 leading-8 text-neutral-400">
              De votre arrivée à la remise à votre chauffeur, un agent dédié
              vous accompagne tout au long du parcours prévu.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {etapes.map((item) => (
              <article
                key={item.numero}
                className="group overflow-hidden rounded-3xl border border-amber-500/20 bg-neutral-950"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-amber-400">
                    ÉTAPE {item.numero}
                  </p>
                  <h3 className="mb-4 text-xl text-amber-400">{item.titre}</h3>
                  <p className="text-sm leading-7 text-neutral-400">{item.texte}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-amber-500/20 px-6 py-24">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/greeter-remise-au-chauffeur.png')" }}
        />
        <div className="absolute inset-0 -z-10 bg-black/75" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">
              L'exigence SUD IDF
            </p>
            <h2 className="mb-7 text-3xl font-light leading-tight md:text-5xl">
              Deux professionnels, une prise en charge coordonnée
            </h2>
            <p className="max-w-xl text-base leading-8 text-neutral-200">
              Le Greeter et le chauffeur ont des missions complémentaires. Le
              Greeter assure l'accueil et l'accompagnement dans le terminal ou
              la gare, puis vous conduit jusqu'au point de rencontre convenu.
              Votre chauffeur privé prend ensuite le relais pour assurer votre
              transport jusqu'à destination.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-400/40 bg-black/75 p-8 shadow-2xl backdrop-blur-sm md:p-10">
            <h3 className="mb-8 text-xl tracking-[0.2em] text-amber-400">
              Les avantages
            </h3>
            <ul className="space-y-5 text-sm leading-7 text-neutral-100 md:text-base">
              {avantages.map((item) => (
                <li key={item.titre} className="flex gap-3">
                  <span className="text-amber-400">✓</span>
                  <span>
                    <strong className="font-semibold text-white">{item.titre} :</strong>{" "}
                    {item.texte}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">
              Aéroport et gare
            </p>
            <h2 className="mb-7 text-3xl font-light leading-tight md:text-5xl">
              Une arrivée accompagnée, où que vous arriviez
            </h2>
            <p className="text-base leading-8 text-neutral-300">
              Que vous arriviez dans un aéroport parisien ou dans une grande
              gare, le service Greeter peut être organisé selon les possibilités
              d'accès, les règles et les modalités propres au site concerné.
              Les conditions d'intervention sont confirmées lors de
              l'organisation de votre prestation.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-amber-500/25">
            <img
              src="/images/greeter-accueil-gare.png"
              alt="Accueil personnalisé d'un voyageur en gare par un agent Greeter"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-amber-500/20 bg-black px-6 py-24 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">
          Une prestation exclusive
        </p>
        <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-light leading-tight md:text-5xl">
          L'accueil personnalisé qui vous fait gagner du temps
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-neutral-300">
          Réservez votre service Greeter en complément de votre transfert
          SUD IDF Executive Transport et profitez d'un accompagnement dédié
          dès votre arrivée.
        </p>
        <div className="mx-auto mb-10 max-w-md rounded-3xl border border-amber-400/50 bg-neutral-950 p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-400">
            Service Greeter · 1 à 4 passagers
          </p>
          <p className="text-5xl font-light text-amber-400">300 € TTC</p>
          <p className="mt-3 text-sm text-neutral-400">
            Par prestation et par prise en charge
          </p>
        </div>
        <Link
          href="/reservation/greeter"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 px-10 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:brightness-110"
        >
          Réserver votre service Greeter
        </Link>
      </section>

      <section className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            SUD IDF Executive Transport
          </p>
          <h2 className="mx-auto mb-5 max-w-3xl text-center text-2xl font-semibold text-white md:text-3xl">
            Découvrez également nos autres services
          </h2>
          <nav
            aria-label="Liens vers nos autres services"
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { href: "/chauffeur-prive-mise-a-disposition", title: "Mise à disposition avec chauffeur privé" },
              { href: "/chauffeur-business", title: "Chauffeur business" },
              { href: "/transport-vip", title: "Transport VIP" },
              { href: "/transfert-orly", title: "Transfert Orly" },
              { href: "/transfert-cdg", title: "Transfert CDG" },
              { href: "/chauffeur-prive-paris", title: "Chauffeur privé à Paris" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-6 py-5 text-sm text-zinc-100 transition hover:-translate-y-1 hover:border-amber-400 hover:text-amber-300"
              >
                <span className="flex items-center justify-between gap-3">
                  <span>{item.title}</span>
                  <span className="text-amber-400 transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
