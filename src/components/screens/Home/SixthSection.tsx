import { PAST_HOS } from '@/lib/data'
import ArrowRight from '../../../../public/svgs/ArrowRight'
import { PastHOSCard } from '@/app/about/past-hos/page'

const SixthSection = () => {
  return (
    <div
      className='flex min-h-screen items-center justify-center py-10'
      style={{
        background: "linear-gradient(180deg, rgba(30, 152, 201, 0.8) 0%, #1E98C9 120%), url('/images/home-bg.png')",
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='mx-auto h-[70%] w-11/12'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-white md:text-5xl'>
            <span className='border-t-[8px] border-yellow'>Perma</span>nent Secretaries
          </h1>
          <button className='hidden items-center  gap-x-5 rounded-[30px] bg-yellow px-8 py-4 text-xl font-semibold md:flex'>
            <span>View more</span> <ArrowRight color='black' />
          </button>
        </div>

        <div className='mt-20 flex flex-col items-center justify-evenly gap-y-5'>
          {PAST_HOS.slice(0, 3).map(item => (
            <PastHOSCard className={'h-[460px] w-[346px] bg-[#D9D9D9]'} imageHieght={320} key={item.id} {...item} />
          ))}
        </div>

        <button className='mt-10 flex items-center  gap-x-5 rounded-[30px] bg-yellow px-8 py-4 text-xl font-semibold md:hidden'>
          <span>View more</span> <ArrowRight color='black' />
        </button>
      </div>
    </div>
  )
}

export default SixthSection
