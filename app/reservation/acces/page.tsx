
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccesReservationPage() {
  const router = useRouter();

  const [reference, setReference] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [codeEnvoye, setCodeEnvoye] = useState(false);
  const [chargement, setChargement] = useState(false);
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState(false);

  async function envoyer(action: "demander-code" | "verifier-code") {
    setChargement(true);
    setMessage("");
    setErreur(false);

    try {
      const response = await fetch("/api/reservation/acces", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action,
          reference: reference.trim(),
          email: email.trim(),
          ...(action === "verifier-code" ? { code: code.trim() } : {}),
        }),
      });

      const resultat = await response.json();

      if (!response.ok || !resultat.success) {
        throw new Error(resultat.error || "Une erreur est survenue.");
      }

      if (action === "demander-code") {
        setCodeEnvoye(true);
        setMessage(resultat.message || "Consultez votre boîte e-mail.");
      } else {
        setMessage("Code validé. Ouverture de votre dossier…");
        router.push("/reservation/gerer");
        router.refresh();
      }
    } catch (e) {
      setErreur(true);
      setMessage(
        e instanceof Error ? e.message : "Une erreur est survenue."
      );
    } finally {
      setChargement(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-4 py-12 text-white flex items-center justify-center">
      <section className="w-full max-w-lg rounded-2xl border border-yellow-600/70 bg-zinc-950 p-6 sm:p-8 shadow-xl">
        <p className="text-center text-sm tracking-[0.25em] text-yellow-500">
          SUD IDF EXECUTIVE TRANSPORT
        </p>

        <h1 className="mt-5 text-center text-2xl font-semibold">
          Accéder à ma réservation
        </h1>

        <p className="mt-3 text-center text-sm leading-6 text-zinc-300">
          Saisissez la référence de votre réservation et l’adresse e-mail
          utilisée lors de votre demande. Un code de vérification vous sera
          envoyé par e-mail.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            void envoyer(codeEnvoye ? "verifier-code" : "demander-code");
          }}
        >
          <div>
            <label htmlFor="reference" className="mb-2 block text-sm">
              Référence de réservation
            </label>
            <input
              id="reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              required
              maxLength={100}
              autoComplete="off"
              disabled={chargement || codeEnvoye}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-yellow-500 disabled:opacity-60"
              placeholder="Votre référence"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={254}
              autoComplete="email"
              disabled={chargement || codeEnvoye}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-yellow-500 disabled:opacity-60"
              placeholder="vous@exemple.fr"
            />
          </div>

          {codeEnvoye && (
            <div>
              <label htmlFor="code" className="mb-2 block text-sm">
                Code reçu par e-mail (6 chiffres)
              </label>
              <input
                id="code"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="[0-9]{6}"
                maxLength={6}
                value={code}
                onChange={(e) =>
                  setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-center text-2xl tracking-[0.5em] text-white outline-none focus:border-yellow-500"
                placeholder="000000"
              />
              <p className="mt-2 text-xs text-zinc-400">
                Le code expire après 10 minutes.
              </p>
            </div>
          )}

          {message && (
            <p
              role="status"
              className={`rounded-lg border p-3 text-sm ${
                erreur
                  ? "border-red-700 text-red-300"
                  : "border-yellow-700 text-yellow-300"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={
              chargement ||
              !reference.trim() ||
              !email.trim() ||
              (codeEnvoye && !/^\d{6}$/.test(code))
            }
            className="w-full rounded-lg bg-yellow-500 px-4 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {chargement
              ? "Veuillez patienter…"
              : codeEnvoye
                ? "Vérifier le code et ouvrir mon dossier"
                : "Recevoir mon code par e-mail"}
          </button>

          {codeEnvoye && (
            <button
              type="button"
              disabled={chargement}
              onClick={() => {
                setCodeEnvoye(false);
                setCode("");
                setMessage("");
                setErreur(false);
              }}
              className="w-full text-sm text-zinc-300 underline hover:text-white"
            >
              Recommencer avec une autre référence
            </button>
          )}
        </form>
      </section>
    </main>
  );
}
