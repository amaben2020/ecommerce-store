import React, { useContext } from "react";

import MultiRangeSlider from "@/components/elements/multi-range-slider";
import * as styles from "./main-menu.module.scss";
import Product from "./types";
import { CartContext } from "@/context/products/cart-context";

const MainMenu = (products: Product) => {
  const { products: data } = products;

  const { guy } = useContext(CartContext);

  return (
    <div className={styles.wrapper}>
      {/* {data.map((product) => (
        <div>name - {product.name}</div>
      ))} */}
      <MultiRangeSlider />
    </div>
  );
};

export default MainMenu;
