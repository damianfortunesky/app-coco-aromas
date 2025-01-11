/* Función para formatear precios en una moneda específica (ARS/USD). */

const formatPrice = (price: number, currency: string = "USD"): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price);
  };
  
  export default formatPrice;
  