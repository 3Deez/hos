import { FC, ReactNode } from 'react'
import cx from 'classnames'

export const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={cx(className, 'rounded-lg border shadow-lg')}>{children}</div>
}
