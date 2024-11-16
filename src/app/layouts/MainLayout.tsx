import { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div>{children}</div>
}

export default MainLayout
