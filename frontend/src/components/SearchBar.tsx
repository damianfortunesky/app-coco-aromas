import React, { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4 mt-6 mb-6">
      <h2 className="text-xl font-bold text-orange-600 text-center mb-4">
        Encuentra tus sahumerios y perfumes favoritos
      </h2>
      <div className="flex w-full">
        <input
          type="text"
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition duration-300"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
