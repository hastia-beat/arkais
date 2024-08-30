'use client'

import React, { useState } from "react";
import { BookmarksSimple } from '@phosphor-icons/react';

const CollectionButton = ({ word_id, user_email }) => {
  console.log(word_id, user_email)

  const [isCreated, setIsCreated] = useState(false)

  const handleCollection = async (event) => {
    event.preventDefault()

    const data = { word_id, user_email };

    const response = await fetch("api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data)
    })
    const collection = await response.json()
    if (collection.isCreated) {
      setIsCreated(true);
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
