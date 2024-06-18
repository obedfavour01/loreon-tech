import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Pop } from '@/lib/fonts'

const NewProjects = () => {
    return (
        <div className=' flex 
        justify-center
        xs:max-lg:flex-col
        my-14 mx-40 
        md:max-2xl:mx-12
        xs:max-md:mx-6 
        px-12 sm:max-lg:px-8 
        xs:px-3
        py-14 rounded-2xl
        bg-black gap-8'>

            <div className='basis-1/2'>
                <h1 className={`${Pop.className} text-white mb-3 font-bold text-3xl`}>
                    New Projects
                </h1>
                <p className='text-[#FFFFFF8F]'>
                    If you have a project that you want
                    to move into Loreon or want to start
                    a new project to be formed within
                    Loreon, please review the Project
                    Proposal Process.
                </p>
            </div>





            <div>
                <div className="flex 
                                w-full 
                                max-w-sm
                                items-center 
                                xs:max-sm:space-x-1
                                space-x-4">
                    <Input
                        type="email"
                        placeholder="Enter email address" 
                        className='h-12 text-white w-64 border border-[#FFFFFF1F] 
                        bg-transparent py-1 px-6
                         placeholder:text-[#FFFFFF66]
                        '
                    />
                    <Button
                        type="submit"
                        className='py-1 bg-bg_blue text-xs h-12'>
                        Get project proposal process
                    </Button>

                </div>
                <p className='mt-4  text-xs text-[#FFFFFF7A]'>
                    We care about the protection of your data. read our
                    <span className='text-loreonblue/70'>
                        Privacy policy
                    </span>
                </p>
            </div>
        </div>
    )
}

export default NewProjects