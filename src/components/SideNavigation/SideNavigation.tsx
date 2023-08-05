import { useAuthCredentials } from '@/store/AuthCredentials/AuthCredentials'
import { type FC } from 'react'
import { RiAddLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const SideNavigation: FC = props => {
  const { web3Address } = useAuthCredentials()
  return (
    <div
      className={
        'fixed left-0 top-0 z-20 hidden h-full w-[80px] flex-col items-center gap-8 border-r-[1px] border-r-gray-500 bg-background-color p-4 sm:flex'
      }
    >
      <Link
        className={
          'flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary text-white'
        }
        to={'/'}
      >
        <span className={'text-2xl font-bold'}>B</span>
      </Link>
      {web3Address !== undefined && web3Address !== '' && (
        <Link
          to={'/society/create'}
          className={
            'flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-500 bg-transparent hover:cursor-pointer hover:border-white'
          }
        >
          <span className={'text-lg'}>
            <RiAddLine />
          </span>
        </Link>
      )}
    </div>
  )
}
