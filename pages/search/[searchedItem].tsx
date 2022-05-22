import axios from "axios"
import Image from "next/image"
import React from 'react'

type IProduct = {
  product: ProductProps[],
  searchedItem: string
}

const SearchPage = ({ product, searchedItem } : IProduct) => {
  
  return (
    <div>
      <h1>Search Page</h1> <button>Back To Home</button>
      {product && <p>{product.map((product: ProductProps) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Image src={product?.image} height={220} width={200}/>
        </div>
      ))}</p>}
      {product.length === 0 ? <p>No products matches the <span style={{color: 'green'}}>{searchedItem}</span> </p> : ''}
          
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
      searchedItem: name
    }
  }
}