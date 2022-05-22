import Link from "next/link"
import React, { useEffect, useState } from 'react'

const Search = () => {

  const [searchedItem, setSearchItem] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSearch = (e: any) => {
    const { target: { value } } = e
    setSearchItem(value)  
  }

  useEffect(() => {
    if (isTyping) return
    handleSearch({ target: { value: searchedItem } })
  }, [isTyping])
  return (
    <div>Search For Products {searchedItem}
     
      <input type="search" onChange={handleSearch} />
      <Link  href='/search/[searchedItem]'  as={`/search/${searchedItem}`} passHref>
                  
        <button>Submit</button>
      </Link>
      Typing : {isTyping ? 'true' : 'false'}
    </div>
  )
}

export default Search

export const getServerSideProps = async () => {
  return {
    props: ''
  }
}