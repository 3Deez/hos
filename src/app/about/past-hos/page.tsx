import { Card } from '@/components/Card/Card'
import AboutLayout from '@/components/screens/About/AboutLayout'
import { PAST_HOS } from '@/lib/data'
import { NextPage } from 'next'
import Image from 'next/image'
import React, { FC } from 'react'
import { BioDataProps } from './past-hos.interface'

const BioData: FC<BioDataProps> = ({ label, value }) => (
  <div className='font-extrabold'>
    {label}:<span className='font-normal text-slate-50'> {value}</span>
  </div>
)

const Page: NextPage = () => {
  return (
    <AboutLayout activeIndex={3}>
      <div className='mb-4 text-2xl font-medium text-secondary'>Ministries, Departments and Agencies</div>
      <div className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 xl:grid-cols-3'>
        {PAST_HOS.map(({ designation, dob, id, imgName, lga, name, period }) => (
          <Card key={id} className='overflow-hidden bg-dark-blue text-white'>
            <Image src={`/images/${imgName}`} quality={100} style={{ height: 250, width: '100%' }} width='100' height='100' alt='hos' />
            <div className=' p-4 text-xs font-light'>
              <div className='mb-2 overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium text-yellow'>{name}</div>
              <BioData label='DOB' value={dob} />
              <BioData label='LGA' value={lga} />
              <BioData label='Designation' value={designation} />
              <BioData label='Period Served' value={period} />
            </div>
          </Card>
        ))}
      </div>
    </AboutLayout>
  )
}

export default Page
