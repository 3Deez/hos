import { FC } from 'react'
import cx from 'classnames'

import UserIcon from '../../../../public/svgs/UserIcon'
import EnvelopIcon from '../../../../public/svgs/EnvelopIcon'

const ContactUsForm: FC<{ className?: string; fullWidthButton?: boolean }> = ({ className, fullWidthButton }) => {
  return (
    <form className={cx(className, 'md:px-10')}>
      <div className='mb-5 flex w-full flex-wrap items-center justify-between gap-x-10 gap-y-10'>
        {/* Field to enter user name */}
        <div className=' flex h-[60px] w-full  items-center justify-between overflow-hidden rounded-[16px] bg-dark-blue px-3'>
          <input
            type='text'
            placeholder='Enter your Name'
            className='h-full w-full items-center bg-transparent focus:outline-none focus:ring-0 active:border-0 active:outline-none '
          />{' '}
          <UserIcon />{' '}
        </div>

        {/* Email field */}
        <div className='flex h-[60px] w-full items-center justify-between overflow-hidden rounded-[16px] bg-dark-blue px-3'>
          <input
            type='text'
            placeholder='Enter your Email'
            className='h-full w-full items-center bg-transparent focus:outline-none focus:ring-0 active:border-0 active:outline-none '
          />{' '}
          <EnvelopIcon />{' '}
        </div>
      </div>

      <div className='bg-darker-blue mx-auto mt-10 flex h-[250px]  items-center justify-center'>
        <textarea placeholder='Enter your Message' className='h-full w-full rounded-xl bg-dark-blue p-3 focus:border-0 active:border-0' />
      </div>

      <button
        className={cx(
          fullWidthButton && 'w-full',
          'py-auto mt-8 rounded-[16px] bg-yellow px-8 py-3 text-xl font-medium text-white md:text-2xl md:font-bold',
        )}
      >
        Submit
      </button>
    </form>
  )
}

export default ContactUsForm
