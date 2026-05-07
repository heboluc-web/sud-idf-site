import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transfert Orly Chauffeur Privé | Sud IDF Executive Transport",
  description:
    "Service de chauffeur privé haut de gamme vers l'aéroport d'Orly depuis l’Essonne et toute l’Île-de-France.",
};

export default function TransfertOrly() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        Transfert Orly en chauffeur privé
      </h1>

      <p className="text-lg max-w-3xl mb-6">
        Sud IDF Executive Transport propose un service premium de transfert
        vers l’aéroport d’Orly pour les particuliers et professionnels.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Chauffeur privé vers Orly depuis l’Essonne
      </h2>

      <p className="max-w-3xl mb-6">
        Nous assurons vos trajets vers Orly depuis Évry, Corbeil-Essonnes,
        Melun, Sénart et toute l’Île-de-France avec ponctualité,
        discrétion et confort haut de gamme.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Service haut de gamme
      </h2>

      <p className="max-w-3xl">
        Véhicule premium, chauffeur professionnel, réservation simple
        et accompagnement personnalisé pour tous vos déplacements.
      </p>
    </main>
  );
}