import ArrowRight from '../../../../public/svgs/ArrowRight'

const FifthSection = () => {
  return (
    <div className='min-h-screen w-full py-[10rem]'>
      <div className='mx-auto h-full min-h-screen w-11/12 '>
        <h2 className='mb-10 text-3xl font-bold text-primary md:text-5xl'>
          <span className='border-t-[8px] border-yellow text-black'>Latest </span>
          News and Events
        </h2>

        <div className='mt-10 flex h-full flex-col items-start justify-between gap-x-10 md:flex-row'>
          <div
            style={{
              background: "linear-gradient(0deg, #000000 -48.51%, rgba(30, 152, 201, 0) 79.67%), url('/images/lolo-hajia.png')",
              backgroundRepeat: 'no-repeat',
            }}
            className='bg-full mt-20 flex h-[600px] flex-col items-start justify-end bg-cover  p-4 pb-[5rem] text-white md:w-1/2'
          >
            <h1 className='mb-3 text-xl font-bold md:text-2xl'>Introducing IT in all workforce</h1>
            <p className='pr-10 text-base font-normal md:text-xl'>
              Lorem ipsum dolor sit amet consectetur. In semper lectus sed dolor. Amet fermentum senectus imperdiet ipsum etiam sit non
              malesuada.
            </p>
          </div>

          <div className='hidden h-[700px] border border-border md:block'></div>

          <div className='mt-10 flex h-full flex-col justify-center md:w-1/2'>
            <div>
              {[1, 2, 3].map(_ => {
                return <ITSection key={_} />
              })}
            </div>

            <button className='mt-10 flex items-center gap-x-3 text-xl font-bold'>
              <span>Read More</span> <ArrowRight color='#1E98C9' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FifthSection

const ITSection = () => {
  return (
    <div className='mb-16 flex flex-col gap-y-4 border-b border-border pb-3 pr-6'>
      <h3 className='text-xl font-medium md:text-2xl'>Introducing IT in all workforce</h3>
      <p className='text-base text-slate-500 md:text-lg'>
        Lorem ipsum dolor sit amet consectetur. In semper lectus sed dolor. Amet fermentum senectus imperdiet ipsum etiam sit non malesuada.{' '}
      </p>
    </div>
  )
}
