import { type FC } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export const SearchField: FC = props => {
  return (
    <div
      className={
        'flex w-full items-center rounded-full border-[1px] border-gray-500 px-5 py-3'
      }
    >
      <RiSearchLine className={'mr-4 fill-white'} />
      <input
        className={
          'peer w-full border-none bg-transparent text-white outline-none'
        }
        placeholder={'Search'}
      />
    </div>
  )
}
