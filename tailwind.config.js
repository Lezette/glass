module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#11acf4',
      },
      width: {
        '1/7': '50.4857143%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
