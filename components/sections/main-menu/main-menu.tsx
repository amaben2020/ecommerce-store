import * as styles from "./main-menu.module.scss";

import MultiRangeSlider from "@/components/elements/multi-range-slider";
import Product from "./types";
import useStateFromContext from "@/hooks/useStateFromContext";

const MainMenu = (products: Product) => {
  const { products: data } = products;

  const {
    values: { addToCart, deleteFromCart },
  } = useStateFromContext();

  return (
    <div className={styles.wrapper}>
      {data.slice(0, 6).map((product) => (
        <>
          <div>name - {product.name} </div>
          <button onClick={() => addToCart(product)}>Add</button>
          <button onClick={() => deleteFromCart(Number(product.id))}>
            Delete
          </button>
        </>
      ))}

      <MultiRangeSlider />
    </div>
  );
};

export default MainMenu;
