import Map from '@/components/Map/Map'
import ContactUsForm from '@/components/screens/Home/ContactUsForm'
import { NextPage } from 'next'
import Image from 'next/image'

const Page: NextPage = () => {
  return (
    <div className='w-full'>
      <div className='relative h-[60vh]'>
        <Image
          src='/images/contact-us.jpg'
          quality={100}
          alt='contact-us'
          style={{ height: '100%', width: '100%' }}
          width={500}
          height={100}
        />
        <div className='absolute top-0 flex h-full w-full items-center justify-center bg-secondary bg-opacity-60 text-3xl font-extrabold text-white'>
          CONTACT US
        </div>
      </div>
      <div className='mx-auto w-10/12'>
        <div className='mx-auto mt-28 flex flex-col items-center text-black md:w-[40rem]'>
          <h5 className='mb-8 text-xl font-extrabold md:text-3xl'>GET IN TOUCH</h5>
          <ContactUsForm className='bg-transparent' fullWidthButton />
        </div>
        <div className='my-12 flex w-full items-center justify-center'>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default Page
