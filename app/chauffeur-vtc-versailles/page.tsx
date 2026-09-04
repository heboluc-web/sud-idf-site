import Link from "next/link";

export const metadata = {
  title: "Chauffeur VTC Versailles | Transfert Privé Premium",
  description:
    "Chauffeur VTC Versailles : transferts privés depuis Paris et l’Île-de-France vers Versailles. Service premium, ponctualité et confort.",
};

export default function ChauffeurVtcVersailles() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-2xl border-b border-amber-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">

          <Link href="/" className="flex flex-col">
            <span className="text-xl tracking-[0.5em] uppercase text-white font-light">
              SUD IDF
            </span>
            <span className="text-[10px] tracking-[0.7em] uppercase text-amber-400 mt-1">
              Executive Transport
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.25em] uppercase text-neutral-300">
            <Link href="/" className="hover:text-amber-400 transition">
              Accueil
            </Link>
            <Link href="/transfert-orly" className="hover:text-amber-400 transition">
              Orly
            </Link>
            <Link href="/transfert-cdg" className="hover:text-amber-400 transition">
              CDG
            </Link>
            <Link href="/reservation" className="hover:text-amber-400 transition">
              Réserver
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition">
              Contact
            </Link>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-black to-black pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">

          <p className="text-amber-400 uppercase tracking-[0.45em] text-xs md:text-sm mb-8">
            CHAUFFEUR PRIVÉ · VERSAILLES
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-8">
            Chauffeur VTC Versailles
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-8 mb-12">
            Un service de chauffeur privé pour vos déplacements vers Versailles,
            au départ de Paris et de toute l’Île-de-France, avec confort,
            ponctualité et discrétion.
          </p>

          <Link
            href="/reservation"
            className="inline-block bg-amber-500 text-black px-10 py-5 rounded-full tracking-[0.3em] text-xs uppercase hover:bg-amber-400 transition-all duration-500"
          >
            Réserver votre chauffeur
          </Link>

        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="py-28 px-6 bg-neutral-950 border-t border-amber-500/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-amber-400 tracking-[0.35em] uppercase font-light mb-10 text-center">
            Votre chauffeur privé pour Versailles
          </h2>

          <div className="space-y-6 text-neutral-300 leading-8 text-base md:text-lg">

            <p>
              Vous recherchez un <strong className="text-white">
                chauffeur VTC Versailles
              </strong>{" "}
              pour rejoindre Versailles dans les meilleures conditions ?
              SUD IDF Executive Transport vous accompagne pour vos trajets
              privés et professionnels.
            </p>

            <p>
              Notre service de chauffeur privé vous permet de bénéficier d’une
              prise en charge personnalisée depuis votre domicile, votre hôtel,
              votre entreprise, une gare ou un aéroport. Nous organisons votre
              déplacement selon votre lieu de départ et votre horaire.
            </p>

            <p>
              Que vous souhaitiez visiter Versailles, rejoindre un rendez-vous
              professionnel ou organiser un transfert privé, nous privilégions
              la ponctualité, le confort et la discrétion à chaque prestation.
            </p>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 px-6 bg-black border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-amber-400 tracking-[0.35em] uppercase font-light mb-16 text-center">
            Transferts vers Versailles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-neutral-950 border border-amber-500/20 rounded-3xl p-8">
              <h3 className="text-xl text-amber-400 mb-5">
                Paris → Versailles
              </h3>
              <p className="text-neutral-400 leading-7">
                Départ depuis Paris avec une prise en charge privée et un
                trajet confortable jusqu’à Versailles.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-3xl p-8">
              <h3 className="text-xl text-amber-400 mb-5">
                Aéroports → Versailles
              </h3>
              <p className="text-neutral-400 leading-7">
                Transferts privés depuis Orly, Roissy Charles-de-Gaulle ou
                Beauvais vers Versailles.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-3xl p-8">
              <h3 className="text-xl text-amber-400 mb-5">
                Gares → Versailles
              </h3>
              <p className="text-neutral-400 leading-7">
                Prise en charge depuis les principales gares de Paris et
                d’Île-de-France pour rejoindre Versailles.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-3xl p-8">
              <h3 className="text-xl text-amber-400 mb-5">
                Visite et tourisme
              </h3>
              <p className="text-neutral-400 leading-7">
                Un transport privé confortable pour organiser votre déplacement
                vers le Château de Versailles et ses environs.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-3xl p-8">
              <h3 className="text-xl text-amber-400 mb-5">
                Déplacements professionnels
              </h3>
              <p className="text-neutral-400 leading-7">
                Une solution adaptée aux rendez-vous, événements et déplacements
                professionnels à Versailles.
              </p>
            </div>

            <div className="bg-neutral-950 border border-amber-500/20 rounded-3xl p-8">
              <h3 className="text-xl text-amber-400 mb-5">
                Service VIP
              </h3>
              <p className="text-neutral-400 leading-7">
                Une prestation personnalisée pour les clients recherchant
                confort, discrétion et flexibilité.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-32 px-6 bg-neutral-950 border-t border-amber-500/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-amber-400 uppercase tracking-[0.4em] text-xs mb-6">
              UNE EXPÉRIENCE PREMIUM
            </p>

            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Un trajet vers Versailles pensé pour votre confort
            </h2>

            <div className="space-y-5 text-neutral-400 leading-7">

              <p>
                Votre chauffeur vous accueille à l’adresse indiquée lors de
                votre réservation et vous accompagne jusqu’à votre destination.
              </p>

              <p>
                Nous adaptons la prestation au nombre de passagers, aux bagages
                et aux contraintes particulières de votre déplacement.
              </p>

              <p>
                Pour une visite du Château de Versailles, un rendez-vous
                professionnel ou un transfert depuis un aéroport, votre trajet
                est organisé avec soin.
              </p>

            </div>

          </div>

          <div className="bg-black border border-amber-500/20 rounded-3xl p-10">

            <h3 className="text-2xl text-amber-400 mb-8">
              Pourquoi choisir notre service ?
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-white font-medium mb-2">
                  Chauffeur professionnel
                </p>
                <p className="text-neutral-500 text-sm leading-6">
                  Une prise en charge sérieuse avec une attention particulière
                  portée à la ponctualité.
                </p>
              </div>

              <div>
                <p className="text-white font-medium mb-2">
                  Confort premium
                </p>
                <p className="text-neutral-500 text-sm leading-6">
                  Une flotte adaptée aux déplacements privés et professionnels.
                </p>
              </div>

              <div>
                <p className="text-white font-medium mb-2">
                  Réservation simple
                </p>
                <p className="text-neutral-500 text-sm leading-6">
                  Demandez votre trajet directement depuis notre formulaire
                  de réservation.
                </p>
              </div>

              <div>
                <p className="text-white font-medium mb-2">
                  Service personnalisé
                </p>
                <p className="text-neutral-500 text-sm leading-6">
                  Chaque demande est étudiée selon votre lieu de départ,
                  votre destination et vos besoins.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SEO LOCAL ================= */}
      <section className="py-32 px-6 bg-black border-t border-amber-500/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-amber-400 tracking-[0.35em] uppercase font-light mb-12 text-center">
            Chauffeur Versailles depuis l’Île-de-France
          </h2>

          <div className="text-neutral-400 leading-8 space-y-6">

            <p>
              SUD IDF Executive Transport propose un service de{" "}
              <strong className="text-white">
                chauffeur privé Versailles
              </strong>{" "}
              pour les clients au départ de Paris et de l’Île-de-France.
            </p>

            <p>
              Nous pouvons organiser des transferts depuis les aéroports,
              les gares, les hôtels, les entreprises ou votre domicile.
              Le trajet est préparé en fonction de votre réservation et
              de vos horaires.
            </p>

            <p>
              Vous souhaitez rejoindre Versailles depuis Orly ou CDG ?
              Consultez également nos services de transfert aéroport.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            <Link
              href="/transfert-orly"
              className="border border-amber-500/20 rounded-2xl p-7 hover:border-amber-400 transition bg-neutral-950"
            >
              <h3 className="text-lg text-amber-400 mb-3">
                Transfert depuis Orly
              </h3>
              <p className="text-neutral-500">
                Chauffeur privé pour vos déplacements depuis ou vers l’aéroport
                Paris-Orly.
              </p>
            </Link>

            <Link
              href="/transfert-cdg"
              className="border border-amber-500/20 rounded-2xl p-7 hover:border-amber-400 transition bg-neutral-950"
            >
              <h3 className="text-lg text-amber-400 mb-3">
                Transfert depuis CDG
              </h3>
              <p className="text-neutral-500">
                Service chauffeur premium depuis ou vers Roissy
                Charles-de-Gaulle.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-32 px-6 bg-neutral-950 border-t border-amber-500/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl text-amber-400 tracking-[0.35em] uppercase font-light mb-16 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6">

            <div className="border border-amber-500/20 rounded-3xl p-8 bg-black">
              <h3 className="text-xl text-white mb-4">
                Proposez-vous un chauffeur VTC pour Versailles ?
              </h3>
              <p className="text-neutral-400 leading-7">
                Oui. Nous proposons des transferts privés vers Versailles
                depuis Paris, les aéroports, les gares et différentes communes
                d’Île-de-France.
              </p>
            </div>

            <div className="border border-amber-500/20 rounded-3xl p-8 bg-black">
              <h3 className="text-xl text-white mb-4">
                Peut-on réserver un chauffeur depuis Orly ou CDG ?
              </h3>
              <p className="text-neutral-400 leading-7">
                Oui. Nous organisons des transferts privés depuis Paris-Orly
                et Roissy Charles-de-Gaulle vers Versailles.
              </p>
            </div>

            <div className="border border-amber-500/20 rounded-3xl p-8 bg-black">
              <h3 className="text-xl text-white mb-4">
                Peut-on être pris en charge à notre hôtel ?
              </h3>
              <p className="text-neutral-400 leading-7">
                Oui. Indiquez simplement l’adresse de prise en charge lors
                de votre réservation afin que nous puissions organiser
                votre transfert.
              </p>
            </div>

            <div className="border border-amber-500/20 rounded-3xl p-8 bg-black">
              <h3 className="text-xl text-white mb-4">
                Comment réserver votre chauffeur Versailles ?
              </h3>
              <p className="text-neutral-400 leading-7">
                Vous pouvez effectuer votre demande directement depuis notre
                formulaire de réservation. Nous vous confirmons ensuite les
                modalités de votre prestation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 bg-black border-t border-amber-500/20 text-center">

        <p className="text-amber-400 uppercase tracking-[0.4em] text-xs mb-6">
          VERSAILLES
        </p>

        <h2 className="text-3xl md:text-5xl font-light mb-8">
          Réservez votre chauffeur privé
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10 leading-7">
          Préparez votre transfert vers Versailles avec SUD IDF Executive
          Transport.
        </p>

        <Link
          href="/reservation"
          className="inline-block bg-amber-500 text-black px-12 py-5 rounded-full tracking-[0.3em] text-xs uppercase hover:bg-amber-400 transition-all duration-500"
        >
          RÉSERVER MAINTENANT
        </Link>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-amber-500/20 bg-black py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-xl uppercase tracking-[0.4em] text-white font-light">
            SUD IDF
          </h3>

          <p className="mt-3 text-xs uppercase tracking-[0.5em] text-amber-400">
            Executive Transport
          </p>

          <p className="mt-8 text-sm text-neutral-500">
            Chauffeur privé premium en Île-de-France
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-neutral-500">

            <Link href="/" className="hover:text-amber-400 transition">
              Accueil
            </Link>

            <Link
              href="/reservation"
              className="hover:text-amber-400 transition"
            >
              Réservation
            </Link>

            <Link
              href="/contact"
              className="hover:text-amber-400 transition"
            >
              Contact
            </Link>

            <Link
              href="/mentions-legales"
              className="hover:text-amber-400 transition"
            >
              Mentions légales
            </Link>

          </div>

          <p className="mt-10 text-xs text-neutral-600">
            © 2026 SUD IDF EXECUTIVE TRANSPORT
          </p>

        </div>

      </footer>

    </main>
  );
}
