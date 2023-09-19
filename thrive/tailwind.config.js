/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        //custom gradient to top right using the hero-gradient-start and hero-gradient-end colors
        'custom-gradient': 'linear-gradient(to top right, #3C7526, #71BF44)',
      },
      colors: {
        'hero-gradient-start': '#3C7526',
        'hero-gradient-end': '#71BF44',
      }
    },
  },
  plugins: [],
}
