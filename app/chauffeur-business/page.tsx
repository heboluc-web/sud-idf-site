import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chauffeur Business | Sud IDF Executive Transport",
  description:
    "Service de chauffeur privé business haut de gamme en Essonne et Île-de-France pour dirigeants, entreprises et déplacements professionnels.",
};

export default function ChauffeurBusiness() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        Chauffeur business haut de gamme
      </h1>

      <p className="text-lg max-w-3xl mb-6">
        Sud IDF Executive Transport accompagne les professionnels,
        dirigeants et entreprises pour tous leurs déplacements business.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Transport professionnel premium
      </h2>

      <p className="max-w-3xl mb-6">
        Déplacements vers réunions, hôtels, gares, aéroports et événements
        professionnels avec ponctualité, discrétion et confort.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Service dédié aux entreprises
      </h2>

      <p className="max-w-3xl">
        Réservation simple, chauffeur professionnel et véhicule premium
        pour tous vos trajets business en Île-de-France.
      </p>
    </main>
  );
}