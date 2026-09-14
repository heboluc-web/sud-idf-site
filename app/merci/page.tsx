import type { Metadata } from "next";
import Stripe from "stripe";

export const metadata: Metadata = {
  title: "Confirmation | Sud IDF Executive Transport",
  description:
    "Confirmation de votre demande auprès de Sud IDF Executive Transport.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.sudidfexecutivetransport.fr/merci",
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type MerciPageProps = {
  searchParams: Promise<{
    payment?: string;
    type?: string;
    session_id?: string;
  }>;
};

export default async function Merci({ searchParams }: MerciPageProps) {
  const params = await searchParams;

  let paiementConfirme = false;

  if (params.payment === "success" && params.session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(
        params.session_id
      );

      paiementConfirme = session.payment_status === "paid";
    } catch (error) {
      console.error(
        "❌ Impossible de vérifier la session Stripe :",
        error
      );
    }
  }

  const demandeDevis = params.type === "devis";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-center px-4">

      {/* LOGO */}
      <img
        src="/logo.png"
        alt="Logo Sud IDF Executive Transport"
        className="w-28 mb-6 animate-fade-in"
      />

      {/* TITRE */}
      <h1 className="text-4xl md:text-5xl text-amber-400 mb-6">
        {paiementConfirme
          ? "Votre réservation est confirmée"
          : demandeDevis
            ? "Votre demande de devis a bien été envoyée"
            : "Demande envoyée"}
      </h1>

      {/* MESSAGE PAIEMENT */}
      {paiementConfirme && (
        <div className="text-gray-300 mb-8 max-w-md space-y-4">
          <p>
            Votre paiement a été effectué avec succès et votre
            réservation a bien été prise en compte par nos services.
          </p>

          <p>
            Vous recevrez prochainement un e-mail de confirmation
            contenant les informations relatives à votre réservation
            ainsi que les éventuels détails complémentaires concernant
            votre trajet.
          </p>

          <p>
            Nous vous remercions pour votre confiance et sommes heureux
            de vous accompagner dans vos déplacements.
          </p>
        </div>
      )}

      {/* MESSAGE DEVIS */}
      {!paiementConfirme && demandeDevis && (
        <div className="text-gray-300 mb-8 max-w-md space-y-4">
          <p>
            Merci pour votre demande de devis.
          </p>

          <p>
            Nous accusons bonne réception de votre demande et allons
            l’étudier avec attention afin de vous proposer une offre
            personnalisée adaptée à vos besoins.
          </p>

          <p>
            Notre équipe vous répondra dans les meilleurs délais.
          </p>
        </div>
      )}

      {/* CAS PAR DÉFAUT */}
      {!paiementConfirme && !demandeDevis && (
        <p className="text-gray-300 mb-8 max-w-md">
          Merci pour votre demande. Nous vous répondrons rapidement
          avec un devis personnalisé.
        </p>
      )}

      {/* BOUTON RETOUR */}
      <a
        href="/"
        className="px-6 py-3 border border-amber-500 text-amber-400 rounded-xl hover:bg-amber-500 hover:text-black transition"
      >
        Retour à l’accueil
      </a>

    </main>
  );
}