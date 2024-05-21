import Image from 'next/image'
import React from 'react'

const IntroText = () => {
  return (
    <div className='xs:max-md:mx-2  md:mx-28 lg:mx-32 xl:mx-48 '>
        <h1 className='text-6xl xs:max-md:text-4xl font-bold text-center leading-[80px]'>
            <div className='flex justify-center  gap-5'> 
                <div className=''>
                    <span className='text-loreonblue'>Empowering </span> 
                    the <span className='text-loreongreen'>FUTURE</span>,
                </div>


                <div className='rounded-full h-12 w-12 
                     bg-[#57b8f6] 
                         flex
                         xs:max-lg:hidden
                      justify-center 
                     items-center '>
                    <Image src={"/assets/images/meme.png"} alt='memoji' width={100} height={100}/>
                </div>
            </div>
           <div>

            Today. 
            <span className='text-loreonorange'>Delivering Innovations</span> 
           </div>
            
            <div>
                at warp speed

            </div>
            
        </h1>
    </div>
  )
}

export default IntroText