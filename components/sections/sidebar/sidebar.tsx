import Checkbox from "@/components/elements/checkbox/checkbox";
import useFetch from "@/hooks/useFetch";
import React from "react";
import * as styles from "./sidebar.module.scss";

const Sidebar = () => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
  }
  const text = {
    text: 'Title'
  }

  const { data } = useFetch()
  
  
  return (
    <aside className={styles.wrapper}>
      <div>Sidebar Lorem ipsum dolor sit</div>
     
      
      <div className={styles['checkbox-wrapper']}>
        <Checkbox products={data} type='checkbox' onChange={handleCheckbox}>
        {text.text}
        </Checkbox>
      </div>
    </aside>
  );
};

export default Sidebar;
