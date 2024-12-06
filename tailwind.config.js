/** @type {import('tailwindcss').Config} */
module.exports = {
  devtool: 'source-map',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9333EA',
          dark: '#A855F7',
        },
      },
    },
  },
  plugins: [],
};
