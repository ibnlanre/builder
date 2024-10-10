import { isDictionary, isFunction } from "@/utilities";
import type { Dictionary, KeyBuilder } from "../types";

/**
 * Helper function to create branches that represent the nested keys of the provided object.
 *
 * @template Register The type of the object.
 * @template Prefix The type of the prefix array.
 *
 * @param {Register} register The object to traverse and retrieve the nested keys.
 * @param {string[]} [prefix=[]] An optional prefix to prepend to keys array in the builder object.
 *
 * @returns {Builder<Register, Prefix>} A builder object with callable functions representing the nested keys.
 */
export function createBranches<
  Register extends Dictionary,
  const Prefix extends string[] = [],
>(register: Register, prefix: Prefix = [] as unknown as Prefix) {
  const entries = Object.entries(register);

  const branches: KeyBuilder<Register, Prefix> = entries.reduce(
    (acc, [key, value]) => {
      const newPath = prefix.concat([key]);

      if (isFunction(value)) {
        return {
          ...acc,
          [key]: {
            $use: (...args: Parameters<typeof value>) => [...newPath, ...args],
            $get: (...args: unknown[]) => [...newPath, ...args],
          },
        };
      }

      const root = {
        $use: () => newPath,
        $get: (...args: unknown[]) => [...newPath, ...args],
      };

      return {
        ...acc,
        [key]: isDictionary(value)
          ? Object.assign(root, createBranches(value, newPath))
          : root,
      };
    },
    {} as KeyBuilder<Register, Prefix>
  );

  return branches;
}
