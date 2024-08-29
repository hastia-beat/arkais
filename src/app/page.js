// pages/index.js atau pages/home.js

import React, { useState } from "react";
import SearchInput from './components/main/SearchInput';
import Result from './components/main/Result';
import { authUserSession } from "@/app/lib/auth-libs";

export default function Home({ user }) {
  const [selectedWord, setSelectedWord] = useState('');

  return (
    <div className="min-h-[52vh]">
      <SearchInput onSelect={setSelectedWord} />
      <div className='flex flex-col items-center'>
        <Result searchTerm={selectedWord} user={user} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = await authUserSession();

  return {
    props: {
      user: user || null,
    },
  };
}
