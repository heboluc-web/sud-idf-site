export const dynamic = "force-dynamic"

export default function MentionsLegales() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12">

      {/* LOGO */}
      <img
        src="/logo.png"
        alt="Logo"
        className="w-28 mb-8 animate-fade-in"
      />

      {/* TITRE */}
      <h1 className="text-3xl md:text-4xl text-amber-400 mb-8 text-center">
        Mentions légales
      </h1>

      {/* CONTENU */}
      <div className="max-w-3xl text-gray-300 space-y-6 text-sm md:text-base">

        <p>
          Conformément à la législation en vigueur, voici les informations relatives à l’éditeur du site.
        </p>

        <h2 className="text-amber-400 text-lg">Éditeur du site</h2>
        <p>
          Sud IDF Executive Transport<br />
          Chauffeur privé VTC<br />
          Île-de-France
        </p>

        <h2 className="text-amber-400 text-lg">Contact</h2>
        <p>
          Email : contact@sudidfexecutivetransport.fr<br />
          Téléphone : 06 68 86 36 73
        </p>

        <h2 className="text-amber-400 text-lg">Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc.<br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723<br />
          États-Unis
        </p>

        <h2 className="text-amber-400 text-lg">Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu du site (textes, images, logo) est protégé. Toute reproduction est interdite sans autorisation.
        </p>

        <h2 className="text-amber-400 text-lg">Données personnelles</h2>
        <p>
          Les données collectées via le formulaire sont utilisées uniquement pour répondre aux demandes des clients.
        </p>

      </div>

      {/* BOUTON RETOUR */}
      <a
        href="/"
        className="mt-10 px-6 py-3 border border-amber-500 text-amber-400 rounded-xl hover:bg-amber-500 hover:text-black transition"
      >
        Retour à l’accueil
      </a>

    </main>
  )
}