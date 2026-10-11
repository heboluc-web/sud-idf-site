"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Reservation = {
  reference: string;
  type: string;
  statut: string;
  date_trajet: string | null;
  heure_trajet: string | null;
  depart: string | null;
  arrivee: string | null;
  service: string | null;
  vehicule: string | null;
};

function GestionReservation() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [message, setMessage] = useState("");
  const [typeDemande, setTypeDemande] = useState<
    "modification" | "annulation"
  >("modification");
  const [chargement, setChargement] = useState(true);
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState("");
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    let actif = true;

    async function chargerReservation() {
      if (!token) {
        setErreur("Le lien est incomplet. Vérifiez le lien reçu par e-mail.");
        setChargement(false);
        return;
      }

      try {
        const reponse = await fetch(
          `/api/reservation/gerer?token=${encodeURIComponent(token)}`
        );
        const resultat = await reponse.json();

        if (!reponse.ok) {
          throw new Error(
            resultat.error || "Impossible de retrouver votre demande."
          );
        }

        if (actif) setReservation(resultat.reservation);
      } catch (e) {
        if (actif) {
          setErreur(
            e instanceof Error
              ? e.message
              : "Une erreur est survenue. Réessayez plus tard."
          );
        }
      } finally {
        if (actif) setChargement(false);
      }
    }

    void chargerReservation();

    return () => {
      actif = false;
    };
  }, [token]);

  async function envoyerDemande(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErreur("");
    setConfirmation("");

    if (!token) {
      setErreur("Le lien sécurisé est absent.");
      return;
    }

    if (typeDemande === "modification" && !message.trim()) {
      setErreur("Précisez les modifications souhaitées.");
      return;
    }

    setEnvoi(true);

    try {
      const reponse = await fetch("/api/reservation/gerer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          type_demande: typeDemande,
          message: message.trim(),
        }),
      });

      const resultat = await reponse.json();

      if (!reponse.ok) {
        throw new Error(
          resultat.error || "Votre demande n'a pas pu être envoyée."
        );
      }

      setConfirmation(
        "Votre demande a bien été transmise. Elle reste en attente de traitement par notre équipe."
      );
      setMessage("");
    } catch (e) {
      setErreur(
        e instanceof Error
          ? e.message
          : "Une erreur est survenue. Réessayez plus tard."
      );
    } finally {
      setEnvoi(false);
    }
  }

  if (chargement) {
    return <p className="text-center">Chargement de votre demande...</p>;
  }

  if (erreur && !reservation) {
    return (
      <p role="alert" className="text-center text-red-700">
        {erreur}
      </p>
    );
  }

  if (!reservation) return null;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-2xl rounded-xl border border-yellow-600 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-yellow-700">
          SUD IDF Executive Transport
        </p>

        <h1 className="mt-3 text-2xl font-bold">
          Gestion de votre demande
        </h1>

        <p className="mt-2 text-gray-600">
          Retrouvez les informations de votre dossier et transmettez-nous
          une demande de modification ou d’annulation.
        </p>

        <section className="mt-6 space-y-3 rounded-lg bg-gray-50 p-4">
          <p>
            <strong>Référence :</strong> {reservation.reference}
          </p>
          <p>
            <strong>Type :</strong>{" "}
            {reservation.type === "devis" ? "Demande de devis" : "Réservation"}
          </p>
          <p>
            <strong>Statut :</strong> {reservation.statut}
          </p>
          <p>
            <strong>Date :</strong> {reservation.date_trajet || "Non renseignée"}
          </p>
          <p>
            <strong>Heure :</strong> {reservation.heure_trajet || "Non renseignée"}
          </p>
          <p>
            <strong>Départ :</strong> {reservation.depart || "Non renseigné"}
          </p>
          <p>
            <strong>Arrivée :</strong> {reservation.arrivee || "Non renseignée"}
          </p>
          <p>
            <strong>Service :</strong> {reservation.service || "Non renseigné"}
          </p>
          <p>
            <strong>Véhicule :</strong> {reservation.vehicule || "Non renseigné"}
          </p>
        </section>

        <form onSubmit={envoyerDemande} className="mt-8 space-y-5">
          <div>
            <label htmlFor="typeDemande" className="mb-2 block font-semibold">
              Votre demande
            </label>
            <select
              id="typeDemande"
              value={typeDemande}
              onChange={(e) =>
                setTypeDemande(e.target.value as "modification" | "annulation")
              }
              className="w-full rounded-lg border border-gray-300 bg-white p-3"
            >
              <option value="modification">Demander une modification</option>
              <option value="annulation">Demander une annulation</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-semibold">
              Message complémentaire
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={2000}
              rows={5}
              placeholder={
                typeDemande === "modification"
                  ? "Indiquez les changements souhaités..."
                  : "Précisez, si nécessaire, le motif de votre demande..."
              }
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          {erreur && (
            <p role="alert" className="text-red-700">
              {erreur}
            </p>
          )}

          {confirmation && (
            <p role="status" className="rounded-lg bg-green-50 p-3 text-green-800">
              {confirmation}
            </p>
          )}

          <button
            type="submit"
            disabled={envoi}
            className="w-full rounded-lg bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {envoi ? "Envoi en cours..." : "Transmettre ma demande"}
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Votre demande sera soumise à notre équipe. L’envoi ne signifie pas
          que la modification ou l’annulation est déjà acceptée.
        </p>
      </div>
    </main>
  );
}

export default function GererReservationPage() {
  return (
    <Suspense
      fallback={<p className="p-8 text-center">Chargement de la page...</p>}
    >
      <GestionReservation />
    </Suspense>
  );
}