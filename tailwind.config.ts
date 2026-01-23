import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ea580c', // Orange 600
          dark: '#c2410c',    // Orange 700
        },
        secondary: '#db2777', // Pink 600
        accent: '#f59e0b',    // Amber 500
        dark: '#0f0702',      // Text Main
        gray: {
          DEFAULT: '#4a4a4a', // Text Secondary
          light: '#d1d5db',
        },
        glass: 'rgba(255, 255, 255, 0.95)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        logo: ['var(--font-nanum)', 'sans-serif'],
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to right, #fff7ed 0%, #fff1f2 100%)',
      }
    },
  },
  plugins: [],
};
export default config;