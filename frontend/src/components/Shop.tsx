import React from "react";

const Cart: React.FC<{
  cart: any[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}> = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-orange-500">${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="bg-gray-300 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-300 px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
