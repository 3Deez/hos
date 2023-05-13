'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const StateLogo = '/images/state-logo.png'

function HeroSection() {
  const stateLogoRef = useRef() as React.LegacyRef<HTMLDivElement>

  useEffect(() => {
    function fadeLogo(e: Event) {
      if (window.scrollY < 400) {
        const stateLogo = window.document.getElementById('stateLogo')

        // stateLogo.style.opacity = 0.6;
      }
    }
    window.addEventListener('scroll', fadeLogo)

    return () => window.removeEventListener('scroll', fadeLogo)
  })
  return (
    <div
      className='bg-linear_gradient'
      style={
        {
          // background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 24.25%, #1E98C9 78.05%)",
        }
      }
    >
      <div
        className='flex min-h-[110vh] w-full items-start justify-center text-center text-white '
        style={{
          background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 40%, #1E98C9 100%), url('/images/home-bg.png')",
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='mt-[14%] flex h-[500px] w-[80%] flex-col items-center justify-center gap-y-8 pt-10'>
          {/* Logo Section */}
          <div id='stateLogo' ref={stateLogoRef} className='flex h-[190px] w-[190px] items-center  justify-center rounded-full bg-white'>
            <Image src={StateLogo} alt='Head of Service Logo' height={90} width={100} quality={100} />
          </div>

          {/* Office write up */}

          <h3 className='text-[32px] font-bold'>OFFICE OF HEAD OF SERVICE, NIGER STATE</h3>

          <h1 className='text-[50px] font-extrabold uppercase'>
            “opportunities for all in the <br /> atmosphere of peace”
          </h1>
        </div>
      </div>

      <div className='h-[200px]'></div>
    </div>
  )
}

export default HeroSection
