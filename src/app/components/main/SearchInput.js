'use client';

import { useState } from 'react';

const SearchInput = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // Logika untuk mengambil saran dihilangkan
    setSuggestions([]); // Kosongkan saran untuk saat ini
  };

  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <div className="text-color-primary text-7xl m-5">ARKAIS</div>
      <input
        placeholder="cari arkais..."
        className="rounded-lg w-full sm:w-[50%] p-2 focus:outline-none focus:border-transparent bg-color-primary"
        value={query}
        onChange={handleSearch}
      />
      {suggestions.length > 0 && (
        <ul className="mt-2 w-full sm:w-[50%] bg-white rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => onSelect(suggestion.word)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
