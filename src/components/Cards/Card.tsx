import Image from 'next/image'

type Props = {
  icon: string
  title: string
  desc: string
}

export const Card = ({ desc, icon, title }: Props) => {
  return (
    <div className='flex flex-col border-blue-200 border rounded items-center py-8 px-9 w-72'>
      <Image width={40} height={46} alt={'icon'} src={icon} />
      <div className='text-lg mt-2'>{title}</div>
      <div className='mt-2'>{desc}</div>
    </div>
  )
}
