import { isDictionary, isFunction } from "@/utilities";
import type { Dictionary, KeyBuilder, RegisterBuilder } from "../types";

/**
 * Helper function to create branches that represent the nested keys of the provided object.
 *
 * @template Register The type of the object.
 * @template Prefix The type of the prefix array.
 *
 * @param {Register} register The object to traverse and retrieve the nested keys.
 * @param {string[]} [prefix=[]] An optional prefix to prepend to keys array in the builder object.
 *
 * @returns {RegisterBuilder<Register, Prefix>} A builder object with callable functions representing the nested keys.
 */
export function createBranches<
  Register extends Dictionary,
  const Prefix extends string[] = [],
  const Separator extends string = ".",
>(register: Register, prefix?: Prefix, separator?: Separator) {
  const entries = Object.entries(register);

  const branches = entries.reduce(
    (acc, [key, value]) => {
      const newPath = prefix ? prefix.concat([key]) : [key];
      const $key = newPath.join(separator);

      if (isFunction(value)) {
        return {
          ...acc,
          [key]: {
            $use: (...args: Parameters<typeof value>) => [...newPath, ...args],
            $get: (...args: unknown[]) => [...newPath, ...args],
            $key,
          },
        };
      }

      if (isDictionary(value)) {
        const root = {
          $use: () => newPath,
          $get: (...args: unknown[]) => [...newPath, ...args],
          $key,
        };

        return {
          ...acc,
          [key]: Object.assign(root, createBranches(value, newPath, separator)),
        };
      }

      return {
        ...acc,
        [key]: {
          $use: () => newPath,
          $get: (...args: unknown[]) => [...newPath, ...args],
          $key,
        },
      };
    },
    {} as KeyBuilder<Register, Prefix>
  ) as RegisterBuilder<Register, Prefix>;

  return branches;
}
