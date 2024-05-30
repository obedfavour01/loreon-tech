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
        <div className='w-1/2 flex flex-col justify-between  h-[220px] rounded-6xl px-5 py-4 border-2'
            style={{backgroundColor: `${bgColor}`, color: textColor,borderColor:textColor}}>
            <IoIosAddCircleOutline
                className='text-white'
                size={48}
                color={textColor}
            />

            <h1 className='text-700 text-2xl' style={{color: textColor}}>{text}</h1>

            <div className='
                            flex 
                            justify-center 
                            items-center 
                            ml-auto
                            rounded-full
                            h-12 w-12'
                            style={{backgroundColor: `${textColor}`}}>
                <FaArrowRightLong className='' color = {bgColor} size={24} />
            </div>



        </div>
    )
}

export default Cards