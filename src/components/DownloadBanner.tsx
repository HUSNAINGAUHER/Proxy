import Image from 'next/image'

export const DownloadBanner = () => {
  
  return (
    <div
      className='flex justify-between flex-wrap px-24 py-4 gap-y-10'
      style={{ backgroundColor: '#00100F' }}
    >
      <div className='text-xl'>Download the IP Changer App For Windows</div>
      <Image
        src={'/assets/images/WinIcon.svg'}
        width={133}
        height={41}
        alt={'Window Download Button'}
      />
     
    </div>
  )
}
type Props = {
  list: { icon: string; text: string }[]
}
export const IconList = ({ list }: Props) => {

  console.log(list)
  return (
    <>
      {list.map((R) => {
        return (
          <div className='flex gap-4 py-2'>
            <Image src={R.icon} height={30} width={24} alt='' />
            <div>{R.text}</div>
          </div>
        )
      })}
    </>
  )
}
