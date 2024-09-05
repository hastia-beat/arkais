import Link from "next/link";

const About = () => {
    return (
      <div className="mt-12 text-color-primary flex flex-col items-center justify-center px-8 min-h-[70vh]">
        <div className="lg:w-3/5 mb-8 lg:mb-0">
          <h1 className="text-4xl font-extrabold text-color-primary mb-6">
            Tentang Website
          </h1>
          <p className="text-xl text-color-primary mb-4">
            Website ini dikembangkan sebagai bagian dari proyek penelitian yang
            memenangkan Lomba Penelitian Opsi yang diselenggarakan oleh Pusat
            Prestasi Nasional. Proyek ini didukung oleh dua peneliti dari MAN
            Insan Cendekia Bengkulu Tengah, yaitu Fauzan Abdillah Batra dan Ilham
            Syafiqurrahman GW.
          </p>
          <p className="text-xl text-color-primary mb-4">
            Tujuan utama dari website ini adalah untuk melestarikan bahasa arkais
            Indonesia yang saat ini sudah jarang digunakan oleh masyarakat.
            Website ini menyediakan alat penerjemah yang dapat mengonversi teks
            dari bahasa arkais Indonesia ke bahasa Indonesia modern. Dengan ini,
            diharapkan dapat memberikan manfaat bagi pelajar, sastrawan, dan
            peneliti dalam memahami dan menggali kembali bahasa-bahasa arkais
            yang menjadi bagian dari kekayaan budaya Indonesia.
          </p>
          <div className="flex gap-4">
            <Link
                href="/"
                className="bg-color-accent text-color-dark px-6 py-3 rounded-md font-bold transition-transform transform hover:opacity-80"
                >
                Kembali
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  