import type { Dictionary } from "./Dictionary";
import type { KeyBuilder } from "./KeyBuilder";
import type { Paths } from "./Paths";

interface Get<
  Register extends Dictionary,
  Prefix extends readonly string[] = [],
  Separator extends string = ".",
> {
  /**
   * Returns the prefix array.
   *
   * @returns {Prefix} The prefix array.
   */
  (): Prefix;

  /**
   * Returns the key passed to the method.
   * If no key is provided, it returns the prefix array.
   *
   * @param {Paths<Register, Prefix, Separator>} [path] The key to return.
   * @returns {Paths<Register, Prefix, Separator>} The key passed to the method.
   */
  <Path extends Paths<Register, Prefix, Separator>>(path: Path): Path;
}

/**
 * Represents the builder for a store.
 *
 * @template Register The type of the store.
 * @template Prefix The type of the path.
 * @template Separator The type of the separator.
 */
export type Builder<
  Register extends Dictionary,
  Prefix extends readonly string[] = [],
  Separator extends string = ".",
> = {
  $use: Register;
  $get: Get<Register, Prefix, Separator>;
} & KeyBuilder<Register, Prefix>;
