import React, { Children, useReducer } from "react";

import { CartContext } from "./cart-context";
import cartReducer from "./reducer";
import { toast } from "react-toastify";

const CartState = ({ children }: Children) => {
  console.log("children", children);
  const { Provider } = CartContext;

  const cartState = {
    cart: [],
  };

  const [{ cart }, dispatch] = useReducer(cartReducer, cartState);

  type Reducer<State, Action> = (state: State, action: Action) => State;

  const addToCart = (product: ProductProps) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toast(`${product.name} was successfully Added to cart`);
  };

  return <Provider value={{ cart, addToCart }}> {children}</Provider>;
};

export default CartState;
