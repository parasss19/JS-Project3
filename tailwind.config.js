/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], 
  theme: {
    extend: {},
  },
  plugins: [],
}

//Note
//  ["./*.{html,js}"] only matches files directly in the root folder.
//  ["./**/*.{html,js}"] it includes files in all subdirectories, making it more scalable.
