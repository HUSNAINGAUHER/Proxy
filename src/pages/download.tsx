import { PrimaryButton } from '@/components/Buttons/Button'
import { Section } from '@/components/Section'
import { WindowClientBanner } from '@/components/WindowClient'
import { Body } from '@/layouts/Body'
import { useRouter } from 'next/router'

const Download = () => {
  const { push } = useRouter()
  return (
    <>
      <Body>
        <div className='mt-10'>
          <WindowClientBanner />
        </div>

        <div className='flex flex-col items-center mt-20'>
          <div className='text-5xl text-center'>
            Our S5 Proxy has a very large <br /> residential proxy pool
          </div>
          <div className='text-center mt-5'>
            Proxies from up to 180 countries around the world, over 50 million residential IPs
          </div>
          <div className='mx-auto mt-5'>
            <PrimaryButton
              text='View Locations'
              onClick={() => {
                push('location')
              }}
              showArrow
            />
          </div>
        </div>

        <div className='mt-20'>
          <Section
            image='/assets/images/DownloadV2.svg'
            subHeading='Choose Proxy Proxy'
            heading='Over 50 million residential IPs'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            desc2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..'
          />
        </div>

        <div className='flex flex-col items-center my-20'>
          <div className='text-5xl text-center'>
            Choose the right plan that fits <br /> your business.
          </div>
          <div className='text-center mt-5'>
            View our Pricing Packages adjusted to your budget and use!
          </div>
          <div className='mx-auto mt-5'>
            <PrimaryButton
              text='View Pricing'
              onClick={() => {
                push('pricing')
              }}
              showArrow
            />
          </div>
        </div>
      </Body>
    </>
  )
}

export default Download
