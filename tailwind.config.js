/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [
    createThemes({
      tema: {
        "primary-color": "#8dcb00",
        "primary-color-2": "#dffe99",
        "primary-color-3": "#70a200",
        "secondary-color": "#202020",
        "gray-1": "#d1d5db",
        "gray-2": "#6b7280",
        "gray-3": "#374151",
        "c-success": "#57C73C",
        "c-warn": "#E2D55B",
        "c-error": "#FF412E",
        "c-info": "#0B65BD",
      },
    }),
  ],
};
