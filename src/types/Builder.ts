import type {
  DeepRequired,
  Dictionary,
  OmitOptionalValues,
} from "@ibnlanre/types";
import type { KeyBuilder } from "./KeyBuilder";

/**
 * Represents a builder for a store.
 * @template Register The type of the store.
 * @template Prefix The type of the path.
 */
export type Builder<
  Register extends Dictionary,
  Prefix extends string[] = []
> = {
  map: DeepRequired<Register>;
  use: () => OmitOptionalValues<Register>;
  get: () => Prefix;
} & KeyBuilder<Register, Prefix>;
