import BlockMenu from '@/components/BlockMenu'
import BaseTemplate from '@/layouts/BaseTemplate'
import { type Society } from '@/store/useMainStore/useMainStore'
import { type FC, type ReactNode } from 'react'
import { useParams } from 'react-router-dom'

interface StudyFieldTemplateProps {
  society?: Society
  children: ReactNode
}

export const StudyFieldTemplate: FC<StudyFieldTemplateProps> = ({
  society,
  children
}) => {
  const { societyId } = useParams()
  const { pathname } = window.location

  return (
    <BaseTemplate>
      <section className={'grid grid-cols-1 gap-8 md:grid-cols-society-feed'}>
        <div className={'h-auto'}>
          <div
            className={
              'sticky top-28 flex flex-col items-center gap-4 rounded-2xl border-[1px] border-gray-500'
            }
          >
            {societyId != null && (
              <>
                <section className={'m-4 flex flex-col items-center gap-4'}>
                  <div
                    className={
                      'h-20 w-20 overflow-hidden rounded-full bg-slate-200'
                    }
                  >
                    <img src={'https://picsum.photos/200'} alt={'avatar'} />
                  </div>
                  <div className={'text-center'}>
                    <h2 className={'text-bold text-lg'}>{society?.name}</h2>
                  </div>
                  <div className={'text-center'}>
                    <span
                      className={
                        'rounded-md bg-gray-transparent-50 p-2 text-xs tracking-widest'
                      }
                    >
                      {society?.id}
                    </span>
                  </div>
                  <div className={'text-center line-clamp-4'}>
                    <p>{society?.description}</p>
                  </div>
                  <div className={'text-center'}>
                    <button
                      className={
                        'rounded-full bg-primary py-2 px-4 text-sm transition-opacity hover:opacity-70'
                      }
                    >
                      Enroll
                    </button>
                  </div>
                </section>
                <BlockMenu
                  items={[
                    {
                      label: 'News',
                      url: `/society/${societyId}`,
                      active: pathname === `/society/${societyId}`
                    },
                    {
                      label: 'Courses',
                      url: `/society/${societyId}/courses`,
                      active: pathname === `/society/${societyId}/courses`
                    }
                    // {
                    //   label: 'Proposals',
                    //   url: '#',
                    //   active: pathname === `/society/${societyId}/proposals`
                    // }
                  ]}
                />
              </>
            )}
          </div>
        </div>
        <div className={'w-full'}>{children}</div>
      </section>
    </BaseTemplate>
  )
}
