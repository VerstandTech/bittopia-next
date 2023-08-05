import { type FC, type ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}
export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const backdropClass = `fixed top-0 left-0 h-screen w-screen z-20 bg-black bg-opacity-20 ${
    isOpen ? '' : 'hidden'
  }`
  const modalClass = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-md shadow-lg ${
    isOpen ? '' : 'hidden'
  }`

  return (
    <>
      <div className={backdropClass} onClick={onClose} />
      <div className={modalClass}>{children}</div>
    </>
  )
}
