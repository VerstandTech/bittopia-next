import { type FC, type ReactNode } from 'react'

interface TextContentBlockProps {
  title: string
  children: ReactNode
}

export const TextContentBlock: FC<TextContentBlockProps> = ({
  title,
  children
}) => {
  return (
    <div className={'w-full rounded-2xl border border-gray-500'}>
      <header className={'w-full border-b border-gray-500 p-6'}>{title}</header>
      <div className={'w-full border-gray-500 p-6'}>
        <div className={'text-gray-500'}>{children}</div>
      </div>
    </div>
  )
}
