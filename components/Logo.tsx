import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <div title='Go to Home'>
        <Image
          src={"/assets/images/loreonlogo.png"}
          className="xs:max-lg:w-[100px] w-[150px] h-[36px] object-contain"
          alt='logo'
          width={1000}
          height={1000}
        />
      </div>
    </Link>
  )
}

export const DarkLogo = () => {
  return (
    <Link href={'/'}>
      <div title='Go to Home'>
        <Image
          src={"/assets/images/loreonlog_dark.png"}
          className="xs:max-lg:w-[100px] w-[150px] h-[36px] object-contain"
          alt='logo'
          width={1000}
          height={1000}
        />
      </div>
    </Link>

  )
}

export default Logo