import React from 'react'

const Goals = () => {
    return (
        <div className='my-24 xs:max-md:mx-7 mx-36'>

            <header>
                <h1 className='text-4xl font-bold'>The Loreon Sandbox has four goals</h1>
            </header>

            <div className='my-7'>
                <div className='flex  xs:max-lg:flex-col items-start gap-x-12'>
                    <div className='basis-1/2 p-5'>
                        <h1 className='font-black text-[56px] inline '>1</h1>
                        <p className='text-base'>
                            Encourage public visibility of experiments or other early work that can add value to the LOREON mission and build the ingredients of a successful Incubation-level project.
                        </p>
                    </div>
                    <div className='basis-1/2  p-5'>
                        <h1 className='font-black text-[56px]'>2</h1>
                        <p className='text-base'>
                            Facilitate alignment with existing projects if (and only if) this is desired.
                        </p>
                    </div>
                </div>
                <div className='flex xs:max-lg:flex-col items-start gap-x-12 '>
                    <div className='basis-1/2 p-5 '>
                        <h1 className='font-black text-[56px]'>3</h1>
                        <p className='text-base'>Nurture projects (e.g., via Loreon Service Desk requests).</p>
                    </div>
                    <div className='basis-1/2 p-5 '>
                        <h1 className='font-black text-[56px]'>4</h1>
                        <p className='text-base'>
                            Remove possible legal and governance obstacles to adoption and contribution by ensuring all projects adhere to Loreon legal, code of conduct, and IP policy requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals