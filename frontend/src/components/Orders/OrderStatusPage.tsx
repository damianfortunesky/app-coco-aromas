const statusStyles: Record<string, string> = {
    Entregado: "text-green-600",
    Enviado: "text-blue-600",
    Pendiente: "text-yellow-600",
  };
  
  const OrderStatusPage: React.FC = () => {
    const orderStatus = "Enviado"; // Simula el estado del pedido
  
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Estado de tu Pedido</h1>
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <p className="text-lg mb-2">
            ID del Pedido: <span className="font-bold">12345</span>
          </p>
          <p className="text-lg">
            Estado:{" "}
            <span className={`font-bold ${statusStyles[orderStatus] || "text-gray-600"}`}>
              {orderStatus}
            </span>
          </p>
        </div>
      </div>
    );
  };
  
  export default OrderStatusPage;
  
