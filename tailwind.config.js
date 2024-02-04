/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-base': 'var(--green-base)',
      },
      boxShadow: {
        'main-box': '6px 6px 10px var(--shadow-1), -6px -6px 10px var(--shadow-2)',
        'secondary-box': 'inset -4px -4px 8px var(--shadow-2), inset 4px 4px 8px var(--shadow-1);',
        'alternative-box': '-6px -6px 10px var(--shadow-2), 6px 6px 10px var(--shadow-1);',
        'alternative-box-2': 'inset -6px -6px 10px var(--shadow-2), inset 6px 6px 10px var(--shadow-1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '90rem',
        'screen-1.5xl': '88rem',
      },
      width: {
        100: '25rem',
        120: '30rem',
        140: '35rem',
        150: '37.5rem',
        160: '40rem',
      },
    },
  },
  plugins: [],
};
