/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "bg-primary": "#000000",
        "bg-secondary": "#1E3E62",
        "tx-primary": "#FF6500",
        "tx-secondary": "#F2F9FF",
      },
    },
  },
  plugins: [],
};
