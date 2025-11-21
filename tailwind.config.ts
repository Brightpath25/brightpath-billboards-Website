import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Gold Palette
        gold: {
          base: '#E3B04B',
          highlight: '#F7D382',
          deep: '#A8741A',
        },
        // Premium Black Palette
        black: {
          hero: '#0B0D10',
          panel: '#12151B',
          card: '#1A1F27',
        },
        // Text Colors
        text: {
          light: '#EAEFF6',
          mid: '#C9D0DA',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #A8741A 0%, #E3B04B 50%, #F7D382 100%)',
        'hero-gradient': 'linear-gradient(180deg, #0B0D10 0%, #1A1F27 100%)',
        'section-gradient': 'linear-gradient(180deg, #0B0D10, #1A1F27)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(247, 211, 130, 0.4)',
        'card-glow': '0 0 40px rgba(227, 176, 75, 0.15)',
        'luxury': '0 4px 20px rgba(227, 176, 75, 0.3)',
      },
      transitionDuration: {
        'luxury': '250ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'gold-pulse': 'goldPulse 2s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'scroll-cue': 'scrollCue 2s ease-in-out infinite',
        'particles': 'particles 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        goldPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(227, 176, 75, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(247, 211, 130, 0.6)',
          },
        },
        goldShimmer: {
          '0%': {
            backgroundPosition: '-200% center',
          },
          '100%': {
            backgroundPosition: '200% center',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        scrollCue: {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(10px)',
            opacity: '0.5',
          },
        },
        particles: {
          '0%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100vh) translateX(50px)',
            opacity: '0',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
