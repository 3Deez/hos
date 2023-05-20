'use client'
import gsapClient from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import ArrowRight from '../../../../public/svgs/ArrowRight'

const SecondSection = () => {
  useEffect(() => {
    gsapClient.registerPlugin(ScrollTrigger)

    gsapClient.set('#csr-container', { scale: 1 })
    const ourStory = gsapClient
      .timeline({
        scrollTrigger: {
          trigger: '#csr-wrapper',
          start: 'top center',
        },
      })
      .from('#csr-wrapper', { y: -200 })
      .to('#csr-wrapper', { y: 0 })
      .from('#csr-app', {
        xPercent: 0,
      })
      .to('#csr-app', {
        xPercent: 100,
        duration: 1,
      })

    gsapClient
      .timeline({
        scrollTrigger: {
          trigger: '#csr-wrapper',
          start: 'top center',
        },
      })
      .from('#csr-app2', {
        xPercent: -100,
      })
      .to('#csr-app2', {
        delay: 1,
        xPercent: 0,
        duration: 1,
      })
      .to('#csr-app2', {
        delay: 2,
        xPercent: 100,
        duration: 1,
      })

    gsapClient
      .timeline({
        scrollTrigger: {
          trigger: '#csr-wrapper',
          start: 'top center',
        },
      })
      .from('#csr-app3', {
        xPercent: -105,
      })
      .to('#csr-app3', {
        delay: 4,
        xPercent: 0,
        duration: 1,
      })
      .to('#csr-app3', {
        delay: 2,
        xPercent: 100,
        duration: 1,
      })

    gsapClient
      .timeline({
        scrollTrigger: {
          trigger: '#csr-wrapper',
          start: 'top center',
        },
      })
      .from('#csr-app4', {
        xPercent: -100,
      })
      .to('#csr-app4', {
        delay: 7,
        xPercent: 0,
        duration: 1,
      })
      .to('#csr-app4', {
        delay: 2,
        xPercent: 100,
        duration: 1,
      })

    gsapClient
      .timeline({
        scrollTrigger: {
          trigger: '#csr-wrapper',
          start: 'top center',
        },
      })
      .from('#csr-app5', {
        xPercent: -100,
      })
      .to('#csr-app5', {
        delay: 10,
        xPercent: 0,
        duration: 1,
      })

    return () => {
      ourStory.kill()
    }
  }, [])

  return (
    <main id='csr-container' className='relative flex h-[600px] justify-between'>
      <section
        className='absolute bottom-0 h-full w-full px-4 pb-6 pt-6 md:h-[650px] md:w-7/12 md:px-8 md:pt-14'
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
      <div className='absolute right-[10%] mt-6 w-72 text-secondary'>
        <div className='text-center text-sm font-semibold'>Download the Niger State Civil Service Rules app</div>
        <Link href='https://play.google.com/store/apps/details?id=com.deezglobal.ngs_csr' target='_blank'>
          <Image src='/images/play-store.png' alt='csr-app' width={500} height={100} style={{ height: '100%', width: '100%' }} />
        </Link>
      </div>
      <section id='csr-wrapper' className='absolute right-[10%] top-44 hidden h-full w-72 overflow-x-scroll rounded-2xl md:block'>
        <div id='csr-app' className='absolute top-0 h-full min-w-[18rem] overflow-hidden rounded-2xl'>
          <Image
            src='/images/app.webp'
            alt='csr-app'
            width={500}
            height={100}
            style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
          />
        </div>
        <div id='csr-app2' className='absolute top-0 h-full min-w-[18rem] overflow-hidden rounded-2xl'>
          <Image
            src='/images/app2.webp'
            alt='csr-app'
            width={500}
            height={100}
            style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
          />
        </div>
        <div id='csr-app3' className='absolute top-0 h-full min-w-[18rem] overflow-hidden rounded-2xl'>
          <Image
            src='/images/app3.webp'
            alt='csr-app'
            width={500}
            height={100}
            style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
          />
        </div>
        <div id='csr-app4' className='absolute top-0 h-full min-w-[18rem] overflow-hidden rounded-2xl'>
          <Image
            src='/images/app4.webp'
            alt='csr-app'
            width={500}
            height={100}
            style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
          />
        </div>
        <div id='csr-app5' className='absolute top-0 h-full min-w-[18rem] overflow-hidden rounded-2xl'>
          <Image
            src='/images/app5.webp'
            alt='csr-app'
            width={500}
            height={100}
            style={{ position: 'absolute', zIndex: 0, height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
          />
        </div>
      </section>
    </main>
  )
}

export default SecondSection
