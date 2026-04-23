/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fem-red': '#DC2626',
        'fem-dark': '#0A0A0A',
        'fem-gray': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        fem: {
          primary: '#DC2626',
          'primary-content': '#ffffff',
          secondary: '#1A1A1A',
          'secondary-content': '#ffffff',
          accent: '#DC2626',
          neutral: '#0A0A0A',
          'base-100': '#0A0A0A',
          'base-200': '#111111',
          'base-300': '#1A1A1A',
          'base-content': '#ffffff',
        },
      },
    ],
    darkTheme: 'fem',
  },
};
