import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service de transport de personnes avec chauffeur | VTC Premium",
  description:
    "Service de transport de personnes avec chauffeur à Paris et en Île-de-France. Chauffeur privé VTC pour déplacements privés, professionnels, transferts, événements et prestations sur mesure.",
};

export default function ServiceTransportPersonnesChauffeur() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-amber-500/20 bg-black px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="block">
            <div className="text-xl tracking-[0.45em] text-white">
              SUD IDF
            </div>
            <div className="mt-1 text-[10px] tracking-[0.5em] text-amber-400">
              EXECUTIVE TRANSPORT
            </div>
          </a>

          <div className="hidden items-center gap-8 text-xs tracking-[0.25em] text-neutral-300 md:flex">
            <a href="/chauffeur-prive-essonne" className="hover:text-amber-400">
              ESSONNE
            </a>
            <a href="/chauffeur-prive-orly" className="hover:text-amber-400">
              ORLY
            </a>
            <a href="/chauffeur-prive-cdg" className="hover:text-amber-400">
              CDG
            </a>
            <a href="/chauffeur-business" className="hover:text-amber-400">
              BUSINESS
            </a>
            <a href="/reservation" className="hover:text-amber-400">
              RÉSERVATION
            </a>
            <a href="/contact" className="hover:text-amber-400">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-amber-500/20 px-6 py-28 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-amber-400">
            Transport · Confort · Discrétion
          </p>

          <h1 className="text-4xl font-light tracking-[0.12em] text-white md:text-6xl">
            Service de transport de personnes avec chauffeur
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            Un service de transport privé avec chauffeur VTC pour vos
            déplacements à Paris et en Île-de-France. Confort, ponctualité,
            discrétion et accompagnement personnalisé.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/reservation"
              className="rounded-full border border-amber-400 bg-amber-400 px-8 py-4 text-sm font-medium tracking-[0.18em] text-black transition hover:bg-transparent hover:text-amber-400"
            >
              RÉSERVER UN CHAUFFEUR
            </a>

            <a
              href="/contact"
              className="rounded-full border border-amber-500/40 px-8 py-4 text-sm tracking-[0.18em] text-amber-400 transition hover:border-amber-400"
            >
              DEMANDER UN DEVIS
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light tracking-[0.18em] text-amber-400 md:text-4xl">
              Votre transport avec chauffeur privé
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-400">
              SUD IDF Executive Transport vous accompagne pour vos
              déplacements personnels et professionnels avec une prestation
              adaptée à vos besoins. Chaque trajet est organisé pour vous
              offrir confort, ponctualité et sérénité.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Déplacements privés",
                "Un chauffeur privé pour vos trajets personnels, avec prise en charge à l’adresse de votre choix.",
              ],
              [
                "Déplacements professionnels",
                "Une solution adaptée aux rendez-vous, réunions, déplacements d’affaires et événements professionnels.",
              ],
              [
                "Transferts aéroports",
                "Prise en charge vers et depuis les principaux aéroports de Paris et d’Île-de-France.",
              ],
              [
                "Transferts gares",
                "Transport porte-à-porte depuis les principales gares parisiennes et franciliennes.",
              ],
              [
                "Événements",
                "Transport de personnes pour mariages, séminaires, réceptions et événements privés ou professionnels.",
              ],
              [
                "Service VIP",
                "Une prestation discrète et personnalisée pour les clients recherchant confort et qualité de service.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-amber-500/20 bg-neutral-950 p-8 transition hover:-translate-y-1 hover:border-amber-400/50"
              >
                <h3 className="text-lg tracking-[0.12em] text-amber-400">
                  {title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-neutral-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              Une prestation premium
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.14em] text-white md:text-4xl">
              Un chauffeur pour accompagner vos déplacements
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Notre service de transport de personnes avec chauffeur est pensé
              pour simplifier vos déplacements. Que vous ayez besoin d’un
              trajet ponctuel ou d’une prestation organisée sur plusieurs
              heures, nous adaptons le service à votre programme.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-400">
              Nous pouvons également vous accompagner pour vos déplacements
              professionnels, événements, transferts aéroports et gares ou
              prestations privées sur mesure.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-black p-10">
            <h3 className="text-xl tracking-[0.14em] text-amber-400">
              Les avantages
            </h3>

            <ul className="mt-7 space-y-5 text-sm leading-7 text-neutral-400">
              <li>✓ Chauffeur professionnel et ponctuel</li>
              <li>✓ Véhicule premium et confortable</li>
              <li>✓ Prise en charge à l’adresse de votre choix</li>
              <li>✓ Service adapté aux particuliers et entreprises</li>
              <li>✓ Trajets ponctuels ou prestations sur plusieurs heures</li>
              <li>✓ Service discret et personnalisé</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Transport de personnes à Paris et en Île-de-France
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Paris", "/chauffeur-prive-paris"],
              ["Essonne", "/vtc-essonne"],
              ["Seine-et-Marne", "/chauffeur-prive-paris"],
              ["Hauts-de-Seine", "/chauffeur-prive-paris"],
              ["Yvelines", "/chauffeur-vtc-versailles"],
              ["Val-de-Marne", "/chauffeur-prive-paris"],
              ["Val-d’Oise", "/chauffeur-prive-paris"],
              ["Seine-Saint-Denis", "/chauffeur-prive-paris"],
            ].map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="flex min-h-[100px] items-center justify-center rounded-2xl border border-amber-500/15 bg-black p-6 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                Chauffeur privé à {place}
              </a>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-neutral-500">
            Nous intervenons également pour les transferts vers les aéroports,
            les gares, les lieux touristiques et les événements de la région
            parisienne.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="/chauffeur-vtc-disneyland-paris"
              className="text-amber-400 hover:text-white"
            >
              Chauffeur VTC Disneyland Paris
            </a>

            <span className="text-neutral-700">•</span>

            <a
              href="/chauffeur-vtc-versailles"
              className="text-amber-400 hover:text-white"
            >
              Chauffeur VTC Versailles
            </a>

            <span className="text-neutral-700">•</span>

            <a
              href="/chauffeur-vtc-parc-asterix"
              className="text-amber-400 hover:text-white"
            >
              Chauffeur VTC Parc Astérix
            </a>

            <span className="text-neutral-700">•</span>

            <a
              href="/chauffeur-vtc-mariage"
              className="text-amber-400 hover:text-white"
            >
              Chauffeur VTC mariage
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-4">
            {[
              [
                "Qu’est-ce qu’un service de transport de personnes avec chauffeur ?",
                "Il s’agit d’un service de transport privé avec chauffeur permettant de réserver un véhicule avec conducteur pour un trajet ponctuel ou une prestation personnalisée.",
              ],
              [
                "Dans quelles zones intervenez-vous ?",
                "Nous intervenons principalement à Paris et en Île-de-France, notamment dans l’Essonne et les principaux départements franciliens.",
              ],
              [
                "Proposez-vous des transferts vers les aéroports ?",
                "Oui. Nous assurons notamment les transferts vers et depuis Paris-Orly, Paris-CDG et l’aéroport de Beauvais.",
              ],
              [
                "Peut-on réserver un chauffeur pour plusieurs heures ?",
                "Oui. Une prestation de mise à disposition permet de bénéficier d’un chauffeur privé pendant plusieurs heures pour des rendez-vous, événements, visites ou déplacements professionnels.",
              ],
              [
                "Quels types de prestations pouvez-vous assurer ?",
                "Nous proposons des déplacements privés et professionnels, transferts aéroports et gares, mariages, séminaires, événements et prestations VIP.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-amber-500/15 bg-black p-6"
              >
                <summary className="cursor-pointer list-none text-base text-white group-open:text-amber-400">
                  {question}
                </summary>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-amber-400">
          SUD IDF Executive Transport
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-light tracking-[0.14em] text-white md:text-5xl">
          Réservez votre chauffeur privé
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
          Décrivez-nous votre besoin et recevez une proposition adaptée à
          votre déplacement.
        </p>

        <a
          href="/reservation"
          className="mt-10 inline-flex rounded-full border border-amber-400 bg-amber-400 px-10 py-4 text-sm font-medium tracking-[0.18em] text-black transition hover:bg-transparent hover:text-amber-400"
        >
          RÉSERVER UN CHAUFFEUR
        </a>
      </section>

      <footer className="border-t border-amber-500/20 bg-black px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg tracking-[0.35em] text-white">SUD IDF</div>

            <div className="mt-1 text-[9px] tracking-[0.45em] text-amber-400">
              EXECUTIVE TRANSPORT
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
              Chauffeur privé premium en Île-de-France pour particuliers,
              entreprises et événements.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Navigation
            </h3>

            <div className="mt-5 space-y-3 text-sm text-neutral-500">
              <a href="/" className="block hover:text-amber-400">
                Accueil
              </a>

              <a href="/reservation" className="block hover:text-amber-400">
                Réservation
              </a>

              <a href="/contact" className="block hover:text-amber-400">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-neutral-500">
              <p>06 68 86 36 73</p>
              <p>contact@sudidfexecutivetransport.fr</p>
              <p>Corbeil-Essonnes · Île-de-France</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-5 border-t border-amber-500/10 pt-6 text-xs text-neutral-600">
          <a href="/mentions-legales" className="hover:text-amber-400">
            Mentions légales
          </a>

          <a href="/cgv" className="hover:text-amber-400">
            CGV
          </a>

          <a href="/confidentialite" className="hover:text-amber-400">
            Confidentialité
          </a>
        </div>
      </footer>
    </main>
  );
}