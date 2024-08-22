'use client';

import { useState } from 'react';
import SearchInput from './components/main/SearchInput';
import Result from './components/main/Result';

export default function Home() {
  const [selectedWord, setSelectedWord] = useState('');

  return (
    <>
      <SearchInput onSelect={setSelectedWord} />
      <Result/>
    </>
  );
}
