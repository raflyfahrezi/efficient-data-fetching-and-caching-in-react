'use client'

import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/utils'
import Wrapper from '@/components/wrapper'
import Loading from '@/components/loading'
import Card, { TCard } from '@/components/card'

const ReactQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => axiosInstance.get('/users'),
  })

  if (isLoading) return <Loading />

  return (
    <Wrapper className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>React Query</h2>
      <button
        className='bg-blue-500 text-white p-2 rounded-md'
        onClick={() => refetch()}
      >
        Fetch Data
      </button>
      {data && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {data.data.map((user: TCard) => (
            <Card key={user.id} card={user} />
          ))}
        </div>
      )}
    </Wrapper>
  )
}

export default ReactQuery
