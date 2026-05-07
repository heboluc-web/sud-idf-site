import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chauffeur Privé seine-et-marne | Sud IDF Executive Transport",
  description:
    "Service de chauffeur privé haut de gamme en seine-et-marne et en Île-de-France. Transferts aéroports, déplacements business et transport premium.",
};

export default function ChauffeurPriveCorbeil() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        Chauffeur privé en seine-et-marne 
      </h1>

      <p className="text-lg max-w-3xl mb-6">
        Sud IDF Executive Transport propose un service de chauffeur privé
        premium en seine-et-marne pour tous vos déplacements personnels
        et professionnels.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Transport haut de gamme en seine-et-marne 
      </h2>

      <p className="max-w-3xl mb-6">
        Nous assurons vos trajets vers Orly, Roissy Charles-de-Gaulle,
        Paris, gares et rendez-vous professionnels avec ponctualité,
        discrétion et confort.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Chauffeur business et transferts aéroports
      </h2>

      <p className="max-w-3xl">
        Réservation simple, véhicule premium et service personnalisé
        pour particuliers, dirigeants et entreprises.
      </p>
    </main>
  );
}