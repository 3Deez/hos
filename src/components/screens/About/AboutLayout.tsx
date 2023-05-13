import { Sidebar } from '@/components/Sidebar/Sidebar'
import { ABOUT_LINKS } from '@/lib/data'
import { FC, ReactNode } from 'react'

const AboutLayout: FC<{ activeIndex: number; children: ReactNode }> = ({ activeIndex, children }) => {
  return (
    <div className='mx-auto mb-20 flex h-full w-10/12 flex-col gap-x-8 gap-y-12 pt-36 md:flex-row lg:gap-x-24'>
      <div className='w-full md:w-7/12 lg:w-4/12 xl:w-3/12'>
        <Sidebar activeIndex={activeIndex} title='In this section' items={ABOUT_LINKS} />
      </div>
      <div className='w-full'>{children}</div>
    </div>
  )
}

export default AboutLayout
