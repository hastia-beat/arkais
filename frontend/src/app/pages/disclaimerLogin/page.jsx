import Link from 'next/link';

const disclaimerLogin = () => {
  return (
    <div className="mt-12 text-color-primary flex flex-col items-center justify-center px-8 min-h-[70vh]">
      <div className="lg:w-3/5 mb-8 lg:mb-0">
        <h1 className="text-4xl font-extrabold text-color-primary mb-6">
          Pemberitahuan Penting
        </h1>
        <p className="text-xl text-color-primary mb-4">
          Untuk menggunakan fitur bookmark pada website ini, Anda harus login
          terlebih dahulu. Fitur bookmark memungkinkan Anda menyimpan dan
          mengakses terjemahan favorit Anda kapan saja. Tanpa login, fitur ini
          tidak dapat diakses. Silakan masuk ke akun Anda untuk mulai menggunakan
          fitur ini.
        </p>
        <p className="text-xl text-color-primary mb-8">
          Jika Anda belum memiliki akun, Anda dapat mendaftar terlebih dahulu. Kami
          menghargai privasi Anda dan menjamin bahwa informasi yang Anda berikan
          akan dijaga kerahasiaannya.
        </p>
        <div className='flex gap-4'>
            <Link
                href="/api/auth/signin"
                className="bg-color-accent text-color-dark px-6 py-3 rounded-md font-bold transition-transform transform hover:opacity-80"
                >
                Sign In
            </Link>
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

export default disclaimerLogin;
