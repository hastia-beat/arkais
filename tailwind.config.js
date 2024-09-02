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
      },
    },
    colors: {
      color: {
        primary: '#eeeeee',   // Abu-abu terang
        accent: '#ffc639',    // Kuning oranye
        secondary: '#393e46', // Abu-abu gelap
        dark: '#241e1f',      // Hitam gelap
        success: '#4caf50',   // Hijau terang
        danger: '#e53935',    // Merah muda gelap
        red: '#960019',       // Merah gelap
        info: '#1e88e5',      // Biru terang
        warning: '#ffa726'    // Kuning
      }
    }
  },
  plugins: [],
};
