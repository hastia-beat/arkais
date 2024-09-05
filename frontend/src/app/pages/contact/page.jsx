import Link from "next/link";

const Contact = () => {
    return (
      <div className="mt-12 text-color-primary flex flex-col items-center px-8 min-h-[70vh]">
        <div className="lg:w-3/5 mb-8 lg:mb-0">
          <h1 className="text-4xl font-extrabold text-color-primary mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-color-primary mb-4">
            Jika Anda memiliki pertanyaan, saran, atau memerlukan informasi lebih
            lanjut tentang website ini, jangan ragu untuk menghubungi kami melalui
            kontak berikut:
          </p>
          <div className="text-xl text-color-primary mb-4">
            <p className="mb-2 font-semibold">Fauzan Abdillah Batra</p>
            <p>Nomor Telepon: 0857-6602-4699</p>
            <p>Email: <a href="mailto:neaptunss@gmail.com" className="text-color-accent underline hover:opacity-80">neaptunss@gmail.com</a></p>
          </div>
          <div className="text-xl text-color-primary mb-8">
            <p className="mb-2 font-semibold">Ilham Syafiqurrahman GW</p>
            <p>Nomor Telepon: 0821-7830-0368</p>
            <p>Email: <a href="mailto:alkimmodern@gmail.com" className="text-color-accent underline hover:opacity-80">alkimmodern@gmail.com</a></p>
          </div>
          <p className="text-xl text-color-primary">
            Kami akan berusaha merespons pertanyaan Anda secepat mungkin. Terima
            kasih atas dukungan dan ketertarikan Anda terhadap proyek ini.
          </p>
        </div>
        <div className="flex gap-8">
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
  
  export default Contact;
  