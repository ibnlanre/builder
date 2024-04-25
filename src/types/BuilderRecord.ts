import type { Dictionary } from "@ibnlanre/types";
import type { Builder } from "./Builder";

export type BuilderRecord<
  Register extends Dictionary = {},
  Prefix extends string[] = []
> = Record<string, Builder<Register, Prefix>>;
