import BlockMenu from '@/components/BlockMenu'
import BaseTemplate from '@/layouts/BaseTemplate'
import getResumeFromWeb3AddressUtil from '@/utils/getResumeFromWeb3AddressUtil'
import { useState, type FC, type ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import { BaseButton } from '../BaseButton/BaseButton'
import { EditProfileModal } from '../EditProfileModal/EditProfileModal'

interface BioTemplateProps {
  avatar?: string
  name: string

  children: ReactNode
}

export const BioTemplate: FC<BioTemplateProps> = ({
  avatar,
  name,
  children
}) => {
  const { id } = useParams()
  const avatarUrl = avatar ?? `https://cdn.stamp.fyi/avatar/${id}?s=138`

  const { pathname } = window.location

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)

  return (
    <BaseTemplate>
      <section className={'grid grid-cols-1 gap-8 md:grid-cols-society-feed'}>
        <div className={'h-auto'}>
          <div
            className={
              'sticky top-28 flex flex-col items-center gap-4 rounded-2xl border-[1px] border-gray-500'
            }
          >
            <section className={'m-4 flex flex-col items-center gap-4'}>
              <div
                className={
                  'h-20 w-20 overflow-hidden rounded-full bg-slate-200'
                }
              >
                <img src={avatarUrl} alt={'avatar'} />
              </div>
              <div className={'flex flex-col items-center'}>
                <div className={'text-center'}>
                  <h2 className={'text-bold text-lg'}>{name}</h2>
                </div>
                <div className={'text-center'}>
                  <span
                    className={
                      'rounded-md bg-gray-transparent-50 p-1 text-[10px] tracking-widest'
                    }
                  >
                    {getResumeFromWeb3AddressUtil(id as string)}
                  </span>
                </div>
                <div className="flex w-full items-center">
                  <BaseButton
                    onClick={() => {
                      setIsEditModalOpen(true)
                    }}
                    className="mt-2 w-full"
                    size="sm"
                  >
                    Edit profile
                  </BaseButton>
                </div>
              </div>
            </section>
            {id != null && (
              <BlockMenu
                items={[
                  {
                    label: 'Activity',
                    url: `/profile/${id}`,
                    active: pathname === `/profile/${id}`
                  },
                  {
                    label: 'About',
                    url: `/profile/${id}/about`,
                    active: pathname === `/profile/${id}/about`
                  }
                ]}
              />
            )}
          </div>
        </div>
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false)
          }}
        />
        <div className={'w-full'}>{children}</div>
      </section>
    </BaseTemplate>
  )
}
