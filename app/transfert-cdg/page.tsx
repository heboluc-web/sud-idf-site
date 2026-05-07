import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transfert CDG Chauffeur Privé | Sud IDF Executive Transport",
  description:
    "Service de chauffeur privé haut de gamme vers l'aéroport Charles-de-Gaulle depuis l’Essonne et toute l’Île-de-France.",
};

export default function TransfertCDG() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        Transfert CDG en chauffeur privé
      </h1>

      <p className="text-lg max-w-3xl mb-6">
        Sud IDF Executive Transport propose un service premium de transfert
        vers l’aéroport Charles-de-Gaulle pour les particuliers et professionnels.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Chauffeur privé vers CDG depuis l’Essonne
      </h2>

      <p className="max-w-3xl mb-6">
        Nous assurons vos trajets vers Roissy Charles-de-Gaulle depuis
        Corbeil-Essonnes, Évry-Courcouronnes, Melun, Sénart et toute
        l’Île-de-France avec ponctualité, discrétion et confort premium.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Transport haut de gamme
      </h2>

      <p className="max-w-3xl">
        Véhicule premium, chauffeur professionnel et accompagnement personnalisé
        pour tous vos déplacements vers l’aéroport CDG.
      </p>
    </main>
  );
}