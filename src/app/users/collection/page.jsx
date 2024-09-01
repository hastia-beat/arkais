import { authUserSession } from "@/app/lib/auth-libs";
import CollectionUsecase from "@/app/usecases/collection";
import Image from "next/image";
import Link from "next/link";

const CollectionPage = async () => {
    const user = await authUserSession();
    const collectionUsecase = new CollectionUsecase();
    let collections = [];

    try {
        collections = await collectionUsecase.fetchCollection(user?.email);
        console.log('Fetched collections:', collections); // Logging semua koleksi yang diambil
    } catch (error) {
        console.error(error.message);
    }

    return (
        <div className="mt-12 text-color-primary flex flex-col lg:flex-row items-start lg:items-center justify-between px-8 min-h-[70vh]">
            <div className="lg:w-3/5 mb-8 lg:mb-0">
                <h1 className="text-4xl font-bold py-2 text-color-primary">Selamat datang, {user?.name}</h1>
                <p className="text-xl text-color-secondary">Bahasa arkais yang kamu koleksi</p>
                <div className="py-8">
                    <Link
                        href="/"
                        className="bg-color-accent text-color-dark px-6 py-3 rounded-md font-bold transition-transform transform hover:scale-105"
                    >
                        Kembali
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-start">
                <Image
                    src={user?.image}
                    alt={user?.name}
                    width={100}
                    height={100}
                    className="rounded-full shadow-xl border-4 border-color-accent"
                    priority={true}
                />
            </div>

            <div className="w-full max-w-4xl mt-12 lg:mt-16">
                <h3 className="text-2xl font-semibold mb-6 text-color-primary">Koleksi kamu</h3>
                <div className="flex flex-col space-y-6">
                    {collections.length > 0 ? (
                        collections.map((item, index) => {
                            console.log(`Collection item ${index}:`, item);

                            if (!item.word) {
                                console.warn(`Data tidak lengkap untuk item ${index}:`, item);
                                return (
                                    <p key={index} className="text-color-danger">
                                        Data tidak lengkap untuk item ini.
                                    </p>
                                );
                            }

                            return (
                                <div key={index} className="bg-color-secondary p-6 rounded-lg shadow-lg">
                                    <h4 className="text-lg font-bold text-color-accent">{item.word.kata}</h4>
                                    <p className="text-color-primary my-2">{item.word.makna}</p>
                                    <p className="text-sm text-color-accent">{item.word.jenisKata}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-color-danger">Tidak ada koleksi ditemukan.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CollectionPage;
