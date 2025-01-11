import React from "react";
import CartItem from "../components/Cart/CartItem";
import useCart from "../hooks/useCart";

/* Página que muestra los productos agregados al carrito. */

const CartPage: React.FC = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="text-right mt-6">
            <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
              Ir al Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
