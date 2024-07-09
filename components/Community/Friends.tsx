import React from 'react'
import FAQ from '../Landing/FAQ/FAQ'

const Friends = () => {
  return (
    <div className='px-24 xs:max-xl:px-6 mt-[72px] pt-36 pb-24 rounded-t-[60px] bg-[#111111] text-white'>

        <div className='w-1/2 md:max-xl:w-3/4 xs:max-md:w-full'>
            <h1 className=" font-bold text-4xl">
              Find friends according to your wishes and niches 🤩
            </h1>
            <p className='text-[#606060]'>You can find tech buddies who are willing 
              to take you along your tech journey and make 
              the journey easy for you
            </p>
        </div>


        <div className=' flex xs:max-md:flex-col 
           flex-wrap items-center gap-12 mt-16 mb-32'>
          <FriendsCard/>
          <FriendsCard/>
          <FriendsCard/>
        </div>


      <div className=''>

        <FAQ color = {"#606060"}/>
      </div>

    </div>


      )
}

const FriendsCard = () => (
  <div className='py-16 px-11 lg:px-6 bg-[#252525] rounded-[60px]  xs:max-xl:min-w-96 w-[calc(33.33%-48px)]'>
      <h1 className=' text-white text-3xl font-bold'>Guaranteed privacy is safe</h1>
      <p className='text-[#606060] mt-4'>
        Privacy will be maintained as strongly as possible,
         so that personal information are not misused
      </p>
  </div>
)

export default Friends