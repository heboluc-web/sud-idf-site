import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voiture de mariage avec chauffeur | VTC Premium",
  description:
    "Voiture de mariage avec chauffeur à Paris et en Île-de-France. Chauffeur VTC pour les mariés, invités, cérémonies et réceptions, avec un service élégant et personnalisé.",
};

export default function VoitureMariageChauffeur() {
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
            <a href="/chauffeur-prive-paris" className="hover:text-amber-400">
              PARIS
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
            Mariage · Élégance · Sérénité
          </p>

          <h1 className="text-4xl font-light tracking-[0.12em] text-white md:text-6xl">
            Voiture de mariage avec chauffeur
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            Un service de voiture avec chauffeur pour accompagner les mariés
            et leurs invités lors de cette journée exceptionnelle à Paris et
            en Île-de-France.
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
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
              Votre journée
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.16em] text-white md:text-4xl">
              Une voiture avec chauffeur pour votre mariage
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-400">
              Pour les mariés comme pour les invités, nous proposons un service
              de transport privé pensé pour accompagner chaque moment de votre
              journée avec confort, ponctualité et discrétion.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Voiture des mariés",
                "Une voiture avec chauffeur pour accompagner les mariés entre leur domicile, la cérémonie, les lieux de réception et les différents rendez-vous de la journée.",
              ],
              [
                "Transport des invités",
                "Organisez les déplacements de vos invités entre hôtels, cérémonie, réception et gare ou aéroport.",
              ],
              [
                "Cérémonie et réception",
                "Un transport coordonné pour faciliter les déplacements entre les différents lieux de votre mariage.",
              ],
              [
                "Mise à disposition",
                "Un chauffeur disponible pendant plusieurs heures pour accompagner votre programme et vos déplacements.",
              ],
              [
                "Gares et aéroports",
                "Prise en charge des mariés ou des invités depuis Paris-Orly, Paris-CDG, Beauvais et les principales gares.",
              ],
              [
                "Service VIP",
                "Une prestation discrète et personnalisée pour les mariés, familles et invités souhaitant un niveau de confort premium.",
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
              Une prestation élégante
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.14em] text-white md:text-4xl">
              Le confort d’un chauffeur privé pour votre mariage
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Le jour de votre mariage, chaque déplacement doit rester simple
              et serein. Notre service de voiture avec chauffeur vous permet
              de vous déplacer sans avoir à gérer la conduite, le stationnement
              ou les contraintes liées aux trajets.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-400">
              Nous pouvons organiser les transferts des mariés, des proches et
              des invités selon le déroulement de votre journée.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-black p-10">
            <h3 className="text-xl tracking-[0.14em] text-amber-400">
              Pour les mariés et les invités
            </h3>

            <ul className="mt-7 space-y-5 text-sm leading-7 text-neutral-400">
              <li>✓ Chauffeur professionnel et ponctuel</li>
              <li>✓ Véhicule premium et confortable</li>
              <li>✓ Service discret et personnalisé</li>
              <li>✓ Prise en charge aux adresses souhaitées</li>
              <li>✓ Organisation des transferts entre plusieurs lieux</li>
              <li>✓ Possibilité de mise à disposition</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Voiture de mariage avec chauffeur en Île-de-France
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-neutral-500">
            Nous accompagnons les mariés et leurs invités à Paris et dans les
            différents départements d’Île-de-France.
          </p>

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
                Voiture de mariage à {place}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Nos autres prestations
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/chauffeur-vtc-mariage"
              className="rounded-2xl border border-amber-500/15 bg-black p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Chauffeur VTC mariage
            </a>

            <a
              href="/chauffeur-prive-mise-a-disposition"
              className="rounded-2xl border border-amber-500/15 bg-black p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Mise à disposition
            </a>

            <a
              href="/transport-longue-distance"
              className="rounded-2xl border border-amber-500/15 bg-black p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Transport longue distance
            </a>

            <a
              href="/service-transport-personnes-chauffeur"
              className="rounded-2xl border border-amber-500/15 bg-black p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Transport de personnes
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-4">
            {[
              [
                "Proposez-vous une voiture avec chauffeur pour les mariés ?",
                "Oui. Nous pouvons accompagner les mariés pendant leurs différents déplacements entre leur domicile, la cérémonie, les photos et le lieu de réception.",
              ],
              [
                "Pouvez-vous transporter les invités du mariage ?",
                "Oui. Nous pouvons organiser les transferts des invités entre hôtels, gares, aéroports, cérémonie et réception.",
              ],
              [
                "Est-il possible de réserver un chauffeur pour plusieurs heures ?",
                "Oui. Une prestation de mise à disposition peut être organisée afin de disposer d’un chauffeur pendant plusieurs heures.",
              ],
              [
                "Intervenez-vous pour les mariages en Île-de-France ?",
                "Oui. Nous intervenons à Paris et dans les différents départements d’Île-de-France.",
              ],
              [
                "Comment obtenir un tarif pour un mariage ?",
                "Les prestations de mariage sont personnalisées selon le nombre de personnes, les horaires, les lieux et les différents trajets. Contactez-nous pour étudier votre besoin.",
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
          Votre voiture de mariage avec chauffeur
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
          Préparez votre transport pour le jour J et bénéficiez d’un service
          premium adapté à votre organisation.
        </p>

        <a
          href="/contact"
          className="mt-10 inline-flex rounded-full border border-amber-400 bg-amber-400 px-10 py-4 text-sm font-medium tracking-[0.18em] text-black transition hover:bg-transparent hover:text-amber-400"
        >
          DEMANDER UN DEVIS
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