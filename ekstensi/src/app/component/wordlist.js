'use client'

import { useEffect, useState } from 'react';

// fetch data from API
async function fetchWords(limit) {
  const response = await fetch(`${process.env["BACKEND"] || "http://localhost:3333"}/words/random?limit=${limit}`);
  return await response.json();
}

function WordList() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function fetchWordsEffect() {
      try {
        const data = await fetchWords(5);
        setWords(data);
      } catch (error) {
        console.error('Error fetching words:', error);
      }
    }
    fetchWordsEffect();
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
