export type TCard = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

const Card = ({ card }: { card: TCard }) => {
  return (
    <div className='w-full p-4 border border-gray-300 rounded-md'>
      <h3 className='text-lg font-bold'>{card.name}</h3>
      <p className='text-sm text-gray-500'>{card.email}</p>
    </div>
  )
}

export default Card
