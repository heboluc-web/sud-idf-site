export const dynamic = "force-dynamic"

export default function CGV() {
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
        Conditions Générales de Vente
      </h1>

      {/* CONTENU */}
      <div className="max-w-3xl text-gray-300 space-y-6 text-sm md:text-base">

        <p>
          Les présentes conditions générales de vente régissent les prestations proposées par Sud IDF Executive Transport.
        </p>

        <h2 className="text-amber-400 text-lg text-center">1. Réservation</h2>
        <p>
          Toute réservation doit être effectuée à l’avance via notre formulaire ou par téléphone. Elle est confirmée après validation.
        </p>

        <h2 className="text-amber-400 text-lg text-center">2. Tarifs</h2>
        <p>
          Les tarifs sont définis en fonction du trajet, de la durée et des options choisies. Ils sont communiqués avant validation.
        </p>

        <h2 className="text-amber-400 text-lg text-center">3. Annulation</h2>
        <p>
          Toute annulation doit être effectuée au minimum 24h à l’avance. Passé ce délai, des frais peuvent être appliqués.
        </p>

        <h2 className="text-amber-400 text-lg text-center">4. Responsabilité</h2>
        <p>
          La société ne saurait être tenue responsable en cas de retard lié à des circonstances indépendantes (trafic, météo…).
        </p>

        <h2 className="text-amber-400 text-lg text-center">5. Paiement</h2>
        <p>
          Le paiement s’effectue selon les modalités convenues (espèces, virement ou autre).
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