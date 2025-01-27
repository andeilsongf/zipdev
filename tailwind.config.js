/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#decba8',
          200: '#ddba7c',
          300: '#e0d3c2',
          400: '#4b4334',
        },
        peach: {
          100: '#d88d78',
          200: '#cb6f56',
          300: '#e99077',
        },
        grey: {
          200: '#aa9f89',
          300: '#7e7666',
          400: '#746c5d',
          500: '#535353',
          600: '#2c2820',
        },
        white: {
          100: '#fffaf3',
          200: '#ffffff',
        },
      },
      fontFamily: {
        playfair: ["Playfair"],
        oxygen: ["Oxygen"],
      },
      spacing: {
        'container': '8.85%',
      },
      fontSize: {
        '80': '80px',
        '27': '27px',
        '24': '24px',
        '53': '53px',
        '92': '92px',
        '30': '30px', 
        '28': '28px', 
        '20': '20px',
        '22': '22px',
        '23': '23px',
        '21': '21px',
        '41': '41px',
        '40': '40px',
        '35': '35px',
        '17': '17px',
        '18': '18px',
        '15': '15px',
      },
      lineHeight: {
        '1.23': '1.23',
        '1.42': '1.42',
        '1.46': '1.46',
        '1.73': '1.73',
        '1.24': '1.24',
        '1.51': '1.51',
        '1.5': '1.5',
      },
      maxWidth: {
        '8xl': '1537px',
      },
      letterSpacing: {
        '0.27': '0.27px',
        '0.24': '0.24px',
        '0.3': '0.3px',
        '0.2': '0.2px',
        '0.21': '0.21px',
      },
      animation: {
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
}

