import React from "react";

/* Página para procesar el pago. */

const CheckoutPage: React.FC = () => {
  const handlePayment = () => {
    // Aquí iría la lógica para procesar el pago con Mercado Pago
    console.log("Procesando pago...");
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Checkout</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p>Resumen del pedido:</p>
        {/* Aquí podrías renderizar una lista de productos */}
        <button
          onClick={handlePayment}
          className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 w-full"
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
