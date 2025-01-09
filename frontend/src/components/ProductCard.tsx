import React from "react";

interface ProductCardProps {
  image: string; // URL de la imagen del producto
  name: string;
  price: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  onAddToCart,
  onRemoveFromCart,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 max-w-xs mt-4">
      {/* Imagen del producto */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      {/* Nombre del producto */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>

      {/* Precio */}
      <p className="text-orange-500 text-lg font-bold mb-4">${price} AR</p>

      {/* Botones de acción */}
      <div className="flex justify-between">
        <button
          onClick={onAddToCart}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Agregar
        </button>
        <button
          onClick={onRemoveFromCart}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
        >
          Quitar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
