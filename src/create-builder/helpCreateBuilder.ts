import type { Dictionary } from "@ibnlanre/types";
import type { KeyBuilder, RegisterBuilder } from "../types";

import { isDictionary, isFunction } from "../utilities";

/**
 * Helper function to create a builder object that represents the nested keys of the provided object.
 *
 * @template Register The type of the object.
 * @template Prefix The type of the prefix array.
 *
 * @param {Register} register The object to traverse and retrieve the nested keys.
 * @param {string[]} [prefix=[]] An optional prefix to prepend to keys array in the builder object.
 *
 * @returns {RegisterBuilder<Register, Prefix>} A builder object with callable functions representing the nested keys.
 */
export function helpCreateBuilder<
  Register extends Dictionary,
  const Prefix extends string[] = []
>(register: Register, prefix?: Prefix) {
  const keys = Object.keys(register) as Array<keyof Register>;

  const branches = keys.reduce((acc, key) => {
    const value = register[key];
    const newPath = prefix ? prefix.concat([key as string]) : [key as string];

    if (isFunction(value)) {
      return {
        ...acc,
        [key]: {
          use: (...args: Parameters<typeof value>) => [...newPath, ...args],
          get: (...args: unknown[]) => [...newPath, ...args],
        },
      };
    }

    if (isDictionary(value)) {
      return {
        ...acc,
        [key]: Object.assign(
          {
            use: () => newPath,
            get: (...args: unknown[]) => [...newPath, ...args],
          },
          helpCreateBuilder(value, newPath)
        ),
      };
    }

    return {
      ...acc,
      [key]: {
        use: () => newPath,
        get: (...args: unknown[]) => [...newPath, ...args],
      },
    };
  }, {} as KeyBuilder<Register>);

  const builder = Object.assign(branches, {
    use: () => register,
    get: () => prefix,
  }) as RegisterBuilder<Register, Prefix>;

  return builder;
}
