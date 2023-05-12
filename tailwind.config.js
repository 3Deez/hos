/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E98C9",
        "hos-blue-100": "#1E98C9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        linear_gradient: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 24.25%, #1E98C9 78.05%)",
        "home-bg": "url('/images/home-bg.png')",
      },
    },
  },
  plugins: [],
};
