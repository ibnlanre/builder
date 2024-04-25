import type { DeepRequired, Dictionary } from "@ibnlanre/types";
import type { RegisterBuilder } from "./RegisterBuilder";

/**
 * Represents a builder for a store.
 *
 * @template Register The type of the store.
 * @template Prefix The type of the path.
 */
export type Builder<
  Register extends Dictionary,
  Prefix extends string[] = []
> = {
  unbuild: DeepRequired<Register>;
} & RegisterBuilder<Register, Prefix>;
