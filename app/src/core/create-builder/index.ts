import type { Builder, Dictionary } from "../types";
import { createBranches } from "../create-branches";

/**
 * Returns a builder object that represents the nested keys of the provided object.
 *
 * @template Register The type of the object.
 * @template Prefix The type of the prefix array.
 *
 * @param {Register} register The object to traverse and retrieve the nested keys.
 * @param {string[]} [prefix=[]] An optional prefix to prepend to keys array in the builder object.
 * @param {string} [separator="."] An optional separator to join the keys in the builder object.
 *
 * @returns {Builder<Register, Prefix>} A builder object with callable functions representing the nested keys.
 */
export function createBuilder<
  Register extends Dictionary,
  const Prefix extends string[] = [],
  const Separator extends string = "."
>(
  register: Register,
  options?: {
    prefix?: Prefix;
    separator?: Separator;
  }
) {
  const { prefix = [], separator = "." } = { ...options };
  const branches = createBranches(register, prefix);

  return Object.assign(branches, {
    $get(...path: unknown[]) {
      if (path.length) return path.join(separator);
      return prefix;
    },
    get $use() {
      return register;
    },
  }) as Builder<Register, Prefix, Separator>;
}
