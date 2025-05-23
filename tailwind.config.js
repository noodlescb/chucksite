/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-black': '#0C0C0C',
        'deep-orange': '#bd6f0a',
        'deep-purple': '#5f61b2',
        'deep-pink': '#ce49a9',
        'gold': '#ABB222',
        'deep-red': '#AD0E09',
        'deep-green': '#317A1C',
        'midnight': '#00292F',
        'saturated-orange': '#d9923f',
        'saturated-purple': '#8285c6',
        'anvil': '#282B2E',
        'dusk': '#004b57',
        'moss': '#CEDB1F',
        'saturated-pink': '#ff7dd7',
        'saturated-red': '#FF504A',
        'saturated-green': '#75c163',
        'prime-orange': '#f4b670',
        'prime-purple': '#b5b5e0',
        'prime-pink': '#f4bee9',
        'lagoon': '#007383',
        'slate': '#5A5F66',
        'butternut': '#D9ED21',
        'prime-green': '#A4E298',
        'prime-red': '#FF9988',
        'light-orange': '#f6d9b9',
        'light-purple': '#d9d9f4',
        'light-pink': '#f2d7ee',
        'heat-map-green': '#CAEFC5',
        'pebble': '#808890',
        'amp-yellow': '#EAFF5F',
        'ocean': '#00a0b2',
        'heat-map-red': '#FFD0CF',
        'orange-tint': '#f9ede4',
        'pink-tint': '#f7e8f5',
        'purple-tint': '#ebebf7',
        'green-tint': '#E9F6EA',
        'prime-gray': '#C2CBD1',
        'limoncello': '#EDFF95',
        'pool': '#0bb9c9',
        'red-tint': '#FFEEEE',
        'prime-teal': '#54d3de',
        'cement': '#E8EDEF',
        'meringue': '#F6FFDC',
        'cloud': '#F2F4F4',
        'rain': '#89eaf0',
        'ice': '#abf4f7',
        'teal-tint': '#d9feff'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}