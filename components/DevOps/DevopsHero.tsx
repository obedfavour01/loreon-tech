import Image from 'next/image'
import React from 'react'
import { IoIosArrowDropright } from 'react-icons/io'
import { Button } from '../ui/button'


const DevopsHero = () => {
    return (
        <div className='relative rounded-3xl overflow-hidden h-[100vh]  my-12 mx-8'>
            <Image
                src={"/assets/images/devopsmain.jpg"}
                width={1800}
                height={1800}
                loading='lazy'
                alt='devops'
                className='w-full object-cover block bg-fixed'
            />

            <div className="absolute inset-0 bg-devops-gradient"></div>

            <div className='absolute bottom-20 left-2 flex items-end mx-11'>
                <div>
                    <h1 className='font-bold text-7xl text-white w-3/4'>Become a Certified
                        DevOps Engineer
                    </h1>

                    <p className='text-sm text-white'>
                        Train with the most <br/>
                        experienced engineers
                    </p>
                </div>

                <Button className='text-loreonblue bg-white font-bold rounded-6xl gap-3 h-max text-2xl'>
                    Apply now

                    <div className=' p-4 rounded-full bg-bg_blue'>
                        
                    <IoIosArrowDropright className='text-white'/>
                    </div>
                </Button>
            </div>

            <div>

            </div>
        </div>
    )
}

export default DevopsHero