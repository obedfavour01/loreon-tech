"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavItemProps = {
    text?: string, 
    href?: string,
    children?: React.ReactNode,
    navClassName? : string
}


const NavItem = ({children,text,href,navClassName = "#"}:NavItemProps) => {

  const path = usePathname();
 
  return (
    <Link 
      href={href} 
      className={cn(`text-[#fff] text-sm hover:text-gray-400 ${path ===  href && `text-black`}`,navClassName)} 
      passHref>

  {
        children ||
        <p>
            {text}</p>
      }

   
    
    </Link>
  )
}

export default NavItem