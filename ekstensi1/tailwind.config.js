/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app.js"],
  theme: {
    extend: {
      backgroundImage: {
        'single-hatch': 'repeating-linear-gradient(135deg, rgba(238, 238, 238, 0.8) 0px, rgba(238, 238, 238, 0.8) 4px, transparent 2px, transparent 8px)',
      },
      fontWeight: {
        'extrabold': '1000',
      },
      textColor: {
        'clip-hatch': 'transparent',
      },
    },
    colors: {
      color: {
        primary: '#f0f0f0',
        accent: '#f4c542',
        secondary: '#2f2f3e',
        dark: '#1a1a2e',
        success: '#4caf50',
        danger: '#e53935',
        red: '#960019',
        info: '#1e88e5',
        warning: '#ffa726',
      }
    }
  },
  variants: {
    extend: {
      backgroundClip: ['text'],
      filter: ['hover'],
    },
  },
  plugins: [],
};
