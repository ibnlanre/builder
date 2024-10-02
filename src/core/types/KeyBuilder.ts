import type { Base } from "./Base";
import type { Dictionary } from "./Dictionary";
import type { Paths } from "./Paths";

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
  Prefix extends readonly string[] = [],
  Separator extends string = ".",
> = {
  [Field in keyof Register]: Register[Field] extends (
    ...args: infer Arguments
  ) => unknown
    ? {
        $get: <Variables extends any[]>(
          ...args: Variables
        ) => [...Prefix, Extract<Field, string>, ...Variables];
        $use: (
          ...args: Parameters<Register[Field]>
        ) => [...Prefix, Extract<Field, string>, ...Arguments];
        $key: Paths<Prefix, Extract<Field, string>, Separator>;
      }
    : Register[Field] extends Dictionary
      ? Base<Field, Prefix, Separator> &
          KeyBuilder<
            Register[Field],
            [...Prefix, Extract<Field, string>],
            Separator
          >
      : Base<Field, Prefix, Separator>;
};
