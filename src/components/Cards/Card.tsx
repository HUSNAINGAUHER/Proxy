import Image from 'next/image'

type Props = {
  icon: string
  title: string
  desc: string
}

export const Card = ({ desc, icon, title }: Props) => {
  return (
    <div className='flex flex-col border-blue-200 border rounded items-center max-w-xs py-8 px-9'>
      <Image width={40} height={46} alt={'icon'} src={icon} />
      <div className='text-lg'>{title}</div>
      <div>{desc}</div>
    </div>
  )
}
