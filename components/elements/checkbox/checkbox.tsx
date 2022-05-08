import React from 'react'
import Checkbox from "./types"

const Checkbox = ({type, onChange, children}: Checkbox) => {
  return (
    <div>
      <input type={type} onChange={onChange} />
      {children}
    </div>
  )
}

export default Checkbox