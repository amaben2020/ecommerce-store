import React from "react";
import * as styles from "./main-menu.module.scss";
import Product from "./types";

const MainMenu = (products: Product) => {
  return (
    <div className={styles.wrapper}>
      {products.products.map((product) => (
        <div>name - {product.name}</div>
      ))}
    </div>
  );
};

export default MainMenu;
