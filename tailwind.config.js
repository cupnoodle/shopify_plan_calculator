module.exports = {
  // important: '.yagi-accordion',
  purge: [
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        'tall': '50rem'
      },
      transitionProperty: {
        'maxheight': 'max-height'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}