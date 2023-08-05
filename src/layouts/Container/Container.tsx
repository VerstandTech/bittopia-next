import { type FC } from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export const Container: FC<ContainerProps> = props => {
  return <div className={'mx-auto w-full max-w-[900px]'}>{props.children}</div>
}
