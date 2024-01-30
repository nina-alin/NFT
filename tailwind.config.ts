import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEF479",
        "primary-hover": "#f0e46e",
        secondary: "#2A2A2A",
        tertiary: "#98989c",
      },
    },
  },
  plugins: [],
};
export default config;
