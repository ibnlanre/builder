import { defineConfig, Options } from "tsup";

const core: Options = {
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  entry: ["src/core/index.ts"],
  outDir: "dist/core",
  treeshake: true,
};

const react: Options = {
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  entry: ["src/react/index.ts"],
  outDir: "dist/react",
  external: ["react"],
  treeshake: true,
};

export default defineConfig([core, react]);
