const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = {
  ...withNextra(),

  assetPrefix: "https://ibnlanre.github.io/builder/",

  // https://nextjs.org/docs/app/api-reference/next-config-js/basePath
  basePath: "",

  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: "export",
};
