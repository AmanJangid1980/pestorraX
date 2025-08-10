import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#16a34a',
          'green-hover': '#15803d',
        },
        secondary: {
          green: '#22c55e',
        },
        accent: {
          green: '#4ade80',
        },
        light: {
          green: '#dcfce7',
        },
        dark: {
          green: '#15803d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
