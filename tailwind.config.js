/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        '2doo-blue': '#38B6FF',
        '2doo-pink': '#FF66C4',
        '2doo-yellow': '#FFE500',
        'starbucks-white': '#F8F9FA',
        'extra-blue': '#001AFF',
        'deep-pink': '#FF009D',
        'more-yellow': '#FFB800'
      },
      backgroundImage: {
        ocean: "url('/src/assets/images/png/ocean-bg.png')"
      }
    }
  },
  plugins: []
}
