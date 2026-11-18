import Link from "next/link";

export const metadata = {
  title: "Mise à disposition chauffeur privé | Sud IDF Executive Transport",
  description:
    "Service premium de mise à disposition avec chauffeur privé en Essonne, Paris et Île-de-France. Véhicule haut de gamme avec chauffeur pour entreprises, événements et déplacements longue durée.",
  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive-mise-a-disposition",
  },
  keywords: [
    "mise à disposition chauffeur privé",
    "chauffeur privé premium",
    "chauffeur business",
    "transport VIP",
    "chauffeur événementiel",
    "chauffeur privé Essonne",
    "mise à disposition Paris",
  ],
};

const prestations = [
  {
    title: "Rendez-vous professionnels",
    href: "/chauffeur-business",
    text: "Un chauffeur reste à votre disposition pour vos réunions, rendez-vous et déplacements entre plusieurs adresses.",
    image: "/images/mise-a-disposition-reunions.png",
    alt: "Véhicule avec chauffeur pour rendez-vous professionnels",
  },
  {
    title: "Séminaires et congrès",
    href: "/reservation",
    text: "Une organisation adaptée aux journées de travail, conférences, séminaires et événements d’entreprise.",
    image: "/images/mise-a-disposition-congres.png",
    alt: "Transport avec chauffeur pour congrès et séminaires",
  },
  {
    title: "Événements et déplacements VIP",
    href: "/transport-vip",
    text: "Un accompagnement discret et soigné pour vos événements, rendez-vous importants et déplacements privés.",
    image: "/images/mise-a-disposition-fashion-week.png",
    alt: "Transport premium avec chauffeur pour événement",
  },
];

const liens = [
  {
    href: "/chauffeur-business",
    title: "Chauffeur business",
    text: "Transport exécutif premium pour entreprises et dirigeants.",
    image: "/images/corbeil-essonnes-business.png",
    alt: "Véhicule haut de gamme pour le transport business",
  },
  {
    href: "/chauffeur-prive-essonne",
    title: "Chauffeur privé Essonne",
    text: "Service premium dans toute l’Essonne et l’Île-de-France.",
    image: "/images/corbeil-essonnes-hero-premium.png",
    alt: "Chauffeur privé premium en Essonne",
  },
  {
    href: "/transfert-orly",
    title: "Transfert Orly",
    text: "Chauffeur privé premium vers l’aéroport d’Orly.",
    image: "/images/corbeil-essonnes-transfert-orly.png",
    alt: "Transfert aéroport avec chauffeur privé vers Orly",
  },
  {
    href: "/transfert-cdg",
    title: "Transfert CDG",
    text: "Service premium vers Roissy Charles-de-Gaulle.",
    image: "/images/cdg-hero-premium.png",
    alt: "Transfert aéroport avec chauffeur privé vers Roissy CDG",
  },
];

export default function MiseADispositionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden px-6 py-24 md:min-h-[760px]">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/mise-a-disposition-hero.png')" }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
        <div className="mx-auto w-full max-w-7xl pt-16">
          <div className="max-w-3xl">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.45em] text-amber-400 md:text-sm">SUD IDF · SERVICE EXÉCUTIF · FLEXIBILITÉ</p>
            <h1 className="mb-8 text-4xl font-light leading-tight tracking-wide md:text-6xl lg:text-7xl">
              Mise à disposition
              <span className="mt-2 block font-serif italic text-amber-400">avec chauffeur privé</span>
            </h1>
            <div className="mb-8 h-px w-32 bg-gradient-to-r from-amber-400 to-transparent" />
            <p className="max-w-2xl text-base leading-8 text-neutral-100 md:text-xl">
              Un véhicule haut de gamme et un chauffeur dédié, disponibles selon votre programme, pour vos rendez-vous professionnels, événements et déplacements privés à Paris et en Île-de-France.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/reservation" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:brightness-110">Réserver votre chauffeur</Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-amber-400/80 px-8 py-4 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-amber-400 hover:text-black">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/15 bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">Votre temps, notre priorité</p>
            <h2 className="mb-8 text-3xl font-light leading-tight tracking-wide md:text-5xl">Un chauffeur dédié à votre rythme</h2>
            <div className="space-y-5 text-base leading-8 text-neutral-300">
              <p>Sud IDF Executive Transport propose un service premium de mise à disposition avec chauffeur privé en Essonne, Seine-et-Marne, Paris et toute l’Île-de-France.</p>
              <p>Profitez de véhicules haut de gamme avec chauffeur professionnel pour vos déplacements personnels, professionnels, événements privés et rendez-vous business.</p>
              <p>Votre chauffeur reste disponible pendant la durée convenue de votre réservation afin de faciliter vos déplacements successifs et de vous offrir confort, flexibilité, discrétion et ponctualité.</p>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-amber-500/25">
            <img src="/images/mise-a-disposition-startup.png" alt="Véhicule premium pour mise à disposition avec chauffeur" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 right-7 text-sm uppercase tracking-[0.25em] text-white">Un service souple, soigné et personnalisé</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">Une prestation adaptée à vos besoins</p>
            <h2 className="text-3xl font-light tracking-wide md:text-5xl">Vos déplacements, en toute liberté</h2>
            <p className="mt-6 leading-8 text-neutral-400">Notre service s’adapte à vos besoins : séminaires, shopping, mariage, déplacements VIP, événements d’entreprise et transport longue durée.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {prestations.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block overflow-hidden rounded-3xl border border-amber-500/20 bg-neutral-950 transition duration-500 hover:-translate-y-2 hover:border-amber-400/70 hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]"
              >
                <div className="h-64 overflow-hidden">
                  <img src={item.image} alt={item.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="mb-4 text-lg text-amber-400">{item.title}</h3>
                  <p className="text-sm leading-7 text-neutral-400">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-amber-500/20 px-6 py-28">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/mise-a-disposition-hero.png')" }} />
        <div className="absolute inset-0 -z-10 bg-black/25" />
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/45 via-black/20 to-black/10" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">L’exigence SUD IDF</p>
            <h2 className="mb-7 text-3xl font-light leading-tight md:text-5xl">Le confort d’un chauffeur qui vous accompagne</h2>
            <p className="max-w-xl text-base leading-8 text-neutral-200">
              Nous intervenons notamment à Corbeil-Essonnes, Évry-Courcouronnes, Melun, Fontainebleau, Paris, Orly et Roissy-Charles-de-Gaulle. Chaque déplacement est organisé avec attention, selon les informations communiquées lors de votre réservation.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-400/40 bg-black/65 p-8 shadow-2xl backdrop-blur-sm md:p-10">
            <h3 className="mb-8 text-xl tracking-[0.2em] text-amber-400">Les avantages</h3>
            <ul className="space-y-5 text-sm leading-7 text-neutral-100 md:text-base">
              {["Chauffeur professionnel et ponctuel", "Véhicule premium et confortable", "Prise en charge à l’adresse de votre choix", "Organisation selon votre planning", "Service discret et personnalisé", "Prestation pour vos déplacements privés et professionnels"].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-amber-400">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-amber-400">Pour prolonger votre visite</p>
            <h2 className="text-3xl font-light md:text-4xl">Nos services complémentaires</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {liens.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-3xl border border-amber-500/25 bg-black transition duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(212,175,55,0.14)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="mb-3 text-lg text-amber-400">{item.title}</h3>
                  <p className="text-sm leading-7 text-neutral-400">{item.text}</p>
                  <span className="mt-5 inline-block text-xs uppercase tracking-[0.2em] text-white transition group-hover:text-amber-300">Découvrir →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-amber-400">Organisons vos déplacements</p>
        <h2 className="mx-auto mb-8 max-w-3xl text-3xl font-light leading-tight md:text-5xl">Votre chauffeur privé, selon votre programme</h2>
        <Link href="/reservation" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 px-10 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:brightness-110">Réserver votre chauffeur</Link>
      </section>
    

      <section aria-label="Nos prestations complémentaires" className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">SUD IDF Executive Transport</p>
          <h2 className="mx-auto mb-5 max-w-3xl text-center text-2xl font-semibold text-white md:text-3xl">Nos prestations complémentaires</h2>
          <p className="mx-auto mb-9 max-w-3xl text-center text-sm leading-7 text-zinc-300 md:text-base">Associez la mise à disposition à un transfert ou à une prestation dédiée à vos déplacements.</p>
          <nav aria-label="Liens vers nos autres services" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/chauffeur-prive-mise-a-disposition",
                title: "Mise à disposition avec chauffeur privé",
                image: "/images/mise-a-disposition-startup.png",
                alt: "Mise à disposition avec chauffeur privé pour déplacements professionnels",
              },
              {
                href: "/chauffeur-business",
                title: "Chauffeur business",
                image: "/images/corbeil-essonnes-business.png",
                alt: "Chauffeur business et véhicule premium",
              },
              {
                href: "/transport-vip",
                title: "Transport VIP",
                image: "/images/parc-asterix-vip.png",
                alt: "Transport VIP avec véhicule haut de gamme",
              },
              {
                href: "/transfert-orly",
                title: "Transfert Orly",
                image: "/images/corbeil-essonnes-transfert-orly.png",
                alt: "Transfert avec chauffeur privé vers Orly",
              },
              {
                href: "/transfert-cdg",
                title: "Transfert CDG",
                image: "/images/cdg-hero-premium.png",
                alt: "Transfert avec chauffeur privé vers Roissy CDG",
              },
              {
                href: "/chauffeur-prive-paris",
                title: "Chauffeur privé à Paris",
                image: "/images/paris-seine-hero.png",
                alt: "Chauffeur privé à Paris",
              },
              {
                href: "/mariage",
                title: "Transport pour mariage",
                image: "/images/mariage-range-rover-noir-fleurs.png",
                alt: "Véhicule haut de gamme pour transport de mariage",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-xl border border-amber-500/30 bg-zinc-900/70 transition duration-500 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_16px_40px_rgba(212,175,55,0.14)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                </div>
                <div className="px-5 py-4">
                  <span className="flex items-center justify-between gap-3 text-sm font-medium text-zinc-100">
                    <span>{item.title}</span>
                    <span className="shrink-0 text-amber-400 transition group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
