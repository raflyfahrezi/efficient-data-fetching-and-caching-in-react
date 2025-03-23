'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { axiosInstance } from '@/utils'
import Wrapper from '@/components/wrapper'
import Loading from '@/components/loading'
import Card, { TCard } from '@/components/card'

const UseEffect = () => {
  const [data, setData] = useState<TCard[]>([])

  const fetchData = async () => {
    const res = await axiosInstance.get('/users')

    setData(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (data.length === 0) return <Loading />

  return (
    <Wrapper className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Use Effect</h2>
      <button
        className='bg-blue-500 text-white p-2 rounded-md'
        onClick={() => fetchData()}
      >
        Fetch Data
      </button>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((card) => (
          <Link href={`/users/${card.id}`} key={card.id}>
            <Card card={card} />
          </Link>
        ))}
      </div>
    </Wrapper>
  )
}

export default UseEffect
