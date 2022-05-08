import axios from 'axios';

export const fetcher = async (url: string)   => {
  if (!url) return Promise.reject(new Error('No url provided'))

  try {
    const {data} = await axios.get(url)
    return data

  } catch (error) {
    console.log(error.message);
  }
}