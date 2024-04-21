import type { DeepRequired, Dictionary } from "@ibnlanre/types";
import type { Builder } from "./Builder";

export type GetRegister<Record extends Builder<Dictionary>> =
  Record extends Builder<infer Register> ? DeepRequired<Register> : never;
