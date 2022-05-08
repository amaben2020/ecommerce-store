import Route from "@/routes/route"
import { fetcher } from "@/utils/fetcher"
import useSWR from 'swr'

const useFetch = () => {
  const { data, error } = useSWR(Route.products, fetcher)
  

  console.log('Data',data)

  return { data, error }
}

export default useFetch