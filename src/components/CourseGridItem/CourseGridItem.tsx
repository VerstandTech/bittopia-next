import { type Society } from '@/store/useMainStore/useMainStore'
import { type FC } from 'react'
import LinkButton from '../LinkButton'

interface CourseGridItemProps {
  society: Society
}

export const CourseGridItem: FC<CourseGridItemProps> = ({ society }) => {
  return (
    <div
      className={
        'min-h-20 flex w-full flex-col items-center gap-5 rounded-2xl border-[1px] border-gray-500 p-4'
      }
    >
      <div
        className={'h-[60px] w-[60px] overflow-hidden rounded-full bg-white'}
      >
        <img
          src={`https://robohash.org/${society.name.replace(' ', '')}`}
          alt={society.name}
        />
      </div>
      <div className={'flex flex-col gap-2 text-center'}>
        <h1 className={'text-2xl'}>{society.name}</h1>
        <p className={'min-h-[48px] text-xs line-clamp-3'}>
          {society.description}
        </p>
      </div>
      <LinkButton href={`/society/${society.id}`}>Explore</LinkButton>
    </div>
  )
}
