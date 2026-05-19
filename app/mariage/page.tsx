export default function Mariage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-bold mb-14 leading-tight">
          Chauffeur mariage premium
        </h1>

        <div className="space-y-10 text-2xl leading-relaxed text-neutral-200">

          <p>
            Sud IDF Executive Transport vous accompagne pour vos mariages
            et événements privés avec un service chauffeur haut de gamme.
          </p>

          <p>
            Nos véhicules premium et chauffeurs professionnels assurent
            les déplacements des mariés, invités et familles avec élégance,
            ponctualité et discrétion.
          </p>

          <p>
            Nous proposons des prestations sur mesure pour cérémonies,
            réceptions, transferts hôtels et déplacements VIP
            en Île-de-France.
          </p>

          <p>
            Profitez d’un transport premium pour faire de votre mariage
            un moment inoubliable avec un service fiable,
            confortable et raffiné.
          </p>

        </div>
<div className="grid md:grid-cols-2 gap-8 mt-16">

  <a
    href="/reservation"
    className="border border-amber-500/30 rounded-3xl p-8 bg-neutral-950 hover:border-amber-400 transition block"
  >
    <h2 className="text-4xl font-semibold text-amber-400 mb-4">
      Transport mariage
    </h2>

    <p className="text-gray-300 text-xl leading-relaxed">
      Déplacements premium pour mariés et invités.
    </p>
  </a>

  <a
    href="/transport-vip"
    className="border border-amber-500/30 rounded-3xl p-8 bg-neutral-950 hover:border-amber-400 transition block"
  >
    <h2 className="text-4xl font-semibold text-amber-400 mb-4">
      Chauffeur VIP
    </h2>

    <p className="text-gray-300 text-xl leading-relaxed">
      Service élégant et discret pour événements privés.
    </p>
  </a>

</div>

      </section>
    </main>
  );
}