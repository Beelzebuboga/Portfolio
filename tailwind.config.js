/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}",
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        blackletter: ["UnifrakturMaguntia"], 
        baroque: ['Baroque', 'serif'],
        passion: ['Passion One', 'cursive'],
        libre:[`Libre Baskerville", serif`],
        abril:[`Abril Fatface`],
        jet: [`"JetBrains Mono"`],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        georgia: ['Georgia', 'Times New Roman', 'serif'],
        script: ['Lobster', 'Pacifico', 'cursive'],
        display: ['Oswald', 'cursive'],
        serif: ['Montserrat', 'Arial', 'sans-serif'],
        Merriweather: ['Merriweather', 'Georgia', 'serif'],
        Playfair: ['Playfair Display', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors:{
        jonquil: '#F9C80E',  // Custom color names based on your palette
        eerieblack: '#262626',
        emerald: '#0CCE6B',
        timberwolf: '#D8D4D5',
        babypowder: '#FFFFFC',
        seagreen: '#058C42',
        pakistangreen: '#04471C',
        cream: '#FFFDD0',
        blackish: '#1a1a1a'
      }
    },
  },
  plugins: [],
};
