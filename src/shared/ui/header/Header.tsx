import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

// Header.tsx
type HeaderProps = {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { logout } = useAuth()
  return (
    <header className='d-flex flex-column'>
      <h2>{title}</h2>
      <div onClick={logout}>로그아웃</div>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/chat'>Chat</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
