const nextra = require("nextra");

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  ...withNextra(),

  // https://nextjs.org/docs/pages/api-reference/next-config-js/distDir
  // distDir: "_site",

  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  // output: "export",

  // https://nextjs.org/docs/pages/api-reference/next-config-js/assetPrefix
  // assetPrefix: "https://ibnlanre.github.io/builder/",

  // https://nextjs.org/docs/app/api-reference/next-config-js/basePath
  // basePath: "",
};

module.exports = nextConfig;
