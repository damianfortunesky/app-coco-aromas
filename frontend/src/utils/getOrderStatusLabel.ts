/* Función para convertir el estado del pedido en un texto legible. */

const getOrderStatusLabel = (status: string): string => {
    const statuses: { [key: string]: string } = {
      pending: "Pendiente",
      shipped: "Enviado",
      delivered: "Entregado",
      cancelled: "Cancelado",
    };
    return statuses[status] || "Desconocido";
  };
  
  export default getOrderStatusLabel;
  