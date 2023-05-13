import AboutLayout from '@/components/screens/About/AboutLayout'
import { NextPage } from 'next'
import Image from 'next/image'

const Page: NextPage = () => {
  return (
    <AboutLayout activeIndex={1}>
      <div className='flex flex-col items-center'>
        <Image
          src='/images/hos.jpg'
          quality={100}
          style={{ height: 400, width: 400 }}
          width='100'
          height='100'
          className='rounded-3xl border md:rounded-full'
          alt='hos'
        />
        <div className='mt-6 w-full rounded-md border bg-dark-blue px-6 py-2 text-white md:w-auto'>
          <div className='text-center font-semibold'>
            Haj. Salamatu T. Abubakar, <span className='italic opacity-80'>mni</span>
          </div>
          <div className='text-center'>Head of Service</div>
        </div>
        <p className='mt-12 text-justify indent-5 text-sm leading-8 md:text-base md:leading-10'>
          Hajiya Salamatu Tatu Abubakar (mni) was born on 20th March, 1964 at Agaie LGA. She attended LEA Unguwar Sarki Musilimi Kaduna from
          1971 to 1976. Thereafter, she proceeded to GGSS Bida for her GCE from 1976 to 1981. She obtained her first (Bachelor&apos;s) and
          second (Master&apos;s) degree in Public Administration from Ahmadu Bello University, Zaria in 1986 and 2013 respectively. She also
          has to her educational credit a certificate from NIPSS, Kuru.
        </p>
      </div>
    </AboutLayout>
  )
}

export default Page
