import Link from 'next/link'
import ArrowRight from '../../../../public/svgs/ArrowRight'
import Image from 'next/image'

const FourthSection = () => {
  return (
    <section
      className='flex min-h-screen items-center justify-center py-5'
      style={{
        background: "linear-gradient(180deg, rgba(30, 152, 201, 0.8) 0%, #1E98C9 120%), url('/images/home-bg.png')",
        backgroundRepeat: 'no-repeat',
      }}
    >
      <main className='mx-auto flex w-full flex-col items-start justify-center md:flex-row'>
        <div className='flex h-[550px] w-full items-center justify-center md:w-4/12'>
          <div className='flex h-full w-[350px] flex-col items-start justify-end overflow-hidden rounded-xl md:w-[420px]'>
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
            <div className='flex h-[30%] w-full items-center justify-center bg-dark-blue p-1 text-xl font-bold text-white md:text-[1.8rem]'>
              <h2>Haj. Salamatu T. Abubakar</h2>{' '}
            </div>
          </div>
        </div>

        <div className='flex h-full flex-col px-5 pt-5 md:w-6/12 md:pl-16'>
          <h1 className='text-2xl font-bold text-white md:text-[2.8rem]'>Head of Service Niger State</h1>

          <p className='mt-8 text-base text-white md:mt-16 md:w-10/12 md:text-xl md:leading-10'>
            Hajiya Salamatu Tatu Abubakar (mni) was born on 20th March, 1964 at Agaie LGA. She attended LEA Unguwar Sarki Musilimi Kaduna
            from 1971 to 1976. Thereafter, she proceeded to GGSS Bida for her GCE from 1976 to 1981.
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
