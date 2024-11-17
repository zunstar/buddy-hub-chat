// routes/ProtectedRoutes.tsx
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PUBLIC_ROUTES } from './routeConstants'

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken')
}

const ProtectedRoutes: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to={PUBLIC_ROUTES.ROOT} />
}

export default ProtectedRoutes
