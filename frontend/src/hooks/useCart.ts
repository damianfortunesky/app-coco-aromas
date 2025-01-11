import { useContext } from "react";
import { CartContext } from "../context/CartContext.tsx";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
