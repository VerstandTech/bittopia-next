import { type Society } from '@/store/useMainStore/useMainStore'
import { type FC } from 'react'
import CourseGridItem from '../CourseGridItem'

interface CourseGridProps {
  societies?: Society[]
}

export const CourseAreaGrid: FC<CourseGridProps> = ({ societies }) => {
  return (
    <section
      className={'my-5 grid h-full grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5'}
    >
      {societies?.map(society => (
        <CourseGridItem key={society.id} society={society} />
      ))}
    </section>
  )
}
