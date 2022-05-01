import React, { useState } from "react";
import "./multi-range.module.scss";
import * as styles from "./multi-range.module.scss";
const MultiRangeSlider = () => {
  const [state, setState] = useState(60);

  const onSliderChange = (e) => {
    console.log(e);
    const { value } = e.target;
    setState(value);
  };

  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        // className="thumb thumb--zindex-3"

        className={styles.wrapper}
        value={state}
        onChange={onSliderChange}
      />
      <input
        type="range"
        min="0"
        max="1000"
        className="thumb thumb--zindex-4"
      />
      <div className="slider">
        <div className="slider__track" />
        <div className="slider__range" />
      </div>
    </>
  );
};

export default MultiRangeSlider;
