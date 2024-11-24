import React from 'react'
import { useLayout } from '../../shared/context/LayoutContext'
import Footer from '../../shared/ui/footer/Footer'
import Header from '../../shared/ui/header/Header'
import { useAuth } from '../../shared/context/AuthContext'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { title } = useLayout()
  const { isAuthenticated } = useAuth()
  return (
    <div className='default-layout m-auto h-100'>
      {isAuthenticated && <Header title={title} />}
      <main className='h-100'>{children}</main>
      {isAuthenticated && <Footer />}
    </div>
  )
}

export default MainLayout
