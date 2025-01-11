import React from "react";

interface SearchBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  showInStockOnly: boolean;
  onShowInStockChange: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  onSearchChange,
  showInStockOnly,
  onShowInStockChange,
}) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar sahumerios..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2 focus:ring-2 focus:ring-pink-500"
      />
      <label className="flex items-center text-sm text-gray-600">
        <input
          type="checkbox"
          checked={showInStockOnly}
          onChange={(e) => onShowInStockChange(e.target.checked)}
          className="mr-2"
        />
        Mostrar solo productos en stock
      </label>
    </div>
  );
};

export default SearchBar;
