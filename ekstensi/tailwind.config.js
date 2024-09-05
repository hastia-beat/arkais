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
  variants: {
    extend: {
      backgroundClip: ['text'], // Menambahkan varian background-clip untuk teks
      filter: ['hover'], // Menambahkan varian filter pada hover
    },
  },
  plugins: [],
};
