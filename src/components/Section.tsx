import { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  subHeading: string
  heading: string
  desc: string
  children?: ReactNode
  image: string
  desc2?: string
  reverse?: boolean
}

export const MainSection = ({ children, desc, heading, image, subHeading }: Props) => {
  return (
    <>
      <div className='grid grid-cols-2 mx-16 gap-20'>
        <div className='self-center'>
          <p className='text-2xl whitespace-pre-line'>{subHeading}</p>
          <p className='text-6xl whitespace-pre-line'>{heading}</p>
          <p className='text-2xl mt-8 whitespace-pre-line'>{desc}</p>
          <div>{children}</div>
        </div>
        <div>
          <Image
            src={image}
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

export const Section = ({
  children,
  desc,
  heading,
  image,
  subHeading,
  desc2,
  reverse = false,
}: Props) => {
  return (
    <>
      <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} mx-16 gap-20`}>
        <div className='self-center flex-1'>
          <p className='text-2xl text-blue-200 whitespace-pre-line'>{subHeading}</p>
          <p className='text-3xl whitespace-pre-line'>{heading}</p>
          <p className='mt-8 whitespace-pre-line'>{desc}</p>
          <p className='mt-8 whitespace-pre-line'>{desc2}</p>

          <div>{children}</div>
        </div>
        <div className={`flex-1 flex items-center ${reverse ? 'justify-start' : 'justify-end'}`}>
          <Image
            src={image}
            style={{ width: '70%', height: '70%' }}
            height={100}
            width={100}
            alt='Brain Skill'
          />
        </div>
      </div>
    </>
  )
}
