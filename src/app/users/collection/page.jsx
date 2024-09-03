"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash } from "@phosphor-icons/react"; // Mengimpor ikon Phosphor
import CollectionUsecase from "../../usecases/collection";

const CollectionPage = () => {
  const [user, setUser] = useState(null);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/collection");
        const data = await response.json();

        if (response.ok) {
          setUser(data.user);
          setCollections(data.collections);
          console.log("Collections fetched:", data.collections);
        } else {
          console.error("Gagal mengambil data koleksi:", data.message);
        }
      } catch (error) {
        console.error("Error mengambil data koleksi:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const collectionUsecase = new CollectionUsecase();
      const response = await collectionUsecase.deleteCollection(
        user?.email,
        id
      );
      //   refetch data
      if (response.ok) {
        const collections = await collectionUsecase.fetchCollection(
          user?.email
        );
        setCollections(collections);
        console.log("Koleksi berhasil dihapus:", data.collections);
      } else {
        console.error("Gagal menghapus koleksi:", response.message);
      }
    } catch (error) {
      console.error("Error menghapus koleksi:", error.message);
    } finally {
      setConfirmDelete(null);
    }
  };

  const handleConfirmDelete = (id) => {
    setConfirmDelete(id);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-12 text-color-primary flex flex-col lg:flex-row items-start lg:items-center justify-between px-8 min-h-[70vh]">
      <div className="lg:w-3/5 mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold py-2 text-color-primary">
          Selamat datang, {user?.name}
        </h1>
        <p className="text-xl text-color-accent">
          Bahasa arkais yang kamu koleksi
        </p>
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

      <div className="w-full max-w-4xl mt-12 lg:mt-16 overflow-y-scroll max-h-[50vh] scrollbar-hidden">
        <h3 className="text-2xl font-semibold text-color-primary">
          Koleksi kamu
        </h3>

        {collections.length > 2 && (
          <h5 className="text-xl my-2">
            Gulir ke bawah untuk melihat selengkapnya
          </h5>
        )}

        <div className="flex flex-col space-y-6">
          {collections.length > 0 ? (
            collections.map((item, index) => {
              if (!item.word) {
                return (
                  <p key={index} className="text-color-danger">
                    Data tidak lengkap untuk item ini.
                  </p>
                );
              }

              return (
                <div
                  key={index}
                  className="bg-color-secondary p-6 rounded-lg shadow-lg flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-lg font-bold text-color-accent">
                      {item.word.kata}
                    </h4>
                    <p className="text-color-primary my-2">{item.word.makna}</p>
                    <p className="text-sm text-color-accent">
                      {item.word.jenisKata}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    {confirmDelete === item.id && (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-color-accent text-color-dark px-4 py-1 rounded"
                        >
                          Ya
                        </button>
                        <button
                          onClick={handleCancelDelete}
                          className="text-color-primary"
                        >
                          Tidak
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => handleConfirmDelete(item.id)}
                      className="text-color-primary"
                    >
                      <Trash size={24} />
                    </button>
                  </div>
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
};

export default CollectionPage;
