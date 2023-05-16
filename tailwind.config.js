/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E98C9',
        secondary: '#096185',
        yellow: '#F9EA52',
        lavender: '#E6E6F9',
        gray: '#F9F8F8',
        border: '#D9D9D9',
        'hos-blue-100': '#1E98C9',
        'dark-blue': '#0D5069',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        linear_gradient: 'linear-gradient(180deg, rgba(0, 86, 91, 0.17) 24.25%, #1E98C9 78.05%)',
        'home-bg': "url('/images/home-bg.png')",
        'lolo-hajia': "url('/images/lolo-hajia.png')",
      },
    },
  },
  plugins: [],
}
