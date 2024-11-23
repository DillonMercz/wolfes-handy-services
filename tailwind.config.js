/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
          dark: '#000000',
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d'
        },
        secondary: {
          DEFAULT: '#f4a460',
          light: '#f6b26b',
          dark: '#e88c3c',
          50: '#fef6f0',
          100: '#fde8d6',
          200: '#fbd1ad',
          300: '#f9ba84',
          400: '#f4a460',
          500: '#f08533',
          600: '#e16a1a',
          700: '#bc5615',
          800: '#964311',
          900: '#70330d'
        },
        background: {
          DEFAULT: '#f5f5f5',
          dark: '#e5e5e5'
        },
        textDark: {
          DEFAULT: '#333333',
          light: '#4a4a4a',
          lighter: '#666666'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shine': 'shine 1.5s linear infinite',
        'pulse-subtle': 'pulse-subtle 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) rotate(45deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.01)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-colors-primary-DEFAULT) 0%, var(--tw-colors-primary-light) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, var(--tw-colors-secondary-DEFAULT) 0%, var(--tw-colors-secondary-light) 100%)',
      },
    },
  },
  plugins: [],
}
