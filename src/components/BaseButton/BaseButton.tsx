import classNames from 'classnames'
import { type FC, type ReactNode } from 'react'

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
}
export const BaseButton: FC<BaseButtonProps> = ({
  children,
  onClick,
  size = 'md',
  className
}) => {
  const sizes = {
    sm: 'py-1 px-3 text-[10px]',
    md: 'py-3 px-5 text-sm',
    lg: 'py-5 px-7 text-lg'
  }
  const baseClasses =
    'rounded-full border border-gray-500 bg-transparent text-sm tracking-wider transition-colors hover:border-white'
  return (
    <button
      onClick={onClick}
      className={classNames(baseClasses, sizes[size], className)}
    >
      {children}
    </button>
  )
}
