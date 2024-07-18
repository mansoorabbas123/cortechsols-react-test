/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-background": "var(--primary-background)",
        "secondary-background": "var(--secondary-background)",
        foreground: "var(--foreground)",
        "charcoal-solid": "var(--charcoal-solid)",
      },
    },
  },
  plugins: [],
};
