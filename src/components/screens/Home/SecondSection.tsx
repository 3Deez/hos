import Link from 'next/link'
import ArrowRight from '../../../../public/svgs/ArrowRight'

const SecondSection = () => {
  return (
    <main className='relative flex h-[600px] justify-between'>
      <section
        className='absolute bottom-0 h-full w-full bg-home-bg object-cover px-4 pb-6 pt-6 md:h-[650px] md:w-7/12 md:px-8 md:pt-14'
        style={{
          background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 0%, #0D5069 100%), url('/images/home-bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#0D5069',
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
      <section className='absolute right-10 hidden h-full w-5/12 items-end justify-between gap-x-5 md:flex'>
        <div className='-ml-32 h-[460px] w-[346px] bg-[#D9D9D9]'></div>
        <div className='h-[460px] w-[346px] bg-[#D9D9D9]'></div>
      </section>
    </main>
  )
}

export default SecondSection
