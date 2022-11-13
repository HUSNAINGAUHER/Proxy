import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { RegionContinent } from './Regions'
import { Regions } from './TopProxy'

export const Map = () => {
  return (
    <div className='map-img xs:hidden md:block'>
      <Image src='/assets/images/Map.svg' width={1208} height={530} alt='map' />
      <>
        {Regions.map(
          (R) =>
            R.x &&
            R.y && (
              <Marker
                x={R.x}
                y={R.y}
                HoverElement={
                  <RegionContinent
                    IP={R.IP}
                    country={R.country}
                    icon={`/assets/images/${R.img}`}
                    back
                  />
                }
              />
            )
        )}
      </>
    </div>
  )
}

type MarkerProps = {
  x: string
  y: string
  HoverElement: ReactNode
}
const Marker = ({ x, y, HoverElement }: MarkerProps) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  return (
    <div
      style={{ left: x, top: y, position: 'absolute' }}
      
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className='mapitem'>
        <div className='circle_box'>
          <div className='circle-dian'></div>
          <div className='circle-inside'></div>
          <div className='circle-outside'></div>
        </div>
        <Image
          src='/assets/images/Vector.svg'
          width={50}
          height={50}
          alt='map'
          className='mapicon'
        />

        <div
          className={`${isHovering ? 'visible' : 'hidden'} absolute`}
          style={{ marginTop: '-150px', marginLeft: '100px', zIndex: 100 }}
        >
          {HoverElement}
        </div>
      </div>
    </div>
  )
}
