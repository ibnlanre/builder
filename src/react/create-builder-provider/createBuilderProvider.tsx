import { createContext, useContext } from "react";
import type { BuilderProviderProps, BuilderRecord } from "../types";

export function createBuilderProvider<Builders extends BuilderRecord>(
  builders: Builders
) {
  const BuilderContext = createContext<Builders>({} as Builders);

  function useBuilder() {
    const builders = useContext(BuilderContext);

    if (!builders) {
      const message = "useBuilder should be used within a BuilderProvider";
      throw new Error(message);
    }

    return builders;
  }

  function BuilderProvider({ children }: BuilderProviderProps<Builders>) {
    return (
      <BuilderContext.Provider value={builders}>
        {children}
      </BuilderContext.Provider>
    );
  }

  return { useBuilder, BuilderProvider };
}
