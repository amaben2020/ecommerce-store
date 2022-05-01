import * as styles from "./main-menu.module.scss";

import MultiRangeSlider from "@/components/elements/multi-range-slider";
import Product from "./types";
import useStateFromContext from "@/hooks/useStateFromContext";

const MainMenu = (products: Product) => {
  const { products: data } = products;

  const {
    values: { addToCart },
  } = useStateFromContext();

  return (
    <div className={styles.wrapper}>
      {data.map((product) => (
        <>
          <div>name - {product.name} </div>
          <button onClick={() => addToCart(product)}>Add</button>
        </>
      ))}

      <MultiRangeSlider />
    </div>
  );
};

export default MainMenu;
