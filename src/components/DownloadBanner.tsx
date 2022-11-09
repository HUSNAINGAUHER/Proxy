import Image from 'next/image'

export const DownloadBanner = () => {
  return (
    <div className='flex justify-between px-24 py-4' style={{ backgroundColor: '#00100F' }}>
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
