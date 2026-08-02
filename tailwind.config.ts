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
        // BrightPath Desert Motion aliases. Values remain canonical in globals.css.
        bp: {
          black: 'var(--bp-black)',
          'black-soft': 'var(--bp-black-soft)',
          charcoal: 'var(--bp-charcoal)',
          gold: 'var(--bp-gold)',
          'gold-dark': 'var(--bp-gold-dark)',
          brown: 'var(--bp-brown)',
          cream: 'var(--bp-cream)',
          white: 'var(--bp-white)',
          'gray-100': 'var(--bp-gray-100)',
          'gray-400': 'var(--bp-gray-400)',
          'gray-700': 'var(--bp-gray-700)',
          success: 'var(--bp-success)',
          error: 'var(--bp-error)',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        'bp-display': ['var(--bp-font-display)'],
        'bp-body': ['var(--bp-font-body)'],
      },
      fontSize: {
        'bp-display-xl': ['var(--bp-type-display-xl)', { lineHeight: 'var(--bp-leading-display-xl)' }],
        'bp-h1': ['var(--bp-type-h1)', { lineHeight: 'var(--bp-leading-h1)' }],
        'bp-h2': ['var(--bp-type-h2)', { lineHeight: 'var(--bp-leading-h2)' }],
        'bp-h3': ['var(--bp-type-h3)', { lineHeight: 'var(--bp-leading-h3)' }],
        'bp-body-lg': ['var(--bp-type-body-lg)', { lineHeight: 'var(--bp-leading-body-lg)' }],
        'bp-body': ['var(--bp-type-body)', { lineHeight: 'var(--bp-leading-body)' }],
        'bp-small': ['var(--bp-type-small)', { lineHeight: 'var(--bp-leading-small)' }],
        'bp-label': ['var(--bp-type-label)', { lineHeight: 'var(--bp-leading-label)' }],
      },
      fontWeight: {
        'bp-regular': 'var(--bp-weight-regular)',
        'bp-medium': 'var(--bp-weight-medium)',
        'bp-semibold': 'var(--bp-weight-semibold)',
        'bp-bold': 'var(--bp-weight-bold)',
        'bp-extrabold': 'var(--bp-weight-extrabold)',
        'bp-black': 'var(--bp-weight-black)',
      },
      spacing: {
        'bp-1': 'var(--bp-space-1)',
        'bp-2': 'var(--bp-space-2)',
        'bp-3': 'var(--bp-space-3)',
        'bp-4': 'var(--bp-space-4)',
        'bp-6': 'var(--bp-space-6)',
        'bp-8': 'var(--bp-space-8)',
        'bp-12': 'var(--bp-space-12)',
        'bp-16': 'var(--bp-space-16)',
        'bp-20': 'var(--bp-space-20)',
        'bp-24': 'var(--bp-space-24)',
        'bp-32': 'var(--bp-space-32)',
        'bp-40': 'var(--bp-space-40)',
        'bp-page-gutter': 'var(--bp-page-gutter)',
        'bp-section': 'var(--bp-section-space)',
        'bp-grid-gutter': 'var(--bp-grid-gutter)',
      },
      maxWidth: {
        'bp-wide': 'var(--bp-container-wide)',
        'bp-standard': 'var(--bp-container-standard)',
        'bp-reading': 'var(--bp-container-reading)',
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
        'bp-sm': 'var(--bp-shadow-sm)',
        'bp-md': 'var(--bp-shadow-md)',
        'bp-lg': 'var(--bp-shadow-lg)',
        'bp-focus': 'var(--bp-focus-ring)',
      },
      transitionDuration: {
        'luxury': '250ms',
        'bp-fast': 'var(--bp-duration-fast)',
        'bp-base': 'var(--bp-duration-base)',
        'bp-slow': 'var(--bp-duration-slow)',
      },
      transitionTimingFunction: {
        'bp-standard': 'var(--bp-ease-standard)',
        'bp-emphasized': 'var(--bp-ease-emphasized)',
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
        'bp-control': 'var(--bp-radius-control)',
        'bp-card': 'var(--bp-radius-card)',
        'bp-media': 'var(--bp-radius-media)',
        'bp-pill': 'var(--bp-radius-pill)',
      },
      borderWidth: {
        bp: 'var(--bp-border-width)',
      },
      borderColor: {
        'bp-dark': 'var(--bp-border-dark)',
        'bp-light': 'var(--bp-border-light)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
