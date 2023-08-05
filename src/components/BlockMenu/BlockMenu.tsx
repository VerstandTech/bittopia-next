import { type FC } from 'react'
import { Link } from 'react-router-dom'

interface MenuItem {
  label: string
  url: string
  active: boolean
}

interface BlockMenuProps {
  items: MenuItem[]
}

export const BlockMenu: FC<BlockMenuProps> = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null
  }

  return (
    <section className={'w-full'}>
      <ul className={'flex flex-col items-start gap-2 pb-4'}>
        {items.map(item => (
          <li
            key={item.url}
            className={`pl-10 ${
              item.active ? 'border-l-4 border-l-white' : ''
            }`}
          >
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
