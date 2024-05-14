import Link from 'next/link'
import React from 'react'

type NavItemProps = {
    text: string,
    href?: string
}
const NavItem = ({text,href = "#"}:NavItemProps) => {
  return (
    <Link href={href} className='nav__item'>
        <p>{text}</p>
    </Link>
  )
}

export default NavItem