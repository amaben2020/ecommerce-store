import React, { useState } from 'react';

import Checkbox from "./types";

const Checkbox = ({ type, onChange, children, products }: Checkbox) => {
 
 
  const [ids, setIds] = useState<number[]>();

  
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {

    const selectedId = parseInt(e.target.value) as number;

    let hash: number[] = []

    if (e.target.checked) { 
      hash.push(selectedId)
      setIds(hash)
     
    } else {
      hash = hash.filter(id => id === selectedId)
      setIds(hash)
    }
    return hash
  }

 

  const getCategories = (products: ProductProps) => {
    if (Array.isArray(products) && products.length > 0) {
      const categoryValues = products.map((product: ProductProps) => product.category)
      const categories = [...new Set(categoryValues)]

      return categories
    }
  }
 
  return (
    <div>
      {getCategories(products)?.map((category: string, index) => {
        return (
          <div>
            <input type={type} name={category}
              checked={ids?.includes(index) ? true : false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e, category)}
              value={index}
             />
            {category} - {index}
      </div>
        )
      })}
    </div>
  )
}

export default Checkbox