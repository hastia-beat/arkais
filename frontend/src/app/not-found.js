import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-color-dark text-color-primary">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-xl mb-6">Halaman yang kamu cari tidak ditemukan.</p>
      <Link
        href="/"
        className="bg-color-accent text-color-dark px-6 py-3 rounded-md font-bold transition-transform transform hover:opacity-80"
      >
        Kembali ke beranda?
      </Link>
    </div>
  );
}

export default NotFound;
