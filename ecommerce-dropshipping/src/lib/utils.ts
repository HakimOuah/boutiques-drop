import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractJSON<T = unknown>(text: string): T[] {
  let cleaned = text
    .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'");

  cleaned = cleaned.replace(/```json\s*/g, "").replace(/```\s*/g, "");

  const start = cleaned.indexOf("[");
  const end = cleaned.lastIndexOf("]");

  if (start === -1 || end === -1 || end <= start)
    throw new Error("No JSON array found");

  let jsonStr = cleaned.substring(start, end + 1);

  try {
    return JSON.parse(jsonStr);
  } catch {
    const lastComplete = jsonStr.lastIndexOf("}");
    if (lastComplete > 0) {
      jsonStr = jsonStr.substring(0, lastComplete + 1);
      jsonStr = jsonStr.replace(/,\s*$/, "");
      jsonStr += "]";
      return JSON.parse(jsonStr);
    }
    throw new Error("Failed to parse JSON from response");
  }
}

export function extractJSONObject<T = unknown>(text: string): T {
  let cleaned = text
    .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'");

  cleaned = cleaned.replace(/```json\s*/g, "").replace(/```\s*/g, "");

  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");

  if (start === -1 || end === -1 || end <= start)
    throw new Error("No JSON object found");

  const jsonStr = cleaned.substring(start, end + 1);
  return JSON.parse(jsonStr);
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value);
}

export function formatScore(score: number, max: number = 100): string {
  return `${score}/${max}`;
}
