import Image from 'next/image'
import React from 'react'
import { IoIosArrowDropright } from 'react-icons/io'
import { Button } from '../ui/button'


const DevopsHero = () => {
    return (
        <div className='relative rounded-3xl overflow-hidden h-[100vh] 
         my-12 
         xs:max-lg:mx-6
         mx-8'>
            <Image
                src={"/assets/images/devopsmain.jpg"}
                width={1800}
                height={1800}
                loading='lazy'
                alt='devops'
                className='w-full h-max object-cover block '
            />

            <div className="absolute inset-0 bg-devops-gradient"></div>

            <div className='absolute bottom-20 left-2 
                flex 
                xs:max-lg:flex-col 
                items-end 
                xs:max-lg:gap-y-6
                xs:max-lg:items-start
                xs:max-lg:mx-4 mx-11'>
                <div>
                    <h1 className='font-bold
                         text-7xl
                          xs:max-lg:text-3xl
                        text-white w-3/4 
                        xs:max-lg:w-full'
                    >
                        Become a Certified
                        DevOps Engineer
                    </h1>

                    <p className='text-sm text-white'>
                        Train with the most <br />
                        experienced engineers
                    </p>
                </div>

                <Button className=' 
                text-loreonblue
                 bg-white 
                 font-bold 
                 rounded-6xl
                gap-3 
                xs:max-lg:text-lg
                h-max text-2xl'>
                    Apply now

                    <div className=' p-4 xs:max-lg:p-2 rounded-full bg-bg_blue'>

                        <IoIosArrowDropright className='text-white' />
                    </div>
                </Button>
            </div>

            <div>

            </div>
        </div>
    )
}

export default DevopsHero