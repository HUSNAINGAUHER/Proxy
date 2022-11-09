import Image from 'next/image'

type Props = {
  text: string
  onClick?: () => void
  ghost?: boolean
  color?: string
  showArrow?: boolean
}

export const Button = ({ onClick, text, ghost = false }: Props) => {
  return (
    <a
      onClick={onClick}
      className={`border-white border rounded px-6 py-1 ${ghost ? 'text-white' : 'text-black'} ${
        ghost ? 'bg-transparent' : 'bg-white'
      } cursor-pointer `}
    >
      {text}
    </a>
  )
}

export const PrimaryButton = ({ onClick, text, ghost = false, showArrow }: Props) => {
  return (
    <a
      onClick={onClick}
      className={`border-blue-200 border rounded px-6 py-2 ${
        ghost ? 'text-blue-200' : 'text-black'
      } ${
        ghost ? 'bg-transparent' : 'bg-blue-200'
      } cursor-pointer flex w-max justify-between gap-x-5`}
    >
      {text}
      {showArrow && <Image src='/assets/images/Arrow.svg' height={10} width={20} alt='' />}
    </a>
  )
}

export const WindowDownloadButton = ({ onClick, version }: any) => {
  return (
    <a
      onClick={onClick}
      className={`border-blue-200 bg-blue-200 border rounded px-7 py-2 gap-x-5 cursor-pointer flex w-max text-black justify-between`}
    >
      <div>
        <div className='font-bold'>DOWNLOAD</div>
        <div>{version}</div>
      </div>
      <Image src='/assets/images/WindowsIcon.svg' height={31} width={26} alt='' />
    </a>
  )
}
