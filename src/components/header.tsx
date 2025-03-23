import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full flex flex-col gap-6 py-6 justify-between items-center mb-10'>
      <h2 className='text-2xl font-bold'>Efficient Data Fetching</h2>
      <div className='flex gap-6'>
        <Link href='/use-effect' className='text-blue-500'>
          useEffect
        </Link>
        <Link href='/react-query' className='text-blue-500'>
          React Query
        </Link>
        <Link href='/swr' className='text-blue-500'>
          SWR
        </Link>
        <Link href='/swr-ssr' className='text-blue-500'>
          SWR + SSR
        </Link>
      </div>
    </div>
  )
}

export default Header
