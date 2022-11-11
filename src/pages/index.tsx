import { PrimaryButton } from '@/components/Buttons/Button'
import { Card } from '@/components/Cards/Card'
import { Region } from '@/components/Regions'
import { MainSection, Section } from '@/components/Section'
import { Body } from '@/layouts/Body'
import { useRouter } from 'next/router'

const Regions = [
  {
    img: 'UnitedStates.svg',
    country: 'United States',
    IP: '3,599,080 IPs',
  },
  {
    img: 'Japan.svg',
    country: 'Japan',
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
    img: 'BRA.svg',
    country: 'Brazil',
    IP: '3,599,080 IPs',
  },
  {
    img: 'DEU.svg',
    country: 'Germany',
    IP: '156,534 IPs',
  },
  {
    img: 'FRA.svg',
    country: 'France',
    IP: '1,047,582 IPs',
  },
  {
    img: 'GBR.svg',
    country: 'United Kingdom',
    IP: '1,124,725 IPs',
  },
  {
    img: 'MEX.svg',
    country: 'Mexico',
    IP: '2,704,625 IPs',
  },
]

const Index = () => {
  const { push } = useRouter()
  return (
    <>
      <Body>
        <div style={{ marginTop: '136px' }}>
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
        <div
          className='grid grid-cols-4 gap-y-10 mt-24 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center '
          style={{ marginTop: '128px' }}
        >
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

        <div style={{ marginTop: '187px' }}>
          <Section
            subHeading='Choose Proxy Proxy'
            heading='Looking for a 911 S5 alternative?'
            desc='Unlike most of the vendors we know today, the 911 S5 is a service in the form of Windows software that is great for newbies and veterans alike, which seems like a perfect vendor, but unfortunately, as of July On the 28th, the 911 S5 was closed. This means that all its services have been terminated.'
            desc2={`Of course, if you're relying on proxies, you're probably looking for an alternative, and you're in luck. Pia S5 Proxy acts as a residential SOCKS5 client with 50M+ residential IP addresses and is constantly working to filter out the underperforming ones. Proxies come from more than 180 countries, and the coverage is very wide.`}
            image={'/assets/images/Shield.svg'}
          />
        </div>
        <div style={{ marginTop: '210px' }}>
          <Section
            subHeading='Residential Proxy Network'
            heading='Residential Proxy Network'
            desc='Our residential proxy network consists of real IP addresses from real users, making sure you never get detected or blocked. We created our own network of residential proxies, power your projects with sticky Residential Proxies from a pool of 50M+ IPs. With a worldwide coverage of Residential IP addresses, you can easily overcome geo-location blocks.'
            desc2={`Of course, if you're relying on proxies, you're probably looking for an alternative, and you're in luck. Pia S5 Proxy acts as a residential SOCKS5 client with 50M+ residential IP addresses and is constantly working to filter out the underperforming ones. Proxies come from more than 180 countries, and the coverage is very wide.`}
            image={'/assets/images/BrainSkill.svg'}
            reverse={true}
          />
        </div>

        <div className='mt-20'>
          <div className='flex justify-center'>
            <div style={{fontSize:'45px'}}>Top 10 proxy regions</div>
          </div>
          <div className='grid grid-cols-5 gap-y-10 gap-x-20 mt-20 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {Regions.map((R, index) => (
              <Region IP={R.IP} key={index} country={R.country} icon={`/assets/images/${R.img}`} />
            ))}
          </div>
        </div>
      </Body>
    </>
  )
}

export default Index
