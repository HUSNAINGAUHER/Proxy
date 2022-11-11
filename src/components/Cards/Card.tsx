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
      <div style={{ marginTop: '20px', fontSize: '18px' }}>{title}</div>
      <div style={{ marginTop: '6px', fontSize: '14px' }}>{desc}</div>
    </div>
  )
}
