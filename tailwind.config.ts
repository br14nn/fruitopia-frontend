import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f3faf3",
          "100": "#e3f5e3",
          "200": "#c8eac9",
          "300": "#9dd89f",
          "400": "#6bbd6e",
          "500": "#4caf50",
          "600": "#358438",
          "700": "#2d6830",
          "800": "#275429",
          "900": "#224525",
          "950": "#0e2510",
        },
        secondary: {
          "50": "#fefde8",
          "100": "#fffdc2",
          "200": "#fff889",
          "300": "#ffeb3b",
          "400": "#fddb12",
          "500": "#ecc106",
          "600": "#cc9702",
          "700": "#a36b05",
          "800": "#86540d",
          "900": "#724511",
          "950": "#432405",
        },
        accent: {
          "50": "#fef3f2",
          "100": "#ffe3e1",
          "200": "#ffccc8",
          "300": "#ffa8a2",
          "400": "#fc776d",
          "500": "#f44336",
          "600": "#e22d20",
          "700": "#be2217",
          "800": "#9d2017",
          "900": "#82211a",
          "950": "#470c08",
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
