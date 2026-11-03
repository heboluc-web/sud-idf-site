"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function RedirectionReservation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    const destination = token
      ? `/reservation/ma-reservation?espace=reservation&token=${encodeURIComponent(token)}`
      : "/reservation/ma-reservation?espace=reservation";

    router.replace(destination);
  }, [router, token]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 text-amber-400">
      Redirection vers votre espace de réservation...
    </main>
  );
}

export default function GererReservationPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-black px-4 text-amber-400">
          Chargement...
        </main>
      }
    >
      <RedirectionReservation />
    </Suspense>
  );
}
