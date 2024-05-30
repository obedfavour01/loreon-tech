import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { IoIosArrowDropright } from 'react-icons/io'

const DatatHero = () => {
  return (
    <div className='relative rounded-3xl overflow-hidden h-max  my-12 mx-8'>
            <Image
                src={"/assets/images/datamain.jpg"}
                width={1800}
                height={1800}
                alt='devops'
                className='w-full object-cover block'
            />

            <div className="absolute inset-0 bg-data-gradient"></div>

            <div className='absolute bottom-20 w-full text-center'>
                
                    <h1 className='font-bold text-9xl text-white'>
                    Data is Life
                    </h1>

                    <p className='text-3xl text-white my-4'>
                    Go on your data journey with the professionals 
                    </p>
                

                <Button className='text-datagreen bg-white font-bold rounded-6xl gap-3 h-max text-2xl'>
                    Apply now

                    <div className=' p-4 rounded-full bg-datagreen'>
                        
                    <IoIosArrowDropright className='text-white'/>
                    </div>
                </Button>
            </div>

            <div>

            </div>
        </div>
  )
}

export default DatatHero