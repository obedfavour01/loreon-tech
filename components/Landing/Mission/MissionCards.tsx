import Image from 'next/image'
import React from 'react'


const MissionCards = () => {
    return (
        <div className='h-max w-max 
            rounded-5xl
             bg-[#FFF8F0] 
             px-12 py-14 
             xs:max-lg:px-3 
             xs:max-lg:py-4
             -mt-20 
             xs:max-lg:-mt-7
             xs:max-lg:right-10
             right-16 
             text-left relative'>



            <Image
                src={"/assets/images/leftvetor.png"}
                width={1000}
                height={1000}
                alt='vector'
                className='w-[90px] -left-9 -rotate-5 -top-[175px] h-max absolute  z-40 object-contain '
            />
            <Image
                src={"/assets/images/man.png"}
                width={1000}
                height={1000}
                alt='woman'
                className='w-[70px] 
                xs:max-lg:w-11 
                absolute -left-4 -top-5 z-40 object-contain rounded-full border border-gray-700'
            />
            <h1 className='text-sm font-bold pb-3'> Our Mission</h1>
            <p className='font-normal 
            xs:max-lg:mx-4
            text-base 
            xs:max-lg:text-[9px]
            w-80 xs:max-lg:w-48'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt sed vel neque placeat perferendis totam, ad enim
                numquam expedita ipsum deserunt.

            </p>
        </div>
    )
}

export default MissionCards