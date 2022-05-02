import * as styles from "./main-menu.module.scss";

import Cookies from "js-cookie";
import MultiRangeSlider from "@/components/elements/multi-range-slider";
import Product from "./types";
import { useEffect } from "react";
import useStateFromContext from "@/hooks/useStateFromContext";
//@ts-ignore
import { useTranslation } from "react-i18next";

const MainMenu = (products: Product) => {
  const { products: data } = products;

  const {
    values: { addToCart, deleteFromCart },
  } = useStateFromContext();

  const { t, i18n } = useTranslation();

  const releasedDate = new Date("2022-05-01");
  const diff = Math.abs(releasedDate.getTime() - Date.now());

  const currentLanguageCode = Cookies.get("i18next") || "en";

  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "FR",
    },
    {
      code: "en",
      name: "English",
      country_code: "GB",
    },
    {
      code: "ar",
      name: " التطبيقات",
      country_code: "SA",
      dir: "rtl",
    },
  ];
  const currentLanguage = languages.find(
    (lang) => lang.code === currentLanguageCode
  );

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
    document.title = `${t("app_title")} `;
  }, [currentLanguage, t]);

  console.log(currentLanguage);
  return (
    <div className={styles.wrapper}>
      <h1>{t("welcome_message")}</h1>

      <p> {t("days_since_release", { diff })}</p>
      {/* {data.slice(0, 6).map((product) => (
        <>
          <div key={product.id}>name - {product.name} </div>
          <button onClick={() => addToCart(product)}>Add</button>
          <button onClick={() => deleteFromCart(Number(product.id))}>
            Delete
          </button>
        </>
      ))} */}

      <ul>
        {languages.map(({ code, name }) => (
          <li key={code}>
            <button
              disabled={code === currentLanguageCode}
              onClick={() => i18n.changeLanguage(code)}
            >
              {name} {code}
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
