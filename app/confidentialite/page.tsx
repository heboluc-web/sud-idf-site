export const dynamic = "force-dynamic"

export default function Confidentialite() {
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
        Politique de confidentialité
      </h1>

      {/* CONTENU */}
      <div className="max-w-3xl text-gray-300 space-y-6 text-sm md:text-base">

        <p>
          Cette politique de confidentialité décrit comment vos données personnelles sont collectées et utilisées.
        </p>

        <h2 className="text-amber-400 text-lg">1. Données collectées</h2>
        <p>
          Nous collectons les informations que vous nous transmettez via le formulaire de contact : nom, email, téléphone, et détails de votre demande.
        </p>

        <h2 className="text-amber-400 text-lg">2. Utilisation des données</h2>
        <p>
          Les données sont utilisées uniquement pour répondre à vos demandes et vous fournir un service personnalisé.
        </p>

        <h2 className="text-amber-400 text-lg">3. Conservation des données</h2>
        <p>
          Les données sont conservées uniquement pendant la durée nécessaire au traitement de votre demande.
        </p>

        <h2 className="text-amber-400 text-lg">4. Partage des données</h2>
        <p>
          Aucune donnée personnelle n’est vendue ou partagée avec des tiers.
        </p>

        <h2 className="text-amber-400 text-lg">5. Sécurité</h2>
        <p>
          Nous mettons en œuvre des mesures techniques pour protéger vos données contre tout accès non autorisé.
        </p>

        <h2 className="text-amber-400 text-lg">6. Vos droits</h2>
        <p>
          Vous pouvez demander l’accès, la modification ou la suppression de vos données en nous contactant par email.
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