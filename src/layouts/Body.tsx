import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  children: ReactNode
}

export const Body = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className='mx-6'>{children}</div>
      <Footer />
    </>
  )
}
