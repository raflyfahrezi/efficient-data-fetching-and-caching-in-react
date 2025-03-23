import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const fetcher = (url: string) => {
  return axiosInstance.get(url).then((res) => res.data)
}
