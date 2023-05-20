import Map from '@/components/Map/Map'
import ContactUsForm from './ContactUsForm'

const SeventhSection = () => {
  return (
    <section className='my-20 flex min-h-screen items-center justify-center md:py-10'>
      <main className='mb-20 min-h-[90vh] w-full'>
        <h1 className='mx-auto mb-10 w-11/12 text-3xl font-extrabold text-black md:text-5xl'>Have Any Questions?</h1>

        <aside className='flex h-full justify-between'>
          <div className='hidden w-1/2 md:block'>
            <Map
              containerStyle={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>

          <aside className='flex h-full items-center justify-center bg-primary py-10 md:w-1/2'>
            <div className='h-[90%] w-11/12  pt-10 text-center text-white'>
              <header className='mb-16'>
                <h5 className='text-base font-extrabold md:text-xl'>GET IN TOUCH</h5>
                <h1 className='text-[34px] font-extrabold md:text-[44px]'>Contact Us</h1>
              </header>

              <ContactUsForm />
            </div>
          </aside>
        </aside>
      </main>
    </section>
  )
}

export default SeventhSection
