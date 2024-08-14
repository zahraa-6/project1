/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7ba34",
        secondary: "#727de8",
       
        light:'#f7f7f7',

        dark: '#333333',
        backbg: "#999999",
      },
      backgroundImage: {
        'footer-texture': "url('/img/footer-texture.png')",
      },
      screens: {
        md: { max: "800px" },
        sm: { max: "639px" },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        shadow1: "0px 30px 40px 0px rgba(1, 11, 60, 0.1)",
        shadow2: "0px 10px 30px 0px rgba(0, 0, 200, 0.3);",     
      },
     
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      }
    },
  },
  plugins: [],
}


