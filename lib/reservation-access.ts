
import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "reservation_access";
const SESSION_DURATION_SECONDS = 30 * 60;

function getSecret(): string {
  const secret = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!secret) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY est absente.");
  }

  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");
}

export function creerSessionReservation(reservationId: string) {
  const expiresAt = Math.floor(Date.now() / 1000) +
    SESSION_DURATION_SECONDS;

  const payload = `${reservationId}.${expiresAt}`;
  const signature = sign(payload);

  return {
    cookieName: COOKIE_NAME,
    value: `${payload}.${signature}`,
    maxAge: SESSION_DURATION_SECONDS,
  };
}

export function verifierSessionReservation(
  value: string | undefined
): string | null {
  if (!value || value.length > 500) return null;

  const parts = value.split(".");
  if (parts.length !== 3) return null;

  const [reservationId, expiresText, signature] = parts;
  if (!reservationId || !/^\d+$/.test(expiresText)) return null;
  if (!/^[a-f0-9]{64}$/.test(signature)) return null;

  const expiresAt = Number(expiresText);
  if (!Number.isSafeInteger(expiresAt)) return null;
  if (expiresAt <= Math.floor(Date.now() / 1000)) return null;

  const payload = `${reservationId}.${expiresText}`;
  const expected = sign(payload);

  const actualBuffer = Buffer.from(signature, "hex");
  const expectedBuffer = Buffer.from(expected, "hex");

  if (
    actualBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(actualBuffer, expectedBuffer)
  ) {
    return null;
  }

  return reservationId;
}
