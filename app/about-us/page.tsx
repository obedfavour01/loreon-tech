import AboutHero from '@/components/AboutUs/AboutHero'
import Collaboration from '@/components/AboutUs/Collaboration'
import Community from '@/components/AboutUs/Community'
import Customers from '@/components/AboutUs/Customers'
import Events from '@/components/AboutUs/Events'
import HeroAboutUs from '@/components/AboutUs/HeroAboutUs'
import Team from '@/components/AboutUs/Team'
import WhatWeDo from '@/components/AboutUs/WhatWeDo'
import React from 'react'

const page = () => {
  return (
    <div>
       <HeroAboutUs/>
       <WhatWeDo/>
       <Community/>
       <Customers/>
    </div>
  )
}

export default page