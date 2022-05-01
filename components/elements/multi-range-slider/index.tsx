import * as styles from "./multi-range.module.scss";

import React, { useState } from "react";

const MultiRangeSlider = () => {
  const [state, setState] = useState<number>(60);

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setState(Number(value));
  };

  return (
    <>
      <input
        min="0"
        type="range"
        max="100"
        className={`${styles.thumb} ${styles.thumb__zindex3}`}
        // className={styles.wrapper}
        value={state}
        onChange={onSliderChange}
      />
      <input
        type="range"
        min="0"
        max="100"
        className={`${styles.thumb} ${styles.thumb__zindex4}`}
        value={state}
        onChange={onSliderChange}
      />
      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div className={styles.slider__range} />
      </div>
    </>
  );
};

export default MultiRangeSlider;
