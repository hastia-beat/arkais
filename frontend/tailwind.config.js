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
        primary: '#f0f0f0',   // Abu-abu terang untuk teks sekunder
        accent: '#f4c542',    // Kuning emas lembut
        secondary: '#2f2f3e', // Abu-abu kebiruan gelap (untuk elemen sekunder seperti kartu)
        dark: '#1a1a2e',      // Navy gelap untuk latar utama
        success: '#4caf50',   // Hijau terang
        danger: '#e53935',    // Merah gelap
        red: '#960019',       // Merah sangat gelap
        info: '#1e88e5',      // Biru terang
        warning: '#ffa726'    // Kuning untuk peringatan
      }
    }
  },
  plugins: [],
};
