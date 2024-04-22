import type { Dictionary, OmitOptionalValues } from "@ibnlanre/types";
import type { KeyBuilder } from "./KeyBuilder";

export type RegisterBuilder<
  Register extends Dictionary,
  Prefix extends string[] = []
> = {
  use: () => OmitOptionalValues<Register>;
  get: () => Prefix;
} & KeyBuilder<Register, Prefix>;
