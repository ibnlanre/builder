import type { Builder, Dictionary } from "@/core/types";

export type BuilderRecord<
  Register extends Dictionary = {},
  Prefix extends string[] = [],
> = Record<string, Builder<Register, Prefix>>;
