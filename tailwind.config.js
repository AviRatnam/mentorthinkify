module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'card': "30rem",
        '75':"19rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
