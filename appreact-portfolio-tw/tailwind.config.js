module.exports = {
  darkMode: "media",
  content: [
     "./index.html",
     "node_modules/flowbite-react/lib/esm/**/*.js",
     "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to include any file types that might contain Tailwind classes
     ],
     theme: {
       extend: {},
     },
     plugins: [
      require("flowbite/plugin")
  ] ,
}