type Props = {
  text: string
  onClick?: () => void
  ghost?: boolean
  color?: string
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

export const PrimaryButton = ({ onClick, text, ghost = false }: Props) => {
  return (
    <a
      onClick={onClick}
      className={`border-blue-200 border rounded px-6 py-2 ${ghost ? 'text-blue-200' : 'text-black'} ${
        ghost ? 'bg-transparent' : 'bg-blue-200'
      } cursor-pointer `}
    >
      {text}
    </a>
  )
}
