/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7ff',
          100: '#dce8ff',
          500: '#3f72ff',
          700: '#2248bc',
          900: '#182d68'
        }
      },
      boxShadow: {
        glow: '0 12px 40px rgba(63, 114, 255, 0.25)'
      }
    }
  },
  plugins: []
};
