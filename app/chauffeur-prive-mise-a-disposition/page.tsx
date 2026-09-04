import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chauffeur privé mise à disposition | Service Premium",
  description:
    "Chauffeur privé mise à disposition à Paris et en Île-de-France : véhicule avec chauffeur à l’heure pour réunions, séminaires, événements et déplacements professionnels.",
};

export default function ChauffeurPriveMiseADisposition() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-amber-500/20 bg-black px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="block">
            <div className="text-xl tracking-[0.45em] text-white">SUD IDF</div>
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
          <p className="mb-6 text-xs tracking-[0.5em] text-amber-400 uppercase">
            Service avec chauffeur à l’heure
          </p>

          <h1 className="text-4xl font-light tracking-[0.16em] text-white md:text-6xl">
            Chauffeur privé mise à disposition
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            Un véhicule avec chauffeur dédié pendant la durée de votre choix
            pour vos rendez-vous, réunions, séminaires, événements et
            déplacements professionnels à Paris et en Île-de-France.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/reservation"
              className="rounded-full border border-amber-400 bg-amber-400 px-8 py-4 text-sm font-medium tracking-[0.18em] text-black transition hover:bg-transparent hover:text-amber-400"
            >
              RÉSERVER
            </a>

            <a
              href="/contact"
              className="rounded-full border border-amber-500/40 px-8 py-4 text-sm tracking-[0.18em] text-amber-400 transition hover:border-amber-400"
            >
              NOUS CONTACTER
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
              Un chauffeur dédié selon votre programme
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-400">
              La mise à disposition vous permet de conserver votre chauffeur
              pendant plusieurs heures, sans multiplier les réservations. Le
              véhicule reste à votre disposition selon les conditions définies
              lors de votre réservation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Réunions professionnelles",
                "Enchaînez vos rendez-vous à Paris et en Île-de-France avec un chauffeur dédié et un véhicule disponible selon votre agenda.",
              ],
              [
                "Séminaires et conférences",
                "Organisation des déplacements des participants, transferts entre hôtels et lieux d’événements et accompagnement pendant la journée.",
              ],
              [
                "Événements privés",
                "Un chauffeur à vos côtés pour vos soirées, réceptions, visites et événements nécessitant plusieurs déplacements.",
              ],
              [
                "Déplacements VIP",
                "Un service discret et personnalisé pour les dirigeants, invités et clients recherchant confort et tranquillité.",
              ],
              [
                "Visites et tourisme",
                "Découvrez Paris et l’Île-de-France avec un véhicule disponible pour vos différents arrêts et déplacements.",
              ],
              [
                "Transferts combinés",
                "Associez votre mise à disposition à des transferts depuis les aéroports, les gares ou d’autres destinations franciliennes.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-amber-500/20 bg-neutral-950 p-8 transition hover:-translate-y-1 hover:border-amber-400/50"
              >
                <h3 className="text-lg tracking-[0.12em] text-amber-400">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-neutral-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-400 uppercase">
              Confort · Flexibilité · Discrétion
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.14em] text-white md:text-4xl">
              Une solution adaptée aux journées chargées
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Lorsque votre programme comporte plusieurs rendez-vous ou
              déplacements, la mise à disposition simplifie votre organisation.
              Vous bénéficiez d’un chauffeur qui connaît votre planning et
              vous accompagne au fil de la journée.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-400">
              La durée de la prestation est définie à l’avance. Pour les
              demandes spécifiques, nous pouvons établir un tarif personnalisé
              selon vos besoins.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-black p-10">
            <h3 className="text-xl tracking-[0.14em] text-amber-400">
              Pourquoi choisir la mise à disposition ?
            </h3>

            <ul className="mt-7 space-y-5 text-sm leading-7 text-neutral-400">
              <li>✓ Chauffeur dédié pendant la durée réservée</li>
              <li>✓ Véhicule premium et confortable</li>
              <li>✓ Organisation selon votre planning</li>
              <li>✓ Déplacements multiples facilités</li>
              <li>✓ Service discret et professionnel</li>
              <li>✓ Adapté aux particuliers et aux entreprises</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Mise à disposition à Paris et en Île-de-France
          </h2>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Paris", "/chauffeur-prive-paris"],
              ["Essonne", "/vtc-essonne"],
              ["Hauts-de-Seine", "/chauffeur-prive-paris"],
              ["Seine-et-Marne", "/chauffeur-prive-paris"],
              ["Yvelines", "/chauffeur-vtc-versailles"],
              ["Val-de-Marne", "/chauffeur-prive-paris"],
              ["Val-d’Oise", "/chauffeur-prive-paris"],
              ["Seine-Saint-Denis", "/chauffeur-prive-paris"],
            ].map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="min-h-[100px] flex items-center justify-center rounded-2xl border border-amber-500/15 bg-black p-6 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                Chauffeur privé à {place}
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
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
              Chauffeur VTC Mariage
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
                "Qu’est-ce qu’une mise à disposition avec chauffeur ?",
                "Il s’agit d’une prestation pendant laquelle un chauffeur et son véhicule restent disponibles pour vous pendant la durée réservée, selon le programme défini.",
              ],
              [
                "Combien de temps puis-je réserver un chauffeur ?",
                "La mise à disposition est proposée à partir de 2 heures, avec plusieurs durées possibles selon vos besoins.",
              ],
              [
                "La mise à disposition convient-elle aux entreprises ?",
                "Oui. Elle est particulièrement adaptée aux réunions, rendez-vous clients, séminaires, conférences et déplacements de dirigeants.",
              ],
              [
                "Puis-je effectuer plusieurs trajets pendant la prestation ?",
                "Oui. C’est précisément l’intérêt de la mise à disposition : votre chauffeur vous accompagne au fil des différents déplacements prévus.",
              ],
              [
                "Comment obtenir le tarif ?",
                "Le tarif dépend notamment de la durée et du véhicule choisi. Les demandes spécifiques peuvent faire l’objet d’un devis personnalisé.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-amber-500/15 bg-black p-6"
              >
                <summary className="cursor-pointer list-none text-base text-white group-open:text-amber-400">
                  {question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 text-center">
        <p className="text-xs tracking-[0.5em] text-amber-400 uppercase">
          SUD IDF Executive Transport
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-light tracking-[0.14em] text-white md:text-5xl">
          Réservez votre chauffeur privé à l’heure
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
          Indiquez-nous votre durée et votre programme pour organiser une
          prestation adaptée à vos besoins.
        </p>

        <a
          href="/reservation"
          className="mt-10 inline-flex rounded-full border border-amber-400 bg-amber-400 px-10 py-4 text-sm font-medium tracking-[0.18em] text-black transition hover:bg-transparent hover:text-amber-400"
        >
          RÉSERVER
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
            <h3 className="text-xs tracking-[0.3em] text-amber-400 uppercase">
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
            <h3 className="text-xs tracking-[0.3em] text-amber-400 uppercase">
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
