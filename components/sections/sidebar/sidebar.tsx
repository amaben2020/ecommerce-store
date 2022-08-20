// import Checkbox from "@/components/elements/checkbox/checkbox";
// import useFetch from "@/hooks/useFetch";
// import React from "react";
// import * as styles from "./sidebar.module.scss";

// const Sidebar = () => {




//   const text = {
//     text: 'Title'
//   }

//   const { data } = useFetch()

//   return (
//     <aside className={styles.wrapper}>
//       <div>Sidebar Lorem ipsum dolor sit</div>


//       <div className={styles['checkbox-wrapper']}>
//         <Checkbox products={data} type='checkbox'>
//         {text.text}
//         </Checkbox>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react'

const Sidebar = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  })

  // handleChange that updates value based on user id
  const handleChange = (e: any) => {
    const { target: { value, id } } = e
    setUserInfo({ ...userInfo, [id]: value })
  }
  // handleSubmit that submits the form
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(userInfo)
  }


  return (
    <div>Sidebar
      <input id='user-id' type='text' value={userInfo.username} onChange={handleChange} />

      <input id='password-id' type='password' value={userInfo.password} onChange={handleChange} />

    </div>
  )
}

export default Sidebar