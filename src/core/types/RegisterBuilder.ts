import type { Dictionary } from "./Dictionary";
import type { KeyBuilder } from "./KeyBuilder";
import type { Paths } from "./Paths";

export type RegisterBuilder<
  Register extends Dictionary,
  Prefix extends readonly string[] = [],
  Separator extends string = ".",
> = {
  $use: () => Register;
  $get: () => Prefix;
  $key: Paths<Prefix, Separator>;
} & KeyBuilder<Register, Prefix, Separator>;
