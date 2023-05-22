'use client'
import { StateLogo } from '@/lib/data'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import Typewriter from 'typewriter-effect'

const HeroSection = () => {
  const stateLogoRef = useRef() as React.LegacyRef<HTMLDivElement>
  const [localTime, setLocalTime] = useState(format(new Date(), 'd MMM, yyyy h:mm a'))

  useEffect(() => {
    const interval = setInterval(() => {
      const seconds = new Date().getSeconds()

      if (seconds === 0) {
        setLocalTime(format(new Date(), 'do MMM, yyyy h:mm a'))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='bg-linear_gradient'>
      <div className='absolute -z-10 h-[85vh] w-full'>
        <Image
          src='/images/home-bg.png'
          alt='Head of Service Logo'
          style={{ width: '100%', height: '100%' }}
          width={1280}
          height={50}
          quality={100}
        />
      </div>
      <div
        className='flex h-[85vh] w-[100%] items-start justify-center text-center text-white'
        // style={{
        //   background: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.7) 100%), url('/images/home-bg.png')",
        //   // backgroundRepeat: 'repeat',
        // }}
      >
        <div className='mt-20 flex min-h-[500px] w-[80%] flex-col items-center justify-center gap-y-8 pt-0 md:mt-32'>
          {/* Logo Section */}
          <div id='stateLogo' ref={stateLogoRef} className='flex h-[190px] w-[190px] items-center  justify-center rounded-full bg-white'>
            <Image src={StateLogo} alt='Head of Service Logo' height={90} width={100} quality={100} />
          </div>

          {/* Office write up */}

          <h3 className='text-sm font-bold md:text-base lg:text-2xl'>OFFICE OF HEAD OF SERVICE, NIGER STATE</h3>

          <h1 className='h-10 text-lg font-extrabold uppercase md:h-8 md:text-2xl lg:h-20 lg:text-3xl lg:leading-10'>
            {/* “opportunities for all in the atmosphere atmosphere peace” */}
            <Typewriter
              options={{
                strings: ['“opportunities for all in the <br/> atmosphere of peace”'],
                autoStart: true,
                deleteSpeed: 50,
                loop: true,
                cursor: '|',
              }}
            />
          </h1>
        </div>
      </div>

      <div className='mx-auto h-full w-full flex-col-reverse items-center justify-between bg-primary px-[5%] py-8 md:flex md:h-[12rem] md:flex-row'>
        <div className='flex h-full w-full items-center text-2xl font-bold text-white sm:w-6/12'>
          <Link href='/about/mission-and-vision' className='w-1/2 border-r border-white pr-16 text-right hover:text-yellow'>
            Vision
          </Link>
          <Link href='/about/mission-and-vision' className='w-1/2 pl-16 hover:text-yellow'>
            Mission
          </Link>
        </div>
        <div className='mt-3 flex h-full w-full items-center justify-center text-right sm:w-5/12 sm:justify-end'>
          <p className='text-sm font-bold text-yellow sm:text-right md:text-2xl'>{localTime}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
