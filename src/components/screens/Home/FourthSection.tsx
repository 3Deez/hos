import Link from 'next/link'
import ArrowRight from '../../../../public/svgs/ArrowRight'
import Image from 'next/image'

const FourthSection = () => {
  return (
    <section
      className='flex min-h-screen items-center justify-center'
      style={{
        background: "linear-gradient(180deg, rgba(30, 152, 201, 0.8) 0%, #1E98C9 120%), url('/images/home-bg.png')",
        backgroundRepeat: 'no-repeat',
      }}
    >
      <main className='mx-auto flex w-full flex-col items-start justify-center md:flex-row'>
        <div className='flex h-[550px] items-center justify-center md:w-4/12'>
          <div className='flex h-full w-[300px] flex-col items-start justify-end overflow-hidden rounded-xl md:w-[420px]'>
            <div className='relative h-[70%] w-full'>
              <Image
                src='/images/hos.jpg'
                style={{
                  transform: 'scaleX(-1)',
                }}
                quality={100}
                fill
                className=''
                alt='head of service'
              />
            </div>
            <div className='flex h-[30%] w-full items-center justify-center bg-dark-blue p-1 text-[1.8rem] font-bold text-white'>
              <h2>Haj. Salamatu T. Abubakar</h2>{' '}
            </div>
          </div>
        </div>

        <div className='flex h-full flex-col rounded-xl pl-16 pt-5 md:w-6/12'>
          <h1 className='text-[2.8rem] font-bold text-white'>Head of Service Niger State</h1>

          <p className='mt-16 w-10/12 text-xl text-white'>
            We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By
            clicking “Accept”, you consent to the use of ALL the cookies. However you may visit Cookie Settings to provide a controlled
            consent.
          </p>

          <button className='mt-10 w-max rounded-[30px] bg-yellow px-6 py-4 text-black'>
            <Link href='/about' className='flex flex-row items-center justify-center gap-x-4'>
              <span>Read More</span>
              <ArrowRight color='black' />
            </Link>
          </button>
        </div>
      </main>
    </section>
  )
}

export default FourthSection
