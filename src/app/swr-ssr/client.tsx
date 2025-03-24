'use client'

import useSWR, { mutate } from 'swr'

import { fetcher } from '@/utils'
import Loading from '@/components/loading'
import Card, { TCard } from '@/components/card'

export const ClientComponent = ({ fallback }: { fallback: TCard[] }) => {
  const { data, isLoading } = useSWR<TCard[]>('users', fetcher, { fallback })

  if (isLoading) return <Loading />

  return (
    <>
      <button
        className='bg-blue-500 text-white p-2 rounded-md'
        onClick={() => mutate('users')}
      >
        Fetch Data
      </button>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data?.map((user) => (
          <Card key={user.id} card={user} />
        ))}
      </div>
    </>
  )
}
