import Image from 'next/image'
import React from 'react'

const Community = () => {
    return (
        <section className='flex bg-[#4ABA58] gap-8 px-28 py-20'>
            <div className='basis-5/12'>
                <h1 className='font-bold text-4xl text-white'>
                    We are a community of doers who use open source tools including Kubernetes, Prometheus, Envoy, and many others.
                </h1>

                <p className='text-base text-white font-normal my-6'>
                    Opensource tools have quickly gained adoption and secured diverse community support, becoming some of the highest velocity projects in the history of open source.
                </p>


                <div className='flex'>
                    <div className='flex flex-col'>

                    </div>


                </div>
            </div>
            <div className='basis-7/12
             relative
            shadow-custom-shadow'
            >
                <Image
                    src={"/assets/images/focus.jpg"}
                    height={300}
                    width={600}
                    alt='focus'
                    className=' block object-contain w-full rounded-2xl h-full'
                />

                <div className="absolute inset-0 bg-custom-gradient"></div>

                <div className='absolute bottom-2 left-2 text-white px-6'>
                    <p className='text-base font-normal leading-[29px] mb-12'>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.”</p>

                    <p className='font-semibold text-xl'>Kristin Watson  /  CEO, Loreon</p>

                </div>


            </div>
        </section>
    )
}

export default Community