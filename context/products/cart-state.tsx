import React, { Children } from "react";
import { CartContext } from "./cart-context";

const CartState = ({ children }: any) => {
  const { Provider } = CartContext;

  const [guy, setState] = React.useState("ME AND YOU");

  return <Provider value={{ guy }}> {children}</Provider>;
};

export default CartState;
