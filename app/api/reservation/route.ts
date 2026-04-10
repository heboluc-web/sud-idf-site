import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: Request) {
  console.log("🔥 API appelée !");
  const data = await req.json();

  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    await client.messages.create({
  from: "whatsapp:+14155238886",
  to: "whatsapp:+33668863673",

  body: `🚗 Nouvelle réservation

Nom: ${data.name}
Téléphone: ${data.phone}
Passagers: ${data.passagers}
Bagages: ${data.bagages}
Départ: ${data.depart}
Arrivée: ${data.arrivee}
Date: ${data.date}
Heure: ${data.time}
`
});

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}