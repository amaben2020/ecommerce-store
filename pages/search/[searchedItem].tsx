import axios from "axios"
import React from 'react'

type IProduct = {
  product : ProductProps[]
}

const SearchPage = ({ product } : IProduct) => {
  console.log(product)
  return (
    <div>
      <h1>Search Page</h1>
      <p>{product.map((product: ProductProps) => (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ))}</p>
    </div>
  )
}

export default SearchPage

export const getServerSideProps = async (context: any) => {
  
  const {query : {searchedItem : name}} = context

  const {data } = await axios.get(`http://localhost:4000/products?name=${name}`)
 console.log(data)
  return {
    props: {
      product: data,
    }
  }
}