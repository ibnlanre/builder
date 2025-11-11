import nextConfig from "eslint-config-next/core-web-vitals";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig({
  extends: nextConfig,
  files: ["**/*.tsx", "**/*.ts"],
  rules: { "@next/next/no-img-element": "off" },
});

export default eslintConfig;
