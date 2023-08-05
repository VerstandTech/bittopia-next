import { useQueryData } from '@/hooks/useQueryData/useQueryData'
import StudyFieldTemplate from '@/layouts/StudyFieldTemplate'
import useMainStore from '@/store/useMainStore'
import { type Society } from '@/store/useMainStore/useMainStore'
import { useEffect, type FC } from 'react'
import { useParams } from 'react-router-dom'

export const SocietyDetails: FC = () => {
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
        <h1 className={'w-full text-3xl text-white'}>News</h1>
        {new Array(10).fill(0).map((_, index) => (
          <div
            key={index}
            className={'w-full rounded-2xl border-[1px] border-gray-500 p-4'}
          >
            <div className={'flex w-full items-center gap-4'}>
              <div className={'flex flex-col items-start'}>
                <div className={'flex w-full justify-between'}>
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
                        Some new course name
                      </span>
                    </figcaption>
                  </figure>

                  <div
                    className={
                      'flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs text-white'
                    }
                  >
                    New Course
                  </div>
                </div>

                <div className={'mt-4'}>
                  <h3 className={'text-lg'}>Lorem ipsum</h3>
                  <h4 className={'text-lg text-gray-500'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At, culpa doloremque harum illum impedit labore libero...
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StudyFieldTemplate>
  )
}
