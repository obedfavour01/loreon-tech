import React from 'react'
import OneonOne from './OneonOne'
import Group from './Group'

const Sessions = ({ type }: { type: string }) => {
  return (
    <section className='mx-7'>
      <header className='text-center font-bold xs:max-lg:text-2xl text-5xl'>
        Simple no-tricks pricing
      </header>


      <div className='flex xs:max-lg:flex-col gap-8 my-12 red'>
        <OneonOne />
        <Group type={type} />
      </div>
    </section>
  )
}

export default Sessions