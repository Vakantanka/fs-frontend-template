import React from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useAuth } from '../providers/auth'

const Navbar = () => {
  const navigate = useNavigate()
  const { auth, token, logout } = useAuth()

  const nav = (path) => {
    navigate(path)
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => nav("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => nav("/about")}>About</button>
          </li>
          <li>
            <button onClick={() => nav("/profile")}>Profile</button>
          </li>
        </ul>
        <ul>
          <li>
            { token ? 
              <button onClick={logout}>Logout</button>
              :
              <button onClick={auth}>Login</button>
            }
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar