import classnames from 'classnames'
import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'

interface DropDownProps {
  children: ReactNode
  dropDownContent: ReactNode
  className?: string
}

export const DropDown: FC<DropDownProps> = ({
  children,
  dropDownContent,
  className
}) => {
  const [visible, setVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: any): void => {
      if (
        dropdownRef.current != null &&
        !dropdownRef.current.contains(event.target)
      ) {
        setVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div
      ref={dropdownRef}
      onClick={() => {
        setVisible(!visible)
      }}
      className={classnames('relative z-0', className)}
    >
      {children}
      <div
        className={`absolute top-14 right-0 min-w-[200px] rounded-2xl border-[1px] border-gray-500 bg-background-color p-4 shadow shadow-background-color drop-shadow-lg ${
          visible ? 'block' : 'hidden'
        }`}
      >
        {dropDownContent}
      </div>
    </div>
  )
}
