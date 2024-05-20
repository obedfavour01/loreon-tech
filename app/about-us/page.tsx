import AboutHero from '@/components/AboutUs/AboutHero'
import Collaboration from '@/components/AboutUs/Collaboration'
import Community from '@/components/AboutUs/Community'
import Customers from '@/components/AboutUs/Customers'
import Events from '@/components/AboutUs/Events'
import Team from '@/components/AboutUs/Team'
import React from 'react'

const page = () => {
  return (
    <div>
       <AboutHero/>
       <Collaboration/>
       <Team/>
       <Community/>
       <Events/>
       <Customers/>
    </div>
  )
}

export default page