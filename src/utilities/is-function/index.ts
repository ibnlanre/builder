/**
 * Check if the value is a function.
 *
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is a function.
 */
export function isFunction(value: any): value is (...args: any) => any {
  return typeof value === "function";
}
