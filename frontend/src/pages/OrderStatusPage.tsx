import React from "react";
import { useParams } from "react-router-dom";

/* Página para mostrar el estado del pedido. */

const OrderStatusPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Aquí deberías llamar a una API para obtener el estado del pedido.
  const orderStatus = "Pendiente"; // Simulado por ahora.

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Estado de tu Pedido</h1>
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-lg font-semibold">
          Pedido ID: <span className="text-blue-600">{id}</span>
        </p>
        <p className="mt-4">Estado: <span className="font-bold">{orderStatus}</span></p>
      </div>
    </div>
  );
};

export default OrderStatusPage;
