import Image from 'next/image'
import React from 'react'

const Startups = () => {
    return (
        <section className='mx-32'>
            <div className='flex justify-between gap-36'>
                <div className='basis-1/2'>
                    <header className='text-4xl font-bold'>We support early stage
                        startups and leading tech
                        giants.
                    </header>

                    <article className='mt-4 leading-[28px] pr-6 '>
                        Join us on a journey beyond boundaries, where innovation isn&apos;t
                        just a destination
                        – it&apos;s the very fabric of our existence. At LOREON Technology, we&apos;re
                        redefining the future by delivering cutting-edge solutions faster than you can imagine.
                    </article>
                </div>
                <div className='basis-1/2'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='bg-[#F0F6FF] py-4 px-7 rounded-lg'>
                            <span className='text-6xl font-bold py-4'>10</span>
                            <p className='text-xl font-normal'>Completed Projects</p>
                        </div>
                        <div className='bg-[#E9FFEC] py-4 px-7 rounded-lg'>
                            <span className='text-6xl font-bold py-4'>12</span>
                            <p className='text-xl font-normal'>Proposed Projects</p>
                        </div>
                        <div className='bg-[#FFF8F0] col-span-2 py-4 px-7 flex items-center rounded-lg gap-4'>
                            <span className='text-6xl font-bold '>13</span>
                            <p className='text-xl font-normal'>In-the-Works Projects</p>
                        </div>
                    </div>

                </div>
            </div>





            <div className='my-12 px-10'>
                <div className='flex gap-12 my-12 justify-center'>
                    <Image src="/assets/images/core.png" alt="logo" width={60} height={60} className='object-contain' />
                    <Image src="/assets/images/contour.png" alt="logo" width={60} height={60} className='object-contain' />
                    <Image src="/assets/images/cri.png" alt="logo" width={60} height={60} className='object-contain' />
                    <Image src="/assets/images/crossplane.png" alt="logo" width={60} height={60} className='object-contain' />
                    <Image src="/assets/images/cube.png" alt="logo" width={60} height={60} className='object-contain' />
                    <Image src="/assets/images/dapr.png" alt="logo" width={60} height={60} className='object-contain' />
                    <Image src="/assets/images/dragon.png" alt="logo" width={60} height={60} className='object-contain' />
                    <Image src="/assets/images/" alt="logo" width={60} height={60} className='object-contain' />
                    <Image src="/assets/images/core.png" alt="logo" width={60} height={60} className='object-contain' />
                    <Image src="/assets/images/rook.png" alt="logo" width={60} height={60} className='object-contain' />
                </div>
                <div className='flex gap-12 justify-center'>
                    <Image src="/assets/images/spiffe.png" alt="logo" width={60} height={60} className='object-contain'/>
                    <Image src="/assets/images/core.png" alt="logo" width={60} height={60} className='object-contain'/>
                    <Image src="/assets/images/core.png" alt="logo" width={60} height={60} className='object-contain'/>
                    <Image src="/assets/images/telemetry.png" alt="logo" width={60} height={60} className='object-contain'/>
                    <Image src="/assets/images/spire.png" alt="logo" width={60} height={40} className='object-contain'/>
                    <Image src="/assets/images/core.png" alt="logo" width={60} height={60} className='object-contain'/>
                    <Image src="/assets/images/core.png" alt="logo" width={60} height={60} className='object-contain'/>
                    <Image src="/assets/images/strimzi.png" alt="logo" width={60} height={60} className='object-contain'/>
                    <Image src="/assets/images/prom.png" alt="logo" width={60} height={60} className='object-contain'/>
                    <Image src="/assets/images/open.png" alt="logo" width={60} height={60} className='object-contain'/>

                </div>
            </div>
        </section>
    )
}

export default Startups