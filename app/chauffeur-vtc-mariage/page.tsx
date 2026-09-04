import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chauffeur VTC Mariage | Voiture avec Chauffeur Premium",
  description:
    "Chauffeur VTC mariage à Paris et en Île-de-France : voiture avec chauffeur pour mariés, invités et événements. Service premium, ponctualité et accompagnement personnalisé.",
};

export default function ChauffeurVtcMariage() {
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
            Mariage · Élégance · Sérénité
          </p>

          <h1 className="text-4xl font-light tracking-[0.18em] text-white md:text-6xl">
            Chauffeur VTC Mariage
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            Une voiture avec chauffeur pour accompagner les mariés et leurs
            invités avec élégance, ponctualité et discrétion à Paris et en
            Île-de-France.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/reservation"
              className="rounded-full border border-amber-400 bg-amber-400 px-8 py-4 text-sm font-medium tracking-[0.18em] text-black transition hover:bg-transparent hover:text-amber-400"
            >
              DEMANDER UN DEVIS
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
            <h2 className="text-3xl font-light tracking-[0.18em] text-amber-400 md:text-4xl">
              Votre voiture de mariage avec chauffeur
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-400">
              Le jour de votre mariage mérite une organisation irréprochable.
              SUD IDF Executive Transport vous accompagne pour vos différents
              déplacements, avec une prestation adaptée au déroulement de votre
              événement.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Voiture des mariés",
                "Un véhicule premium avec chauffeur pour les trajets des mariés entre domicile, cérémonie, réception et hébergement.",
              ],
              [
                "Transport des invités",
                "Organisation de transferts pour vos invités entre hôtels, gares, cérémonies et lieux de réception.",
              ],
              [
                "Cérémonie et réception",
                "Une prestation pensée autour de votre planning afin de faciliter les déplacements tout au long de la journée.",
              ],
              [
                "Mise à disposition",
                "Possibilité de réserver un chauffeur dédié pendant plusieurs heures pour accompagner les différentes étapes de votre mariage.",
              ],
              [
                "Transferts gares et aéroports",
                "Prise en charge de vos proches arrivant à Paris ou en Île-de-France depuis les principales gares et aéroports.",
              ],
              [
                "Service VIP",
                "Un accompagnement discret et personnalisé pour les mariés, familles et invités recherchant confort et sérénité.",
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
              Votre journée, notre attention
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.14em] text-white md:text-4xl">
              Un transport pensé pour votre mariage
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Chaque mariage possède son propre rythme. Nous adaptons les
              horaires et les prises en charge à votre programme afin que vos
              déplacements restent simples et fluides.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-400">
              De la première prise en charge au dernier trajet, notre objectif
              est de vous offrir une expérience confortable, élégante et
              parfaitement organisée.
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
              <li>✓ Organisation selon votre planning</li>
              <li>✓ Service discret et personnalisé</li>
              <li>✓ Prestation pour mariés et invités</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Mariage à Paris et en Île-de-France
          </h2>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Paris", "/chauffeur-prive-paris"],
              ["Essonne", "/vtc-essonne"],
              ["Seine-et-Marne", "/chauffeur-prive-fontainebleau"],
              ["Hauts-de-Seine", "/chauffeur-prive-paris"],
              ["Val-de-Marne", "/chauffeur-prive-paris"],
              ["Yvelines", "/chauffeur-vtc-versailles"],
              ["Val-d’Oise", "/chauffeur-prive-paris"],
              ["Seine-Saint-Denis", "/chauffeur-prive-paris"],
            ].map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="min-h-[100px] flex items-center justify-center rounded-2xl border border-amber-500/15 bg-black p-6 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                Chauffeur mariage à {place}
              </a>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-neutral-500">
            Nous pouvons également accompagner vos invités depuis les
            aéroports, les gares et les principaux lieux d’hébergement de la
            région parisienne.
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
            <a href="/reservation" className="text-amber-400 hover:text-white">
              Réservation chauffeur
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
                "Proposez-vous une voiture avec chauffeur pour les mariés ?",
                "Oui. Nous proposons une prestation dédiée aux déplacements des mariés, avec prise en charge selon le programme de votre journée.",
              ],
              [
                "Pouvez-vous transporter les invités ?",
                "Oui. Nous pouvons organiser les trajets de vos invités entre hôtels, gares, aéroports, cérémonies et lieux de réception.",
              ],
              [
                "Est-il possible de réserver un chauffeur pour plusieurs heures ?",
                "Oui. Une prestation de mise à disposition peut être organisée pour accompagner les différentes étapes de votre mariage.",
              ],
              [
                "Intervenez-vous en dehors de Paris ?",
                "Oui. Nous intervenons à Paris et dans toute l’Île-de-France selon les besoins de votre événement.",
              ],
              [
                "Comment obtenir le tarif de la prestation ?",
                "Le mariage fait l’objet d’un devis personnalisé selon les horaires, les trajets, le nombre de véhicules et les besoins de votre événement.",
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
          Réservez votre chauffeur VTC pour votre mariage
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
          Décrivez-nous votre événement et recevez une proposition adaptée à
          votre journée.
        </p>

        <a
          href="/reservation"
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
