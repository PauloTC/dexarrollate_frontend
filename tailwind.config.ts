import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "dl-",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warning-light": "#F7B687",
        "warning-lightest": "#FAF4EF",
        "neutral-dark": "#6C6C6C",
        "neutral-medium": "#DEDEDE",
        "neutral-lightest": "#FCFCFC",
        "highlight-medium": "#3B8700",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
