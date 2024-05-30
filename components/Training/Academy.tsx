import Image from 'next/image';
import React from 'react'
import { TbSettingsCode, TbCloudCode } from "react-icons/tb";
import AcademyVideo from './AcademyVideo';


const Academy = () => {
    return (
        <div className='mx-36'>

            <div>
                <h1 className='text-5xl w-1/2 mx-auto text-center font-bold'>
                    Become an expert with <span className='text-loreonblue'>Loreon</span> Academy
                </h1>

                <p className='text-center  w-3/4  mx-auto font-medium text-base my-8'>
                    Built in partnership with the Linux Foundation, the Loreon Academy training and certification program is the vendor-neutral leading source for demonstrating your competence in cloud computing.  Learn from the pioneer of cloud technology.  Curriculum written and designed by experts built directly for the exams.  The only authoritative source for cloud certification accepted by industry.
                </p>
            </div>
            <div className=' w-max rounded-2xl my-8 overflow-hidden mx-auto'>
                <AcademyVideo/>
            </div>


            <div className='flex justify-between gap-12 my-8'>
                <div className='flex gap-3 '>
                    <TbSettingsCode size={90} className='h-max' />
                    <div>
                        <h1 className='text-lg font-bold'>Advance your skills
                            & knowledge</h1>

                        <p className='mt-3'>As the industry’s trusted source, learn
                            best practices directly from cloud native
                            experts in our hands-on labs.
                        </p>
                    </div>
                </div>

                <div className='flex gap-3 '>
                    <TbCloudCode size={90} className='h-max' />
                    <div>
                        <h1 className='text-lg font-bold'>Validate your skills through certifications</h1>

                        <p className='mt-3'>Solve real world challenges with
                            performance-based exams in a
                            command-line environment.
                        </p>
                    </div>
                </div>
                <div className='flex gap-3 items-start'>
                    <Image src={"/assets/icons/examine.svg"}
                        width={80}
                        height={100}
                        alt='icon'
                        className='h-max'
                    />
                    <div>
                        <h1 className='text-lg font-bold m-0'>
                            Solve real world challenges with
                            performance-based exams in a
                            command-line environment.
                        </h1>

                        <p className='mt-3'>Jump start your career and establish
                            your value in the job market with
                            respected, vendor-neutral certifications.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Academy