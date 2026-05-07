import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mise à Disposition Chauffeur | Sud IDF Executive Transport",
  description:
    "Service de mise à disposition de chauffeur privé haut de gamme en Essonne et Île-de-France pour professionnels et particuliers.",
};

export default function MiseADisposition() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        Mise à disposition chauffeur privé
      </h1>

      <p className="text-lg max-w-3xl mb-6">
        Sud IDF Executive Transport propose un service de mise à disposition
        avec chauffeur privé premium pour tous vos déplacements.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Chauffeur privé flexible et haut de gamme
      </h2>

      <p className="max-w-3xl mb-6">
        Profitez d’un chauffeur dédié pour quelques heures, une journée
        ou des déplacements professionnels réguliers en Île-de-France.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Service premium personnalisé
      </h2>

      <p className="max-w-3xl">
        Véhicule haut de gamme, ponctualité, discrétion et accompagnement
        sur mesure pour particuliers et entreprises.
      </p>
    </main>
  );
}