import * as styles from "./main-menu.module.scss";

import Card from "@/components/elements/card/card";
import MultiRangeSlider from "@/components/elements/multi-range-slider";
import Product from "./types";
import useLanguageHook from "@/hooks/useLanguageHook";
import useStateFromContext from "@/hooks/useStateFromContext";

const MainMenu = (products: Product) => {
  const { languages, currentLanguageCode, t, i18n } = useLanguageHook();
  const { products: data } = products;

  const {
    values: { addToCart, deleteFromCart },
  } = useStateFromContext();

  return (
    <div className={styles.wrapper}>
      <h1>{t("welcome_message")}</h1>

      <p> {t("days_since_release", { ok: "Amaben" })}</p>
      {data.slice(0, 13).map((product) => (
        <>
          {/* <div key={product.id}>{t("product_name", { product })} </div>
          <button onClick={() => addToCart(product)}>Add</button>
          <button onClick={() => deleteFromCart(Number(product.id))}>
            Delete
          </button> */}
          <Card item={product} />
        </>
      ))}

      <ul>
        {languages.map(({ code, name }) => (
          <li key={code}>
            <button
              disabled={code === currentLanguageCode}
              onClick={() => i18n.changeLanguage(code)}
            >
              {name} - {code}
            </button>
          </li>
        ))}
      </ul>
      <MultiRangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.log(`min = ${min}, max = ${max}`)
        }
      />
    </div>
  );
};

export default MainMenu;
