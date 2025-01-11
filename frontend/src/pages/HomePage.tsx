import React, { useState } from "react";
import ProductTable from "../components/Home/ProductTable";
import SearchBar from "../components/Home/SearchBar";

const HomePage: React.FC = () => {
  // Estados para búsqueda y filtro de stock
  const [searchValue, setSearchValue] = useState<string>("");
  const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);

  // Lista de productos de ejemplo (sahumerios)
  const products = [
    { category: "Floral", price: "$5", stocked: true, name: "Rosa" },
    { category: "Floral", price: "$5", stocked: false, name: "Lavanda" },
    { category: "Amaderado", price: "$7", stocked: true, name: "Sándalo" },
    { category: "Amaderado", price: "$8", stocked: true, name: "Palo Santo" },
    { category: "Frutal", price: "$6", stocked: false, name: "Cítricos" },
    { category: "Frutal", price: "$5", stocked: true, name: "Manzana Verde" },
  ];

  // Filtrar productos según búsqueda y stock
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue.toLowerCase());
    const matchesStock = showInStockOnly ? product.stocked : true;
    return matchesSearch && matchesStock;
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Catálogo de Sahumerios</h1>
      {/* Barra de búsqueda */}
      <SearchBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        showInStockOnly={showInStockOnly}
        onShowInStockChange={setShowInStockOnly}
      />
      {/* Tabla de productos */}
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default HomePage;

