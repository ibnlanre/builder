import type { Dictionary } from "@ibnlanre/types";
import type { HasTypes } from "../types";

/**
 * Adds types to an object.
 *
 * @template Register The type of the register object.
 * @param register The object to add types to.
 *
 * @return A function that adds types to the register object.
 *
 * @example
 * const result = typeValue({ value: "test" })<{ type: string }>();
 */
export function typeValue<Register extends Dictionary>(register: Register) {
  const assignType = <
    Types extends Dictionary = {},
    const Key extends string = "has"
  >() => {
    return register as HasTypes<Register, Types, Key>;
  };

  return assignType;
}
