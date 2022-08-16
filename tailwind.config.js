/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'meme': '#16171d',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#aaa',
              '&:hover': {
                color: '#ccc',
              },
            },
            code: {
              color: '#C9D1D9',
              background: 'rgba(110,118,129,0.4)',
              borderRadius: '3px !important',
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  darkMode: 'class',
}
