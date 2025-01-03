import React, { useEffect, useState } from "react";
//import apiClient from "../utils/apiClient";
import { Product } from "../types/Product";

const ProductList: React.FC = () => {
  /*useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);*/

  const productsData: Product[] = [
    { id: 1, name: 'Sahumerio', description: 'Aromas', price: 1000, image_url:'#'},
    { id: 2, name: 'Collar', description: 'Decoración', price: 20000, image_url:'#'},
    { id: 3, name: 'Perfume de ambiente', description: 'Aromas', price: 15000, image_url:'#'},
    { id: 4, name: 'Lámpara', description: 'Decoración', price: 5000, image_url:'#'},
    { id: 5, name: 'Dije Azul', description: 'Decoración', price: 5000, image_url:'#'},
    { id: 6, name: 'Alfrombra', description: 'Decoración', price: 5000, image_url:'#'},
    { id: 7, name: 'Cenicero', description: 'Decoración', price: 5000, image_url:'#'},
    { id: 8, name: 'Bio Greem', description: 'Aromas', price: 5000, image_url:'#'},
    { id: 9, name: 'Lámpara', description: 'Decoración', price: 5000, image_url:'#'},
    { id: 10, name: 'Lámpara', description: 'Decoración', price: 5000, image_url:'#'},

  ];

  const products = productsData;
  const [filter, setFilter] = useState<string>('All');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(product => product.description === filter);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center mb-4">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="All">Todos</option>
          <option value="Aromas">Aromas</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Decoración">Decoración</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="p-4 border border-gray-200 rounded shadow-sm hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-gray-900 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
