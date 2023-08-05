import { type FC } from 'react'
import { MainNavigation } from '@/components/MainNavigation/MainNavigation'
import Container from '@/layouts/Container'
import SideNavigation from '@/components/SideNavigation'
import Footer from '@/components/Footer'

interface BaseTemplateProps {
  children: React.ReactNode
  showFooter?: boolean
}

export const BaseTemplate: FC<BaseTemplateProps> = ({
  children,
  showFooter = false
}) => {
  return (
    <div className="min-h-screen w-full bg-background-color text-white">
      <SideNavigation />
      <MainNavigation />
      <div className={'py-28 px-10 sm:px-0'}>
        <Container>{children}</Container>
      </div>
      {showFooter && <Footer />}
    </div>
  )
}
