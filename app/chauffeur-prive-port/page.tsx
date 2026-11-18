import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chauffeur privé port de croisière | Sud IDF Executive Transport",
  description:
    "Chauffeur privé pour vos transferts vers et depuis les ports de croisière. Transport premium depuis Paris et l’Île-de-France, avec prise en charge des passagers et bagages.",
  keywords: [
    "chauffeur privé port de croisière",
    "transfert port croisière Paris",
    "VTC port croisière",
    "chauffeur privé terminal croisière",
    "transfert port depuis Paris",
    "transport bagages croisière",
    "chauffeur privé Île-de-France",
  ],
  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/chauffeur-prive-port",
  },
};

const services = [
  {
    title: "Transfert vers le port",
    text: "Nous venons vous chercher à votre domicile, votre hôtel ou à l’adresse convenue pour vous conduire jusqu’au terminal de croisière.",
    image: "/images/port-croisiere-hero.png",
    alt: "Berline noire avec chauffeur devant un terminal de croisière et un paquebot",
  },
  {
    title: "Retour de croisière",
    text: "À la fin de votre voyage, organisez votre retour depuis le terminal vers votre domicile, votre hôtel, une gare ou un aéroport.",
    image: "/images/port-croisiere-retour.png",
    alt: "Voyageurs avec leurs valises retrouvant leur chauffeur devant un paquebot",
  },
  {
    title: "Voyage en famille ou en groupe",
    text: "Pour les voyageurs accompagnés de plusieurs valises, un véhicule adapté au nombre de passagers et au volume des bagages peut être prévu selon disponibilité.",
    image: "/images/port-croisiere-classe-v.png",
    alt: "Véhicule premium spacieux devant un terminal de croisière avec des voyageurs et leurs bagages",
  },
  {
    title: "Accueil personnalisé",
    text: "Une prise en charge soignée à l’arrivée, avec une coordination préalable du lieu et de l’horaire de rendez-vous.",
    image: "/images/port-croisiere-accueil.png",
    alt: "Chauffeur accueillant des passagers avec leurs valises près d’une berline de luxe",
  },
  {
    title: "Transfert hôtel-port",
    text: "Reliez votre hôtel au terminal de croisière ou organisez une étape supplémentaire avant l’embarquement ou après le débarquement.",
    image: "/images/port-croisiere-depart.png",
    alt: "Berline premium devant un grand paquebot à l’heure du départ",
  },
  {
    title: "Prestation VIP",
    text: "Pour les voyageurs qui souhaitent privilégier le confort, la discrétion et un accompagnement personnalisé tout au long du transfert.",
    image: "/images/port-croisiere-hero.png",
    alt: "Service de transport exécutif en berline noire devant un terminal maritime",
  },
];

const faqs = [
  [
    "Proposez-vous des transferts vers les ports de croisière ?",
    "Oui. SUD IDF Executive Transport organise sur réservation des transferts privés depuis Paris et l’Île-de-France vers le port de départ convenu. Le trajet et les conditions sont étudiés selon votre destination.",
  ],
  [
    "Pouvez-vous venir nous chercher à la fin de la croisière ?",
    "Oui. Une prise en charge au retour peut être organisée. Il est recommandé de communiquer le terminal, l’horaire prévisionnel de débarquement et un numéro de contact lors de la réservation.",
  ],
  [
    "Pouvez-vous transporter plusieurs valises ?",
    "Oui, sous réserve de choisir un véhicule adapté au nombre de passagers et au volume des bagages. Merci de préciser ces éléments au moment de la réservation.",
  ],
  [
    "Proposez-vous un véhicule avec davantage de places ?",
    "Un véhicule spacieux de type Mercedes Classe V peut être envisagé selon disponibilité. La capacité et les bagages doivent être confirmés avant validation de la prestation.",
  ],
  [
    "Comment obtenir un tarif pour un transfert vers un port ?",
    "Le tarif dépend notamment de l’adresse de départ, du port et du terminal, de la date, des horaires, du nombre de passagers et du véhicule souhaité. Contactez-nous pour étudier votre trajet.",
  ],
];

export default function ChauffeurPrivePort() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="relative z-20 border-b border-amber-500/20 bg-black px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="block">
            <div className="text-xl tracking-[0.45em] text-white">SUD IDF</div>
            <div className="mt-1 text-[10px] tracking-[0.5em] text-amber-400">
              EXECUTIVE TRANSPORT
            </div>
          </a>
          <div className="hidden items-center gap-8 text-xs tracking-[0.25em] text-neutral-300 md:flex">
            <a href="/chauffeur-prive-paris" className="hover:text-amber-400">PARIS</a>
            <a href="/chauffeur-prive-orly" className="hover:text-amber-400">ORLY</a>
            <a href="/chauffeur-prive-cdg" className="hover:text-amber-400">CDG</a>
            <a href="/chauffeur-business" className="hover:text-amber-400">BUSINESS</a>
            <a href="/reservation" className="hover:text-amber-400">RÉSERVATION</a>
            <a href="/contact" className="hover:text-amber-400">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* BANNIÈRE CROISIÈRE */}
      <section className="relative isolate min-h-[620px] h-[78vh] max-h-[900px] w-full overflow-hidden">
        <Image
          src="/images/port-croisiere-hero.png"
          alt="Chauffeur privé et berline premium devant un terminal de croisière avec un paquebot en arrière-plan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-amber-400 md:text-sm">
              SUD IDF EXECUTIVE TRANSPORT · TRANSFERTS CROISIÈRES
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Chauffeur privé
              <span className="block text-amber-400">vers votre port de croisière</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-100 md:text-xl">
              Rejoignez votre terminal en toute sérénité. Depuis Paris et l’Île-de-France,
              profitez d’un transport privé organisé autour de votre départ ou de votre
              retour de croisière, avec une attention particulière portée à vos passagers
              et à leurs bagages.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/reservation" className="rounded-md border border-amber-400 bg-amber-500 px-9 py-4 text-center text-sm font-bold tracking-[0.12em] text-black transition hover:bg-amber-400">
                RÉSERVER UN CHAUFFEUR
              </a>
              <a href="/contact" className="rounded-md border border-white/70 px-9 py-4 text-center text-sm font-semibold tracking-[0.12em] text-white transition hover:border-amber-400 hover:text-amber-400">
                DEMANDER UN RENSEIGNEMENT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-400">Le confort avant l’embarquement</p>
          <h2 className="mt-6 text-3xl font-light leading-tight md:text-5xl">
            Votre voyage commence dès la prise en charge
          </h2>
          <div className="mx-auto mt-9 max-w-4xl space-y-6 text-left text-lg leading-8 text-neutral-300">
            <p>
              Un départ en croisière est souvent un moment attendu depuis longtemps.
              Pour commencer votre voyage dans de bonnes conditions, le trajet jusqu’au
              terminal mérite lui aussi une organisation attentive. SUD IDF Executive
              Transport vous accompagne depuis votre domicile, votre hôtel, une gare
              ou un aéroport en direction du port de croisière convenu.
            </p>
            <p>
              Notre service de chauffeur privé s’adresse aux couples, aux familles,
              aux voyageurs individuels et aux clients professionnels qui souhaitent
              privilégier un transport confortable, ponctuel et personnalisé. Nous
              préparons la prise en charge à partir des informations communiquées lors
              de la réservation : adresse, horaire, nombre de passagers et volume des bagages.
            </p>
            <p>
              Pour votre retour, nous pouvons également organiser un transfert depuis
              le terminal vers votre domicile ou la prochaine étape de votre voyage.
              L’objectif est de vous offrir une continuité de transport simple, sans
              avoir à gérer vous-même la route, le stationnement ou les correspondances.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE DE PRESTATIONS */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">Nos prestations croisières</p>
            <h2 className="mt-5 text-3xl font-light md:text-5xl">Un transfert adapté à chaque étape de votre voyage</h2>
            <p className="mt-7 text-base leading-8 text-neutral-400 md:text-lg">
              Départ, retour, transfert hôtel-port ou prise en charge de plusieurs voyageurs :
              chaque trajet est préparé selon votre itinéraire et vos besoins.
            </p>
          </div>
          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group overflow-hidden rounded-2xl border border-amber-500/20 bg-black transition duration-300 hover:-translate-y-1 hover:border-amber-400/60">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-amber-400">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-400">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANISATION DU TRANSFERT */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400">Une organisation personnalisée</p>
            <h2 className="mt-5 text-3xl font-light leading-tight md:text-4xl">Un trajet préparé selon votre croisière</h2>
            <p className="mt-7 text-base leading-8 text-neutral-400">
              Les terminaux, les horaires d’embarquement et les conditions d’accès
              peuvent varier selon le port et la compagnie. Lors de votre réservation,
              indiquez-nous le nom du port ou du terminal, votre heure souhaitée de
              prise en charge, le nombre de voyageurs et vos bagages.
            </p>
            <p className="mt-5 text-base leading-8 text-neutral-400">
              Pour un retour de croisière, communiquez également les informations
              disponibles sur votre arrivée et votre débarquement. Nous pourrons ainsi
              étudier avec vous les modalités de rendez-vous et le trajet retour.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-amber-500/20 bg-neutral-950">
            <div className="relative aspect-[4/3]">
              <Image src="/images/port-croisiere-classe-v.png" alt="Véhicule spacieux avec chauffeur devant un terminal de croisière" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-xl tracking-wide text-amber-400">Les informations utiles pour votre réservation</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-neutral-300">
                <li>✓ Adresse de départ et port ou terminal d’arrivée</li>
                <li>✓ Date et horaire souhaité de prise en charge</li>
                <li>✓ Nombre de passagers</li>
                <li>✓ Nombre et volume des bagages</li>
                <li>✓ Véhicule souhaité, selon disponibilité</li>
                <li>✓ Coordonnées utiles pour organiser le rendez-vous</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FLOTTES ET BAGAGES */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-400">Confort et capacité</p>
          <h2 className="mt-5 text-3xl font-light md:text-4xl">Le véhicule adapté à vos voyageurs et à vos bagages</h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-neutral-400">
            Selon les disponibilités, la composition de votre groupe et le volume des valises,
            nous étudions le véhicule le plus adapté à votre transfert. Pour voyager avec
            davantage d’espace, un véhicule de type Mercedes Classe V peut notamment être envisagé.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-black text-left">
              <div className="relative aspect-[16/9]">
                <Image src="/images/port-croisiere-accueil.png" alt="Berline premium et accueil personnalisé des voyageurs au terminal maritime" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="text-xl text-amber-400">Berline premium</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">Une solution élégante pour les voyageurs seuls, les couples ou les petits groupes, en fonction des bagages.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-black text-left">
              <div className="relative aspect-[16/9]">
                <Image src="/images/port-croisiere-classe-v.png" alt="Véhicule spacieux de type van premium pour voyageurs et valises" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="text-xl text-amber-400">Véhicule spacieux</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">Une possibilité à étudier pour les familles et les voyageurs transportant plusieurs valises, selon capacité disponible.</p>
              </div>
            </div>
          </div>
          <p className="mt-7 text-xs leading-6 text-neutral-500">Le véhicule et la capacité de chargement sont confirmés au moment de la réservation en fonction de la disponibilité et des caractéristiques du trajet.</p>
        </div>
      </section>

      {/* ZONE DE DÉPART */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light text-amber-400 md:text-4xl">Votre transfert depuis Paris et l’Île-de-France</h2>
          <p className="mx-auto mt-7 max-w-3xl text-center text-base leading-8 text-neutral-400">
            Nous étudions les demandes au départ de Paris et des départements franciliens,
            pour rejoindre le port de croisière indiqué lors de votre réservation.
            Les trajets longue distance sont organisés selon la destination et les conditions convenues.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Paris", "/chauffeur-prive-paris"],
              ["Essonne", "/vtc-essonne"],
              ["Seine-et-Marne", "/chauffeur-prive-melun"],
              ["Hauts-de-Seine", "/chauffeur-prive-paris"],
              ["Yvelines", "/chauffeur-vtc-versailles"],
              ["Val-de-Marne", "/chauffeur-prive-paris"],
              ["Val-d’Oise", "/chauffeur-prive-paris"],
              ["Seine-Saint-Denis", "/chauffeur-prive-paris"],
            ].map(([place, href]) => (
              <a key={place} href={href} className="flex min-h-[100px] items-center justify-center rounded-2xl border border-amber-500/15 bg-neutral-950 p-6 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400">
                Départ depuis {place}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="border-b border-amber-500/20 bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light text-amber-400 md:text-4xl">Nos autres services de transport</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Chauffeur privé gare", "/chauffeur-prive-gare"],
              ["Chauffeur VTC Orly", "/chauffeur-prive-orly"],
              ["Chauffeur VTC CDG", "/chauffeur-prive-cdg"],
              ["Transport longue distance", "/transport-longue-distance"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-2xl border border-amber-500/15 bg-black p-7 text-center text-sm text-neutral-300 transition hover:border-amber-400 hover:text-amber-400">{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-amber-500/20 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-light text-amber-400 md:text-4xl">Questions fréquentes</h2>
          <div className="mt-12 space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-amber-500/15 bg-neutral-950 p-6">
                <summary className="cursor-pointer list-none text-base text-white group-open:text-amber-400">{question}</summary>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* APPEL À L'ACTION */}
      <section className="px-6 py-28 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-amber-400">SUD IDF Executive Transport</p>
        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-light leading-tight md:text-5xl">Partez en croisière, nous prenons soin de votre trajet</h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400">
          Communiquez-nous votre adresse de départ, votre terminal et vos besoins en bagages.
          Nous étudierons votre demande de transfert privé.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="/reservation" className="inline-flex justify-center rounded-md border border-amber-400 bg-amber-500 px-10 py-4 text-sm font-bold tracking-[0.15em] text-black transition hover:bg-amber-400">RÉSERVER UN CHAUFFEUR</a>
          <a href="/contact" className="inline-flex justify-center rounded-md border border-amber-500/50 px-10 py-4 text-sm font-semibold tracking-[0.15em] text-amber-400 transition hover:border-amber-400 hover:bg-amber-500/10">NOUS CONTACTER</a>
        </div>
      </section>

      {/* FOOTER CONSERVÉ */}
            <section className="border-t border-amber-500/20 bg-zinc-950 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">SUD IDF Executive Transport</p>
          <h2 className="mt-3 text-center text-2xl font-semibold text-white">Vos transferts vers les ports et terminaux de croisière</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-zinc-400">Organisez votre prise en charge depuis Paris, l’Essonne ou les villes voisines avec un chauffeur privé. Retrouvez également nos transferts aéroport et nos prestations dédiées aux déplacements professionnels.</p>
          <nav className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/chauffeur-prive-essonne" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Chauffeur privé en Essonne <span className="float-right text-amber-400">→</span></a>
            <a href="/chauffeur-prive-paris" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Chauffeur privé à Paris <span className="float-right text-amber-400">→</span></a>
            <a href="/transfert-orly" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Transfert Orly <span className="float-right text-amber-400">→</span></a>
            <a href="/transfert-cdg" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Transfert CDG <span className="float-right text-amber-400">→</span></a>
            <a href="/chauffeur-business" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Chauffeur business <span className="float-right text-amber-400">→</span></a>
            <a href="/transport-vip" className="rounded-xl border border-amber-500/30 bg-zinc-900 px-5 py-4 text-sm text-zinc-100 transition hover:border-amber-400">Transport VIP <span className="float-right text-amber-400">→</span></a>
          </nav>
        </div>
      </section>

<footer className="border-t border-amber-500/20 bg-black px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg tracking-[0.35em] text-white">SUD IDF</div>
            <div className="mt-1 text-[9px] tracking-[0.45em] text-amber-400">EXECUTIVE TRANSPORT</div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">Chauffeur privé premium en Île-de-France pour particuliers, entreprises et événements.</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400">Navigation</h3>
            <div className="mt-5 space-y-3 text-sm text-neutral-500">
              <a href="/" className="block hover:text-amber-400">Accueil</a>
              <a href="/reservation" className="block hover:text-amber-400">Réservation</a>
              <a href="/contact" className="block hover:text-amber-400">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400">Contact</h3>
            <div className="mt-5 space-y-3 text-sm text-neutral-500">
              <p>06 68 86 36 73</p>
              <p>contact@sudidfexecutivetransport.fr</p>
              <p>Corbeil-Essonnes · Île-de-France</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-5 border-t border-amber-500/10 pt-6 text-xs text-neutral-600">
          <a href="/mentions-legales" className="hover:text-amber-400">Mentions légales</a>
          <a href="/cgv" className="hover:text-amber-400">CGV</a>
          <a href="/confidentialite" className="hover:text-amber-400">Confidentialité</a>
        </div>
      </footer>
    </main>
  );
}
