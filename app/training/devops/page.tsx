import Benefits from '@/components/DevOps/Benefits'
import DevopsHero from '@/components/DevOps/DevopsHero'
import DevopsLearn from '@/components/DevOps/DevopsLearn'
import LearningModules from '@/components/DevOps/LearningModules'
import Ready from '@/components/DevOps/Ready'
import Sessions from '@/components/DevOps/Sessions'
import React from 'react'

const page = () => {
  return (
    <div className=' overflow-hidden'>
      <DevopsHero/>
      <DevopsLearn/>
      <LearningModules/>
      <Sessions type='Devops'/>
    </div>
  )
}

export default page