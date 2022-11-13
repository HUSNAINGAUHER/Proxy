import { ContinentProxy, TopProxy } from '@/components/TopProxy'
import { Body } from '@/layouts/Body'
import { Map } from '@/components/Map'

const Locations = () => {
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
  return (
    <Body>
      <div className='flex flex-col items-center' style={{ marginTop: '100px' }}>
        <div className='text-center' style={{ fontSize: '45px', lineHeight: '63.19px' }}>
          Residential Proxy Location
        </div>
        <div className='text-center' style={{ fontSize: '16px', marginTop: '20px' }}>
          There are more than 50 million residential IPs in the world, and the most advanced <br />
          proxy client solves IP restrictions.
        </div>
      </div>
      <div style={{ marginTop: '200px' }}>
        <Map />
      </div>
      <div style={{ marginTop: '140px' }}>
        <TopProxy />
      </div>
      <div style={{ marginTop: '105px' }}>
        <div className='flex justify-center mb-5'>
          <div style={{ fontSize: '45px' }}>List of all countries</div>
        </div>
        <ContinentProxy continent='Asia' Regions={Regions} />
      </div>
      <div style={{ marginTop: '105px' }}>
        <ContinentProxy continent='Europe' Regions={Regions} />
      </div>
      <div style={{ marginTop: '105px' }}>
        <ContinentProxy continent='Africa' Regions={Regions} />
      </div>
      <div style={{ marginTop: '105px' }}>
        <ContinentProxy continent='Austrlia' Regions={Regions} />
      </div>
      <div style={{ marginTop: '105px' }}>
        <ContinentProxy continent='Asia' Regions={Regions} />
      </div>
    </Body>
  )
}

export default Locations
