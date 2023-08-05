import { type Course } from '@/store/useMainStore/useMainStore'
import getResumeFromWeb3AddressUtil from '@/utils/getResumeFromWeb3AddressUtil'
import { type FC } from 'react'

interface CourseListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  course: Course
}

export const CourseListItem: FC<CourseListItemProps> = ({ course }) => {
  return (
    <div className={'w-full rounded-2xl border-[1px] border-gray-500 p-4'}>
      <div className={'flex w-full items-center gap-4'}>
        <div className={'flex w-full flex-col items-start'}>
          <div className={'flex w-full items-center justify-between'}>
            <figure
              className={
                'flex w-fit items-center gap-4 rounded-full bg-gray-transparent-50 px-3 py-1'
              }
            >
              <div className={'h-4 w-4 overflow-hidden rounded-full'}>
                <img src={'https://picsum.photos/200'} alt={'avatar'} />
              </div>
              <figcaption>
                <span className={'text-sm text-gray-500'}>
                  {getResumeFromWeb3AddressUtil(course.id as string)}
                </span>
              </figcaption>
            </figure>

            <div
              className={
                'flex items-center justify-end rounded-full bg-slate-600 px-3 py-1 text-xs text-white'
              }
            >
              New Course
            </div>
          </div>

          <div className={'mt-4'}>
            <h3 className={'text-lg'}>{course.name}</h3>
            <h4 className={'text-lg text-gray-500'}>{course.description}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
