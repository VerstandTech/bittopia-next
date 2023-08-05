import { type FC, type ReactNode } from 'react'

interface BlockProps {
  children: ReactNode
}
export const Block: FC<BlockProps> = ({ children }) => {
  return (
    <div className={'w-full rounded-2xl border border-gray-500'}>
      {children}
    </div>
  )
}
