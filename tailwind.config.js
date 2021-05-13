module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        headers: ["Montserrat", "sans-serif"],
        text: ["Merriweather", "Georgia", "serif"],
      },
      animation: ["hover", "focus"],
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
}
