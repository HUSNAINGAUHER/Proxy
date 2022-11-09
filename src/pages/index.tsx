import { PrimaryButton } from '@/components/Buttons/Button'
import { Card } from '@/components/Cards/Card'
import { DownloadBanner } from '@/components/DownloadBanner'
import { Region } from '@/components/Regions'
import { MainSection, Section } from '@/components/Section'
import { Body } from '@/layouts/Body'
import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header'
import { useRouter } from 'next/router'

const Regions = [
  {
    img: 'UnitedStates.svg',
    country: 'United States',
    IP: '3,599,080 IPs',
  },
  {
    img: 'Japan.svg',
    country: 'Janpan',
    IP: '156,534 IPs',
  },
  {
    img: 'SouthKorea.svg',
    country: 'South Korea',
    IP: '1,047,582 IPs',
  },
  {
    img: 'Myanmar.svg',
    country: 'Myanmar',
    IP: '1,124,725 IPs',
  },
  {
    img: 'Canada.svg',
    country: 'Canada',
    IP: '2,704,625 IPs',
  },
  {
    img: 'UnitedStates.svg',
    country: 'United States',
    IP: '3,599,080 IPs',
  },
  {
    img: 'Japan.svg',
    country: 'Janpan',
    IP: '156,534 IPs',
  },
  {
    img: 'SouthKorea.svg',
    country: 'South Korea',
    IP: '1,047,582 IPs',
  },
  {
    img: 'Myanmar.svg',
    country: 'Myanmar',
    IP: '1,124,725 IPs',
  },
  {
    img: 'Canada.svg',
    country: 'Canada',
    IP: '2,704,625 IPs',
  },
]

const Index = () => {
  const { push } = useRouter()
  return (
    <>
      <Body>
        <div className='mt-24'>
          <MainSection
            desc={`The Proxy S5 is 1:1 compatible with 911 S5 functions and surpasses the 911 S5's Residential Proxy Service.`}
            heading='The Proxy - Perfect 911s5 Alternatives'
            subHeading='50M+ Residential Proxy'
            image='/assets/images/BrainSkill.svg'
          >
            <div className='mt-10 flex gap-8'>
              <PrimaryButton text='DOWNLOAD' onClick={() => push('/download')} />
              <PrimaryButton ghost text='LOCATIONS' onClick={() => push('/location')} />
            </div>
          </MainSection>
        </div>
        <div className='flex justify-around mt-24'>
          <Card
            icon='/assets/images/Profile.svg'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            title='Anynymous Access'
          />
          <Card
            icon='/assets/images/DatabaseUsage.svg'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            title='No Usage Logs'
          />
          <Card
            icon='/assets/images/Promise.svg'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            title='No Limits'
          />
          <Card
            icon='/assets/images/Cashback.svg'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            title='100% White-Listed'
          />
        </div>

        <div>
          <Section
            subHeading='Choose Proxy Proxy'
            heading='Looking for a 911 S5 alternative?'
            desc='Unlike most of the vendors we know today, the 911 S5 is a service in the form of Windows software that is great for newbies and veterans alike, which seems like a perfect vendor, but unfortunately, as of July On the 28th, the 911 S5 was closed. This means that all its services have been terminated.'
            desc2={`Of course, if you're relying on proxies, you're probably looking for an alternative, and you're in luck. Pia S5 Proxy acts as a residential SOCKS5 client with 50M+ residential IP addresses and is constantly working to filter out the underperforming ones. Proxies come from more than 180 countries, and the coverage is very wide.`}
            image={'/assets/images/Shield.svg'}
          />
        </div>
        <div>
          <Section
            subHeading='Residential Proxy Network'
            heading='Residential Proxy Network'
            desc='Our residential proxy network consists of real IP addresses from real users, making sure you never get detected or blocked. We created our own network of residential proxies, power your projects with sticky Residential Proxies from a pool of 50M+ IPs. With a worldwide coverage of Residential IP addresses, you can easily overcome geo-location blocks.'
            desc2={`Of course, if you're relying on proxies, you're probably looking for an alternative, and you're in luck. Pia S5 Proxy acts as a residential SOCKS5 client with 50M+ residential IP addresses and is constantly working to filter out the underperforming ones. Proxies come from more than 180 countries, and the coverage is very wide.`}
            image={'/assets/images/BrainSkill.svg'}
            reverse={true}
          />
        </div>

        <div className='flex flex-col items-center my-10'>
          <div className='text-5xl'>Top 10 proxy regions</div>
          <div className='grid grid-cols-5 gap-y-10 gap-x-40 mt-20'>
            {Regions.map((R) => (
              <Region IP={R.IP} country={R.country} icon={`/assets/images/${R.img}`} />
            ))}
          </div>
        </div>

        <div className='mt-5'>
          <DownloadBanner />
        </div>
      </Body>
    </>
  )
}

export default Index
