import AboutLayout from '@/components/screens/About/AboutLayout'
import { NextPage } from 'next'
import React, { FC, ReactNode } from 'react'
import { BsEyeFill, BsRocketTakeoffFill } from 'react-icons/bs'
import { MAndVCardProps } from './mission-and-vision.interface'

const icons = {
  mission: <BsRocketTakeoffFill />,
  vision: <BsEyeFill />,
}

const MAndVCard: FC<MAndVCardProps> = ({ iconName, title, writeUp1, writeUp2 }) => (
  <div className='my-12 flex flex-col overflow-hidden rounded-xl border sm:flex-row'>
    <div className='flex w-full flex-col items-center justify-center bg-secondary py-12 text-xl font-bold text-yellow sm:w-96 sm:px-8'>
      <div>{title.toUpperCase()}</div>
      <div>{icons[iconName]}</div>
    </div>
    <div className='bg-lavender bg-opacity-30 px-6 py-4 text-justify indent-5 text-sm'>
      <p className='mb-2'>{writeUp1}</p>
      <p>{writeUp2}</p>
    </div>
  </div>
)

const Page: NextPage = () => {
  return (
    <AboutLayout activeIndex={2}>
      <div className='mb-4 text-2xl font-medium text-secondary'>Misson and Vision</div>
      <div>
        <MAndVCard
          iconName='vision'
          title='Vision'
          writeUp1={`To transform Niger State into one of the Top Three State Economies in Nigeria; by being a model and leader in 
          agro-based industrialization where there is employment and wealth creation opportunities for all in the atmosphere of peace.`}
          writeUp2={`To make Niger State an Economically Competutuve State through the populatization and usage of PPP concept.`}
        />
        <MAndVCard
          iconName='mission'
          title='Mission'
          writeUp1={`Empowering Nigerlites by providing a conducive environment for living, through wealth and employment creation 
          opportunities in collaboration with development and public partners.`}
          writeUp2={`To create economic friendly business environment, promote the economic potentials of the State and establish 
          effective linkages between stakeholders for industrial development through value addition strategy of PPP.`}
        />
      </div>
    </AboutLayout>
  )
}

export default Page
