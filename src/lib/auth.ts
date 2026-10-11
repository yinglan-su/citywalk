// Edge-compatible stateless session & passcode authentication using Web Crypto API

const ACCESS_CODE = process.env.SITE_ACCESS_CODE || "55555";
const AUTH_SECRET = process.env.AUTH_SECRET || "travelplan_secure_secret_salt_2026_antigravity";
export const COOKIE_NAME = "tp_session";
export const MAX_AGE_SECONDS = 30 * 24 * 60 * 60; // 30 days

async function getCryptoKey(): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(AUTH_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function bufferToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function checkPasscode(input: string): boolean {
  if (!input) return false;
  return input.trim() === ACCESS_CODE.trim();
}

export async function createSessionToken(): Promise<string> {
  const key = await getCryptoKey();
  const timestamp = Date.now().toString();
  const enc = new TextEncoder();
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(timestamp));
  return `${timestamp}.${bufferToHex(signature)}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token || typeof token !== "string") return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [timestampStr, signatureHex] = parts;
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  // Max age: 30 days
  const now = Date.now();
  if (now - timestamp > MAX_AGE_SECONDS * 1000 || timestamp > now + 60000) {
    return false;
  }

  try {
    const key = await getCryptoKey();
    const enc = new TextEncoder();
    const match = await crypto.subtle.sign("HMAC", key, enc.encode(timestampStr));
    const expectedHex = bufferToHex(match);
    return signatureHex === expectedHex;
  } catch {
    return false;
  }
}
