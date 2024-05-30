import Image from 'next/image'
import React from 'react'



const MissionCards = () => {
    return (
        <div className='h-max w-max rounded-5xl bg-[#FFF8F0] px-12 py-14 -mt-20 right-20 text-left relative'>

            <Image
                src={"/assets/images/man.png"}
                width={1000}
                height={1000}
                alt='woman'
                className='w-[70px] absolute -left-5 -top-5 z-40 object-contain rounded-full border border-gray-700'
            />
            <h1 className='text-sm font-bold pb-3'> Our Mission</h1>
            <p className='font-normal text-base w-80'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Incidunt sed vel neque placeat perferendis totam, ad enim 
                numquam expedita ipsum deserunt. 
                
            </p>
        </div>
    )
}

export default MissionCards