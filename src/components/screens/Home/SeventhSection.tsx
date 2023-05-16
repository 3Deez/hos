import Map from '@/components/Map/Map'
import UserIcon from '../../../../public/svgs/UserIcon'
import EnvelopIcon from '../../../../public/svgs/EnvelopIcon'

const SeventhSection = () => {
  return (
    <section className='my-20 flex min-h-screen items-center justify-center py-10'>
      <main className='h-[90vh] w-full '>
        <h1 className='mx-auto mb-10 w-11/12 text-5xl font-extrabold text-black'>Have Any Questions?</h1>
        <div className='flex h-full justify-between'>
          <div className='w-1/2 '>
            <Map
              containerStyle={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <aside className='flex h-full w-1/2 items-center justify-center bg-primary'>
            <div className='h-[90%] w-11/12  pt-10 text-center text-white'>
              <header className='mb-16'>
                <h5 className='text-xl font-extrabold'>GET IN TOUCH</h5>
                <h1 className='text-[52px] font-extrabold'>Contact Us</h1>
              </header>

              <form className=''>
                <div className='mb-5 flex w-full items-center justify-center gap-x-10'>
                  {/* Field to enter user name */}
                  <div className=' flex h-[80px] w-5/12 items-center justify-between overflow-hidden rounded-[16px] bg-dark-blue px-3'>
                    <input
                      type='text'
                      placeholder='Enter your Name'
                      className='h-full w-full items-center bg-transparent focus:outline-none focus:ring-0 active:border-0 active:outline-none '
                    />{' '}
                    <UserIcon />{' '}
                  </div>

                  {/* Email field */}
                  <div className='flex h-[80px] w-5/12 items-center justify-between overflow-hidden rounded-[16px] bg-dark-blue px-3'>
                    <input
                      type='text'
                      placeholder='Enter your Email'
                      className='h-full w-full items-center bg-transparent focus:outline-none focus:ring-0 active:border-0 active:outline-none '
                    />{' '}
                    <EnvelopIcon />{' '}
                  </div>
                </div>

                <div className='bg-darker-blue mx-auto mt-10 flex h-[250px] w-11/12 items-center justify-center'>
                  <textarea className='h-full w-full rounded-xl bg-dark-blue' />
                </div>
              </form>
            </div>
          </aside>
        </div>
      </main>
    </section>
  )
}

export default SeventhSection
