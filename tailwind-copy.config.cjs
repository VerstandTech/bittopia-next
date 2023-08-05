/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'background-color': 'var(--background-color)',
        'gray-transparent-50': 'var(--gray-transparent)'
      },
      gridTemplateColumns: {
        'society-feed': '250px 1fr'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
