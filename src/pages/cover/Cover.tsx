// src/pages/cover/Cover.tsx
import React from 'react'
import { useAuth } from '../../shared/context/AuthContext'
import '@/shared/styles/cover/Cover.scss'

const Cover: React.FC = () => {
  const { googleLogin } = useAuth()

  return (
    <div className='cover-wrap w-100 h-100 p-3 d-flex flex-column align-items-center justify-content-center'>
      <button className='px-3 py-2' onClick={googleLogin}>
        구글로그인
      </button>
    </div>
  )
}

export default Cover
