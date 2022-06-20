import React, { useState, useContext, createContext, useEffect } from 'react'
import http from 'axios'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setToken(token)
    }
  }, [])
 
  const auth = () => {
    const googleBaseURL = "https://accounts.google.com/o/oauth2/v2/auth"
    const searchParams = new URLSearchParams()
    searchParams.append("client_id", "423125049963-vnhlm59vvirdjsquu0efhqvq5u91orks.apps.googleusercontent.com")
    searchParams.append("response_type", "code")
    searchParams.append("scope", "openid")
    searchParams.append("redirect_uri", "http://localhost:3000/callback")
    searchParams.append("prompt", "select_account")
    const fullURL = googleBaseURL + "?" + searchParams.toString()
    window.location.href = fullURL
  }

  const login = async (code, provider) => {
    try {
      const response = await http.post('http://localhost:4000/api/user/login', {
        code: code,
        provider: provider
      })
      console.log(response.data)
      setToken(response.data.sessionToken)
      localStorage.setItem("token", response.data.sessionToken)
    } catch (error) {
      setToken(null)
      localStorage.removeItem("token")
    }
  }
  
  const logout = () => {
    setToken(null)
    localStorage.removeItem("token")
  }
  
	return (
		<AuthContext.Provider value={{ token, auth, logout, login }} >
			{children}
		</AuthContext.Provider>
	)
}

const useAuth = () => {
	const context = useContext(AuthContext)
  if (!context) throw new Error("Add auth provider to root!")
  return context
}

export { AuthProvider, useAuth }