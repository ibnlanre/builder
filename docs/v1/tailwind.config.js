import { zinc } from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "nx-",
  darkMode: ["class", 'html[class~="dark"]'],
  content: ["./**/*.{js,jsx,ts,tsx,md,mdx}", "!./node_modules/**/*"],
  theme: {
    fontFamily: {
      sans: ["Cabin", "sans-serif"],
      mono: ["Inconsolata", "monospace"],
    },
    extend: {
      screens: {
        xs: "320px",
      },
      animation: {
        "shine-infinite": "shine-infinite 2s ease-in-out infinite",
      },
      keyframes: {
        "shine-infinite": {
          "0%": {
            transform: "skew(-12deg) translateX(-100%)",
          },
          "100%": {
            transform: "skew(-12deg) translateX(100%)",
          },
        },
      },
      colors: {
        zinc,

        "sap-green": "#4f772d",
        sap: {
          50: "#f4f9f0",
          100: "#e8f1e1",
          200: "#cee3bd",
          300: "#b3d497",
          400: "#9cc776",
          500: "#8cbf61",
          600: "#85bb56",
          700: "#71a446",
          800: "#64913c",
          900: "#547e30",
        },

        "moss-green": "#90a955",
        moss: {
          50: "#f4f9e9",
          100: "#e9f0db",
          200: "#d4debc",
          300: "#bccb98",
          400: "#a8bc7a",
          500: "#9bb266",
          600: "#95ad5b",
          700: "#81974b",
          800: "#71863f",
          900: "#607432",
        },

        "pale-goldenrod": "#ecf39e",
        pale: {
          50: "#fbfee5",
          100: "#f7fad2",
          200: "#eef4a6",
          300: "#e4ee76",
          400: "#dce950",
          500: "#d7e636",
          600: "#d4e427",
          700: "#bbca19",
          800: "#a6b30e",
          900: "#8e9b00",
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("ahfvs", [
        "&:active",
        "&:hover",
        "&:focus",
        "&:focus-visible",
      ]);
      addVariant("clump", "@supports (font-size: clamp(1rem,2vw,3rem))");
      addVariant("last-two", "&>:nth-last-child(-n+2)");
    }),
  ],
};
