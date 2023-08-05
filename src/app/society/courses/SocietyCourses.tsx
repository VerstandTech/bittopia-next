import CourseListItem from '@/components/CourseListItem'
import { useQueryData } from '@/hooks/useQueryData/useQueryData'
import StudyFieldTemplate from '@/layouts/StudyFieldTemplate'
import useMainStore from '@/store/useMainStore'
import { type Society } from '@/store/useMainStore/useMainStore'
import { useEffect, type FC } from 'react'
import { useParams } from 'react-router-dom'

export const SocietyCourses: FC = () => {
  const { data, setData } = useMainStore()
  const { data: resultData } = useQueryData()
  const { societyId } = useParams<{ societyId: string }>()

  useEffect(() => {
    if (resultData !== undefined) {
      setData({ ...resultData.data, isLoading: false })
    }
  }, [resultData])

  const society: Society = data?.societies[societyId as string]

  return (
    <StudyFieldTemplate society={society}>
      <div className={'flex flex-col items-center gap-4'}>
        <h1 className={'w-full text-3xl text-white'}>Courses</h1>
        {data?.societies[societyId as string].courses?.map((course, index) => (
          <CourseListItem course={course} key={index} />
        ))}
      </div>
    </StudyFieldTemplate>
  )
}
