// src/pages/cover/Cover.tsx
import React from 'react'
import { useAuth } from '../../shared/context/AuthContext'

const Cover: React.FC = () => {
  const { login, googleLogin } = useAuth()

  return (
    <div>
      <h1>Welcome to Buddy Hub Chat</h1>
      <button onClick={login}>Login</button>
      <button onClick={googleLogin}>GoogleLogin</button>
    </div>
  )
}

export default Cover
