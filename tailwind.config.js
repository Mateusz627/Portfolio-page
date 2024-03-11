/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#121a26",
      },
      fontFamily: {
        whisper: ["Whisper", "sans-serif"],
      },
    },
  },
  plugins: [],
};
