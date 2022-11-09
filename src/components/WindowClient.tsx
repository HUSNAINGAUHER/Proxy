import Image from 'next/image'
import { WindowDownloadButton } from './Buttons/Button'
import { IconList } from './DownloadBanner'

export const WindowClientBanner = () => {
  const list = [
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: 'Available on all Windows versions',
    },
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: 'Supports country, state, city, ISP, and zip code targeting',
    },
    {
      icon: '/assets/images/ShieldOutline.svg',
      text: 'Easy integration with third-party software such as Bit, VM, Ads, etc.',
    },
  ]

  return (
    <>
      <div className='grid grid-cols-2 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1'>
        <div className='self-center'>
          <p className='text-2xl whitespace-pre-line'>Your PC Install is ready!</p>
          <p className='text-6xl whitespace-pre-line mt-5'>Windows client</p>
          <IconList list={list} />
          <div className='mt-4'>
            <WindowDownloadButton version='Version 1.45' />
          </div>
        </div>
        <div>
          <Image
            src={'/assets/images/WindowsMarker.svg'}
            style={{ width: '100%', height: '100%' }}
            height={100}
            width={100}
            alt='Brain Skill'
          />
        </div>
      </div>
    </>
  )
}
