import Image from 'next/image'
import React from 'react'


const SandboxImageArr = [
    {
        img: "a.svg",
        title: ""
    },
    {
        img: "b.svg",
        title: ""
    },
    {
        img: "c.svg",
        title: ""
    },
    {
        img: "d.svg",
        title: ""
    },
    {
        img: "e.svg",
        title: ""
    },
    {
        img: "f.svg",
        title: ""
    },
    {
        img: "g.svg",
        title: ""
    },
    {
        img: "h.svg",
        title: ""
    },
    {
        img: "i.svg",
        title: ""
    },
    {
        img: "j.png",
        title: ""
    },
    {
        img: "k.svg",
        title: ""
    },
    {
        img: "l.svg",
        title: ""
    },
    {
        img: "m.svg",
        title: ""
    },
    {
        img: "n.svg",
        title: ""
    },
    {
        img: "o.svg",
        title: ""
    },
    {
        img: "p.svg",
        title: ""
    },
    {
        img: "q.svg",
        title: ""
    },
    {
        img: "r.svg",
        title: ""
    },
    {
        img: "s.svg",
        title: ""
    },
    {
        img: "j.png",
        title: ""
    },
   
   
]
const Projects = () => {
  return (
    <div className='rounded-[60px] bg-black mt-14 mx-6 pt-32 pb-32'>
        <header className='text-center text-white'>
            <h1 className='text-6xl font-bold'>Sandbox Projects</h1>
            <p className='text-2xl font-thin mt-4 text-[#828282]'>
                Loreon Sandbox is the entry point for early stage projects.
            
            </p>

        </header>


            <div className='flex 
                flex-wrap 
                gap-9 
                xs:max-md:gap-6 
                mx-24  
                xs:max-lg:mx-6 
                mt-24
                xs:max-md:justify-center'>
                {SandboxImageArr.map((item,ind) => (

                    <div key={ind} className='px-12 pb-6  xs:max-md:px-0 md:max-lg:px-2  flex flex-col gap-2 items-center'>

                        <Image 
                            
                            alt='image'
                            width={800}
                            src={`/assets/images/sandboxsvg/${item.img}`}
                            height={800}
                            className='w-28 h-28 xs:max-md:w-20  xs:max-md:h-20'/>
                            <p className='text-white'>
                                Service Mesh
                            </p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Projects