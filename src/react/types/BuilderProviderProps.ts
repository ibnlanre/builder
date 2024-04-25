import type { PropsWithChildren } from "react";
import type { BuilderRecord } from "./BuilderRecord";

export type BuilderProviderProps<Builders extends BuilderRecord> =
  PropsWithChildren<{
    builders: Builders;
  }>;
