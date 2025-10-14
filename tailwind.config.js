/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // Apple-style colors
        'apple-blue': '#007AFF',
        'apple-gray': '#8E8E93',
        'apple-gray-light': '#F2F2F7',
        'apple-gray-dark': '#1C1C1E',
        'apple-green': '#34C759',
        'apple-orange': '#FF9500',
        'apple-red': '#FF3B30',
        'apple-purple': '#AF52DE',
        'apple-pink': '#FF2D92',
        'apple-yellow': '#FFCC00',
        'apple-indigo': '#5856D6',
        'apple-mint': '#00C7BE',
        'apple-teal': '#30B0C7',
        'apple-cyan': '#32D74B',
        'apple-brown': '#AC8E68',
      },
      fontFamily: {
        'sf-pro': [
          'SF Pro Display',
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        'sf-pro-text': [
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        'sf-pro-display': [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        'sf-mono': [
          'SF Mono',
          'Monaco',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      // Apple-style spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Apple-style animations
      animation: {
        'apple-bounce': 'apple-bounce 0.6s ease-out',
        'apple-fade-in': 'apple-fade-in 0.8s ease-out',
        'apple-slide-up': 'apple-slide-up 0.8s ease-out',
        'apple-scale': 'apple-scale 0.3s ease-out',
        'apple-shimmer': 'apple-shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        'apple-bounce': {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translate3d(0,0,0)',
          },
          '40%, 43%': {
            transform: 'translate3d(0, -30px, 0)',
          },
          '70%': {
            transform: 'translate3d(0, -15px, 0)',
          },
          '90%': {
            transform: 'translate3d(0, -4px, 0)',
          },
        },
        'apple-fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'apple-slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'apple-scale': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'apple-shimmer': {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
      },
      // Apple-style blur effects
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
    },
  },
  plugins: [],
};