import * as styles from "./card.module.scss";

import Image from "next/image";
import React from "react";

const Card = ({ item }: ProductProps) => {
  return (
    <div className={styles.wrapper}>
      Card
      <div className={styles["button-area"]}>
        <Image src={item.image} height={275} width={250} />
        <button>Wishlist</button>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
