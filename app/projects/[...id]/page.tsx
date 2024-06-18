import ProjectsCards from '@/components/Projects/ProjectsCards'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='mx-20  xs:max-lg:mx-7 mt-24'>
            <h1 className="font-bold text-6xl xs:max-md:text-3xl">
                Project title
            </h1>
            <p className='text-[#828282] xs:max-md:text-lg text-2xl my-6'>
                A subheading with a brief description of you, your work,
                and what you’re all about—no biggie
            </p>

            <Image
                alt='project-img'
                width={800}
                height={700}
                src={"/assets/images/ocean.jpg"}
                loading='lazy'
                className=' w-full 
                 h-[600px] object-cover
                rounded-lg'
            />



            <article className='space-y-8 xs:max-lg:mx-7 mx-72 my-24'>
                <p className='text-xl '>
                    Body text for your whole article or post
                    . We’ll put in some lorem ipsum to show how
                     a filled-out page might look:
                </p>

                <p className='text-xl'>
                    Excepteur efficient emerging, minim veniam anim aute
                     carefully curated Ginza conversation exquisite
                      perfect nostrud nisi intricate Content. Qui  
                      international first-class nulla ut. Punctual
                       adipisicing, essential lovely queen tempor 
                       eiusmod irure. Exclusive izakaya charming 
                       Scandinavian impeccable aute quality of 
                       life soft power pariatur Melbourne occaecat 
                       discerning. Qui wardrobe aliquip, et Porter 
                       destination Toto remarkable officia Helsinki e
                       xcepteur Basset hound. Zürich sleepy perfect consectetur.
                </p>

                <p className='text-xl'>

                    Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
                </p>
            </article>


            <div className='flex gap-8 w-full  xs:max-lg:flex-col xs:max-lg:h-max h-[420px]'>

                <div className='basis-1/2'>
                    <Image
                        alt='project-img'
                        width={800}
                        height={700}
                        src={"/assets/images/flowers.jpg"}
                        className='h-full xs:max-lg:h-72 object-cover'
                    />
                </div>


                <div className='basis-1/2'>
                    <Image
                        alt='project-img'
                        width={800}
                        height={700}
                        src={"/assets/images/paddle.jpg"}
                        className='h-full xs:max-lg:h-72'
                    />
                </div>
            </div>


            <article className='space-y-8 xs:max-lg:mx-7 mx-72 my-32'>
                <p className='text-xl '>
                    Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera
                </p>

                <p className='text-xl'>


                    Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
                </p>

               
            </article>


            <div className='my-24'>
                <header className='flex justify-between my-6'>
                    <h1 className='text-3xl font-semibold'>Related projects</h1>
                 <Link href={"/projects"}><p className='text-xl hover:underline'>See More</p></Link>   
                </header>

                <div className=' flex gap-8 overflow-x-scroll no-scrollbar'>
                    <ProjectsCards type='related' projectNum='1'/>
                    <ProjectsCards type='related' projectNum='2'/>
                    <ProjectsCards type='related' projectNum='3'/>
                    <ProjectsCards type='related' projectNum='3'/>
                    <ProjectsCards type='related' projectNum='3'/>
                    <ProjectsCards type='related' projectNum='3'/>
                </div>
            </div>
        </div>
    )
}

export default page