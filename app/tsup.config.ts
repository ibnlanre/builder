import { defineConfig, Options } from "tsup";

const core: Options = {
  clean: true,
  dts: true,
  entry: ["src/core/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist/core",
  sourcemap: true,
  treeshake: true,
};

const react: Options = {
  clean: true,
  dts: true,
  entry: ["src/react/index.ts"],
  external: ["react"],
  format: ["esm", "cjs"],
  outDir: "dist/react",
  sourcemap: true,
  treeshake: true,
};

export default defineConfig([core, react]);
