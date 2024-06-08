import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoIosAddCircleOutline } from 'react-icons/io'

type CardsProps = {
    bgColor: string,
    textColor: string,
    text: string,
}

const Cards = ({bgColor,textColor,text}:CardsProps) => {
    return (
        <div className='w-1/2 xs:max-lg:w-full 
            flex flex-col 
            justify-between  
            h-[220px] 
            rounded-6xl
            xs:max-lg:px-3
             px-5 py-4 border-2'
            style={{backgroundColor: `${bgColor}`, color: textColor,borderColor:textColor}}>
            <IoIosAddCircleOutline
                className='text-white xs:max-lg:w-7'
                size={48}
                
                color={textColor}
            />

            <h1 className='font-bold text-2xl xs:max-lg:text-base' style={{color: textColor}}>{text}</h1>

            <div className='
                            flex 
                            justify-center 
                            items-center 
                            xs:max-lg:h-7
                            xs:max-lg:w-7
                            ml-auto
                            rounded-full
                            h-12 w-12'
                            style={{backgroundColor: `${textColor}`}}>
                <FaArrowRightLong 
                    className='xs:max-lg:w-3' 
                    color = {bgColor} size={24} />
            </div>



        </div>
    )
}

export default Cards