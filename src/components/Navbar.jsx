import React from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

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
      </nav>
    </>
  )
}

export default Navbar