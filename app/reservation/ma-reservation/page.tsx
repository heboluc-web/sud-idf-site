"use client";

import { Suspense, useEffect, useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

type Reservation = {
  id?: string;
  reference: string;
  created_at?: string | null;
  type: string;
  statut: string;
  statut_paiement: string | null;
  montant_ttc?: number | string | null;
  date_trajet: string | null;
  heure_trajet: string | null;
  depart: string | null;
  arrivee: string | null;
  service: string | null;
  vehicule: string | null;
  details?: Record<string, unknown> | null;
};

type Calcul = {
  ancienPrixTTC: number;
  nouveauPrixCalculeTTC: number;
  montantFinalTTC: number;
  supplementTTC: number;
  detailsTarif: string;
  distance?: string;
  duree?: string;
};

function GestionReservation() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [depart, setDepart] = useState("");
  const [arrivee, setArrivee] = useState("");
  const [service, setService] = useState("Transport standard");
  const [vehicule, setVehicule] = useState("Mercedes Classe V");
  const [tripType, setTripType] = useState("simple");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [dureeMiseADispo, setDureeMiseADispo] = useState("3");
  const [dureeSeminaire, setDureeSeminaire] = useState("4");
  const [calcul, setCalcul] = useState<Calcul | null>(null);
  const [calculEnCours, setCalculEnCours] = useState(false);
  const [confirmationModification, setConfirmationModification] = useState(false);
  const [annulationEnCours, setAnnulationEnCours] = useState(false);
  const [motifAnnulation, setMotifAnnulation] = useState("");
  const retourPaiement = searchParams.get("modification");

  function dateHeureLisible(valueDate: string | null | undefined, valueHeure?: string | null) {
    if (!valueDate) return "Non renseignée";
    const dateParts = valueDate.slice(0, 10).split("-");
    const dateFr = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : valueDate;
    const heureFr = valueHeure ? valueHeure.slice(0, 5) : "Non renseignée";
    return `${dateFr} à ${heureFr}`;
  }

  function dateReservationLisible(value: string | null | undefined) {
    if (!value) return "Non disponible";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return "Non disponible";
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Paris",
    }).format(parsed);
  }

  const champ = "w-full rounded-lg border border-amber-500/50 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20";
  const reservationAnnulee = reservation?.statut === "annulee" || reservation?.statut === "annulée";
  const statutLisible = reservation?.statut === "en_attente" ? "En attente de traitement" : reservation?.statut === "confirmee" || reservation?.statut === "confirmée" ? "Confirmée" : reservationAnnulee ? "Annulée" : reservation?.statut;

  useEffect(() => {
    let actif = true;
    async function charger() {
      try {
        const url = token ? `/api/reservation/gerer?espace=reservation&token=${encodeURIComponent(token)}` : "/api/reservation/gerer?espace=reservation";
        const response = await fetch(url, { credentials: "same-origin" });
        const resultat = await response.json();
        if (!response.ok) throw new Error(resultat.error || "Impossible de retrouver votre réservation.");
        const r = resultat.reservation as Reservation;
        if (r.type !== "reservation") throw new Error("Cet espace est réservé aux réservations confirmées.");
        if (!actif) return;
        setReservation(r);
        if (retourPaiement === "success") setConfirmation("Votre paiement a été confirmé par Stripe. La modification est en cours de mise à jour de votre dossier.");
        if (retourPaiement === "cancelled") setConfirmation("Le paiement du supplément a été interrompu. Votre réservation initiale reste inchangée.");
        const d = (r.details || {}) as Record<string, unknown>;
        setDate(r.date_trajet || "");
        setHeure(String(r.heure_trajet || d.heure_trajet || d.time || "").slice(0, 5));
        setDepart(r.depart || "");
        setArrivee(r.arrivee || "");
        setService(r.service || "Transport standard");
        setVehicule(r.vehicule || "Mercedes Classe V");
        setTripType(d.tripType === "aller-retour" ? "aller-retour" : "simple");
        setReturnDate(typeof d.returnDate === "string" ? d.returnDate : "");
        setReturnTime(typeof d.returnTime === "string" ? d.returnTime : "");
        setDureeMiseADispo(String(d.dureeMiseADispo || "3"));
        setDureeSeminaire(String(d.dureeSeminaire || "4"));
      } catch (e) {
        if (actif) setErreur(e instanceof Error ? e.message : "Une erreur est survenue.");
      } finally {
        if (actif) setChargement(false);
      }
    }
    void charger();
    return () => { actif = false; };
  }, [token, retourPaiement]);

  const corpsModification = useMemo(() => ({
    ...(token ? { token } : {}), date, heure, depart, arrivee, service, vehicule,
    tripType, returnDate, returnTime, dureeMiseADispo, dureeSeminaire,
  }), [token, date, heure, depart, arrivee, service, vehicule, tripType, returnDate, returnTime, dureeMiseADispo, dureeSeminaire]);

  async function calculer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setErreur(""); setConfirmation(""); setCalcul(null); setConfirmationModification(false); setCalculEnCours(true);
    try {
      const response = await fetch("/api/reservation/tarif-modification", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify(corpsModification) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Le nouveau tarif n'a pas pu être calculé.");
      setCalcul(result as Calcul);
      setConfirmationModification(true);
    } catch (e) { setErreur(e instanceof Error ? e.message : "Erreur lors du calcul du tarif."); }
    finally { setCalculEnCours(false); }
  }

  async function confirmerModification() {
    setErreur(""); setCalculEnCours(true);
    try {
      const response = await fetch("/api/reservation/tarif-modification", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...corpsModification, confirmer: true }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "La modification n'a pas pu être confirmée.");
      if (result.checkoutUrl) { window.location.assign(result.checkoutUrl); return; }
      setConfirmation(result.message || "Votre modification est confirmée.");
      setReservation((r: Reservation | null) => r ? { ...r, date_trajet: date, heure_trajet: heure, depart, arrivee, service, vehicule, montant_ttc: result.montantFinalTTC } : r);
      setCalcul(null); setConfirmationModification(false);
    } catch (e) { setErreur(e instanceof Error ? e.message : "Erreur lors de la confirmation."); }
    finally { setCalculEnCours(false); }
  }

  async function annulerReservation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setErreur(""); setConfirmation(""); setAnnulationEnCours(true);
    try {
      const response = await fetch("/api/reservation/gerer?espace=reservation", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...(token ? { token } : {}), type_demande: "annulation", message: motifAnnulation.trim() }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "L'annulation n'a pas pu être effectuée.");
      setConfirmation(result.message || "Votre réservation a été annulée. Le remboursement éventuel sera traité manuellement.");
      setReservation((r: Reservation | null) => r ? { ...r, statut: "annulee" } : r);
    } catch (e) { setErreur(e instanceof Error ? e.message : "Erreur lors de l'annulation."); }
    finally { setAnnulationEnCours(false); }
  }

  if (chargement) return <main className="flex min-h-screen items-center justify-center bg-black px-4 text-amber-400">Chargement de votre réservation...</main>;
  if (erreur && !reservation) return <main className="flex min-h-screen items-center justify-center bg-black px-4"><p role="alert" className="max-w-xl rounded-xl border border-red-500/50 bg-zinc-950 p-6 text-center text-red-300">{erreur}</p></main>;
  if (!reservation) return null;

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:py-14">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-amber-500/60 bg-zinc-950 shadow-[0_0_35px_rgba(245,158,11,0.08)]">
        <header className="border-b border-amber-500/30 px-5 py-8 text-center sm:px-8">
          <img src="/logo.png" alt="SUD IDF Executive Transport" className="mx-auto mb-5 h-auto w-32 object-contain" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">SUD IDF Executive Transport</p>
          <h1 className="mt-3 text-2xl font-bold sm:text-3xl">Gestion de votre réservation</h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-300">Modifiez directement les informations de votre prestation ou procédez à son annulation.</p>
        </header>

        <div className="space-y-7 p-5 sm:p-8">
          <section className="space-y-2 rounded-xl border border-amber-500/30 bg-black p-4 sm:p-5">
            <p className="mb-3 border-b border-amber-500/20 pb-3 text-sm font-semibold uppercase tracking-wider text-amber-400">Votre réservation</p>
            <p><strong className="text-amber-300">Référence :</strong> {reservation.reference}</p>
            <p><strong className="text-amber-300">Statut :</strong> {statutLisible}</p>
            <p><strong className="text-amber-300">Paiement :</strong> {reservation.statut_paiement === "paye" ? "Paiement confirmé" : "Paiement non confirmé"}</p>
            <p><strong className="text-amber-300">Montant TTC :</strong> {Number(reservation.montant_ttc || 0).toFixed(2)} €</p>
            <p><strong className="text-amber-300">Départ :</strong> {reservation.depart || "Non renseigné"}</p>
            <p><strong className="text-amber-300">Arrivée :</strong> {reservation.arrivee || "Non renseignée"}</p>
            <p><strong className="text-amber-300">Date et heure du départ :</strong> {dateHeureLisible(reservation.date_trajet, reservation.heure_trajet || (typeof reservation.details?.time === "string" ? reservation.details.time : null))}</p>
            <p><strong className="text-amber-300">Date et heure de réservation :</strong> {dateReservationLisible(reservation.created_at)}</p>
          </section>

          {!reservationAnnulee && reservation.statut_paiement === "paye" && (
            <form onSubmit={calculer} className="space-y-4">
              <h2 className="text-lg font-bold text-amber-300">Modifier ma réservation</h2>
              <p className="text-sm leading-6 text-zinc-400">Modifiez les champs ci-dessous. Le nouveau tarif sera recalculé avant validation. Seul un éventuel supplément sera à régler ; si le nouveau trajet est moins cher, le montant initial reste inchangé.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-amber-200">Date du départ<input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className={`${champ} mt-2`} /></label>
                <label className="block text-sm text-amber-200">Heure du départ<input required type="time" value={heure} onChange={(e) => setHeure(e.target.value)} className={`${champ} mt-2`} /></label>
              </div>
             <label className="block text-sm text-amber-200">Adresse de départ<input maxLength={300} value={depart} onChange={(e) => setDepart(e.target.value)} required={service !== "Mise à disposition" && service !== "Séminaire"} className={`${champ} mt-2`} /></label>
              <label className="block text-sm text-amber-200">Adresse d’arrivée<input maxLength={300} value={arrivee} onChange={(e) => setArrivee(e.target.value)} required={service !== "Mise à disposition" && service !== "Séminaire"} className={`${champ} mt-2`} /></label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-amber-200">Type de prestation<select value={service} onChange={(e) => setService(e.target.value)} className={`${champ} mt-2`}><option>Transport standard</option><option>Transfert aéroport</option><option>Mise à disposition</option><option>Séminaire</option></select></label>
                <label className="block text-sm text-amber-200">Véhicule<select value={vehicule} onChange={(e) => setVehicule(e.target.value)} className={`${champ} mt-2`}><option>Mercedes Classe E</option><option>Mercedes Classe V</option><option>Range Rover</option><option>Mercedes Classe S</option><option>Mercedes-Maybach Classe S</option></select></label>
              </div>
              {service === "Mise à disposition" && <label className="block text-sm text-amber-200">Durée (heures)<select value={dureeMiseADispo} onChange={(e) => setDureeMiseADispo(e.target.value)} className={`${champ} mt-2`}>{[3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n} heures</option>)}</select></label>}
              {service === "Séminaire" && <label className="block text-sm text-amber-200">Durée<select value={dureeSeminaire} onChange={(e) => setDureeSeminaire(e.target.value)} className={`${champ} mt-2`}><option value="4">4 heures</option><option value="8">8 heures</option></select></label>}
              <label className="flex items-center gap-3 text-sm text-amber-200"><input type="checkbox" checked={tripType === "aller-retour"} onChange={(e) => setTripType(e.target.checked ? "aller-retour" : "simple")} className="h-4 w-4 accent-amber-400" /> Ajouter un trajet aller-retour</label>
              {tripType === "aller-retour" && <div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm text-amber-200">Date du retour<input required type="date" min={date} value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className={`${champ} mt-2`} /></label><label className="block text-sm text-amber-200">Heure du retour<input required type="time" value={returnTime} onChange={(e) => setReturnTime(e.target.value)} className={`${champ} mt-2`} /></label></div>}
              <button type="submit" disabled={calculEnCours} className="w-full rounded-lg border border-amber-400 bg-amber-400 px-5 py-3.5 font-bold text-black transition hover:bg-amber-300 disabled:opacity-60">{calculEnCours ? "Calcul en cours..." : "Calculer le nouveau tarif"}</button>
            </form>
          )}

          {calcul && confirmationModification && <section className="space-y-3 rounded-xl border border-amber-400/50 bg-black p-5">
            <h2 className="font-bold text-amber-300">Récapitulatif de la modification</h2>
            <p className="text-sm text-zinc-300">{calcul.detailsTarif}</p>
            <div className="space-y-2 border-t border-amber-500/20 pt-3 text-sm"><p className="flex justify-between gap-3"><span>Tarif initial</span><strong>{calcul.ancienPrixTTC.toFixed(2)} €</strong></p><p className="flex justify-between gap-3"><span>Nouveau tarif calculé</span><strong>{calcul.nouveauPrixCalculeTTC.toFixed(2)} €</strong></p><p className="flex justify-between gap-3 text-amber-300"><span>Montant total conservé</span><strong>{calcul.montantFinalTTC.toFixed(2)} €</strong></p><p className="flex justify-between gap-3 text-lg font-bold text-amber-400"><span>Supplément à régler</span><strong>{calcul.supplementTTC.toFixed(2)} €</strong></p></div>
            {calcul.supplementTTC === 0 && <p className="text-sm text-zinc-400">Aucun paiement supplémentaire ne sera demandé. Aucun remboursement ne sera effectué si le nouveau trajet est moins cher.</p>}
            <button type="button" onClick={() => void confirmerModification()} disabled={calculEnCours} className="w-full rounded-lg border border-amber-400 bg-amber-400 px-5 py-3.5 font-bold text-black hover:bg-amber-300 disabled:opacity-60">{calculEnCours ? "Confirmation..." : calcul.supplementTTC > 0 ? `Confirmer et payer ${calcul.supplementTTC.toFixed(2)} €` : "Confirmer ma modification"}</button>
            <button type="button" onClick={() => { setCalcul(null); setConfirmationModification(false); }} className="w-full rounded-lg border border-zinc-600 px-5 py-3 text-zinc-300 hover:border-amber-400">Revenir aux champs</button>
          </section>}

          {!reservationAnnulee && <form onSubmit={annulerReservation} className="space-y-3 border-t border-amber-500/20 pt-6">
            <h2 className="font-bold text-amber-300">Annuler ma réservation</h2>
            <p className="text-sm leading-6 text-zinc-400">L’annulation sera enregistrée immédiatement. Le remboursement éventuel sera calculé selon les conditions applicables et effectué manuellement par notre équipe depuis Stripe.</p>
            <label className="block text-sm text-zinc-300">Motif (facultatif)<textarea value={motifAnnulation} onChange={(e) => setMotifAnnulation(e.target.value)} maxLength={1000} rows={3} className={`${champ} mt-2 resize-y`} /></label>
            <button type="submit" disabled={annulationEnCours} className="w-full rounded-lg border border-red-500/60 px-5 py-3 font-semibold text-red-300 hover:bg-red-950/40 disabled:opacity-60">{annulationEnCours ? "Annulation en cours..." : "Confirmer l’annulation"}</button>
          </form>}

          {erreur && <p role="alert" className="rounded-lg border border-red-500/40 bg-red-950/40 p-3 text-red-300">{erreur}</p>}
          {confirmation && <p role="status" className="rounded-lg border border-emerald-500/40 bg-emerald-950/40 p-4 leading-6 text-emerald-300">{confirmation}</p>}
          {reservationAnnulee && <p className="rounded-xl border border-amber-500/40 bg-amber-950/20 p-4 text-center leading-6 text-amber-200">Cette réservation est annulée. Le remboursement éventuel est traité manuellement par SUD IDF Executive Transport.</p>}
          <a href="/" className="flex w-full items-center justify-center rounded-xl border border-[#C6A04A] px-6 py-3 font-semibold text-[#C6A04A] transition hover:bg-[#C6A04A] hover:text-black">← Retour à l’accueil</a>
        </div>
        <footer className="border-t border-amber-500/30 px-5 py-4 text-center text-xs tracking-wide text-zinc-500">L’excellence au service de vos déplacements professionnels</footer>
      </div>
    </main>
  );
}

export default function GererReservationPage() {
  return <Suspense fallback={<main className="flex min-h-screen items-center justify-center bg-black px-4 text-amber-400">Chargement de la page...</main>}><GestionReservation /></Suspense>;
}
