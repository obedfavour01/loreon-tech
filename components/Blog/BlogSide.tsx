import BlogSideCards from './BlogSideCards'
import { Input } from '../ui/input'
import Filter from './Filter'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

const BlogSide = () => {
    return (
        <div className='lg:w-max 
        xs:max-lg:w-[calc(100%-24px)] basis-5/12 mx-8 px-4 h-max'>
            <div className='flex gap-3 items-center w-full'>
                <div
                    className='flex 
                        items-center 
                        border rounded-md 
                        w-full  
                        h-11 
                        border-[#D0D5DD] 
                        px-3.5 py-2.5
                     
                        
                        '
                >
                    <Search stroke='#667085' size={20} />
                    <Input
                        placeholder='Search'
                        className='border-none border-0
                                    no-ring:focus
                                    h-full
                                    text-base
                                    placeholder:text-base 
                                    placeholder:font-normal 
                                    focus-visible:ring-0
                                    focus-visible:ring-offset-0
                                    bg-transparent'
                    />
                </div>
                <Filter />
            </div>


            <section className='shadow-sm space-y-4 rounded-3xl mt-11 p-5 bg-[#FCFCFC]'>
                <h1 className='font-bold text-xl mb-5'>Popular Post</h1>
                <BlogSideCards />
                <BlogSideCards />
                <BlogSideCards />
                <BlogSideCards />

            </section>


            <section className='mt-14 xs:max-lg:hidden' >
                <h1 className="text-xl mx-6 font-bold mb-9">Categories</h1>
                <div className='flex flex-wrap gap-4'>
                    <Category text="Software Engineering" />
                    <Category text="Ethical Hacking" />
                    <Category text="White Hat Hacking" />
                    <Category text="Design" />
                    <Category text="SQL injection" />
                    <Category text="Motion design" />
                </div >

            </section>
        </div>

    )
}


const Category = ({ text }: { text: string }) => (

    <div
        className={cn
            (`text-base
            w-max shadow-sm
            font-normal 
            px-7 py-4 bg-[#FCFDFF] text-[#0069FF]`)}>
        {text}
    </div>
)
export default BlogSide