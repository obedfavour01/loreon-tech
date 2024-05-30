import DatatHero from '@/components/Data/DatatHero'
import Benefits from '@/components/DevOps/Benefits'
import Ready from '@/components/DevOps/Ready'
import Sessions from '@/components/DevOps/Sessions'
import React from 'react'

const page = () => {
  return (
    <div>
        <DatatHero/>
        <Benefits type='Data'/>
        <Sessions type='Data'/>
        <Ready/>
    </div>
  )
}

export default page