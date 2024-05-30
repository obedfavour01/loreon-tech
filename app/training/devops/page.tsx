import Benefits from '@/components/DevOps/Benefits'
import DevopsHero from '@/components/DevOps/DevopsHero'
import Ready from '@/components/DevOps/Ready'
import Sessions from '@/components/DevOps/Sessions'
import React from 'react'

const page = () => {
  return (
    <div>
      <DevopsHero/>
      <Benefits type={"Devops"}/>
      <Sessions type='Devops'/>
      <Ready/>
    </div>
  )
}

export default page