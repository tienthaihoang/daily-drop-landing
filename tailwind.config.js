/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}", // app router
    "./src/components/**/*.{ts,tsx,js,jsx}", // components
    "./src/pages/**/*.{ts,tsx,js,jsx}", // nếu có dùng pages
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
