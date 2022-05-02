import * as styles from "./card.module.scss";

import Image from "next/image";
import React from "react";

const Card = ({ item }: ProductProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={item.image} height={220} width={200} />
      </div>

      <div className={styles.description}>
        <h6>{item.name}</h6>
        <p>{item.description}</p>
      </div>

      <div className={styles["button-area"]}>
        <button style={{ width: "50%" }}>Wishlist</button>
        <button style={{ width: "50%" }}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
