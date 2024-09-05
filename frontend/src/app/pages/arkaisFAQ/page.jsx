'use client';

import Link from 'next/link';

const ArkaisFAQ = () => {
  return (
    <div className="mt-12 min-h-screen bg-color-dark text-color-primary flex flex-col justify-center items-center px-8">
      <h1 className="text-4xl font-extrabold mb-10">Apa Itu Arkais?</h1>
      
      <div className="lg:w-3/5">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-color-accent mr-2">1.</span> Apa itu bahasa arkais?
          </h2>
          <p className="text-xl leading-relaxed">
            Bahasa arkais adalah kosakata bahasa Indonesia yang sudah jarang digunakan dalam kehidupan sehari-hari dan dianggap ketinggalan zaman. Meskipun tidak umum, kosakata ini sering ditemukan dalam karya sastra seperti hikayat, puisi, pantun, dan cerita rakyat. Kosakata arkais masih dipakai oleh penggemar sastra dan juga diajarkan di sekolah untuk memahami teks-teks klasik.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-color-accent mr-2">2.</span> Mengapa bahasa arkais penting untuk diterjemahkan?
          </h2>
          <p className="text-xl leading-relaxed">
            Bahasa arkais penting untuk diterjemahkan karena kosakata ini memiliki nilai budaya dan historis yang besar. Menerjemahkan kosakata arkais membantu melestarikan warisan budaya dan memungkinkan pemahaman yang lebih baik terhadap teks-teks lama. Selain itu, terjemahan ini mendukung kegiatan sastra dan akademis yang melibatkan kosakata arkais.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-color-accent mr-2">3.</span> Apa tantangan dalam menerjemahkan bahasa arkais?
          </h2>
          <p className="text-xl leading-relaxed">
            Tantangan utama dalam menerjemahkan bahasa arkais adalah menemukan padanan kata yang tepat sesuai dengan klasifikasi kosakata tersebut. Kosakata arkais sering memiliki makna dan konotasi yang berbeda dari kosakata modern, serta penggunaan yang tidak umum. Memahami konteks budaya dan sejarah sangat penting untuk menghasilkan terjemahan yang akurat dan relevan.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Link
          href="/"
          className="bg-color-accent text-color-dark px-6 py-3 rounded-md font-bold transition-transform transform hover:opacity-80"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default ArkaisFAQ;
