import React from 'react'
import IntroText from './IntroText'
import Gallery from '../../../components/Landing/Hero/Gallery'
import Stat from './Stat'
import Tags from './Tags'

const Hero = () => {
  return (
    <div className='mt-20 xs:max-lg:mt-8'>
      <IntroText />
      <Tags />
      <Gallery />
      <Stat />

    </div>
  )
}

export default Hero