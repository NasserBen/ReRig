/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-main-600": "#334257",
        "custom-main-500": "#476072",
        "custom-main-400": "#548CA8",
        "custom-main-300": "#757575",
        "custom-main-200": "#D9D9D9",
        "custom-main-100": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
