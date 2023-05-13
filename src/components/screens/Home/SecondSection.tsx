import Link from 'next/link'
import ArrowRight from '../../../../public/svgs/ArrowRight'

const SecondSection = () => {
  return (
    <main className='relative flex h-[600px]'>
      <section
        className='absolute bottom-0 h-[650px] w-7/12 bg-home-bg object-cover  px-8 pb-6 pt-14'
        style={{
          background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 5%, #0D5069 100%), url('/images/home-bg.png')",
          backgroundRepeat: 'no-repeat',
          // bsckgroundPosition: 'center',
          backgroundColor: '#0D5069',
        }}
      >
        <div className='mx-auto h-full w-11/12 border-y-2 border-yellow px-5 py-10'>
          <h4 className='text-4xl font-medium text-white '>
            OFFICE OF <br />
            <span className='border-b-4 border-yellow'>HEAD OF</span> SERVICE
          </h4>

          <div className='mt-16 flex flex-col gap-y-8'>
            <h1 className='text-5xl font-bold text-yellow'>
              Transforming The <br />
              Workforce in Niger state
            </h1>

            <p className='w-10/12 text-xl text-white'>
              Lorem ipsum dolor sit amet consectetur. Semper amet non sit sit est pulvinar quis netus ut. Malesuada purus sed bibendum.
              Semper amet non sit sit est pulvinar quis netus ut. Malesuada purus sed bibendum.
            </p>

            <Link href='/about'>
              <button className='flex w-max flex-row items-center justify-center gap-x-4 rounded-3xl bg-yellow px-5 py-3 text-black'>
                <span>Read More</span>
                <ArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className='flex w-5/12 items-center justify-between bg-red-950'>
        <div className='h-[460px] w-[346px] bg-[#D9D9D9]'></div>
        <div className='h-[460px] w-[346px] bg-[#D9D9D9]'></div>
      </section>
    </main>
  )
}

export default SecondSection
