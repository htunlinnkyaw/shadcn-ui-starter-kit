/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      transitionProperty: {
        "bg-color": "background-color",
        "text-color": "color",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
