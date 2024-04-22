import type { Dictionary } from "@ibnlanre/types";

/**
 * Check if the value is a dictionary.
 *
 * @param value - The value to check.
 *
 * @returns A boolean indicating whether the value is a dictionary.
 */
export function isDictionary(value: any): value is Dictionary {
  return typeof value === "object" && value !== null;
}
