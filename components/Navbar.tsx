import Image from 'next/image'
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
import { Mail, MessageSquare, PlusCircle, UserPlus } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-20 pt-9 xs:max-lg:px-6 xs:max-lg:mt-4 '>
      <Logo />

      <MobileSidebar />
      <div className='flex gap-6 items-center xs:max-lg:hidden'>
        <NavItem text="About" href='/about-us' />
        <NavItem text="Projects" href='/projects' />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <NavItem text="Training" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='pl-6 py-2 '>

            <Link href={"/training"}>
              <DropdownMenuLabel>Overview</DropdownMenuLabel>
            </Link>

            <DropdownMenuSub >
              <DropdownMenuSubTrigger className=''>
                <h5 className='text-[#586283] '>Role based</h5>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent >
                  <DropdownMenuItem>
                    <Link href={"/training/data"}>
                      <span className='text-[#586283]'>Data</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/training/devops"}>
                      <span className='text-[#586283]'>DevOps</span>

                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>


            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <h5 className='text-[#586283] w-28'>Certification  </h5>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <span className='text-[#586283]'>AWS Developer</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className='text-[#586283]'>AWS Sysops</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className='text-[#586283]'>AWS DevOps</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

          </DropdownMenuContent>
        </DropdownMenu>


        <NavItem text="Community" href='/community' />



        <NavItem text="Blogs & News" href='/blog' />



        <NavItem text="Contact Us" href='/contact-us' />


        <Button className='bg-bg_blue text-white rounded-xl'> Get started</Button>
      </div >
    </nav >
  )
}

export default Navbar