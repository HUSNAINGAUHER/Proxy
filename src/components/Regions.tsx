import Image from 'next/image'

type Props = {
  icon: string
  country: string
  IP: string
}

export const Region = ({ IP, country, icon }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <Image className='rounded-full' alt={country} width={75} height={75} src={icon} />
      <div className='text-blue-200 text-xl text-center'>{country}</div>
      <div className='text-blue-200 text-base text-center'>{IP}</div>
    </div>
  )
}
