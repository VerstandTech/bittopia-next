import { type FC } from 'react'

interface LinkButtonProps {
  children: string
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  href,
  target = '_self'
}) => {
  return (
    <a
      target={target}
      href={href}
      className={
        'rounded-full border border-gray-500 py-3 px-5 text-sm tracking-wider transition-colors hover:border-white'
      }
    >
      {children}
    </a>
  )
}
