/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "Serif"],
        montserrat: ["Montserrat", "Sans-Serif"]
      },
      colors: {
        background: "rgb(var(--background)/<alpha-value>)",
        foreground: "rgb(var(--foreground)/<alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card)/<alpha-value>)",
          foreground: "rgb(var(--card-foreground)/<alpha-value>)"
        },
        accent: "rgb(var(--accent)/<alpha-value>)"
      }
    }
  },
  plugins: []
};
