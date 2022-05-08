import Checkbox from "@/components/elements/checkbox/checkbox";
import React from "react";
import * as styles from "./sidebar.module.scss";

const Sidebar = (e) => {
  const handleCheckbox = () => {
    console.log(e.target.checked)
  }
  return (
    <aside className={styles.wrapper}>
      <div>Sidebar Lorem ipsum dolor sit</div>
     
      
      <div className={styles['checkbox-wrapper']}>
        <Checkbox type='checkbox' onChange={handleCheckbox}>Title</Checkbox>
      </div>
    </aside>
  );
};

export default Sidebar;
