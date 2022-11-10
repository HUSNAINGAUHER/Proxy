import Image from 'next/image'
import { useEffect, useState } from 'react'

type GroupButtonProps = {
  items: Props[]
}

export const GroupButton = ({ items }: GroupButtonProps) => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSelected(items[0] ? items[0].key : '')
  }, [])



  return (
    <div className='flex gap-x-5 rounded border-blue-200 border-2 py-1 px-1 w-max relative bg-black'>
      {items.map((I) => (
        <Button
          key={I.key}
          text={I.text}
          selected={I.key === selected}
          icon={I.icon}
          setSelected={setSelected}
        />
      ))}
    </div>
  )
}

type Props = {
  key: string
  text: string
  selected?: boolean
  icon?: string
  setSelected?: (val: string) => void
}

const Button = ({ icon, key, text, selected, setSelected }: Props) => {
  return (
    <div
      className={`flex px-5 py-1 rounded border-blue-200 cursor-pointer gap-x-2 items-center`}
      style={{ backgroundColor: selected ? 'rgba(0, 223, 216,0.32)' : 'rgba(0, 223, 216, 0.16)' }}
      onClick={() => setSelected && setSelected(key)}
    >
      {icon ? <Image src={icon} width={11} height={14} alt='' /> : null}
      <div>{text}</div>
    </div>
  )
}
