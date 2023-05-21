'use client'
import gsapClient from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect } from 'react'

import ArrowRight from '../../../../public/svgs/ArrowRight'

const AppScreenItem: FC<{ suffix: string }> = ({ suffix }) => (
  <div id={`csr-app${suffix}`} className='absolute top-0 h-full min-w-[18rem] overflow-hidden rounded-2xl'>
    <Image
      src={`/images/app${suffix}.webp`}
      alt='csr-app'
      width={500}
      height={100}
      style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
    />
  </div>
)

gsapClient.config({
  force3D: true,
})

const SecondSection: FC = () => {
  gsapClient.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const t = gsapClient.timeline({
      scrollTrigger: {
        trigger: '#csr-wrapper',
        start: 'top center',
      },
    })

    t.from('#csr-wrapper', { y: -200 }).to('#csr-wrapper', { y: 0, duration: 1 })

    t.from('#csr-app2', {
      xPercent: -100,
    }).to('#csr-app2', {
      delay: 2,
      xPercent: 0,
      duration: 1,
    })

    t.from('#csr-app3', {
      xPercent: -120,
    }).to('#csr-app3', {
      delay: 2,
      xPercent: 0,
      duration: 1,
    })

    t.from('#csr-app4', {
      xPercent: -100,
    }).to('#csr-app4', {
      delay: 2,
      xPercent: 0,
      duration: 1,
    })

    t.from('#csr-app5', {
      xPercent: -100,
    }).to('#csr-app5', {
      delay: 2,
      xPercent: 0,
      duration: 1,
    })

    t.restart()

    return () => {
      t.kill()
    }
  }, [])

  return (
    <main className='relative mb-60 justify-between md:mb-40 md:flex'>
      <section
        className='-top-10 z-10 h-full w-full px-4 pb-6 pt-6 md:absolute md:h-[650px] md:w-7/12 md:px-8 md:pt-14'
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url('/images/home-bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'black',
        }}
      >
        <div className='mx-auto h-full w-11/12 border-y-2 border-yellow py-5 md:px-5 md:py-10'>
          <h4 className='text-2xl font-medium text-white md:text-4xl '>
            OFFICE OF <br />
            <span className='border-b-4 border-yellow'>HEAD OF</span> SERVICE
          </h4>

          <div className='mt-8 flex flex-col gap-y-8 md:mt-16'>
            <h1 className='text-3xl font-bold text-yellow md:text-4xl'>
              Transforming The <br />
              Workforce in Niger state
            </h1>

            <p className='text-base text-white md:w-10/12 md:text-xl'>
              Lorem ipsum dolor sit amet consectetur. Semper amet non sit sit est pulvinar quis netus ut. Malesuada purus sed bibendum.
              Semper amet non sit sit est pulvinar quis netus ut. Malesuada purus sed bibendum.
            </p>

            <Link href='/about'>
              <button className='flex w-max flex-row items-center justify-center gap-x-4 rounded-3xl bg-yellow px-5 py-3 text-black'>
                <span>Read More</span>
                <ArrowRight color='black' />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className='relative h-[35rem] w-full'>
        <div className='absolute right-[10%] mt-12 w-72 text-secondary'>
          <div className='text-center text-sm font-semibold'>Download the Niger State Civil Service Rules app</div>
          <Link href='https://play.google.com/store/apps/details?id=com.deezglobal.ngs_csr' target='_blank'>
            <Image src='/images/play-store.png' alt='csr-app' width={500} height={100} style={{ height: '100%', width: '100%' }} />
          </Link>
        </div>
        <section id='csr-wrapper' className='absolute right-[10%] top-52 h-[35rem] w-72 overflow-x-scroll rounded-2xl'>
          <AppScreenItem suffix='' />
          <AppScreenItem suffix='2' />
          <AppScreenItem suffix='3' />
          <AppScreenItem suffix='4' />
          <AppScreenItem suffix='5' />
        </section>
      </section>
    </main>
  )
}

export default SecondSection
