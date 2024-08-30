// src/app/components/main/Result.js
'use client';

import React from "react";
import CollectionButton from "../collectionButton";

const Result = ({ searchTerm, user }) => {
  console.log(searchTerm.id);
  console.log(user);


  return (
    <div className="flex flex-col items-center mt-8 w-full sm:w-[50%] p-4 bg-color-primary rounded-lg shadow-lg border border-color-secondary">
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-color-dark">Hasil Terjemahan</div>
      </div>
      <div className="w-full p-4 bg-color-secondary text-color-primary rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold">
              {searchTerm?.makna || "arti kata"}
            </div>
            <div className="text-sm text-color-accent mt-2">
              {searchTerm?.jenisKata || "jenis kata"}
            </div>
          </div>
          {user && <CollectionButton word_id={searchTerm?.id} user_email={user?.email}/>}
        </div>
      </div>  
    </div>
  );
};

export default Result;
