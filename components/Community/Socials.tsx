import React from 'react'
import RoundedArrowLinks from '../RoundedArrowLinks'
import Image from 'next/image'

const Socials = () => {
  return (
    <div className='mx-14 xs:max-md:mx-7 xs:max-md:flex-col flex gap-7 h-[614px] xs:max-md:h-auto'>
      <div className='basis-4/12'>
        <Slack />
      </div>
      <div className='basis-8/12 flex flex-col'>
        <div className='basis-3/5'> 
          <WhatsApp/>
        </div>
        <div className='basis-2/5 flex  gap-6'>
          <div className='basis-1/2'>
            < AboutUs/>
          </div>
          <div className='basis-1/2'>
            <ContactUs/>
          </div>
        </div>
      </div>
    </div>
  )
}


const Slack = () => {
  return (
    <div className=' pr-5 flex flex-col rounded-3xl justify-between h-full bg-[#1D2329]'>
      <div className=' pl-14 mt-9 flex justify-between '>
        <h1 className='flex flex-col gap-3 text-white font-bold text-4xl'>Slack
          <span className='text-base font-normal' >Join now</span>
        </h1>

        <RoundedArrowLinks width='97px'
          arrowColor='black'
          bgColor='white'
          arrowSize={57} />
      </div>
      <div className='mx-auto'>
        <Image
          src={"/assets/images/slack.png"}
          width={800}
          height={800}
          alt='slack'
          className='w-max min-w-[230px] aspect-square' />
      </div>
    </div>
  )
}

const WhatsApp = () => {
  return (
    <div className='pl-16 flex bg-[#FBFBFB] rounded-6xl pb-14 justify-between'>
      <div className='flex flex-col justify-center gap-16 mt-8'>
        <h1 className='flex flex-col gap-3 font-bold text-4xl '>WhatsApp
          <span className='text-base font-normal' >Join now</span>
        </h1>

        <RoundedArrowLinks width='97px'
          arrowColor='black'
          bgColor='white'
          arrowSize={57} />
      </div>
      <div>
      <Image
          src={"/assets/images/whatsapp.png"}
          width={800}
          height={800}
          alt='slack'
          className='w-full aspect-square' />
      </div>
    </div>
  )
}

const AboutUs = () => {
  return (
    <div className='flex flex-col justify-between p-8 bg-loreonblue h-full rounded-6xl'>
      <div className='flex justify-between'>
        <p className='text-white'>Discover about us</p>
        <RoundedArrowLinks 
          width='61px'
          arrowColor='white'
          bgColor='#2A71F4'
          arrowSize={22} 
          className='xs:max-lg:w-9 xs:max-lg:h-9'/>
      </div>
      <div>
        <h1 className='text-4xl xs:max-md:text-lg text-white font-bold'>About Us</h1>
      </div>
    </div>
  )
}


const ContactUs = () => {
  return (
    <div className='flex flex-col justify-between p-8 h-full bg-datagreen rounded-6xl'>
      <div className='flex justify-between'>
        <p className='text-white'>Contact us further</p>
        <RoundedArrowLinks width='61px'
          arrowColor='white'
          bgColor='#36B060'
          arrowSize={22} />
      </div>
      <div>
        <h1 className='text-4xl xs:max-md:text-lg text-white font-bold'>Contact Us</h1>
      </div>
    </div>
  )
}
export default Socials