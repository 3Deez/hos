import ArrowRight from '../../../../public/svgs/ArrowRight'

const SixthSection = () => {
  return (
    <div
      className='flex h-screen items-center justify-center'
      style={{
        background: "linear-gradient(180deg, rgba(30, 152, 201, 0.8) 0%, #1E98C9 120%), url('/images/home-bg.png')",
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='mx-auto h-[70%] w-11/12'>
        <div className='flex items-center justify-between'>
          <h1 className='text-5xl font-bold text-white'>
            <span className='border-t-[8px] border-yellow'>Perma</span>nent Secretaries
          </h1>
          <button className='flex items-center gap-x-5 rounded-[30px] bg-yellow px-8 py-4 text-xl font-semibold'>
            <span>View more</span> <ArrowRight color='black' />
          </button>
        </div>

        <div className='mt-20 flex items-center justify-evenly'>
          <div className='h-[460px] w-[346px] bg-[#D9D9D9]'></div>
          <div className='h-[460px] w-[346px] bg-[#D9D9D9]'></div>
          <div className='h-[460px] w-[346px] bg-[#D9D9D9]'></div>
        </div>
      </div>
    </div>
  )
}

export default SixthSection
