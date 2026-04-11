export default function Appel() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-center px-4">

      {/* LOGO */}
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="w-32 mb-8 animate-fade-in"
      />

      {/* TITRE */}
      <h1 className="text-5xl font-light tracking-widest text-amber-400 mb-8 animate-fade-in">
  Appelez-nous
</h1>

      {/* NUMERO PREMIUM */}
      <a
        href="tel:+33668863673"
        className="relative text-4xl md:text-5xl text-white font-semibold px-10 py-6 rounded-2xl border border-amber-500 overflow-hidden group shadow-[0_0_20px_rgba(245,158,11,0.3)]"
      >
        {/* Effet lumière */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent opacity-0 group-hover:opacity-100 animate-shine"></span>

        <span className="relative z-10 tracking-widest">
          06 68 86 36 73
        </span>
      </a>

      {/* TEXTE */}
      <p className="text-gray-400 mt-8 text-sm tracking-wide animate-fade-in">
        Service disponible 24h/24 • 7j/7
      </p>

      {/* BOUTON RETOUR */}
      <a
        href="/"
        className="mt-10 px-6 py-2 border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500 hover:text-black transition"
      >
        Retour à l’accueil
      </a>

    </main>
  );
}