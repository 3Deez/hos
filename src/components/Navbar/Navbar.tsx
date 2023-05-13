'use client'
import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

const NavbarLink: FC<{ label: string; href: string }> = ({ href, label }) => {
  const pathname = usePathname()
  const [activeUrl, setActiveUrl] = useState(`/${pathname.split('/')[1]}`)

  useEffect(() => setActiveUrl(`/${pathname.split('/')[1]}`), [pathname])

  return (
    <Link href={href} className={cx(activeUrl === href && 'text-yellow')}>
      {label}
    </Link>
  )
}

const Navbar: FC = () => {
  return (
    <div className='flex w-full items-center justify-center border text-lg font-semibold text-white'>
      <div className='fixed top-8 flex w-10/12 items-center justify-between rounded-md bg-primary px-8 py-6'>
        <div className='w-3/12'>
          <Link href='/'>HOS, NIGER STATE</Link>
        </div>
        <div className='flex w-5/12 items-center justify-center gap-x-7'>
          <NavbarLink href='/' label='Home' />
          <NavbarLink href='/about' label='About' />
          <NavbarLink href='/media' label='Media' />
          <NavbarLink href='/mda' label='MDA' />
        </div>
        <div className='w-3/12 text-right'>
          <NavbarLink href='/contact' label='Contact' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
