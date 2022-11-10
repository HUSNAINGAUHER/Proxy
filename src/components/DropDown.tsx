import { useState } from 'react'

type Props = {
  items: { key: string; val: string }[]
}
export const DropDown = ({ items }: Props) => {
  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<{ key: string; val: string }>({
    key: '-1',
    val: 'Select Plan',
  })

  return (
    <div className='w-max relative'>
      <button
        className='text-white cursor-pointer focus:outline-none border-blue-200 border-2 focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        style={{
          backgroundColor: '#0D0D0D',
          width: '100%',
        }}
        onClick={() => setOpen(!isOpen)}
        type='button'
      >
        {selected.val}
        <svg
          className='ml-2 h-4 text-blue-200'
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='4'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </button>

      <div
        className={`${ 
          isOpen ? '' : 'hidden'
        } z-10 w-full bg-white absolute rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 cursor-pointer `}
        onBlur={() => setOpen(false)}
      >
        <ul className='py-1 text-sm text-gray-700 dark:text-gray-200'>
          {items.map((I) => (
            <li>
              <div
                className='block py-2 px-4 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={() => setSelected(I)}
              >
                {I.val}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
