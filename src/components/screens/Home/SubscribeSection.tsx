import { FC } from 'react'

const SubscribeSection: FC = () => {
  return (
    <section className='relative z-20 -mb-[8px] mt-10 flex min-h-[50vh] items-end justify-center bg-white  text-white md:z-10 md:my-10'>
      <main className='absolute  flex h-[250px] w-11/12 items-center justify-center overflow-hidden rounded-[30px] bg-dark-blue bg-ellipse bg-center bg-no-repeat p-5 md:-bottom-20 md:h-[370px]'>
        <form className='flex w-full flex-col items-center justify-center gap-y-5 text-center '>
          <h1 className='text-2xl font-extrabold md:text-[52px]'>Newsletter Subscription</h1>

          <div className='z-10 flex h-[50px] items-center justify-between rounded-[28px] bg-primary px-2 py-1 md:h-[70px] md:w-8/12 md:rounded-[34px] md:px-3'>
            <input
              type='text'
              placeholder='Enter your Email'
              className='h-full w-full items-center bg-transparent placeholder:text-xs placeholder:text-dark-blue focus:outline-none focus:ring-0 active:border-0 active:outline-none '
            />
            <button className='py-auto my-2 h-full rounded-[34px] bg-dark-blue px-6 text-sm font-semibold text-white md:text-2xl md:font-bold'>
              Subscribe
            </button>
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
