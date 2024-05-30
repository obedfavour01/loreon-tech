import Image from 'next/image'
import React from 'react'


type CardsProp = {
    title: string,
    content: string,
    children?: React.ReactNode
}
const VisionCards = () => {
    return (
        <div className='h-max w-max rounded-5xl bg-[#deeaff] px-12 py-14  text-left relative'>

            <Image
                src={"/assets/images/woman.png"}
                width={1000}
                height={1000}
                alt='woman'
                className='w-[70px] absolute -right-5 -top-5 z-40 object-contain rounded-full border border-gray-700'
            />
            <h1 className='text-sm font-bold pb-3'>Our Vision</h1>
            <p className='font-normal text-base w-80'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Quas dolores ducimus molestias debitis tempora ipsum beatae ex, 
                 molestiae incidunt dolorum sed, saepe repudiandae 
                 sint perspiciatis mollitia, illo hic quasi recusandae animi? 
                 
            </p>
        </div>
    )
}

export default VisionCards