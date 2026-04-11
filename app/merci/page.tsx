export default function Merci() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-center px-4">

      {/* LOGO */}
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="w-28 mb-6 animate-fade-in"
      />

      {/* TITRE */}
      <h1 className="text-4xl md:text-5xl text-amber-400 mb-6">
        Demande envoyée
      </h1>

      {/* TEXTE */}
      <p className="text-gray-300 mb-8 max-w-md">
        Merci pour votre demande. Nous vous répondrons rapidement avec un devis personnalisé.
      </p>

      {/* BOUTON RETOUR */}
      <a
        href="/"
        className="px-6 py-3 border border-amber-500 text-amber-400 rounded-xl hover:bg-amber-500 hover:text-black transition"
      >
        Retour à l’accueil
      </a>

    </main>
  );
}