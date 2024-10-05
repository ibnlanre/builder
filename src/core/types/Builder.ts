import type { Dictionary } from "./Dictionary";
import type { KeyBuilder } from "./KeyBuilder";
import type { Paths } from "./Paths";

interface Get<
  Register extends Dictionary,
  Prefix extends readonly string[] = [],
  Separator extends string = ".",
> {
  (): Prefix;
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
