import React from 'react'
import { useLayout } from '../../shared/context/LayoutContext'
import Footer from '../../shared/ui/Footer/Footer'
import Header from '../../shared/ui/header/Header'
import { useAuth } from '../../shared/context/AuthContext'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { title } = useLayout()
  const { isAuthenticated } = useAuth()
  return (
    <div>
      {isAuthenticated && <Header title={title} />}
      <main>{children}</main>
      {isAuthenticated && <Footer />}
    </div>
  )
}

export default MainLayout
