'use client';

import React, { useState } from 'react';
import SearchInput from './main/SearchInput';
import Result from './main/Result';

export default function ClientComponent({ user }) {
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
