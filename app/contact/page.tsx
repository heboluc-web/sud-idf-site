import Link from "next/link";

export const metadata = {
  title: "Contact chauffeur privé | Sud IDF Executive Transport",

  description:
    "Contactez Sud IDF Executive Transport pour vos réservations de chauffeur privé premium en Essonne, Paris et Île-de-France. Disponible 24h/24.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-4xl font-bold md:text-5xl">
          Contact chauffeur privé premium
        </h1>

        <div className="space-y-8 text-lg leading-8 text-gray-300">
          <p>
            Sud IDF Executive Transport vous accompagne pour tous vos
            déplacements privés, professionnels, transferts aéroports
            et mises à disposition en Île-de-France.
          </p>

          <p>
            Nous sommes disponibles 24h/24 et 7j/7 sur réservation.
          </p>

          <div className="space-y-4 rounded-2xl border border-amber-500/30 bg-zinc-950 p-8">
            <p>
              📞 Téléphone :
             <Link
  href="/appel"
  className="ml-2 text-amber-400 hover:text-yellow-300"
>
  06 68 86 36 73
</Link>
            </p>

            <p>
              📧 Email :
              <a
                href="mailto:contact@sudidfexecutivetransport.fr"
                className="ml-2 text-amber-400 hover:text-yellow-300"
              >
                contact@sudidfexecutivetransport.fr
              </a>
            </p>

            <p>
              📍 Zones desservies :
              Essonne, Seine-et-Marne, Paris, Orly, Roissy CDG,
              Fontainebleau, Melun, Corbeil-Essonnes,
              Évry-Courcouronnes.
            </p>

            <p>
              💬 WhatsApp :
             <Link
  href="/reservation"
  className="ml-2 text-amber-400 hover:text-yellow-300"
>
  Réserver via WhatsApp
</Link>
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/reservation"
            className="block w-full max-w-xl rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 px-8 py-5 text-center text-lg font-semibold text-black shadow-lg transition hover:scale-105"
          >
            Réserver un chauffeur
          </Link>
        </div>
      </div>
    </main>
  );
}