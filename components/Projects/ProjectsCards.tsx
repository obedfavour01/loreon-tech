import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectsCards = ({projectNum, type}:{projectNum: string,type?: string}) => {
    return (

        <div className=' w-[45%]'>
                <Link href={`/projects/${projectNum}`} className=' h-max w-max'>
                <Image
                    alt='project-img'
                    width={700}
                    height={700}
                    src={"/assets/images/asianmodel.jpg"}
                    className={`
                    ${type =="related" &&  'min-w-[408px] h-[322px] xs:max-md:min-w-[171px]'}
                    
                     max-w-full h-[266px] xs:max-md:h-[128px] object-cover object-left-top rounded-md`}
                />

                <h1 className='text-xl xs:max-md:text-sm mt-4'>Project Title</h1>
                <h3 className='text-sm text-[#343434] xs:max-md:text-[8px]'>
                    Lorem ipsum dolor sit amet consectetur
                    adipiscing elit Ut et massa mi.
                    Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla,
                    mattis ligula consectetur, ultrices mauris.
                </h3>
        </Link>
            </div>

    )
}

export default ProjectsCards