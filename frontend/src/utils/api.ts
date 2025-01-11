/* Funciones para centralizar las peticiones HTTP al backend. */

const API_BASE_URL = "https://api.cocoaromas.com";

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) throw new Error("Error fetching products");
  return response.json();
};

export const fetchOrder = async (orderId: string) => {
  const response = await fetch(`${API_BASE_URL}/orders/${orderId}`);
  if (!response.ok) throw new Error("Error fetching order");
  return response.json();
};
