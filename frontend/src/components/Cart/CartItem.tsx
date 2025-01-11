import React from "react";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Cantidad: {item.quantity}</span>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:underline"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;