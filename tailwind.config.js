/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        homepageprimary: '#292930',
        homepageservices: '#5956E8',
        // ...
      },
      fontFamily: {
        'nunito': ['nunito', 'sans']
      }
    },
  },
  plugins: [],
}

