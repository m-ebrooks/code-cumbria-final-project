/** @type {import('tailwindcss').Config} */
export default {
  content: [    
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite-react/**/*.js"
  // scan all folders in components 
],
  darkMode: 'class',
  theme: {
    
    extend: {},
    container: {
        center: true,
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}

}