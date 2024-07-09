import React from 'react'

import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger
}
    from '../../ui/accordion'

const LearningModules = () => {
    return (
        <div className='my-16 mx-28 xs:max-md:mx-7'>

            <h1 className='text-3xl font-bold'>Your learning journey...</h1>
            <div className="flex xs:max-lg:flex-col gap-6  mt-5">

                <div className='basis-1/2 space-y-6'>
                    {
                        Array.from({ length: 7 }).map((_, ind) => (
                            <div key={ind} className='bg-[#FCFCFC]  hover:bg-[#dfdede] transition-colors duration-500 px-5'>
                                <Accordion type="single" collapsible className="w-full ">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='hover:no-underline'>
                                            <h2 className='text-[#4E4E4E] font-bold  hover:no-underline'>
                                                Fundamentals
                                            </h2>
                                        </AccordionTrigger>
                                        <AccordionContent className='mr-13'>
                                            <p>
                                                Learn Basic Linux Commands: Understand
                                                essential Linux commands as Linux is
                                                commonly used in servers.
                                            </p>

                                            <p>
                                                Networking Basics: Familiarize yourself
                                                with basic networking concepts and tools
                                                (DNS, HTTP/HTTPS, FTP, etc.).
                                            </p>

                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        ))
                    }
                </div>
                <div className='basis-1/2 space-y-6'>
                    {
                        Array.from({ length: 7 }).map((_, ind) => (
                            <div key={ind} className='bg-[#FCFCFC] hover:bg-[#dfdede] transition-colors duration-500 px-5'>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>
                                            <h2 className='text-[#4E4E4E] font-bold underline-none'>
                                                Fundamentals
                                            </h2>
                                        </AccordionTrigger>
                                        <AccordionContent className='mr-13'>
                                            <p>
                                                Learn Basic Linux Commands: Understand
                                                essential Linux commands as Linux is
                                                commonly used in servers.
                                            </p>

                                            <p>
                                                Networking Basics: Familiarize yourself
                                                with basic networking concepts and tools
                                                (DNS, HTTP/HTTPS, FTP, etc.).
                                            </p>

                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                            </div>

                        ))
                    }
                </div>

            </div>
        </div>

    )
}

export default LearningModules