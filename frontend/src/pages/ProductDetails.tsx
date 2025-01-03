import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../utils/apiClient";
import { Product } from "../types/Product";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("No se pudo cargar el producto. Por favor, inténtalo nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center p-8">Cargando producto...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="text-center p-8">Producto no encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-4">
            ${product.price.toFixed(2)}
          </p>
          <button
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => alert("Producto agregado al carrito")}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
