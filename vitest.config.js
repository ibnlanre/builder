import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    exclude: ["**/node_modules/**", "**/dist/**", "docs/**"],
    include: ["app/src/**/*.{test,spec}.{js,ts,tsx}"],
    environment: "jsdom",
  },
});
