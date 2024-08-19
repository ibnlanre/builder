import type { Builder, Dictionary, RegisterBuilder } from "../types";
import { createBranches } from "./createBranches";

/**
 * Returns a builder object that represents the nested keys of the provided object.
 *
 * @template Register The type of the object.
 * @template Prefix The type of the prefix array.
 *
 * @param {Register} register The object to traverse and retrieve the nested keys.
 * @param {string[]} [prefix=[]] An optional prefix to prepend to keys array in the builder object.
 *
 * @returns {Builder<Register, Prefix>} A builder object with callable functions representing the nested keys.
 */
export function createBuilder<
  Register extends Dictionary,
  const Prefix extends string[] = []
>(register: Register, prefix?: Prefix) {
  const branches = createBranches(register, prefix);

  const builder = Object.assign(branches, {
    use: () => register,
    get: () => prefix,
  }) as RegisterBuilder<Register, Prefix>;

  return Object.assign(builder, {
    get $ctx() {
      return register;
    },
  }) as Builder<Register, Prefix>;
}
