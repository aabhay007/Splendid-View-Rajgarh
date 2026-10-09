import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f4",
          100: "#e2ede6",
          200: "#c6dcce",
          300: "#9fc2ad",
          400: "#71a286",
          500: "#4f8467",
          600: "#3c6b52",
          700: "#315643",
          800: "#294637",
          900: "#183327",
          950: "#0e1f17",
        },
        warm: {
          50: "#faf8f5",
          100: "#f4f0e9",
          200: "#e8e0d3",
          300: "#d9ccba",
          400: "#c7b49d",
          500: "#b59c81",
          600: "#9f8369",
          700: "#7f6853",
          800: "#685546",
          900: "#55463a",
          950: "#2e241e",
        },
        peach: {
          50: "#fdf6f2",
          100: "#faeae1",
          200: "#f5d4c2",
          300: "#eeb49a",
          400: "#e58a6a",
          500: "#dd6844",
          600: "#c8512f",
          700: "#a63f25",
          800: "#863523",
          900: "#6d2f21",
          950: "#3b150f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
