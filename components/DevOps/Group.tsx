import Image from 'next/image'
import React from 'react'
import { IoIosArrowDropright } from 'react-icons/io'
import { Button } from '../ui/button'

const Group = ({type}:{type:string}) => {
  return (
    <div className={`h-[680px] xs:max-lg:h-[480px] 
            relative 
           ${type == "Devops" ?' bg-bg_blue': 'bg-datagreen'}  rounded-6xl overflow-hidden  lg:basis-1/2 `}>
            <Image
                src={`${type == "Devops"? '/assets/images/vector1.png' :'/assets/images/vectogreen.png'}`}
                width={1000}
                height={1000}
                alt='devops'
                className=' absolute object-contain w-max xs:max-lg:h-[200px] h-max   bottom-0'
            />

            <Image
                src={"/assets/images/vector2.png"}
                width={1800}
                height={1800}   
                alt='devops'
                className=' w-max h-max  xs:max-lg:w-[200px]  absolute  right-0 bottom-0'
            />
            <div className='flex 
            flex-col 
            justify-between
            items-center 
            absolute
            top-0 
            bottom-0 
            w-full 
            py-8'>

    <div className='border border-white rounded-5xl p-3'>
        <p className='text-white text-xl font-bold'>Six Month</p>
    </div>



    <div className='w-3/5 text-center'>
        <h1 className='text-6xl xs:max-lg:text-3xl text-center font-bold text-white'>Group Session</h1>
        <p className='my-4'>Individualised Training</p>
        <div className='border border-white w-48 mx-auto rounded-5xl p-3'>
            <p className='text-white text-2xl font-bold'>
                $250
                <span className='text-xs'>/Session</span>
            </p>
        </div>

        <p className= 
            {`${type == "Devops" ? 'text-black':'text-white'}
             mt-4 
             w-1/2 mx-auto
       
             `}
            >
                Duration: Mon - Fri 10:00am - 12:00pm - 02:00pm
        </p>


    </div>

    <Button className='
     bg-black
     text-white
      font-bold 
      border
       border-black 
       rounded-6xl 
       gap-2 h-max
        text-xs'>
        Apply now

        <div className=' p-2 rounded-full bg-white'>
            
        <IoIosArrowDropright className='text-black' size={16}/>
        </div>
    </Button>

</div>



    </div>
  )
}

export default Group