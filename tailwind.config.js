/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundColor: {
        nav: "rgb(17 24 39)",
        buttonBanner: "#ff7df2",
        trustItem: "background-color: rgb(255, 255, 255);",
        card: "#212541",
        mail: "#2c304c",
        subBut: "#fe5eb7",
      },
      textColor: {
        crypto: "#ffa7a9",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
