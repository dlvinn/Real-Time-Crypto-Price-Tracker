/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      'blue': {
        100: '#dbf4ff',
        200: '#9be2ff',
        300: '#6db8ff',
        400: '#1fb6ff',
        500: '#009eeb',
        600: '#0085cc',
        700: '#0072a1',
        800: '#005d78',
        900: '#004259',
      },
      'purple': {
        100: '#f3ebff',
        200: '#d5baff',
        300: '#ae8adf',
        400: '#7e5bef',
        500: '#6929c4',
        600: '#491d8b',
        700: '#361667',
        800: '#2a124e',
        900: '#1e0c35',
      },
      'pink': {
        100: '#ffebf7',
        200: '#ffbee5',
        300: '#ff8cd9',
        400: '#ff49db',
        500: '#ff007a',
        600: '#e6006e',
        700: '#b30058',
        800: '#8a0044',
        900: '#660032',
      },
      'orange': {
        100: '#fff0eb',
        200: '#ffd6cc',
        300: '#ffad99',
        400: '#ff7849',
        500: '#ff5722',
        600: '#e64a19',
        700: '#b73815',
        800: '#8a2e12',
        900: '#661f0d',
      },
      'green': {
        100: '#def7ec',
        200: '#9cf1d6',
        300: '#6ae7bd',
        400: '#13ce66',
        500: '#0fa060',
        600: '#0c7e4a',
        700: '#0a6b3c',
        800: '#08522d',
        900: '#06381f',
      },
      'yellow': {
        100: '#fff9db',
        200: '#ffec99',
        300: '#ffdb66',
        400: '#ffc82c',
        500: '#e6aa00',
        600: '#cc9100',
        700: '#997300',
        800: '#7a5a00',
        900: '#5c4200',
      },
      'gray-dark': {
        100: '#e6eef7',
        200: '#cdd9e5',
        300: '#aebecb',
        400: '#8596ad',
        500: '#67758f',
        600: '#52606d',
        700: '#3e4c57',
        800: '#273444',
        900: '#1a232d',
      },
      'gray': {
        100: '#f4f7fa',
        200: '#ebeff5',
        300: '#dde3ed',
        400: '#c8ccd4',
        500: '#8492a6',
        600: '#697386',
        700: '#4d5769',
        800: '#343d4e',
        900: '#1e222a',
      },
      'gray-light': {
        100: '#fafbfc',
        200: '#f4f6f9',
        300: '#e1e4e9',
        400: '#c2c9d1',
        500: '#d3dce6',
        600: '#97a3b9',
        700: '#76839e',
        800: '#58617a',
        900: '#444d5c',
      },
      'red': {
        100: '#ffebee',
        200: '#ffcdd2',
        300: '#ef9a9a',
        400: '#e57373',
        500: '#ef5350',
        600: '#f44336',
        700: '#e53935',
        800: '#d32f2f',
        900: '#c62828',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}