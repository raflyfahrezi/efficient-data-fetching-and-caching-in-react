import useSWR from 'swr'
import Link from 'next/link'

import Wrapper from '@/components/wrapper'
import Card, { TCard } from '@/components/card'
import { fetcher, axiosInstance } from '@/utils'

const SWRSSRPage = ({ initialData }: { initialData: TCard[] }) => {
  const { data, mutate } = useSWR('/users?flag=swr+ssr', fetcher, {
    fallbackData: initialData,
  })

  return (
    <Wrapper className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>SWR + SSR</h2>
      <button
        className='bg-blue-500 text-white p-2 rounded-md'
        onClick={() => mutate()}
      >
        Fetch Data
      </button>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((card: TCard) => (
          <Link href={`/users/${card.id}`} key={card.id}>
            <Card card={card} />
          </Link>
        ))}
      </div>
    </Wrapper>
  )
}

export const getServerSideProps = async () => {
  const res = await axiosInstance.get('/users?flag=swr-ssr')

  return {
    props: { initialData: res.data },
  }
}

export default SWRSSRPage
