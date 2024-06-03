import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "dl-",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warning-light": "#F7B687",
        "warning-lightest": "#FAF4EF",
        "neutral-dark": "#6C6C6C",
        "neutral-lightest": "#FCFCFC",
        "highlight-medium": "#3B8700",
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
