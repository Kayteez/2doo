/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        '2doo-blue': '#38B6FF',
        '2doo-pink': '#FF66C4',
        'starbucks-white': '#F8F9FA'
      }
    }
  },
  plugins: []
}
