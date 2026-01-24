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
  primary: { DEFAULT: '#d97706', dark: '#b45309' }, // Amber 600/700
  secondary: '#1e293b', // Slate 800
  accent: '#0f172a',    // Slate 900
  dark: '#1c1917',      // Stone 900
  gray: { DEFAULT: '#57534e', light: '#d6d3d1' },
  glass: 'rgba(255, 255, 255, 0.95)',
},
backgroundImage: {
  'main-gradient': 'linear-gradient(to right, #fffbeb 0%, #fff7ed 100%)', // Warm Amber tint
},
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        logo: ['var(--font-nanum)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;