import Image from 'next/image';
import React from 'react'
import { TbSettingsCode, TbCloudCode } from "react-icons/tb";
import AcademyVideo from './AcademyVideo';


const Academy = () => {
    return (
        <div className='flex
                xs:max-lg:flex-col 
                 items-center
                mx-28 
                my-36
                md:max-lg:mx-28 
                xs:max-md:mx-7 
                gap-8'>

            <div className='basis-1/2 h-max'>
                <h1 className='text-5xl xs:max-md:text-3xl xs:max-md:w-full mx-auto text-left font-bold'>
                    Become an expert with <span className='text-loreonblue'>Loreon</span> Academy
                </h1>

                <p className='xs:max-md:w-full  mx-auto font-medium text-base my-8'>
                    Built in partnership with the Linux Foundation,
                    the Loreon Academy training and certification program
                    is the vendor-neutral leading source for demonstrating
                    your competence in cloud computing.
                    Learn from the pioneer of cloud technology.
                    Curriculum written and designed by experts built directly
                    for the exams.  The only authoritative source
                    for cloud certification accepted by industry.
                </p>
                <div className='flex xs:max-lg:flex-col justify-between  gap-12 xs:max-lg:gap-y-8 mt-16'>
                    <div className='flex gap-3 '>
                   
                        <div>
                            <h1 className=' text-base font-normal leading-4'>Advance your skills
                                & knowledge</h1>

                            <p className='mt-3 text-xs'>As the industry’s trusted source, learn
                                best practices directly from cloud native
                                experts in our hands-on labs.
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-3 '>
            
                        <div>
                            <h1 className='text-base font-normal leading-4'>Validate your skills through certifications</h1>

                            <p className='mt-3 text-xs'>Solve real world challenges with
                                performance-based exams in a
                                command-line environment.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div>
                            <h1 className='text-base font-normal leading-4'>
                            Gain a competitive edge
                            in the job market
                            </h1>

                            <p className='mt-3 text-xs'>Jump start your career and establish
                                your value in the job market with
                                respected, vendor-neutral certifications.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <div 
                className='basis-1/2 
                        shadow-training-shadow
                         lg:w-[766px] 
                         lg:h-[429px]  
                         xs:max-md:w-[296px] 
                         overflow-hidden 
                         rounded-2xl 
                         my-8  
                         mx-auto'>
                <AcademyVideo />
            </div>



        </div>
    )
}

export default Academy