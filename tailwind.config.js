/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TSX files in the `src` directory
  ],
  theme: {
    extend:{
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      //this scroll code is used there when we use the announcement line at the top which is run in loop
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },

        },
  plugins: [],
};
