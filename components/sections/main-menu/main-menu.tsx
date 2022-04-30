import React from "react";
import * as styles from "./main-menu.module.scss";
import ProductProps from "./types";

const MainMenu = (products: ProductProps[]) => {
  return <div className={styles.wrapper}>MainMenu</div>;
};

export default MainMenu;
