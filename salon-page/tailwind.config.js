/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FDFCFB",
        ink: "#0F0F0F",
        accent: "#D48166", // Living Terracotta
        glow: "#FFBF00", // Amber Glow
        soft: "#F7F3F0",
        border: "#EEE7E2"
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        serif: ["Fraunces", "serif"]
      },
      borderRadius: {
        soft: "2rem",
        softer: "3.5rem"
      },
      boxShadow: {
        lush: "0 20px 50px -10px rgba(212, 129, 102, 0.15)",
        premium: "0 40px 80px -20px rgba(15, 15, 15, 0.12)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 }
        }
      }
    }
  }
};
