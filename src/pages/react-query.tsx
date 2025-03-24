import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/utils'
import Wrapper from '@/components/wrapper'
import Loading from '@/components/loading'
import Card, { TCard } from '@/components/card'

const ReactQueryPage = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['users', 'react-query'],
    queryFn: () => axiosInstance.get('/users?flag=react-query'),
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data?.data?.map?.((card: TCard) => (
          <Link href={`/users/${card.id}`} key={card.id}>
            <Card card={card} />
          </Link>
        ))}
      </div>
    </Wrapper>
  )
}

export default ReactQueryPage
