import LZString from "lz-string";
import { TravelPlan } from "@/types/itinerary";

const LOCAL_STORAGE_KEY = "citywalk_saved_trips_v1";

/**
 * Compresses an itinerary into a compact, URL-safe base64/URI encoded string
 */
export function compressPlan(plan: TravelPlan): string {
  try {
    const jsonStr = JSON.stringify(plan);
    return LZString.compressToEncodedURIComponent(jsonStr);
  } catch (err) {
    console.error("Failed to compress plan:", err);
    return "";
  }
}

/**
 * Decompresses an itinerary from a URL-safe encoded string
 */
export function decompressPlan(encoded: string): TravelPlan | null {
  try {
    if (!encoded) return null;
    const jsonStr = LZString.decompressFromEncodedURIComponent(encoded);
    if (!jsonStr) return null;
    return JSON.parse(jsonStr) as TravelPlan;
  } catch (err) {
    console.error("Failed to decompress plan:", err);
    return null;
  }
}

/**
 * Saves a plan to browser's localStorage under recent trips
 */
export function saveLocalPlan(plan: TravelPlan): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getLocalPlans();
    const filtered = existing.filter((p) => p.id !== plan.id);
    const updated = [plan, ...filtered].slice(0, 15); // keep latest 15
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Failed to save plan to localStorage:", err);
  }
}

/**
 * Retrieves all locally saved trips
 */
export function getLocalPlans(): TravelPlan[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as TravelPlan[];
  } catch (err) {
    console.error("Failed to load local plans:", err);
    return [];
  }
}

/**
 * Deletes a plan from local storage
 */
export function deleteLocalPlan(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getLocalPlans();
    const updated = existing.filter((p) => p.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Failed to delete local plan:", err);
  }
}
