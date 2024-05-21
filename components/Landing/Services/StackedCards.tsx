import Image from 'next/image'
import React from 'react'

const StackedCards = () => {
  return (
   <div className=" relative flex justify-center w-full h-full mt-6  overflow-hidden ">
      <div className="absolute bg-[#0072EF80] rounded-5xl shadow-md h-48 w-[320px] p-4 top-4">
      
      </div>
      <div className="absolute bg-[#0072EF80] rounded-5xl shadow-md mx-auto h-48 p-4 w-[360px] top-8 ">
        
      </div>
      <div className="absolute bg-white overflow-hidden rounded-5xl shadow-md w-full h-48 top-12">
        <Image
          src={"/assets/images/board.jpg"}
          width={400}
          height={300}
          alt='images'
          className='w-full overflow-hidden h-full object-cover'
          />
      </div>
    </div>
  )
}

export default StackedCards