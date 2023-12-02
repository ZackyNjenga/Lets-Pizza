/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#932c2c',
        secondary: '#0b2fb7',
        boxes: '#e50a0a',
        bold: '#6ab719',
      },
    },
  },
  plugins: [],
}
