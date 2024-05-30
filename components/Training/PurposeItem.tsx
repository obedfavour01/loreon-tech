import React from 'react'
import Image from 'next/image'

  type purpose = {
    PurposeDetails:string,
    PurposeTitle:string,
    className: string
  }

const PurposeItem = ({PurposeTitle,PurposeDetails,className}:purpose) => {
  return (
    <div className={`flex  gap-4 ${className}` }>
        <div className='w-20 h-[80px]'>  
            <Image src = {"/assets/icons/purpose.svg"}
                alt = "pillar"
                width = {400}
                height = {200}
                className = "w-full h-full "
            />
        </div>
        <div>
            <h2 className='font-bold text-2xl text-white'>{PurposeTitle}</h2>
            <p className='text-white font-normal text-lg'>{PurposeDetails}</p>
        </div>
    </div>
  )}

export default PurposeItem