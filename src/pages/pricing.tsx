import { PrimaryButton } from '@/components/Buttons/Button'
import { GroupButton } from '@/components/Buttons/GroupButton'
import { PricingCard } from '@/components/Cards/PricingCard'
import { DownloadBanner, IconList } from '@/components/DownloadBanner'
import { DropDown } from '@/components/DropDown'
import { TextField } from '@/components/TextFiled'
import { Body } from '@/layouts/Body'
import Image from 'next/image'

const Pricing = () => {
  const plans = [
    {
      key: '1',
      text: 'Popular Plan',
      icon: '/assets/images/Fire.svg',
    },
    {
      key: '2',
      text: 'Popular Plan',
      icon: '/assets/images/Fire.svg',
    },
    {
      key: '2',
      text: 'Enterprise Plan',
    },
    {
      key: '3',
      text: 'Static Plan',
    },
    {
      key: '4',
      text: 'Unlimited Plan',
    },
  ]

  const pricingCards = [
    {
      IPS: '150',
      Price: '0.58',
      Total: '87',
      Selected: true,
    },
    {
      IPS: '150',
      Price: '0.58',
      Total: '87',
    },
    {
      IPS: '150',
      Price: '0.58',
      Total: '87',
    },
    {
      IPS: '150',
      Price: '0.58',
      Total: '87',
      Save: { color: '#4AD918', per: 36 },
    },
    {
      IPS: '150',
      Price: '0.58',
      Total: '87',
      Save: { color: '#FFDA44', per: 80 },
    },
  ]

  return (
    <Body backgroud>
      <div className='flex flex-col items-center my-20'>
        <div className='text-5xl text-center'>
          Choose the right plan that fits <br /> your
          <span className='text-blue-200'>business.</span>
        </div>
        <div className='text-center mt-5'>Choose the plan which fits your budget!</div>
      </div>

      <div className='flex justify-center'>
        <GroupButton items={plans} />
      </div>

      <div className='grid grid-cols-5 gap-x-10 mt-20'>
        {pricingCards.map((c) => {
          return (
            <PricingCard
              IPs={c.IPS}
              Price={c.Price}
              Total={c.Total}
              Selected={c.Selected}
              Save={c.Save}
            />
          )
        })}
      </div>

      <div className='grid grid-cols-2 mt-20'>
        <div className='grid grid-cols-2 gap-x-20'>
          <div className='flex flex-col'>
            <IconList
              list={[
                { icon: '/assets/images/Globe.svg', text: 'Only US resourse' },
                { icon: '/assets/images/ShieldFront.svg', text: 'SOCKSS' },
                { icon: '/assets/images/Bolt.svg', text: '99.9% Success rate' },
              ]}
            />
          </div>

          <div className='flex flex-col'>
            <IconList
              list={[
                { icon: '/assets/images/Globe.svg', text: 'Only US resourse' },
                { icon: '/assets/images/ShieldFront.svg', text: 'SOCKSS' },
                { icon: '/assets/images/Bolt.svg', text: '99.9% Success rate' },
              ]}
            />
          </div>
        </div>
        <div className='flex flex-col items-end gap-y-5'>
          <div>Get a coupon</div>
          <div>
            You need to pay: <span className='text-lg font-bold'>$60</span>
          </div>
          <div className='w-max'>
            <PrimaryButton text='Buy Now' full />
            <div className='flex gap-8 mt-5'>
              <div className='flex gap-2'>
                <Image
                  src={'/assets/images/footer/mastercard.svg'}
                  height={20}
                  width={30}
                  alt={''}
                />
                <Image src={'/assets/images/footer/visa.svg'} height={20} width={30} alt={''} />
                <Image src={'/assets/images/footer/unionpay.svg'} height={20} width={30} alt={''} />
              </div>
              <div className='flex gap-2'>
                <Image src={'/assets/images/footer/trx.svg'} height={20} width={20} alt={''} />
                <Image src={'/assets/images/footer/t.svg'} height={20} width={20} alt={''} />
                <Image src={'/assets/images/footer/bitcoin.svg'} height={20} width={20} alt={''} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='text-2xl'> Proceed to payment using Credit Card </div>
        <div
          style={{ backgroundColor: '#252525' }}
          className='w-full p-20 border-t-4 rounded-sm border-blue-200'
        >
          <div className='flex items-center justify-between'>
            <DropDown
              items={[
                { key: '1', val: '20 IPs ($3.00/IP)' },
                { key: '2', val: '21 IPs ($3.00/IP)' },
              ]}
            />
            <div className='font-bold'>$60.00</div>
          </div>
          <div
            style={{ backgroundColor: '#1B1B1B' }}
            className='flex items-center justify-between py-2 px-5 mt-10 rounded'
          >
            <div className='font-bold text-lg'>Fee(5%):</div>
            <div className='font-bold text-lg'>$3.00</div>
          </div>

          <div className='flex justify-between items-center mt-10'>
            <div>
              <div className='font-bold text-lg'>Order Total:</div>
              <div>The service is based on non-subscription.there will be no renewal.</div>
            </div>
            <div className='text-3xl text-blue-200'>$63.00</div>
          </div>

          <div className='flex flex-wrap gap-x-10 mt-10'>
            <TextField label='Enter Your email address:' onChange={() => {}} />
            <TextField label='Enter Your Password:' onChange={() => {}} />
          </div>

          <div className='mt-10'>
            <div className='text-sm'>
              Your S5 Proxy account will be created when you enter your email.
            </div>
            <div className='text-sm'>
              Privacy guarantee: We do not share your information and will contact you only as
              needed to provide our service.
            </div>
            <div className='text-lg mt-4'>Continue below to buy a Subscription with Other</div>

            <div style={{ width: '200px' }} className='mt-5'>
              <PrimaryButton text='Complete Purchase' full />
            </div>

            <div className='text-sm mt-5'>
              By submitting this form, you agree to our <a>Terms of Service</a> and{' '}
              <a>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </Body>
  )
}

export default Pricing
