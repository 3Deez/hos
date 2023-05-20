import Map from '@/components/Map/Map'
import UserIcon from '../../../../public/svgs/UserIcon'
import EnvelopIcon from '../../../../public/svgs/EnvelopIcon'

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
                <h1 className='text-[34px] font-extrabold md:text-[52px]'>Contact Us</h1>
              </header>

              <form className='md:px-10'>
                <div className='mb-5 flex w-full flex-wrap items-center justify-between gap-x-10 gap-y-10'>
                  {/* Field to enter user name */}
                  <div className=' flex h-[80px] w-full  items-center justify-between overflow-hidden rounded-[16px] bg-dark-blue px-3'>
                    <input
                      type='text'
                      placeholder='Enter your Name'
                      className='h-full w-full items-center bg-transparent focus:outline-none focus:ring-0 active:border-0 active:outline-none '
                    />{' '}
                    <UserIcon />{' '}
                  </div>

                  {/* Email field */}
                  <div className='flex h-[80px] w-full items-center justify-between overflow-hidden rounded-[16px] bg-dark-blue px-3'>
                    <input
                      type='text'
                      placeholder='Enter your Email'
                      className='h-full w-full items-center bg-transparent focus:outline-none focus:ring-0 active:border-0 active:outline-none '
                    />{' '}
                    <EnvelopIcon />{' '}
                  </div>
                </div>

                <div className='bg-darker-blue mx-auto mt-10 flex h-[250px]  items-center justify-center'>
                  <textarea className='h-full w-full rounded-xl bg-dark-blue p-3 focus:border-0 active:border-0' />
                </div>
              </form>
            </div>
          </aside>
        </aside>
      </main>
    </section>
  )
}

export default SeventhSection
