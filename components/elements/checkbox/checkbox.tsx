import React from 'react'
import Checkbox from "./types"

const Checkbox = ({ type, onChange, children, products }: Checkbox) => {
  console.log(Array.isArray(products) ? 'yes' : 'no')

  const getCategories = (products: ProductProps) => {
    if (Array.isArray(products) && products.length > 0) {
      const categoryValues = products.map((product: ProductProps) => product.category)
      const categories = [...new Set(categoryValues)]

      return categories
    }
  }
 
  return (
    <div>
      {getCategories(products).map((product, index) => {
        return (
          <div>
             <input type={type} onChange={onChange} />
              {product} - {index}
          </div>
        )
      } ) }
    </div>
  )
}

export default Checkbox