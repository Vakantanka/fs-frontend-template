import React from 'react'
import { useAuth } from '../providers/auth'

const About = () => {
  const { auth, token } = useAuth()

  return (
    <>
    <h2>About</h2>
    <p>{ token ? "Logged in." : "Anonymous user."}</p>
    </>
  )
}

export default About