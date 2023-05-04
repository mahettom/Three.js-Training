/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: 'black',
        secondary: 'white',
        tertiary: '#ff5300',
        'black-200': '#090325',
        'black-100': '#100d25',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
        md: '900px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        'ledger': ['"DM Mono"']
      }
    },
  },
  plugins: [],
};