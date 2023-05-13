'use client'
import { useOnClickOutside } from '@/hooks/useOnClickOutSide'
import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useCallback, useEffect, useState } from 'react'
import { ImCross, ImMenu } from 'react-icons/im'

const NavbarLink: FC<{ label: string; href: string }> = ({ href, label }) => {
  const pathname = usePathname()
  const [activeUrl, setActiveUrl] = useState(`/${pathname.split('/')[1]}`)

  useEffect(() => setActiveUrl(`/${pathname.split('/')[1]}`), [pathname])

  return (
    <Link href={href} className={cx(activeUrl === href ? 'text-yellow' : 'text-white')}>
      {label}
    </Link>
  )
}

const Navbar: FC = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { ref } = useOnClickOutside<HTMLDivElement>(() => setOpen(false))

  const checkScroll = useCallback(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => handleScroll
  }, [])

  useEffect(() => {
    checkScroll()
  }, [checkScroll])

  return (
    <div className='top-0 flex w-full items-center justify-center border border-none text-lg font-semibold'>
      <div
        className={cx(
          isScrolled ? 'md:top-0 md:w-full md:rounded-none' : 'md:top-8',
          'fixed top-0 z-50 flex w-full items-center justify-between bg-primary px-8 py-3 transition-all md:w-10/12 md:rounded-md',
        )}
      >
        <Link href='/' className='mr-8 inline rounded-md bg-white p-1'>
          <Image src='/images/logo.png' alt='logo' width={30} height={80} />
        </Link>
        <div className='hidden w-5/12 items-center justify-center gap-x-7  md:flex'>
          <NavbarLink href='/' label='Home' />
          <NavbarLink href='/about' label='About' />
          <NavbarLink href='/media' label='Media' />
          <NavbarLink href='/mda' label='MDA' />
        </div>
        <div className='hidden w-3/12 text-right  md:block'>
          <NavbarLink href='/contact' label='Contact' />
        </div>
        <>
          <div
            ref={ref}
            className={cx(
              !open && 'translate-x-full',
              'absolute right-0 top-0 block h-screen w-3/5 flex-col bg-primary px-8 pt-7 transition duration-500 ease-in-out sm:w-5/12 md:hidden',
            )}
          >
            <button className='flex w-full justify-end text-white md:hidden' onClick={() => setOpen(false)}>
              <ImCross />
            </button>
            <div className='flex flex-col gap-y-6 py-8'>
              <NavbarLink href='/' label='Home' />
              <NavbarLink href='/about' label='About' />
              <NavbarLink href='/media' label='Media' />
              <NavbarLink href='/mda' label='MDA' />
              <NavbarLink href='/contact' label='Contact' />
            </div>
          </div>
          <button className='block text-white md:hidden' onClick={() => setOpen(true)}>
            <ImMenu />
          </button>
        </>
      </div>
    </div>
  )
}

export default Navbar
