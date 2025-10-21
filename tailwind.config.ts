import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'primary': '#A3D9B1',      // A soft, muted green that is much gentler on the eyes
        'secondary': '#7EBF8F',    // A darker shade for contrast that is still significantly softer
        'accent': '#E2725B',       // "Terracotta" - for warmth and stability
        'bg-main': '#E6F7FF',      // A pleasant light blue
        'bg-alt': '#FFFFFF',       // White for headers and cards
        'text-main': '#1A1A1A',    // Dark text for high contrast on light backgrounds
        'text-light': '#6B7280',   // A darker gray for secondary text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // A clean, modern font for headings
        body: ['Montserrat', 'sans-serif'], // A clean, readable font for body text
      },
    }
  },

  plugins: []
} as Config;
