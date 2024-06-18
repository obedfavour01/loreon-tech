import Image from 'next/image'
import React from 'react'


type CardsProp = {
    title: string,
    content: string,
    children?: React.ReactNode
}
const VisionCards = () => {
    return (
        <div className='
        xs:max-lg:mx-4  
            h-max 
            xs:max-lg:min-w-[260px]
            rounded-5xl
            xs:max-lg:rounded-2xl
             bg-[#deeaff] 
             px-12 py-14  
             xs:max-md:px-3 
             xs:max-md:py-4
             text-left relative'>

            <Image
                src={"/assets/images/woman.png"}
                width={1000}
                height={1000}
                alt='woman'
                className='w-[70px]  
                xs:max-md:w-11

                4 absolute -right-5 -top-5 z-40 object-contain rounded-full border border-gray-700'
            />
            <h1 className='text-sm font-bold pb-3'>Our Vision</h1>
            <p className='font-normal text-base w-80 xs:max-md:w-56 
            xs:max-md:text-[9px]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Quas dolores ducimus molestias debitis tempora ipsum beatae ex, 
                 molestiae incidunt dolorum sed, saepe repudiandae 
                 sint perspiciatis mollitia, illo hic quasi recusandae animi? 
                 
            </p>

            <Image
                src={"/assets/images/rightvector.png"}
                width={1000}
                height={1000}
                alt='woman'
                className='w-[60px] -right-5 -bottom-[85px]  h-max absolute  z-40 object-contain '
            />
        </div>
    )
}

export default VisionCards