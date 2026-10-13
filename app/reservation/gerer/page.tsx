
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

  const champ =
    "w-full rounded-lg border border-amber-500/50 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20";

  if (chargement) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-4 text-amber-400">
        Chargement de votre demande...
      </main>
    );
  }

  if (erreur && !reservation) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-4">
        <p
          role="alert"
          className="max-w-xl rounded-xl border border-red-500/50 bg-zinc-950 p-6 text-center text-red-300"
        >
          {erreur}
        </p>
      </main>
    );
  }

  if (!reservation) return null;

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:py-14">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-amber-500/60 bg-zinc-950 shadow-[0_0_35px_rgba(245,158,11,0.08)]">
        <header className="border-b border-amber-500/30 px-5 py-8 text-center sm:px-8">
          <img
            src="/logo.png"
            alt="SUD IDF Executive Transport"
            className="mx-auto mb-5 h-auto w-32 object-contain"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            SUD IDF Executive Transport
          </p>

          <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
            Gestion de votre demande
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-300">
            Consultez les informations de votre dossier et transmettez-nous
            une demande de modification ou d’annulation.
          </p>
        </header>

        <div className="p-5 sm:p-8">
          <section className="space-y-3 rounded-xl border border-amber-500/30 bg-black p-4 sm:p-5">
            <p className="mb-4 border-b border-amber-500/20 pb-3 text-sm font-semibold uppercase tracking-wider text-amber-400">
              Informations du dossier
            </p>

            <p className="break-words">
              <strong className="text-amber-300">Référence :</strong>{" "}
              {reservation.reference}
            </p>
            <p>
              <strong className="text-amber-300">Type :</strong>{" "}
              {reservation.type === "devis" ? "Demande de devis" : "Réservation"}
            </p>
            <p>
              <strong className="text-amber-300">Statut :</strong>{" "}
              {reservation.statut}
            </p>
            <p>
              <strong className="text-amber-300">Date :</strong>{" "}
              {reservation.date_trajet || "Non renseignée"}
            </p>
            <p>
              <strong className="text-amber-300">Heure :</strong>{" "}
              {reservation.heure_trajet || "Non renseignée"}
            </p>
            <p className="break-words">
              <strong className="text-amber-300">Départ :</strong>{" "}
              {reservation.depart || "Non renseigné"}
            </p>
            <p className="break-words">
              <strong className="text-amber-300">Arrivée :</strong>{" "}
              {reservation.arrivee || "Non renseignée"}
            </p>
            <p>
              <strong className="text-amber-300">Service :</strong>{" "}
              {reservation.service || "Non renseigné"}
            </p>
            <p>
              <strong className="text-amber-300">Véhicule :</strong>{" "}
              {reservation.vehicule || "Non renseigné"}
            </p>
          </section>

          <form onSubmit={envoyerDemande} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="typeDemande"
                className="mb-2 block font-semibold text-amber-300"
              >
                Votre demande
              </label>

              <select
                id="typeDemande"
                value={typeDemande}
                onChange={(e) =>
                  setTypeDemande(
                    e.target.value as "modification" | "annulation"
                  )
                }
                className={champ}
              >
                <option value="modification">Demander une modification</option>
                <option value="annulation">Demander une annulation</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-semibold text-amber-300"
              >
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
                className={`${champ} resize-y`}
              />
              <p className="mt-2 text-right text-xs text-zinc-500">
                {message.length}/2000 caractères
              </p>
            </div>

            {erreur && (
              <p
                role="alert"
                className="rounded-lg border border-red-500/40 bg-red-950/40 p-3 text-red-300"
              >
                {erreur}
              </p>
            )}

            {confirmation && (
              <p
                role="status"
                className="rounded-lg border border-emerald-500/40 bg-emerald-950/40 p-4 leading-6 text-emerald-300"
              >
                {confirmation}
              </p>
            )}

            <button
              type="submit"
              disabled={envoi}
              className="w-full rounded-lg border border-amber-400 bg-amber-400 px-5 py-3.5 font-bold text-black transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {envoi ? "Envoi en cours..." : "Transmettre ma demande"}
            </button>
          </form>

          <p className="mt-6 border-t border-amber-500/20 pt-5 text-sm leading-6 text-zinc-400">
            Votre demande sera soumise à notre équipe. L’envoi ne signifie pas
            que la modification ou l’annulation est déjà acceptée.
          </p>
        </div>

        <footer className="border-t border-amber-500/30 px-5 py-4 text-center text-xs tracking-wide text-zinc-500">
          L’excellence au service de vos déplacements professionnels
        </footer>
      </div>
    </main>
  );
}

export default function GererReservationPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-black px-4 text-amber-400">
          Chargement de la page...
        </main>
      }
    >
      <GestionReservation />
    </Suspense>
  );
}
