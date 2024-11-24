import { signInWithPopup } from 'firebase/auth'
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../../app/firebase'

type AuthContextType = {
  isAuthenticated: boolean
  googleLogin: () => void
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('authToken'),
  )
  const navigate = useNavigate()

  const login = () => {
    localStorage.setItem('authToken', 'dummy-token')
    setIsAuthenticated(true)
    navigate('/home')
  }

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const token = await result.user.getIdToken()
      localStorage.setItem('authToken', token)
      setIsAuthenticated(true)
      navigate('/home')
    } catch (error) {
      console.error('Google login failed:', error)
    }
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, googleLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('AuthProvider Error')
  }
  return context
}
