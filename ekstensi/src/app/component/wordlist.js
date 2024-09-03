'use client'

import { useEffect, useState } from 'react';

function WordList() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function fetchWords() {
      try {
        const response = await fetch('/api/words');
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error('Error fetching words:', error);
      }
    }

    fetchWords();
  }, []);

  return (
    <div className="min-h-screen bg-color-dark flex flex-col items-center justify-center">
      <h1 className="text-color-accent text-3xl font-bold mb-8">Daftar Kata</h1>
      <ul className="w-full max-w-md bg-white rounded shadow-md p-4">
        {words.map((word, index) => (
          <li key={index} className="mb-4">
            <h2 className="text-lg font-semibold">{word.kata}</h2>
            <p className="text-sm text-gray-600">{word.makna}</p>
            <p className="text-xs text-gray-400">{word.jenisKata}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;
