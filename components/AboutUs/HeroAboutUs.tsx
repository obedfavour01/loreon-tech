import Image from 'next/image'
import React from 'react'
import { TbCapsule } from 'react-icons/tb'


const HeroAboutUs = () => {
    return (
        <div className='bg-[#F7F7F7] flex px-20 py-24'>
            <div className='basis-1/2 pr-12 space-y-3'>
                <h1 className="text-7xl">
                    We believe everyone should
                    have access to endless
                    opportunities.
                </h1>

                <div className='bg-[#F6FAFF] flex items-center h-20 px-6 gap-3'>
                    <TbCapsule />
                    <div>
                        <h3>Open Access to Expert Strategies</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...   </p>
                    </div>
                </div>

                <div className='bg-[#F6FAFF] flex items-center h-20 px-6 gap-3'>
                    <TbCapsule />
                    <div>
                        <h3>Addressing technology vulnerabilities</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...   </p>
                    </div>
                </div>
            </div>
            <div className='basis-1/2'>
                <Image
                    src={"/assets/images/about-hero.jfif"}
                    height={800}
                    width={800}
                    alt='service'
                    className='object-cover h-[531px] w-[617px] rounded-6xl'
                />

            </div>
        </div>
    )
}

export default HeroAboutUs