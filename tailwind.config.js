/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "my-bg": "#091420",
        "my-bg-dark": "#0c1a28",
        "my-color": "#4fe98c",
      },
      width: {
        "custom-image-width": "200px",
      },
    },
  },
  plugins: [],
};
