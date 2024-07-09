import React from 'react'
import IntroText from './IntroText'
import Gallery from '../../../components/Landing/Hero/Gallery'
import Stat from './Stat'
import Tags from './Tags'
import Navbar from '@/components/Navbar'
import HeroTextbox from './NewHero/HeroTextbox'
import HeroImgBox from './NewHero/HeroImgBox'

const Hero = () => {
  return (
    <section className=' xs:max-lg:mt-8 bg-black '>
      <Navbar/>
      <div className='flex py-8 '>
        <HeroTextbox/>
        <HeroImgBox/>
      </div>

    </section>
  )
}

export default Hero