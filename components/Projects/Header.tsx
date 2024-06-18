import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <h1 className="font-bold text-6xl xs:max-md:text-3xl">
          A few project we’ve supervised</h1>
        <p className='text-[#828282] xs:max-md:text-lg text-2xl my-6'>
          A subheading with a brief description of you, your work, 
            and what you’re all about—no biggie
        </p>

        <Image
            alt='header-img'
            width={700}
            height={700}
            src={"/assets/images/interior.jpg"}
            className='w-full h-72 object-cover rounded-md'
        />

        <h1 className='text-xl mt-6'>Project Title</h1>
        <h3 className='text-sm'>Lorem ipsum dolor sit amet consectetur
             adipiscing elit Ut et massa mi. 
             Aliquam in hendrerit urna. 
             Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. 
        </h3>
    </div>
  )
}

export default Header