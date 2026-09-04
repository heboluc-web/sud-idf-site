import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chauffeur VTC Parc Astérix | Transfert Privé Premium",
  description:
    "Chauffeur VTC Parc Astérix : transferts privés depuis Paris, les aéroports et l’Île-de-France vers le Parc Astérix. Service premium, ponctualité et confort.",
};

export default function ChauffeurVtcParcAsterix() {
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
            Transport privé premium
          </p>

          <h1 className="text-4xl font-light tracking-[0.18em] text-white md:text-6xl">
            Chauffeur VTC Parc Astérix
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            Profitez d’un transfert privé confortable et ponctuel vers le Parc
            Astérix depuis Paris, les aéroports ou l’Île-de-France, avec un
            chauffeur professionnel à votre service.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/reservation"
              className="rounded-full border border-amber-400 bg-amber-400 px-8 py-4 text-sm font-medium tracking-[0.18em] text-black transition hover:bg-transparent hover:text-amber-400"
            >
              RÉSERVER UN TRANSFERT
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
              Votre chauffeur privé pour le Parc Astérix
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-400">
              Pour une journée en famille, une sortie entre amis ou un
              déplacement professionnel, SUD IDF Executive Transport vous
              accompagne jusqu’au Parc Astérix dans un véhicule premium,
              propre et confortable.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Paris → Parc Astérix",
                "Transfert privé direct depuis Paris et sa proche région, avec prise en charge à l’adresse de votre choix.",
              ],
              [
                "Aéroports → Parc Astérix",
                "Transfert depuis Roissy-CDG, Orly ou Beauvais vers le Parc Astérix, avec un trajet organisé selon votre arrivée.",
              ],
              [
                "Gares → Parc Astérix",
                "Prise en charge depuis les principales gares parisiennes et franciliennes pour rejoindre le parc confortablement.",
              ],
              [
                "Familles et groupes",
                "La Mercedes Classe V permet d’accueillir jusqu’à 6 passagers et leurs bagages dans un espace confortable.",
              ],
              [
                "Journée sur place",
                "Possibilité d’organiser une prestation avec mise à disposition pour accompagner votre programme de la journée.",
              ],
              [
                "Service VIP",
                "Un accompagnement discret et personnalisé pour les clients recherchant confort, ponctualité et sérénité.",
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
              Une expérience sans stress
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.14em] text-white md:text-4xl">
              Profitez de votre journée, nous nous occupons du trajet
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-400">
              Évitez les contraintes de conduite, de stationnement et de
              transport avec un chauffeur privé qui connaît les principaux
              axes entre Paris, les aéroports et le Parc Astérix.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-400">
              Votre prise en charge est organisée à l’avance afin de vous
              permettre de voyager dans les meilleures conditions, à l’aller
              comme au retour.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-black p-10">
            <h3 className="text-xl tracking-[0.14em] text-amber-400">
              Pourquoi choisir un chauffeur VTC ?
            </h3>

            <ul className="mt-7 space-y-5 text-sm leading-7 text-neutral-400">
              <li>✓ Prise en charge à l’adresse de votre choix</li>
              <li>✓ Véhicule premium et confortable</li>
              <li>✓ Chauffeur professionnel et ponctuel</li>
              <li>✓ Transfert direct sans correspondance</li>
              <li>✓ Service adapté aux familles et aux entreprises</li>
              <li>✓ Retour organisé selon votre programme</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light tracking-[0.16em] text-amber-400 md:text-4xl">
            Depuis Paris, les aéroports et l’Île-de-France
          </h2>

                   <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Paris", "/chauffeur-prive-paris"],
              ["Roissy-CDG", "/chauffeur-prive-cdg"],
              ["Orly", "/chauffeur-prive-orly"],
              ["Beauvais", "/chauffeur-aeroport-beauvais"],
              ["Essonne", "/vtc-essonne"],
              ["Seine-et-Marne", "/chauffeur-prive-fontainebleau"],
              ["Hauts-de-Seine", "/chauffeur-prive-paris"],
              ["Val-de-Marne", "/chauffeur-prive-paris"],
            ].map(([place, href]) => (
              <a
                key={place}
                href={href}
                className="min-h-[120px] flex items-center justify-center rounded-2xl border border-amber-500/15 bg-black p-8 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                Chauffeur VTC depuis {place}
              </a>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-neutral-500">
            Nous pouvons également organiser des transferts combinés avec les
            autres destinations proposées par notre service de chauffeur
            privé.
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
              href="/transfert-orly"
              className="text-amber-400 hover:text-white"
            >
              Transfert Orly
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="/transfert-cdg"
              className="text-amber-400 hover:text-white"
            >
              Transfert CDG
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
                "Proposez-vous des transferts vers le Parc Astérix depuis Paris ?",
                "Oui. Nous proposons des transferts privés depuis Paris et l’Île-de-France vers le Parc Astérix.",
              ],
              [
                "Pouvez-vous venir me chercher à l’aéroport ?",
                "Oui. Une prise en charge peut être organisée depuis Roissy-CDG, Orly ou Beauvais.",
              ],
              [
                "Combien de passagers peut accueillir la Mercedes Classe V ?",
                "La Mercedes Classe V peut accueillir jusqu’à 6 passagers.",
              ],
              [
                "Peut-on organiser le retour après la fermeture du parc ?",
                "Oui. L’horaire de retour peut être défini lors de votre réservation selon votre programme.",
              ],
              [
                "Comment obtenir le tarif de mon transfert ?",
                "Vous pouvez effectuer une demande via notre formulaire de réservation. Le tarif est calculé selon votre trajet et les caractéristiques de la prestation.",
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
          Réservez votre chauffeur VTC pour le Parc Astérix
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
          Organisez votre transfert privé dans un véhicule premium et profitez
          pleinement de votre journée.
        </p>

        <a
          href="/reservation"
          className="mt-10 inline-flex rounded-full border border-amber-400 bg-amber-400 px-10 py-4 text-sm font-medium tracking-[0.18em] text-black transition hover:bg-transparent hover:text-amber-400"
        >
          DEMANDER UN TRANSFERT
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
