import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ".4375rem",
        sm: ".6875rem",
        base: "1rem",
        md: "1.5rem",
        lg: "2.25rem",
        xl: "3.375rem",
        "2xl": "5.0625rem",
        "3xl": "7.625rem",
        "4xl": "11.375rem",
      },
      colors: {
        primary: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          default: "#121212",
        },
        secondary: {
          default: "#ffffff",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
        accent: {
          "50": "#ffffe7",
          "100": "#feffc1",
          "200": "#fffd86",
          "300": "#fff441",
          "400": "#ffe60d",
          default: "#ffd700",
          "600": "#d19e00",
          "700": "#a67102",
          "800": "#89580a",
          "900": "#74480f",
          "950": "#442604",
        },
      },
      minHeight: {
        screen: "100svh",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
