import type { Dictionary } from "./Dictionary";
import type { KeyBuilder } from "./KeyBuilder";

export type RegisterBuilder<
  Register extends Dictionary,
  Prefix extends readonly string[] = []
> = {
  $use: () => Register;
  $get: () => Prefix;
} & KeyBuilder<Register, Prefix>;
