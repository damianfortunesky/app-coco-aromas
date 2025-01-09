import React from "react";
import BannerWithBackground from "../components/UI/BannerWithBackground";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

const HomePage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Buscando productos:", query);
  };

  return (
    <div>
      <BannerWithBackground
        backgroundImage="/img/viatik-background-phone.jpg"
        text="BONO DE $1500 PARA NUEVOS CLIENTES"
      />
      <SearchBar
        placeholder="Ingresa nombre del producto..."
        onSearch={handleSearch}
      />
      <ProductList />
    </div>
  );
};

export default HomePage;
