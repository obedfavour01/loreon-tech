import Navbar from '@/components/Navbar'
import React from 'react'

const Projectslayout = ({
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

export default Projectslayout