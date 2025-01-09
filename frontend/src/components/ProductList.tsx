import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  // Productos simulados
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150", // Reemplaza con la URL real
      name: "Sahumerio Floral",
      price: 500,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Perfume de Ambiente",
      price: 1200,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Sahumerio Lavanda",
      price: 450,
    },
    // Agrega más productos aquí
  ];

  const handleAddToCart = (productId: number) => {
    console.log(`Producto agregado al carrito: ${productId}`);
  };

  const handleRemoveFromCart = (productId: number) => {
    console.log(`Producto quitado del carrito: ${productId}`);
  };

  // Estado para controlar cuántos productos se muestran
  const [visibleCount, setVisibleCount] = useState(8); // Mostramos 8 productos inicialmente

  // Función para cargar más productos
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Mostrar 8 productos más
  };

  // Productos visibles
  const visibleProducts = products.slice(0, visibleCount);

  return (

    <div className="flex flex-col items-center">
  {/* Grid de productos */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 max-w-screen-lg">
    {visibleProducts.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        onAddToCart={() => handleAddToCart(product.id)}
        onRemoveFromCart={() => handleRemoveFromCart(product.id)}
      />
    ))}
  </div>

  {/* Botón "Mostrar más" */}
  {visibleCount < products.length && (
    <div className="mt-6">
      <button
        onClick={handleLoadMore}
        className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Mostrar más
      </button>
    </div>
  )}
</div>
  );
};

export default ProductList;
