import type { Dictionary } from "@ibnlanre/types";
import type { Builder, KeyBuilder } from "../types";
import { hasTypes } from "../has-types";

function isFunction(value: any): value is (...args: any) => any {
  return typeof value === "function";
}

function isDictionary(value: any): value is Dictionary {
  return typeof value === "object" && value !== null;
}

/**
 * Returns a builder object that represents the nested keys of the provided object.
 *
 * @template Register The type of the object.
 *
 * @param {Register} register The object to traverse and retrieve the nested keys.
 * @param {string[]} [prefix=[]] An optional prefix to prepend to keys array in the builder object.
 *
 * @returns {Builder<Register>} A builder object with callable functions representing the nested keys.
 *
 * @summary By using the createBuilder function, you can define nested keys and associated values, allowing you to build complex key structures for various purposes.
 * @description The builder object can be used to enforce type safety and provide auto-completion support when working with the defined keys.
 */
export function createBuilder<
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
          get: (...args: any[]) => [...newPath, ...args],
        },
      };
    }

    if (isDictionary(value)) {
      return {
        ...acc,
        [key]: Object.assign(
          {
            use: () => newPath,
            get: (...args: any[]) => [...newPath, ...args],
          },
          createBuilder(value, newPath)
        ),
      };
    }

    return {
      ...acc,
      [key]: {
        use: () => newPath,
        get: (...args: any[]) => [...newPath, ...args],
      },
    };
  }, {} as KeyBuilder<Register>);

  const builder = Object.assign(
    {
      use: () => register,
      get: () => prefix,
    },
    branches
  ) as Builder<Register, Prefix>;

  return builder;
}
