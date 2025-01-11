import React from "react";

interface PaymentStatusProps {
  status: "success" | "pending" | "failed"; // Estado del pago
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({ status }) => {
  const getStatusMessage = () => {
    switch (status) {
      case "success":
        return {
          title: "Pago Exitoso",
          message: "Tu pago se ha procesado correctamente. ¡Gracias por tu compra!",
          color: "green-600",
        };
      case "pending":
        return {
          title: "Pago Pendiente",
          message: "Tu pago está siendo procesado. Recibirás una notificación pronto.",
          color: "yellow-600",
        };
      case "failed":
        return {
          title: "Pago Fallido",
          message: "Hubo un problema con tu pago. Intenta nuevamente o contacta soporte.",
          color: "red-600",
        };
      default:
        return {
          title: "Estado Desconocido",
          message: "No podemos determinar el estado de tu pago en este momento.",
          color: "gray-600",
        };
    }
  };

  const { title, message, color } = getStatusMessage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className={`text-${color} text-center`}>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};

export default PaymentStatus;
