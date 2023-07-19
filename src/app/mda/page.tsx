import { Card } from '@/components/Card/Card'
import { MDAs } from '@/lib/data'
import { NextPage } from 'next'
import Image from 'next/image'
import React, { FC } from 'react'
import { MDAMeticProps } from './mda.interface'

const MDAMetric: FC<MDAMeticProps> = ({ label, total }) => (
  <div>
    {label.toUpperCase()}: <span className='font-extrabold text-yellow'>{total}</span>
  </div>
)

// mda
const Page: NextPage = () => {
  return (
    <div className='mx-auto mb-20 h-full w-10/12 pt-36'>
      <div className='mb-4 text-2xl font-medium text-secondary'>Ministries, Departments and Agencies</div>
      <div className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
        {MDAs.map(({ agencies, dept, id, img, title }) => (
          <Card key={id} className='overflow-hidden bg-dark-blue text-white'>
            <Image src={`/images/${img}`} quality={100} style={{ height: 250, width: '100%' }} width='100' height='100' alt='hos' />
            <div className=' p-4 text-xs font-light'>
              <div className='mb-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium'>{title}</div>
              <MDAMetric label='Departments' total={dept} />
              <MDAMetric label='Agencies' total={agencies} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Page
