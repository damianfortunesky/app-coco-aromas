import React from "react";
import CartItem from "./CartItem";

const CartPage: React.FC = () => {
  const cartItems = [
    { id: "1", name: "Producto 1", price: 100, quantity: 2 },
    { id: "2", name: "Producto 2", price: 50, quantity: 1 },
  ];

  const handleRemove = (id: string) => {
    console.log("Eliminar artículo con ID:", id);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemove={handleRemove} />
      ))}
      <div className="mt-4 text-right">
        <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
