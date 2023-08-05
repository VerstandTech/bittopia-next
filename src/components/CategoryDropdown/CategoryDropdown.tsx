import { type ScienceFields } from '@/store/useMainStore/useMainStore'
import { type FC } from 'react'
import { RiArrowDropDownLine, RiListUnordered } from 'react-icons/ri'
import DropDown from '../DropDown'

export interface CategoryItem {
  label: ScienceFields | string
  value: ScienceFields | undefined
}

interface CategoryDropdownProps {
  itemList: CategoryItem[]
  selectedItem: CategoryItem | undefined
  onChange: (value: CategoryItem) => void
}

export const CategoryDropdown: FC<CategoryDropdownProps> = ({
  itemList,
  selectedItem = undefined,
  onChange
}) => {
  return (
    <DropDown
      className="w-full"
      dropDownContent={
        <ul className={'decoration-0'}>
          {itemList?.map((item, index) => (
            <li
              key={`li-${index}`}
              className={
                'transition-transform hover:translate-x-1 hover:cursor-pointer'
              }
              onClick={() => {
                onChange(item)
              }}
            >
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      }
    >
      <div
        className={
          'flex cursor-pointer items-center rounded-full border-[1px] border-gray-500 px-5 py-3'
        }
      >
        <span className={'flex w-full items-center justify-between'}>
          <span className="flex items-center">
            <RiListUnordered className={'mr-4 fill-white'} />
            {selectedItem !== undefined ? selectedItem.label : 'All Sciences'}
          </span>
          <RiArrowDropDownLine
            className={'ml-4 h-[1.5rem] w-[1.5rem] fill-gray-500'}
          />
        </span>
      </div>
    </DropDown>
  )
}
