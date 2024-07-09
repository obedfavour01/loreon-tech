import Image from 'next/image'
import React from 'react'

const Mission = () => {
    return (
        <div className='flex justify-center 
                items-center 
                bottom-wavy-border
                pt-48
                pb-32
                mb-8
                gap-16 
                px-24 w-full bg-loreonblue  '>
            <div className='space-y-4 text-white  basis-1/2 '>
                <h1 className='text-6xl font-cool font-normal'>Our Mission</h1>

                <p className='text-3xl font-extralight'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                    Aliquam in hendrerit urna.
                </p>

                <p className='text-3xl font-extralight'>
                    Pellentesque sit amet sapien fringilla,
                    mattis ligula consectetur, ultrices mauris.
                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>

                <p className='text-3xl font-extralight'>
                    Vestibulum auctor ornare leo,
                    non suscipit magna interdum eu.
                    Curabitur pellentesque nibh nibh,
                    at maximus ante.
                </p>
            </div>
            <div className='basis-1/2'>
                <Image
                    src={"/assets/images/training/mission.jfif"}
                    height={800}
                    width={800}
                    alt='service'
                    className='object-cover h-[531px] w-[617px] rounded-6xl'
                />

            </div>
        </div >
    )
}

export default Mission