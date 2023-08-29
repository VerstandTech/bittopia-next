/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary: 'var(--primary-color)',
        'background-color': 'var(--background-color)',
        'gray-transparent-50': 'var(--gray-transparent)'
      },
      gridTemplateColumns: {
        'society-feed': '250px 1fr'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
