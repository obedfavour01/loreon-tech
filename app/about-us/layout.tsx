import Navbar from '@/components/Navbar'
import React from 'react'

const Authlayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section>
      <Navbar variant="light" />
      {children}
    </section>
  )
}

export default Authlayout