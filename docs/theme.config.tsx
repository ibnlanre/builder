import React from "react";

import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const logoStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.45rem",
  fontWeight: "bold",
};

const config: DocsThemeConfig = {
  head: () => {
    const { asPath } = useRouter();
    const url = `{process.env.NEXT_PUBLIC_BASE_URL}${asPath}`;

    return (
      <>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="{process.env.NEXT_PUBLIC_BASE_URL}/builder-logo.png"
        />
      </>
    );
  },
  logo: (
    <div style={logoStyle}>
      <img height="25" width="25" src="/builder-logo.png" />
      <span
        className="nextra-content sm:!nx-block"
        style={{ marginLeft: "8px", display: "none" }}
      >
        Builder
      </span>
    </div>
  ),
  logoLink: "/",
  primaryHue: {
    dark: 78,
    light: 0,
  },
  primarySaturation: {
    dark: 33,
    light: 0,
  },
  chat: {
    link: "https://www.buymeacoffee.com/ibnlanre",
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          style={{
            fontSize: 28,
          }}
        >
          <mask id="lineMdBuyMeACoffeeTwotone0">
            <path
              fill="#fff"
              d="M5 6C5 4 7 6 11.5 6C16 6 19 4 19 6L19 7C19 8.5 17 9 12.5 9C8 9 5 9 5 7L5 6Z"
            />
          </mask>
          <mask id="lineMdBuyMeACoffeeTwotone1">
            <path
              fill="#fff"
              d="M10.125 18.15C10.04 17.29 9.4 11.98 9.4 11.98C9.4 11.98 11.34 12.31 12.5 11.73C13.66 11.16 14.98 11 14.98 11C14.98 11 14.4 17.96 14.35 18.46C14.3 18.96 13.45 19.3 12.95 19.3L11.23 19.3C10.73 19.3 10.21 19 10.125 18.15Z"
            />
          </mask>
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              strokeDasharray="32"
              strokeDashoffset="32"
              d="M7.5 10.5C7.5 10.5 8.33 17.43 8.5 19C8.67 20.57 10 21 11 21L13 21C14.5 21 15.875 19.86 16 19C16.125 18.14 17 7 17 7"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.4s"
                values="32;0"
              />
            </path>
            <path
              strokeDasharray="12"
              strokeDashoffset="12"
              d="M16.5 6C16.5 3.5 14 3 12 3C10 3 9.1 3.43 8 4"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.8s"
                dur="0.2s"
                values="12;24"
              />
            </path>
          </g>
          <rect
            width="16"
            height="5"
            x="20"
            y="4"
            fill="currentColor"
            mask="url(#lineMdBuyMeACoffeeTwotone0)"
          >
            <animate
              fill="freeze"
              attributeName="x"
              begin="0.4s"
              dur="0.4s"
              values="20;4"
            />
          </rect>
          <rect
            width="8"
            height="10"
            x="8"
            y="20"
            fill="currentColor"
            fillOpacity=".3"
            mask="url(#lineMdBuyMeACoffeeTwotone1)"
          >
            <animate
              fill="freeze"
              attributeName="y"
              begin="1s"
              dur="0.4s"
              values="20;10"
            />
          </rect>
        </svg>
      );
    },
  },
  project: {
    link: "https://github.com/ibnlanre/builder",
  },
  footer: {
    component: null,
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "Builder Docs - %s",
    };
  },
};

export default config;
