/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      // inter: ["inter", "sans-serif"],
      // varela: ["Varela Round", "sans-serif"],
      roboto: ["Roboto Mono", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        ternary: "var(--ternary)",
        background: "var(--background)",
        card: "var(--card)",
      },
    },
  },
  plugins: [],
};
