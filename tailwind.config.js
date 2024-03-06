/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xxs:'250px',
      xs: '350px',  // Added for extra-small screens below 350px
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1310px',
      '2xl': '1536px',
    },    
    extend: {
      colors: {
        "secondary": '#FC9D0D',
        "primary": '#FFB701',
        "subsidary": '#FFD466',
        "dblack": '2A2927',
        "bgrey": "#9F9F9F",
        'int-black': '#000000',
        'int-light-blue': '#ECEFF0',
        'int-grey-100': '#151B26',
        'int-grey-90': '#454950',
        'int-grey-60': '#6F7782',
        'int-grey-40': '#9BA6B5',
        'int-grey-30': '#B2BAC6',
        'int-gray-20': '#CBCFD5',
        'int-mid-blue': '#D3E4E8',
        'int-dark-blue': '#56A0BB',
        'int-very-dark-blue': '#498EA8',
        'int-green': '#B2DAA4',
        'int-green-alert': '#97D382',
        'int-dark': '#333333',
        'int-background': '#FAFAFA',
        'int-red': '#EB5757',
        'int-success':"#46f202",
        'int-danger':"#e3210b"

      },
      fontSize:{
        button: [
          '14px',
          {
            letterSpacing: '0.05em',
            lineHeight: '22.4px',
          },
        ],
      },
      fontFamily: {
        'poppins-regular': ['PoppinsRegular', 'sans-serif'],
        'poppins-bold': ['PoppinsBold', 'sans-serif'],
        'poppins-semi-bold': ['PoppinsSemiBold', 'sans-serif'],
        'poppins-italic': ['PoppinsItalic', 'sans-serif'],
        'poppins-italic-bold': ['PoppinsItalicBold', 'sans-serif'],
        "LuxuriousScript": ['"LuxuriousScript-Regular"', 'cursive'],

      },
      boxShadow: {
        card: '0px 20px 44px #C9D3D7, 0px 1px 2px rgba(0, 0, 0, 0.15)',
        timer: '0px 13px 14px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.4)',
        table: '0px 2px 3px -1px rgba(0, 0, 0, 0.14)',
        'media-player-control': '0px 11px 24px -1px rgba(0, 0, 0, 0.25)',
        patientInfo: '0px 6px 14px rgba(0, 0, 0, 0.05), 0px 0.5px 0px #ECEFF0',
      },
      dropShadow: {
        'diashow-img': '0px 14px 94px rgba(0, 0, 0, 0.25)',
      },
      gridTemplateRows: {
        admin: 'auto 1fr auto',
      },
    },
  },
  variants: {},
  plugins: [],
};

