/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'wiki-dark': '#0d0d0d',      // cinza mega escuro
                'wiki-blue': '#094c90',      // azul da sua imagem
                'wiki-red': '#90091d',       // vermelho bordô
                'wiki-cyan': '#097188',      // azul ciano
                'wiki-red-alt': '#962234',   // segundo vermelho
            }
        },
    },
    plugins: [],
}