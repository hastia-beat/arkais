'use client'

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";

const SearchInput = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (event) => {
        if (event.key === 'Enter' && query.trim() !== "") {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank');
        }
    };

    return (
        <div className="flex items-center justify-center w-full mt-10">
            <div className="relative w-full max-w-2xl">
                <MagnifyingGlass 
                    size={24} 
                    className="absolute top-2/4 left-3 transform -translate-y-1/2 text-gray-500"
                />
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    placeholder="Telusuri di Google atau ketik URL"
                    className="w-full py-2 pl-10 pr-4 text-base border rounded-full shadow-md focus:outline-none focus:border-blue-400 focus:shadow-lg transition duration-200 ease-in-out font-sans" // Menggunakan font sans-serif
                    style={{ fontFamily: 'Arial, sans-serif' }}
                />
            </div>
        </div>
    );
};

export default SearchInput;
