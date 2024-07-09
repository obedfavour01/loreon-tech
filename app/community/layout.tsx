import Navbar from '@/components/Navbar'
import React from 'react'

const Communitylayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section>
      <Navbar navClassName="text-black" />
      {children}
    </section>
  )
}

export default Communitylayout