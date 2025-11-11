import type { BuilderProviderProps, BuilderRecord } from "../types";

import { createContext, use } from "react";

export function createBuilderProvider<Builders extends BuilderRecord>(
  builders: Builders
) {
  const BuilderContext = createContext<Builders>({} as Builders);

  function useBuilder() {
    const builders = use(BuilderContext);

    if (!builders) {
      const message = "useBuilder should be used within a BuilderProvider";
      throw new Error(message);
    }

    return builders;
  }

  function BuilderProvider({ children }: BuilderProviderProps<Builders>) {
    return (
      <BuilderContext value={builders}>
        {children}
      </BuilderContext>
    );
  }

  return { BuilderProvider, useBuilder };
}
