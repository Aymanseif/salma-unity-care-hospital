/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          primary: '#0EA5E9',
          secondary: '#F59E0B', 
          accent: '#10B981',
          danger: '#EF4444'
        }
      }
    },
  },
  plugins: [],
}
