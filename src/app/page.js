'use client';

import { useState } from 'react';
import SearchInput from './components/main/SearchInput';
import Result from './components/main/Result';

export default function Home() {
  const [selectedWord, setSelectedWord] = useState('');

  return (
    <div className="min-h-[52vh]">
      <SearchInput onSelect={setSelectedWord} />
      <div className='flex flex-col items-center'>
        {selectedWord && <Result searchTerm={selectedWord} />}
      </div>
    </div>
  );
}
