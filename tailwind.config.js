/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: '#2C1810',
          medium: '#36312C',
        },
        cream: {
          light: '#FAF8F6',
          medium: '#E8DED2',
          warm: '#D4C5B9',
        },
        gold: {
          muted: '#B8936D',
        },
        olive: {
          dark: '#3D4F3D',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
