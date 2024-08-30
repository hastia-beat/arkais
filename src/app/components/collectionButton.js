'use client'

import React, { useState } from "react";
import { BookmarksSimple } from '@phosphor-icons/react';
import CollectionUsecase from "../usecases/collection";

const CollectionButton = ({ wordId, email }) => {
  const [isCreated, setIsCreated] = useState(false)

  const handleCollection = async (event) => {
    try {
      event.preventDefault()

      const data = { wordId, email };
      console.log(data);

      const collectionUsecase = new CollectionUsecase();
      const collection = await collectionUsecase.createCollection(data);
      if (collection?.id) {
        setIsCreated(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isCreated && <p>Added to collection</p>}

      <button onClick={handleCollection}>
        <BookmarksSimple size={28} />
      </button>
    </>
  );
};

export default CollectionButton;
