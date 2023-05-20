'use client'
import { StateLogo } from '@/lib/data'
import Image from 'next/image'
import React, { useRef } from 'react'

import Typewriter from 'typewriter-effect'

const HeroSection = () => {
  const stateLogoRef = useRef() as React.LegacyRef<HTMLDivElement>

  return (
    <div className='bg-linear_gradient'>
      <div
        className='flex h-screen w-screen items-start justify-center text-center text-white md:min-h-[110vh] '
        style={{
          background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 40%, #1E98C9 100%), url('/images/home-bg.png')",
          backgroundRepeat: 'repeat',
        }}
      >
        <div className='mt-40 flex min-h-[500px] w-[80%] flex-col items-center justify-center gap-y-8 pt-0 md:mt-64'>
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

      <div className='mx-auto hidden w-11/12 flex-col-reverse items-center justify-between md:flex md:h-[250px] md:flex-row'>
        <div className='flex h-full w-6/12 items-center text-xl text-white'>
          <div className='w-1/2 border-r border-white pr-10'>
            <h6>Lorem ipsum stuff more more doler ipsum lorem</h6>
          </div>
          <div className='w-1/2 pl-16'>
            <h6>Lorem ipsum stuff more more doler ipsum lorem</h6>
          </div>
        </div>
        <div className='flex h-full w-5/12 items-center justify-end text-right'>
          <p className='text-right text-2xl font-bold text-yellow'>JANUARY 02, 2023</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
