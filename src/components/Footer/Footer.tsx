import Image from 'next/image'
import React, { FC } from 'react'
import { NavbarLink } from '../Navbar/Navbar'

const Footer: FC = () => {
  return (
    <footer className='relative flex min-h-[70vh] flex-col bg-primary'>
      <div className='mx-auto mt-10 flex w-11/12 items-center justify-center gap-x-10 pb-5 pt-20 text-white'>
        <button className='mr-8 h-[80px] w-[60px] rounded-md bg-white p-1'>
          <Image src='/images/logo.png' alt='logo' width={50} height={80} />
        </button>

        <h1 className='text-[32px] font-extrabold'>
          Office of Head of Service <br /> <span className='font-medium'>Niger State</span>{' '}
        </h1>
      </div>

      <div className='mx-auto flex w-11/12 items-start justify-between gap-x-10'>
        <div>
          <h3 className='text-2xl font-extrabold text-yellow'>Office</h3>
          <ul className='mt-3 text-base text-white'>
            <li>Abdulkareem Lafene Secretariat,</li>
            <li>P. M. B 192,</li>
            <li>Minna,</li>
            <li>Niger State.</li>
          </ul>
        </div>

        <div>
          <h3 className='text-2xl font-extrabold text-yellow'>Quick Links</h3>
          <ul className='mt-3 text-base text-white'>
            <li>
              <NavbarLink href='/' label='Home' />
            </li>
            <li>
              <NavbarLink href='/about' label='About' />
            </li>
            <li>
              <NavbarLink href='/media' label='Media' />
            </li>
            <li>
              <NavbarLink href='/mda' label='MDA' />
            </li>
          </ul>
        </div>
      </div>
      <div className='absolute bottom-0 flex w-full items-center justify-center self-end border-t border-white py-5 text-center text-white'>
        <p>{new Date().getFullYear()} - Office of Head of Service, Niger State.</p>
      </div>
    </footer>
  )
}

export default Footer
