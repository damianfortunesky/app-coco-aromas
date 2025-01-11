import React from "react";

const CheckoutPage: React.FC = () => {
  const handlePayment = () => {
    console.log("Procesando el pago...");
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="bg-white p-6 shadow-md rounded-md">
        <p>Revisar los detalles del pedido antes de confirmar el pago.</p>
        <button
          onClick={handlePayment}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Confirmar Pago
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
