'use client';

import { useState, useEffect } from 'react';

const SearchInput = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() === '') {
        setSuggestions([]);
      } else {
        setSuggestions([{ word: "hello" }, { word: "world" }, { word: "123" }]);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSelect = (word) => {
    setQuery(word);  
    setSuggestions([]);
    onSelect(word);
    setIsTyping(false);
  };

  const highlightMatch = (word, query) => {
    const parts = word.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="bg-color-accent">{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsTyping(false);
    }, 100);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-28 relative w-full">
      <div className="text-color-primary text-7xl m-5">ARKAIS</div>
        <input
        placeholder="cari arkais..."
        className="rounded-lg w-full sm:w-[50%] p-2 focus:outline-none focus:border-transparent bg-color-primary text-color-dark"
        value={query}
        onChange={handleSearch}
        onFocus={() => setIsTyping(true)}
        onBlur={handleBlur}
      />
      {isTyping && suggestions.length > 0 && (
        <ul className="absolute top-full mt-2 z-50 w-full sm:w-[50%] bg-color-primary rounded-lg shadow-lg border border-color-secondary">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onMouseDown={() => handleSelect(suggestion.word)}
              className="p-3 cursor-pointer hover:bg-color-accent border-b last:border-none"
            >
              <span className="font-semibold text-color-dark">
                {highlightMatch(suggestion.word, query)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
