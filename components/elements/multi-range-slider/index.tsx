import * as styles from "./multi-range.module.scss";

import React, { useCallback, useEffect, useRef, useState } from "react";

import MultiRangeSliderProps from "./types";
import classNames from "classnames";

const MultiRangeSlider = ({ min, max, onChange }: MultiRangeSliderProps) => {
  const [range, setRange] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const ref = React.useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  const getRange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e?.target;
    setRange(Number(value));
  };

  React.useEffect(() => {
    const rangeLinePadding = 16;
    const calcStep =
      (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
    setStep(calcStep);
  }, []);

  return (
    <>
      <div className={styles.slider}>
        <input
          type="range"
          id="range"
          min="0"
          max="100"
          value={range}
          onChange={getRange}
          ref={ref}
          // className={styles.input}
          className={styles.custom}
          style={{
            color: "red",
          }}
        />
        <label
          // className={styles.label}
          className={styles.custom}
          htmlFor="range"
          style={{
            transform: `translateX(${range * step}px)`,
          }}
        >
          <span> {range} </span>
        </label>
      </div>
    </>
  );
};

export default MultiRangeSlider;
