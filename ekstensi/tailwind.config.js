/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'cross-hatch': 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 4px)',
          'single-hatch': 'repeating-linear-gradient(135deg, rgba(214, 207, 199, 0.8) 0px, rgba(214, 207, 199, 0.8) 4px, transparent 2px, transparent 8px)',
      },
      fontWeight: {
        'extrabold': '1000',
      },
      textColor: {
        'clip-hatch': 'transparent' // Untuk text color transparan, agar background clip terlihat
      }
    },
    colors: {
      color: {
        primary: '#eeeeee',   // Abu-abu terang
        accent: '#ffc639',    // Kuning oranye
        secondary: '#393e46', // Abu-abu gelap
        dark: '#241e1f',      // Hitam gelap
        gray: '#D6CFC7'       // Abu-abu terang
      }
    }
  },
  variants: {},
  plugins: [],
};
