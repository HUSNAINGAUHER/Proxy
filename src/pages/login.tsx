import { PrimaryButton } from '@/components/Buttons/Button'
import { TextField } from '@/components/TextFiled'
import Image from 'next/image'

const Login = () => {
  return (
    <>
      <div style={{ position: 'absolute', width: '100%' }}>
        <Image
          src={'/assets/images/BackPricing.svg'}
          width={'100'}
          height={'100'}
          alt=''
          className='h-full w-full'
        />
      </div>

      <div className='mt-20 relative'>
        <div className='flex flex-col items-center justify-center my-10'>
          <Image alt='logo' src='/assets/images/Logo.svg' width={172} height={36} />
          <div className='text-6xl'>Account Login</div>
          <div className='text-xl'>Welcome back to the Proxy!</div>
        </div>

        <div
          style={{ backgroundColor: '#252525' }}
          className='w-max px-32 py-20 border-t-4 rounded-lg border-blue-200 mx-auto'
        >
          <div className='flex flex-col flex-wrap gap-y-5'>
            <TextField label='Enter Your email address:' onChange={() => {}} />
            <TextField label='Enter Your Password:' onChange={() => {}} />
          </div>

          <div className='mt-7 flex items-center gap-x-2'>
            <PrimaryButton text='Continue' />
            <div className='text-sm'>
              New Here? <a>Create an Account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
