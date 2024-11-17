// app/App.tsx
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { LayoutProvider } from '../shared/context/LayoutContext'
import MainLayout from './layouts/MainLayout'
import { AuthProvider } from '../shared/context/AuthContext'

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <LayoutProvider>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </LayoutProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
