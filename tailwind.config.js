/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vlec: {
          primary: '#0066CC',
          secondary: '#00B4D8',
          dark: '#1A1A2E',
          light: '#F5F7FA'
        }
      },
      backgroundImage: {
        'gradient-vlec': 'linear-gradient(135deg, #0066CC 0%, #00B4D8 100%)',
        'gradient-vlec-light': 'linear-gradient(135deg, #E3F2FD 0%, #B3E5FC 100%)'
      }
    },
  },
  plugins: [],
}
