/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "h1-d": ["32px", "40px"],
        "h2-d": ["60px", "76px"],
        "h3-d": ["44px", "56px"],
        "h4-d": ["32px", "44px"],
        "h5-d": ["24px", "30px"],
        "body-d": ["18px", " 28px"],
        "height-d": ["24px", "32px"],
        "h1-m": ["20px", "24px"],
        "h2-m": ["28px", "36px"],
        "h3-m": ["24px", "32px"],
        "h4-m": ["20px", "28px"],
        "h5-m": ["18px", "28px"],
        "body-m": ["16px", " 24px"],
        "height-m": ["18px", "24px"],
      },
      letterSpacing: {
        d: "0.02em",
        m: "0.05em",
      },
      colors: {
        primary: {
          DEFAULT: "#007FAB",
          dark: "#003A4F",
          tint: "#B0D2DE",
        },
        secondary: {
          DEFAULT: "#FFC37D",
          dark: "#A46039",
          tint: "#FFE2A9",
        },
        highlight: {
          DEFAULT: "#FF5136",
          dark: "#CD331A",
          tint: "#FFB5A4",
        },
        gary: {
          100: "#000000",
          80: "#333333",
          60: "#666666",
          40: "#999999",
          20: "#CCCCCC",
          0: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};