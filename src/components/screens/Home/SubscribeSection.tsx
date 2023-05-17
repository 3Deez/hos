import { FC } from 'react'

const SubscribeSection: FC = () => {
  return (
    <section className='relative z-10 my-10 flex min-h-[50vh] items-end  justify-center bg-white text-white'>
      <main className='absolute -bottom-20 flex h-[370px] w-11/12 items-center justify-center overflow-hidden rounded-[30px] bg-dark-blue bg-ellipse bg-center bg-no-repeat p-5'>
        <form className='flex w-full flex-col items-center justify-center gap-y-5 text-center '>
          <h1 className='text-[52px] font-extrabold'>Newsletter Subscription</h1>

          <div className='z-10 flex h-[70px] w-8/12 items-center justify-between rounded-[34px] bg-primary px-3 py-1'>
            <input
              type='text'
              placeholder='Enter your Email'
              className='h-full w-full items-center bg-transparent placeholder:text-dark-blue focus:outline-none focus:ring-0 active:border-0 active:outline-none '
            />
            <button className='py-auto my-2 h-full rounded-[34px] bg-dark-blue px-6 text-2xl font-bold text-white'>Subscribe</button>
          </div>
        </form>
        <svg className='absolute' width='1202' height='419' viewBox='0 0 1202 419' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='601' cy='210' r='600.5' stroke='#F9EA52' />
        </svg>
      </main>
    </section>
  )
}

export default SubscribeSection
