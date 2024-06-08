import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { IoIosArrowDropright } from 'react-icons/io'

const OneonOne = () => {
    return (
        <div className='lg:h-[680px]  w-full relative rounded-6xl overflow-hidden basis-1/2 '>
            <Image
                src={"/assets/images/devopsexperience.jpg"}
                width={1800}
                height={1800}
                alt='devops'
                className='w-full h-full  object-cover block'
            />

            <div className="absolute inset-0 bg-session-gradient"></div>

            <div className='flex 
                        flex-col 
                        justify-between
                        items-center 
                        absolute
                        top-0 
                        bottom-0 
                        w-full 
                        py-8'>

                <div className='border border-loreonblue rounded-5xl p-3'>
                    <p className='text-loreonblue text-xl font-bold'>Three Month</p>
                </div>



                <div className='w-3/5 xs:max-lg:w-full text-center'>
                    <h1 className='text-6xl text-center font-bold '>One - On - One Session</h1>
                    <p className='my-4'>Individualised Training</p>
                    <div className='border border-loreonblue w-48 mx-auto rounded-5xl p-3'>
                        <p className='text-loreonblue text-2xl font-bold'>$400
                            <span className='text-xs'>/Session</span>
                        </p>
                    </div>
                </div>

                <Button className='text-black
                 bg-white
                  font-bold 
                  border
                   border-black 
                   rounded-6xl 
                   gap-2 h-max
                    text-xs'>
                    Apply now

                    <div className=' p-2 rounded-full bg-black'>
                        
                    <IoIosArrowDropright className='text-white' size={12}/>
                    </div>
                </Button>

            </div>
        </div>
    )
}

export default OneonOne