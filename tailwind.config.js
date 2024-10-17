/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'cabinet': ['Cabinet Grotesk', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(360deg, #CFECED 24.32%, #CFECED 100%)',
        'custom-gradient': 'linear-gradient(90deg, rgba(6, 106, 111, 0.1) 0%, rgba(206, 210, 212, 0.5) 50.5%, rgba(6, 106, 111, 0.1) 91%)'
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.line-with-circles': {
          position: 'relative',
          height: '1px',
          background: 'linear-gradient(90deg, rgba(6, 106, 111, 0.1) 0%, rgba(206, 210, 212, 0.5) 50.5%, rgba(6, 106, 111, 0.1) 100%)',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#13949A',
            top: '50%',
            transform: 'translateY(-50%)',
          },
          '&::before': {
            left: '-3px',
          },
          '&::after': {
            right: '-3px',
          },
        },
      })
    },
  ],
}