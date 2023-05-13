import Link from 'next/link'
import { FC } from 'react'
import cx from 'classnames'

import { SidebarProps, SidebarItemProps } from './Sidebar.interface'

const SidebarItem: FC<SidebarItemProps> = ({ isActive, label, link }) => {
  return (
    <li
      className={cx(
        isActive ? 'border-l-sky-300 font-medium text-primary' : 'text-slate-500',
        'cursor-pointer list-none border-b-[1px] border-l-4 border-b-slate-200 transition-all ease-in-out hover:font-medium',
      )}
    >
      <Link href={link} className='block py-2 pl-1'>
        {label}
      </Link>
    </li>
  )
}

export const Sidebar: FC<SidebarProps> = ({ activeIndex, items, title }) => {
  return (
    <div className='w-full'>
      <div className='mb-4 text-lg font-medium text-secondary'>{title}</div>
      <ul className='border-t-[1px] border-t-slate-200'>
        {items.map(item => (
          <SidebarItem key={item.id} isActive={activeIndex === item.id} {...item} />
        ))}
      </ul>
    </div>
  )
}
