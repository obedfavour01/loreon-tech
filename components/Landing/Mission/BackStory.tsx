import React from 'react'
import { Button } from '../../ui/button'

const BackStory = () => {
    return (
        <div className='w-max xs:max-lg:w-screen '>
            <p className='text-loreonblue text-sm font-semibold'>
                Breaking business barriers
            </p>
            <h1 className="font-extrabold 
                text-6xl 
                
                w-max
                xs:max-lg:text-3xl
                leading-[63px]
                text-[#343434]"
            >
                Loreon <br/> Backstory</h1>
            <p className='my-4 text-base   lg:max-w-96'>
                Lorem ipsum dolor sit amet consectetur
                adipiscing elit Ut et massa mi.
                Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla,
                mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
                Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo,
                non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante.
            </p>

            <p className='text-base max-w-96 '>
                Lorem ipsum dolor sit amet consectetur
                adipiscing elit Ut et massa mi.
                Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla,
                mattis ligula consectetur,
                ultrices mauris.
            </p>

            <Button className='bg-bg_blue mt-8 rounded-3xl'>
                Get Started
            </Button>
        </div>
    )
}

export default BackStory