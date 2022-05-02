import "@/styles/main.scss";
import "./../i18next";

import CartState from "@/context/products/cart-state";
import React from "react";

function App({ Component, pageProps }: any) {
  return (
    <CartState>
      <Component {...pageProps} />
    </CartState>
  );
}
export default App;
