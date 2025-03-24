'use client'

import useSWR from 'swr'

import { fetcher } from '@/utils'
import Card, { TCard } from '@/components/card'
import Wrapper from '@/components/wrapper'
import Loading from '@/components/loading'

const SWRPage = () => {
  const { data, isLoading, mutate } = useSWR('/users?flag=swr', fetcher)

  if (isLoading) return <Loading />

  return (
    <Wrapper className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>SWR</h2>
      <button
        className='bg-blue-500 text-white p-2 rounded-md'
        onClick={() => mutate()}
      >
        Fetch Data
      </button>
      {data && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {data.map((user: TCard) => (
            <Card key={user.id} card={user} />
          ))}
        </div>
      )}
    </Wrapper>
  )
}

export default SWRPage
