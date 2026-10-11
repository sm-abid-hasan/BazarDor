/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "--font-hind" is created in app/layout.js (next/font)
        sans: ["var(--font-hind)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Our own theme, colors are taken from the Figma file
    themes: [
      {
        bazar: {
          primary: "#05893e",
          "primary-content": "#f3fbf4",
          secondary: "#1a9951",
          "secondary-content": "#f3fbf4",
          accent: "#1a9951",
          "accent-content": "#f3fbf4",
          neutral: "#1d271f",
          "neutral-content": "#fafcfa",
          "base-100": "#fafcfa", // cards, header, footer
          "base-200": "#f0f5f0", // page background
          "base-300": "#e1e8e1", // borders
          "base-content": "#1d271f", // main text color
          info: "#2563eb",
          success: "#1a9951",
          warning: "#f59e0b",
          error: "#d03739",
          "error-content": "#ffffff",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "9999px",
          "--btn-text-case": "none",
          "--animation-btn": "0.15s",
        },
      },
    ],
    logs: false,
  },
};
