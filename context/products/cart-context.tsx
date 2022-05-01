import { createContext } from "react";
type CartContextProps = {
  cart: ProductProps[];
  addToCart: (product: ProductProps) => void;
  deleteFromCart: (id: number) => void;
};

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {
    /* TODO document why this method 'addToCart' is empty */
  },
  deleteFromCart: () => {
    /* TODO document why this method 'addToCart' is empty */
  },
});
