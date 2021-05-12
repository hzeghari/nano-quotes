module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mains': "url('/MacBook.png')",
      })
    },
    screens: {
      sm: '420px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    inset: {
      '1/5': '20%',
      '1/10': '10%',
      '1/2': '50%',
      '3/4': '75%',
      '45/45': '45%',
      '1/3': '33%'
    },
    colors: {
      'backing': '#D17A29',
      'white': 'white',
      'black': 'black'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
