/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],

  theme: {
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      space: ["Space Grotesk", "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

