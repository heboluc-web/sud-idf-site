export default function Merci() {
  return (
    <section className="bg-black text-white flex items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-xl">

        <h1 className="text-3xl text-amber-400 mb-6">
          Demande envoyée
        </h1>

        <p className="text-neutral-300 mb-8">
          Merci pour votre demande. Nous vous répondrons rapidement avec un devis personnalisé.
        </p>

        <a
          href="/"
          className="px-6 py-3 border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500 hover:text-black transition"
        >
          Retour à l'accueil
        </a>

      </div>
    </section>
  );
}