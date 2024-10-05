import type { Builder, Dictionary, Paths } from "../types";
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
  const Prefix extends string[] = [],
  const Separator extends string = ".",
>(
  register: Register,
  options?: {
    prefix?: Prefix;
    separator?: Separator;
  }
) {
  const { prefix = [] } = { ...options };
  const branches = createBranches(register, prefix);

  function $get(): Prefix;

  function $get<Path extends Paths<Register, Prefix, Separator>>(
    path: Path
  ): Path;

  function $get(path?: Paths<Register, Prefix, Separator>) {
    if (path) return path;
    return prefix;
  }

  return Object.assign(branches, {
    $get,
    get $use() {
      return register;
    },
  }) as Builder<Register, Prefix, Separator>;
}
