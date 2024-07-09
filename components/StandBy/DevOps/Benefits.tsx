import Image from 'next/image'
import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaArrowRightLong, FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa';
import Cards from './Cards';


const devopsBlue = '#1362F3'
const dataGreen = '#20A84E'

const Benefits = ({type}:{type:string}) => {
    return (
        <section className='mx-24 my-20 xs:max-lg:mx-6'>
            <header className='text-3xl font-bold my-7'>Benefits</header>

            <div className='flex xs:max-lg:flex-col justify-between gap-8'>

                <div className='h-[400px] 
                   
                    w-[576px] 
                    xs:max-lg:w-full
                    xs:max-lg:h-[260px] 
                    overflow-hidden 
                    relative rounded-3xl'>
                    <Image
                        src={"/assets/images/devopsexperience.jpg"}
                        width={1800}
                        height={1800}
                        alt='devops'
                        className='w-full h-full object-cover block'
                    />

                    <div className="absolute inset-0 bg-experience-gradient"></div>

                    <div className='absolute 
                    top-0 bottom-0 flex 
                    flex-col 
                    justify-between 
             
                    p-8'>
                        <IoIosAddCircleOutline className='text-white' size={48} fontVariant={"sm"} />

                        <div className='flex items-center justify-between'>
                            <div className='w-3/4'>
                                <h1 className='text-white text-4xl font-bold'>Experience</h1>
                                <p className='text-white text-2xl'>Our devops engineers has over
                                    10 years + of experience
                                </p>
                            </div>
                            <div className='bg-white 
                                        flex 
                                        justify-center 
                                        items-center 
                                        rounded-full
                                        h-16 w-16'>
                                <FaArrowRightLong className='-rotate-[45deg]' size={36} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-6 xs:max-lg:gap-2'>
                        <Cards bgColor='#fff' 
                        textColor= {type == "Devops"? devopsBlue: dataGreen} text='Comprehensive Classes and Practicals' />
                        <Cards 
                        bgColor= {type == "Devops"? devopsBlue: dataGreen} textColor='#fff' text='Attention to details' />
                    </div>

                    <p className='w-1/2 xs:max-lg:w-full text-lg my-4'>We provide concept specifics trainings for 
                        our <span className='font-black '>{type}</span> trainees to get real experience 
                        they need in real world scenarios
                    </p>

                    <p className={`text-lg font-black 
                    ${type =='Devops' ? 'text-loreonblue': 'text-datagreen'} `}>Apply Now</p>
                </div>
            </div>
        </section>
    )
}

export default Benefits