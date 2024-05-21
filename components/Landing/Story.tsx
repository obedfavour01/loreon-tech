import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Story = () => {
    return (
        <div className='m-36 flex xs:max-lg:flex-col xs:max-lg:mx-4  xs:max-lg:gap-y-12 justify-between'>
            <div className='basis-1/2'>

                <div className='flex items-center gap-6'>
                    <div className='w-96 h-72 rounded-5xl bg-[#deeaff] p-9 -rotate-6 text-left'>
                        <h1 className='text-sm font-bold pb-3'>Our Vision</h1>
                        <p className='font-normal text-base'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                            Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
                            
                        </p>
                    </div>


                    <div className='w-[98px] h-[98px]'>

                        <Image
                            src={"/assets/images/woman.png"}
                            width={98}
                            height={98}
                            alt='woman'
                            className='w-[98px] object-fill rounded-full border-2 border-gray-700'
                        />
                    </div>
                </div>



                <div className='flex items-center gap-6'>
                    <div className='w-[98px] h-[98px] rotate-6'>

                        <Image
                            src={"/assets/images/man.png"}
                            width={98}
                            height={98}
                            alt='woman'
                            className='w-[98px] object-fill rounded-full border-2 border-gray-700'
                        />
                    </div>

                    <div className='w-96 h-56 rounded-5xl bg-[#FFEBD2] p-9 rotate-6 text-left'>
                        <h1 className='text-sm font-bold pb-3'>Our Mission</h1>
                        <p className='font-normal text-base'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                            
                        </p>
                    </div>

                </div>



            </div>
            <div className='text-left basis-1/2 xs:max-lg:px-2 pl-12'>
                <p className='text-loreonblue text-sm font-semibold'>Breaking business barriers</p>
                <h1 className="font-extrabold text-6xl xs:max-lg:text-4xl leading-[63px] text-[#343434]">Loreon Backstory</h1>
                <p className='my-4 text-base'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.
                </p>

                <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>

                <Button className='bg-bg_blue mt-8 rounded-3xl'>Get Started</Button>
            </div>
        </div>
    )
}

export default Story