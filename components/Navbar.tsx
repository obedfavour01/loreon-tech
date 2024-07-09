import React from 'react'
import NavItem from './NavItem'
import { Button } from './ui/button'
import Logo from './Logo'
import MobileSidebar from './MobileSidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { ChevronDown, ChevronUp, Mail, MessageSquare, PlusCircle, UserPlus } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = ({className,navClassName}:{className?:string,navClassName?:string}) => {

  return (
    <div className={cn('flex justify-between items-center mb-3 px-20 pt-9 xs:max-lg:px-6 xs:max-lg:mt-4',className)}>
      <Logo />

      <MobileSidebar />
      <div className='flex gap-6 items-center xs:max-lg:hidden'>
        <NavItem text="About" href="/about-us" navClassName = {navClassName}/>
        <NavItem text="Projects" href= "/projects" navClassName = {navClassName}/>
        <DropdownMenu>
          <DropdownMenuTrigger >
            <NavItem href=' ' navClassName = {navClassName}>
              <span className='flex items-center'>
                <span >Training</span>
                <span> <ChevronDown/></span>
              </span>
            </NavItem>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='pl-6 py-2 '>
            <Link href={"/training"}>
              <DropdownMenuLabel>Overview</DropdownMenuLabel>
            </Link>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className=''>
                <h5 className='text-black '>Role based</h5>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className='mx-2' >
                  <DropdownMenuItem >
                    <Link href={"/training/data"}>
                      <span className='text-black'>Data</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/training/devops"}>
                      <span className='text-black'>DevOps</span>

                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>


            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <h5 className='text-black w-28'>Certification  </h5>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className='mx-2'>
                  <DropdownMenuItem>
                    <span className='text-black'>AWS Developer</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className='text-black'>AWS Sysops</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className='text-black'>AWS DevOps</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

          </DropdownMenuContent>
        </DropdownMenu>


        <NavItem text="Community" href='/community' navClassName = {navClassName}/>



        <NavItem text="Blogs & News" href='/blog' navClassName = {navClassName}/>



        <NavItem text="Contact Us" href='/contact-us' navClassName = {navClassName}/>


        <Button className='bg-white text-loreonblue rounded-xl'> Get started</Button>
      </div >
    </div >
  )
}

export default Navbar