import React, { useState } from "react";
import { BookmarksSimple } from '@phosphor-icons/react';
import CollectionUsecase from "../usecases/collection";

const CollectionButton = ({ wordId, email }) => {
  const [isCreated, setIsCreated] = useState(false);
  const [error, setError] = useState(null);

  const handleCollection = async (event) => {
    try {
      event.preventDefault();
      setError(null); 

      const data = { wordId, email };
      const collectionUsecase = new CollectionUsecase();
      const result = await collectionUsecase.createCollection(data);

      if (result.error) {
        setError(result.error); 
        if (result.error === "tidak dapat menambahkan kata ke koleksi") {
          setIsCreated(false); // Hide the "Dimasukkan ke koleksi" message
        }
      } else {
        setIsCreated(true);
      }
    } catch (error) {
      console.error(error);
      setError("Kata sepertinya sudah Ada di dalam koleksi");
      setIsCreated(false); // Hide the "Dimasukkan ke koleksi" message
    }
  };

  return (
    <div className="flex justify-end">
      {isCreated && !error && <p className="mr-2">Dimasukkan ke koleksi</p>}
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <button onClick={handleCollection} className="ml-auto px-3">
        <BookmarksSimple size={28} />
      </button>
    </div>
  );
};

export default CollectionButton;
