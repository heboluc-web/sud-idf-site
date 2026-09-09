import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chauffeur privÃ© VTC en ÃŽle-de-France | Sud IDF Executive Transport",
  description:
    "Chauffeur privÃ© VTC premium en ÃŽle-de-France. Transferts aÃ©roports, gares, dÃ©placements business, Ã©vÃ©nements et trajets longue distance.",
  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr/chauffeur-prive",
  },
};

export default function ChauffeurPrive() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-14 leading-tight">
          Chauffeur privÃ© premium en ÃŽle-de-France
        </h1>

        <div className="space-y-10 text-2xl leading-relaxed text-neutral-200">
          <p>
            Sud IDF Executive Transport propose un service de chauffeur privÃ©
            haut de gamme pour tous vos dÃ©placements en ÃŽle-de-France.
          </p>

          <p>
            Nous assurons les transferts aÃ©roports, gares, hÃ´tels,
            rendez-vous professionnels, Ã©vÃ©nements privÃ©s et dÃ©placements
            longue distance avec ponctualitÃ©, discrÃ©tion et confort premium.
          </p>

          <p>
            Notre flotte premium et nos chauffeurs professionnels accompagnent
            particuliers, entreprises, dirigeants et clients VIP recherchant
            un transport Ã©lÃ©gant et sÃ©curisÃ©.
          </p>

          <p>
            RÃ©servez facilement votre chauffeur privÃ© pour vos besoins
            business, tourisme, Ã©vÃ©nements et transferts personnalisÃ©s.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="group relative bg-neutral-950 rounded-3xl overflow-hidden border border-amber-500/20 transition-all duration-700 ease-out hover:-translate-y-4 hover:border-amber-400 hover:shadow-[0_25px_100px_rgba(212,175,55,0.35)] p-8">
            <h2 className="text-4xl font-semibold text-amber-400 mb-4">
              Transfer Orly
            </h2>

            <p className="text-xl text-neutral-300 leading-relaxed">
              Chauffeur privÃ© premium vers lâ€™aÃ©roport dâ€™Orly.
            </p>
          </div>

          <div className="group relative bg-neutral-950 rounded-3xl overflow-hidden border border-amber-500/20 transition-all duration-700 ease-out hover:-translate-y-4 hover:border-amber-400 hover:shadow-[0_25px_100px_rgba(212,175,55,0.35)] p-8">
            <h2 className="text-4xl font-semibold text-amber-400 mb-4">
              Transfer CDG
            </h2>

            <p className="text-xl text-neutral-300 leading-relaxed">
              Service haut de gamme vers Roissy Charles-de-Gaulle.
            </p>
          </div>

          <div className="group relative bg-neutral-950 rounded-3xl overflow-hidden border border-amber-500/20 transition-all duration-700 ease-out hover:-translate-y-4 hover:border-amber-400 hover:shadow-[0_25px_100px_rgba(212,175,55,0.35)] p-8">
            <h2 className="text-4xl font-semibold text-amber-400 mb-4">
              Chauffeur business
            </h2>

            <p className="text-xl text-neutral-300 leading-relaxed">
              Transport exÃ©cutif pour entreprises et professionnels.
            </p>
          </div>

          <div className="group relative bg-neutral-950 rounded-3xl overflow-hidden border border-amber-500/20 transition-all duration-700 ease-out hover:-translate-y-4 hover:border-amber-400 hover:shadow-[0_25px_100px_rgba(212,175,55,0.35)] p-8">
            <h2 className="text-4xl font-semibold text-amber-400 mb-4">
              RÃ©server un chauffeur
            </h2>

            <p className="text-xl text-neutral-300 leading-relaxed">
              RÃ©servation rapide de votre chauffeur privÃ© premium.
            </p>
          </div>
        </div>
      </section>
    <section className="mt-12">
  <h2 className="text-2xl font-semibold text-amber-400 mb-4">
    Nos services de chauffeur privé
  </h2>
  <div className="flex flex-wrap gap-4">
    <a href="/vtc-essonne" className="text-amber-400 hover:underline">VTC Essonne</a>
    <a href="/chauffeur-prive-paris" className="text-amber-400 hover:underline">Chauffeur privé Paris</a>
    <a href="/chauffeur-prive-orly" className="text-amber-400 hover:underline">Chauffeur privé Orly</a>
    <a href="/chauffeur-prive-cdg" className="text-amber-400 hover:underline">Chauffeur privé CDG</a>
  </div>
</section>
</main>
  );
}

