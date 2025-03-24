import Wrapper from '@/components/wrapper'

import { axiosInstance } from '@/utils'
import Loading from '@/components/loading'

import { ClientComponent } from './client'

export const revalidate = 0
export const dynamic = 'force-dynamic'

const SSRPage = async () => {
  const response = await axiosInstance.get('/users?flag=swt+ssr')
  const initialData = await response.data

  if (!initialData) return <Loading />

  console.log(initialData)

  return (
    <Wrapper className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>SWR + SSR</h2>
      <ClientComponent fallback={initialData} />
    </Wrapper>
  )
}

export default SSRPage
