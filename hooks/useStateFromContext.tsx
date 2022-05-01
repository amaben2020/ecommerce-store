import { CartContext } from "@/context/products/cart-context";
import { useContext } from "react";

const useStateFromContext = () => {
  const values = useContext(CartContext);
  return { values };
};

export default useStateFromContext;
