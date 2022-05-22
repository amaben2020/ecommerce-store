import capitalizeFirstWord from "@/utils/capitalizeFirstWord"
import Link from "next/link"
import React, { useEffect, useState } from 'react'

const Search = () => {

  const [searchedItem, setSearchItem] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSearch = (e: any) => {
    const { target: { value } } = e
    const keyWord = capitalizeFirstWord(value)
    console.log(keyWord)
    setSearchItem(keyWord)  
  }

  useEffect(() => {
    if (isTyping) return
    handleSearch({ target: { value: searchedItem } })
  }, [isTyping])
  return (
    <div>Search For Products {searchedItem.includes("Invalid", 0) ? <p style={{ color: "red" }}>{ searchedItem}</p> : ""}
      <form action="">
        
           <input type="search" onChange={handleSearch} />
      <Link  href='/search/[searchedItem]'  as={`/search/${searchedItem}`} passHref>
                  
        <button disabled={!searchedItem}>Submit</button>
      </Link>
     </form>
   
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