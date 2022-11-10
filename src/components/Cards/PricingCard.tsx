type Props = {
  IPs: string
  Price: string
  Total: string
  Selected?: boolean
  Save?: {
    per: number
    color: string
  }
}

export const PricingCard = ({ IPs, Price, Total, Selected, Save }: Props) => {
  return (
    <div
      className='flex flex-col relative border-blue-200 border rounded items-center py-8 px-9 w-50'
      style={{ backgroundColor: Selected ? '#093C3A' : '#0D0D0D' }}
    >
      {Save && (
        <div
          className='absolute rounded-full w-12 h-12 top-0 right-0 -mt-5 -mr-5'
          style={{ backgroundColor: Save?.color }}
        >
          <div
            style={{ fontSize: '12px' }}
            className='flex flex-col items-center justify-center text-black h-full'
          >
            <div>Save</div>
            <div>{'$' + Save?.per}</div>
          </div>
        </div>
      )}
      <div className='text-lg mt-2'>{IPs + ' IPS'}</div>
      <div className='mt-2 text-2xl font-bold  text-blue-200'>
        <span className='text-white'>$</span> {Price} <span>/IP</span>
      </div>
      <div className='mt-2' style={{ color: 'rgba(255, 255, 255, 0.73)' }}>
        {'Total: $' + Total}
      </div>
    </div>
  )
}
