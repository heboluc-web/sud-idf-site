export default function ChauffeurPrive() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-14 leading-tight">
          Chauffeur privé premium en Île-de-France
        </h1>

        <div className="space-y-10 text-2xl leading-relaxed text-neutral-200">
          <p>
            Sud IDF Executive Transport propose un service de chauffeur privé
            haut de gamme pour tous vos déplacements en Île-de-France.
          </p>

          <p>
            Nous assurons les transferts aéroports, gares, hôtels,
            rendez-vous professionnels, événements privés et déplacements
            longue distance avec ponctualité, discrétion et confort premium.
          </p>

          <p>
            Notre flotte premium et nos chauffeurs professionnels accompagnent
            particuliers, entreprises, dirigeants et clients VIP recherchant
            un transport élégant et sécurisé.
          </p>

          <p>
            Réservez facilement votre chauffeur privé pour vos besoins
            business, tourisme, événements et transferts personnalisés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="group relative bg-neutral-950 rounded-3xl overflow-hidden border border-amber-500/20 transition-all duration-700 ease-out hover:-translate-y-4 hover:border-amber-400 hover:shadow-[0_25px_100px_rgba(212,175,55,0.35)] p-8">
            <h2 className="text-4xl font-semibold text-amber-400 mb-4">
              Transfer Orly
            </h2>

            <p className="text-xl text-neutral-300 leading-relaxed">
              Chauffeur privé premium vers l’aéroport d’Orly.
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
              Transport exécutif pour entreprises et professionnels.
            </p>
          </div>

          <div className="group relative bg-neutral-950 rounded-3xl overflow-hidden border border-amber-500/20 transition-all duration-700 ease-out hover:-translate-y-4 hover:border-amber-400 hover:shadow-[0_25px_100px_rgba(212,175,55,0.35)] p-8">
            <h2 className="text-4xl font-semibold text-amber-400 mb-4">
              Réserver un chauffeur
            </h2>

            <p className="text-xl text-neutral-300 leading-relaxed">
              Réservation rapide de votre chauffeur privé premium.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}