import BioTemplate from '@/components/BioTemplate'
import { TextContentBlock } from '@/components/TextContentBlock/TextContentBlock'
import { useQueryData } from '@/hooks/useQueryData/useQueryData'
import useAuthCredentials from '@/store/AuthCredentials'
import { type FC } from 'react'

export const ProfileAbout: FC = () => {
  const { data: queryData } = useQueryData()
  const { web3Address } = useAuthCredentials()

  const profile = queryData?.data.profiles[web3Address]

  return (
    <BioTemplate name={profile !== undefined ? profile.name : ''}>
      <section className={'flex flex-col gap-8'}>
        {profile?.description !== '' && (
          <TextContentBlock title={'Bio'}>
            {profile?.description}
          </TextContentBlock>
        )}
        {/* <TextContentBlock title={'Created societies'}>
          Hasn't created any society yet
        </TextContentBlock>
        <TextContentBlock title={'Joined courses'}>
          Hasn't joined any course yet
        </TextContentBlock> */}
      </section>
    </BioTemplate>
  )
}
