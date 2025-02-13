/** @type {import('tailwindcss').Config} */
export default {
  content: ['./App.{js,ts,vue}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  plugins: []
}
