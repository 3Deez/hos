import { StateLogo } from '@/lib/data'
// import Image from 'next/image'

const TimeLine = ({ year, text, border = true }: { year: string; text: string; border?: boolean }) => {
  return (
    <div className='mx-auto flex w-full items-start gap-x-10 md:w-6/12'>
      <div className='relative flex flex-col items-center justify-center md:justify-start'>
        <div className='absolute z-10 h-10 w-10 rounded-full bg-primary'></div>
        {border && <span className='absolute -left-[2px] top-3 h-[150px] rounded-full border border-yellow'></span>}
      </div>

      <div className='-mt-2 mb-3 md:mb-7 md:pt-4'>
        <h1 className='text-2xl font-bold text-yellow md:text-4xl'>{year}</h1>
        <p className='mt-4 text-base text-black md:text-xl'>{text}</p>
      </div>
    </div>
  )
}

const ThirdSection = () => {
  return (
    <section className='bg-white '>
      <main className='my-32 flex h-full items-center bg-gray py-16 '>
        <div className='w-11/12 py-4 pl-10 pr-6 md:w-7/12 md:px-0'>
          <TimeLine year='1976' text='Period served by the first Head of service, Alhaji Abdulkarim Lafene' />
          <TimeLine year='60' text='Total number of Heads of service that have served' />
          <TimeLine year='15' text='Permanent secretaries' />
          <TimeLine year='20' text='There are currently 20 MDA’s in the state civil service commission' />
          <TimeLine year='10,000' border={false} text='Total number of workforce in the state civil service' />
        </div>

        <div className='hidden h-[600px] w-5/12 items-center justify-center rounded-l-[36px] bg-primary md:flex'>
          <div id='stateLogo' className='flex h-[240px] w-[240px] items-center  justify-center rounded-full bg-white'>
            <div
              className='h-[200px] w-[200px]'
              style={{
                backgroundImage: `url(${StateLogo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '60%',
              }}
            ></div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ThirdSection
