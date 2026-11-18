
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chauffeur mariage premium | Sud IDF Executive Transport",
  description:
    "Service de chauffeur privé premium pour mariage en Île-de-France.",
  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/mariage",
  },
};

const vehicles = [
  {
    name: "Mercedes-Benz Classe V",
    description: "Un espace raffiné pour accompagner les mariés, les proches et les invités.",
    image: "/images/mariage-classe-v-fleurs.png",
  },
  {
    name: "Mercedes-Benz Classe S",
    description: "Une berline élégante pour une arrivée tout en distinction.",
    image: "/images/mariage-classe-s-fleurs.png",
  },
  {
    name: "Range Rover Autobiography",
    description: "Une présence remarquable pour un moment d’exception.",
    image: "/images/mariage-range-rover-noir-fleurs.png",
  },
  {
    name: "Mercedes-Maybach",
    description: "Le raffinement et le confort pour une prestation exclusive.",
    image: "/images/mariage-maybach-fleurs.png",
  },
];

export default function Mariage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden">
        <Image
          src="/images/mariage-range-rover-blanc-hero.png"
          alt="Range Rover blanc décoré pour un mariage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 md:px-10">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            SUD IDF Executive Transport
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Chauffeur mariage
            <span className="block font-serif italic text-amber-300">premium</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-100 md:text-xl">
            L’élégance, le confort et la ponctualité pour accompagner les plus
            beaux moments de votre journée.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="rounded-full border border-amber-400 bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300"
            >
              Demander une réservation
            </Link>
            <Link
              href="/chauffeur-vtc-mariage"
              className="rounded-full border border-white/70 bg-black/30 px-8 py-4 font-semibold text-white transition hover:border-amber-300 hover:text-amber-300"
            >
              Découvrir notre service mariage
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Votre journée, notre engagement
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Un transport à la hauteur de votre événement
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
            <p>
              Sud IDF Executive Transport vous accompagne pour vos mariages
              et événements privés avec un service chauffeur haut de gamme.
            </p>
            <p>
              Nos véhicules premium et chauffeurs professionnels assurent
              les déplacements des mariés, invités et familles avec élégance,
              ponctualité et discrétion.
            </p>
            <p>
              Nous proposons des prestations sur mesure pour cérémonies,
              réceptions, transferts hôtels et déplacements VIP
              en Île-de-France.
            </p>
            <p>
              Profitez d’un transport premium pour faire de votre mariage
              un moment inoubliable avec un service fiable,
              confortable et raffiné.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-500/20 bg-neutral-950 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Notre sélection
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Des véhicules d’exception
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-400">
              Une sélection de véhicules premium pour créer une arrivée
              élégante et assurer le confort de vos déplacements.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.map((vehicle) => (
              <article
                key={vehicle.name}
                className="group overflow-hidden rounded-2xl border border-amber-500/20 bg-black"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} décorée pour un mariage`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-300">
                    {vehicle.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-neutral-400">
                    {vehicle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-24">
        <Image
          src="/images/vaux-le-vicomte-classe-v.png"
          alt="Véhicule premium devant un lieu de réception"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Une prestation soignée
          </p>
          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
            Votre sérénité à chaque étape
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-neutral-100 md:text-xl">
            De la prise en charge à l’arrivée, notre priorité est de vous offrir
            un accompagnement professionnel, ponctuel et discret, adapté au
            déroulement de votre événement.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-7 px-6 py-20 md:grid-cols-2 md:py-24">
        <Link
          href="/reservation"
          className="group relative isolate min-h-[360px] overflow-hidden rounded-3xl border border-amber-500/40 p-8 transition hover:border-amber-300 md:p-10"
        >
          <Image
            src="/images/mariage-classe-v-fleurs.png"
            alt="Mercedes-Benz Classe V décorée pour un mariage"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 -z-20 object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Organisation
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-amber-300 md:text-4xl">
            Transport mariage
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white">
            Déplacements premium pour mariés et invités.
          </p>
          <span className="mt-8 inline-flex font-semibold text-white transition group-hover:text-amber-300">
            Accéder à la réservation →
          </span>
        </Link>

        <Link
          href="/transport-vip"
          className="group relative isolate min-h-[360px] overflow-hidden rounded-3xl border border-amber-500/40 p-8 transition hover:border-amber-300 md:p-10"
        >
          <Image
            src="/images/mariage-maybach-fleurs.png"
            alt="Mercedes-Maybach décorée pour un mariage"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 -z-20 object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Service exclusif
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-amber-300 md:text-4xl">
            Chauffeur VIP
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white">
            Service élégant et discret pour événements privés.
          </p>
          <span className="mt-8 inline-flex font-semibold text-white transition group-hover:text-amber-300">
            Découvrir le service →
          </span>
        </Link>
      </section>

      <section className="border-t border-amber-500/20 bg-neutral-950 px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Confiez vos déplacements à un chauffeur professionnel
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-400">
          Parlons de votre événement et préparons ensemble votre prestation
          de transport en Île-de-France.
        </p>
        <Link
          href="/reservation"
          className="mt-8 inline-flex rounded-full bg-amber-400 px-9 py-4 font-semibold text-black transition hover:bg-amber-300"
        >
          Préparer mon transport
        </Link>
      </section>
    

      <section aria-label="Nos prestations pour vos événements" className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">SUD IDF Executive Transport</p>
          <h2 className="mx-auto mb-5 max-w-3xl text-center text-2xl font-semibold text-white md:text-3xl">Nos prestations pour vos événements</h2>
          <p className="mx-auto mb-9 max-w-3xl text-center text-sm leading-7 text-zinc-300 md:text-base">Pour organiser vos déplacements et ceux de vos invités, découvrez également nos services dédiés.</p>
          <nav aria-label="Liens vers nos autres services" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/chauffeur-vtc-mariage" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur VTC pour mariage</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/voiture-mariage-chauffeur" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Voiture de mariage avec chauffeur</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/transport-vip" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Transport VIP</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/mise-a-disposition" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Mise à disposition</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
            <a href="/chauffeur-business" className="group rounded-xl border border-amber-500/30 bg-zinc-900/70 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:border-amber-400 hover:bg-zinc-800">
              <span className="flex items-center justify-between gap-3"><span>Chauffeur business</span><span className="text-amber-400 transition group-hover:translate-x-1">→</span></span>
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
