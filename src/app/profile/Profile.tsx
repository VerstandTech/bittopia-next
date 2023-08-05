import BioTemplate from '@/components/BioTemplate'
import Block from '@/components/Block'
import { useQueryData } from '@/hooks/useQueryData/useQueryData'
import { useAuthCredentials } from '@/store/AuthCredentials/AuthCredentials'
import { type FC } from 'react'

export const Profile: FC = () => {
  const { data: queryData } = useQueryData()
  const { web3Address } = useAuthCredentials()

  const profile = queryData?.data.profiles[web3Address]

  return (
    <BioTemplate name={profile !== undefined ? profile.name : ''}>
      <section className={'flex flex-col gap-8'}>
        <Block>
          <div className={'p-8 text-gray-500'}>
            Hasn't made any activity yet
          </div>
        </Block>
      </section>
    </BioTemplate>
  )
}
