import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2C45',
          light: '#2A4268',
          dark: '#111D2E',
        },
        sky: {
          DEFAULT: '#3590C8',
          light: '#88BFDC',
          pale: '#E0F0F8',
        },
        coral: {
          DEFAULT: '#E8523A',
          dark: '#C84028',
          light: '#F07858',
        },
        amber: {
          DEFAULT: '#F09030',
          light: '#F7C070',
          pale: '#FDF3E0',
        },
        rose: {
          DEFAULT: '#D93870',
          light: '#F070A0',
          pale: '#FCE8F0',
        },
        warm: {
          DEFAULT: '#FAF8F4',
          dark: '#F0EDE6',
          darker: '#E4DFD8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
