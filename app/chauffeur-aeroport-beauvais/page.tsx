import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chauffeur VTC Beauvais | Aéroport de Beauvais BVA",
  description:
    "Chauffeur VTC Beauvais et aéroport de Beauvais-Tillé. Transferts privés entre Paris, l’Île-de-France et l’aéroport BVA, avec un service premium, ponctuel et confortable.",
};

export default function ChauffeurAeroportBeauvais() {
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
            Beauvais · BVA · VTC
          </p>

          <h1 className="text-4xl font-light tracking-[0.12em] text-white md:text-6xl">
            Chauffeur VTC Beauvais
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            Chauffeur privé pour vos transferts vers et depuis l’aéroport de
            Beauvais-Tillé. Un service premium entre Paris, l’Île-de-France et
            l’aéroport BVA.
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
              Aéroport de Beauvais-Tillé
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.16em] text-white md:text-4xl">
              Votre transfert vers l’aéroport de Beauvais
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-400">
              L’aéroport de Beauvais-Tillé est situé à plusieurs dizaines de
              kilomètres de Paris. Un chauffeur privé vous permet de rejoindre
              l’aéroport directement depuis votre domicile, votre hôtel, une
              gare ou une autre adresse en Île-de-France.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Paris → Beauvais",
                "Transfert privé entre Paris et l’aéroport de Beauvais-Tillé avec une prise en charge à l’adresse de votre choix.",
              ],
              [
                "Beauvais → Paris",
                "À votre arrivée à l’aéroport BVA, votre chauffeur vous accompagne vers Paris ou votre destination en Île-de-France.",
              ],
              [
                "Départ depuis l’Île-de-France",
                "Transport privé depuis l’Essonne, les Hauts-de-Seine, les Yvelines et les autres départements franciliens.",
              ],
              [
                "Retour d’aéroport",
                "Une solution confortable pour rejoindre votre domicile, votre hôtel, une gare ou votre lieu de rendez-vous.",
              ],
              [
                "Voyages professionnels",
                "Un service adapté aux déplacements d’affaires et aux horaires nécessitant ponctualité et sérénité.",
              ],
              [
                "Service VIP",
                "Une prestation discrète et personnalisée pour les voyageurs recherchant confort et qualité de service.",
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
              Confort et ponctualité
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.14em] text-white md:text-4xl">
              Un chauffeur privé pour votre vol
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Pour un départ ou une arrivée à l’aéroport de Beauvais, nous
              organisons votre transfert autour de votre itinéraire et de vos
              horaires.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-400">
              Vous bénéficiez d’une prise en charge porte-à-porte dans un
              véhicule premium, sans avoir à gérer les transports en commun,
              le stationnement ou les changements de correspondance.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-black p-10">
            <h3 className="text-xl tracking-[0.14em] text-amber-400">
              Votre transfert BVA
            </h3>

            <ul className="mt-7 space-y-5 text-sm leading-7 text-neutral-400">
              <li>✓ Prise en charge à l’adresse de votre choix</li>
              <li>✓ Chauffeur professionnel et ponctuel</li>
              <li>✓ Véhicule premium et confortable</li>
              <li>✓ Transport porte-à-porte</li>
              <li>✓ Service adapté aux particuliers et entreprises</li>
              <li>✓ Transferts aller et retour</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Principaux transferts vers Beauvais
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-neutral-500">
            Nous assurons des transferts privés vers et depuis l’aéroport
            de Beauvais-Tillé selon votre lieu de départ et votre destination.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Paris", "/chauffeur-prive-paris"],
              ["Essonne", "/vtc-essonne"],
              ["Yvelines", "/chauffeur-vtc-versailles"],
              ["Île-de-France", "/service-transport-personnes-chauffeur"],
            ].map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="flex min-h-[120px] items-center justify-center rounded-2xl border border-amber-500/15 bg-black p-6 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                Chauffeur VTC Beauvais depuis {place}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Chauffeur VTC Beauvais en Île-de-France
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-neutral-500">
            Nous intervenons à Paris et dans les différents départements
            d’Île-de-France pour vos transferts vers l’aéroport de
            Beauvais-Tillé.
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
                Chauffeur VTC Beauvais à {place}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Nos autres services aéroport
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/chauffeur-prive-orly"
              className="rounded-2xl border border-amber-500/15 bg-black p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Chauffeur VTC Orly
            </a>

            <a
              href="/chauffeur-prive-cdg"
              className="rounded-2xl border border-amber-500/15 bg-black p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Chauffeur VTC CDG
            </a>

            <a
              href="/chauffeur-prive-gare"
              className="rounded-2xl border border-amber-500/15 bg-black p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Chauffeur privé gare
            </a>

            <a
              href="/transport-longue-distance"
              className="rounded-2xl border border-amber-500/15 bg-black p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              Transport longue distance
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
                "Proposez-vous un chauffeur VTC vers l’aéroport de Beauvais ?",
                "Oui. Nous assurons les transferts privés vers et depuis l’aéroport de Beauvais-Tillé depuis Paris et l’Île-de-France.",
              ],
              [
                "Pouvez-vous venir me chercher à l’aéroport de Beauvais ?",
                "Oui. Nous pouvons organiser votre prise en charge à l’arrivée afin de vous conduire vers votre destination.",
              ],
              [
                "Faites-vous les transferts Paris-Beauvais ?",
                "Oui. Les transferts entre Paris et l’aéroport de Beauvais-Tillé font partie des prestations proposées.",
              ],
              [
                "Intervenez-vous depuis l’Essonne ?",
                "Oui. Nous intervenons notamment en Essonne ainsi que dans les différents départements d’Île-de-France.",
              ],
              [
                "Comment obtenir un tarif pour Beauvais ?",
                "Le tarif dépend notamment du lieu de départ ou d’arrivée, de l’horaire et du véhicule choisi. Vous pouvez effectuer une demande depuis notre formulaire de réservation.",
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
          Votre chauffeur VTC pour Beauvais
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
          Organisez votre transfert vers ou depuis l’aéroport de
          Beauvais-Tillé avec un service premium et personnalisé.
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