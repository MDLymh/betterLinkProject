/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // o 'media' si prefieres que siga el sistema del usuario
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF2E63',
        secondary: '#00C9C8',
        accent: '#FFD369',
        backgroundDark: '#121212',
        backgroundLight: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
