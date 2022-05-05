import React, { Children, useCallback, useReducer } from "react";

import { CartContext } from "./cart-context";
import cartReducer from "./reducer";
import { toast } from "react-toastify";

const CartState = ({ children }: Children) => {
  const { Provider } = CartContext;

  const cartState = {
    cart: [],
  };

  const [{ cart }, dispatch] = useReducer(cartReducer, cartState);

  type Reducer<State, Action> = (state: State, action: Action) => State;

  const addToCart = useCallback((product: ProductProps) => {
    if (!product) {
      toast.error("Product not found");
      throw new Error("Product  not found");
    }
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toast(`${product.name} was successfully Added to cart`);
  }, []);

  const deleteFromCart = useCallback((id: number) => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: id,
    });
    toast("Item was successfully deleted from cart");
  }, []);

  return (
    <Provider value={{ cart, addToCart, deleteFromCart }}> {children}</Provider>
  );
};

export default CartState;
