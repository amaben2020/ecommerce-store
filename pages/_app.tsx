import React from "react";
import "@/styles/main.scss";
import CartState from "@/context/products/cart-state";

export default function App({ Component, pageProps }: any) {
  return (
    <CartState>
      <Component {...pageProps} />
    </CartState>
  );
}
