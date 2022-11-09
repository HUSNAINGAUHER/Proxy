import { Button } from '@/components/Buttons/Button'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Routes = ['home', 'locations', 'download', 'use cases', 'pricing']

export const Header = () => {
  const { push } = useRouter()
  return (
    <>
      <div
        className='flex flex-wrap justify-between align-center py-4'
        style={{  maxWidth: '1350px', width: '100%', margin: '0 auto' }}
      >
        <Image alt='logo' src='/assets/images/Logo.svg' width={172} height={36} />
        <div className='flex-row flex-wrap flex justify-between gap-x-16 align-center'>
          {Routes.map((R, index) => (
            <a
              key={index}
              className='self-center text-white hover:text-blue-200 cursor-pointer'
              onClick={() => push(R)}
            >
              {R.toUpperCase()}
            </a>
          ))}
          <div className='flex-row flex justify-between gap-x-4'>
            <Button ghost={true} text='LOGIN' onClick={() => push('login')} />
            <Button text='SIGNUP' onClick={() => push('signup')} />
          </div>
        </div>
      </div>
    </>
  )
}
