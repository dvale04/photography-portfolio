module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      primary: ['"EB Garamond"', 'serif'],
      secondary: ['EB Garamond', 'serif'],
      third: ['PT Serif', 'serif'],
      fourth: ['Swear Display', 'serif'],
      fifth: ['Sorts Mill Goudy']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      fontSize: {
        'base': ['16px', '22px'],
        'other': ['17px', '26px'],
      },
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        accent: '#EEF7F9',
        black: '#000000',
        greyy: '#1C1C1C',
      },
    },
  },
  plugins: [],
};
