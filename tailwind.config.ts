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
      keyframes: {
        skeleton: {
          "0%": { backgroundColor: "#f3f3f3" },
          "50%": { backgroundColor: "#e0e0e0" },
          "100%": { backgroundColor: "#f3f3f3" },
        },
      },
      animation: {
        skeleton: "skeleton 1.5s ease-in-out infinite",
      },
      colors: {
        "primary-dark": "#A30000",
        "warning-light": "#F7B687",
        "warning-lightest": "#FAF4EF",
        "neutral-dark": "#6C6C6C",
        "neutral-darkest": "#202020",
        "neutral-light": "#F7F7F7",
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
      gridTemplateColumns: {
        'resources-3': 'repeat(auto-fit, minmax(320px, 1fr))'
      }
    },
  },
  plugins: [],
};
export default config;
