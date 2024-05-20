import type { Dictionary, RequiredKeyMap } from "@ibnlanre/types";
import type { Key } from "./Key";

/**
 * Represents a builder for a store key.
 *
 * @params Register The type of the store.
 * @params Prefix The type of the path.
 *
 * @return KeyBuilder<Register, Prefix> A store key builder object.
 */
export type KeyBuilder<
  Register extends Dictionary,
  Prefix extends readonly string[] = []
> = {
  [Field in keyof Register as RequiredKeyMap<
    Register,
    Field
  >]: Register[Field] extends (...args: infer Arguments) => unknown
    ? {
        get: <Variables extends any[]>(
          ...args: Variables
        ) => [...Prefix, Extract<Field, string>, ...Variables];
        use: (
          ...args: Parameters<Register[Field]>
        ) => [...Prefix, Extract<Field, string>, ...Arguments];
      }
    : Register[Field] extends Dictionary
    ? Key<Field, Prefix> &
        KeyBuilder<Register[Field], [...Prefix, Extract<Field, string>]>
    : Key<Field, Prefix>;
};
