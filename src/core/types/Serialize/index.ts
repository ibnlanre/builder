import type { Primitives } from "../Primitives";

export type Serialize<Head extends Primitives> =
  Head extends Exclude<Primitives, null | undefined> ? `${Head}` : "";
