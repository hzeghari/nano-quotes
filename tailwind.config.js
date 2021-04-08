module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mains': "url('/MacBook.png')",
      })
    },
    inset: {
      '1/5': '20%',
      '1/10': '10%',
      '1/2': '50%',
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
