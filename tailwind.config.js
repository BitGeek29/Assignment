/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f6fb",
          100: "#e5ecf6",
          200: "#cdd9eb",
          300: "#a8bfdc",
          400: "#7f9ac7",
          500: "#5f7dad",
          600: "#4b648f",
          700: "#3f5274",
          800: "#374662",
          900: "#313d52",
        },
        surface: {
          50: "#f8fafc",
          100: "#f1f5f9",
          900: "#151515",
          950: "#0b0b0b",
        },
      },
      fontFamily: {
        body: ["Raleway", "sans-serif"],
        display: ["Rufina", "serif"],
        accent: ["Playfair Display", "serif"],
      },
      borderRadius: {
        card: "1rem",
        pill: "999px",
        hero: "2rem",
      },
      boxShadow: {
        card: "0 14px 32px rgba(15, 23, 42, 0.12)",
        soft: "0 10px 24px rgba(15, 23, 42, 0.08)",
      },
      spacing: {
        nav: "5.5rem",
        pagex: "1.25rem",
        pagexl: "2.5rem",
      },
      keyframes: {
        "route-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "route-in": "route-in 300ms ease-out",
      },
    },
  },
  plugins: [],
};
