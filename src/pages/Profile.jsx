import { useEffect } from "react"
import { useCounter } from '../hooks/useCounter'
import { useCounter as useGlobalCounter } from "../providers/counter"
import { useAuth } from '../providers/auth'

const Profile = () => {
  const {counter, increment, decrement} = useCounter();
  const {value, increment: up, decrement: down} = useGlobalCounter();
  const { token } = useAuth()

  useEffect(() => {
    localStorage.setItem("counter", counter)
  }, [counter])

  return (
    <>
    <h2>Profile</h2>
    <p>{ token ? "Logged in." : "Anonymous user."}</p>
    <h3>home</h3>
    <button onClick={ increment }>+</button>
    <button onClick={ decrement }>-</button>
    <button className="profileValue">{ counter }</button>
    <h3>global</h3>
    <button onClick={up}>+</button>
    <button onClick={down}>-</button>
    <button className="homeValue">{value}</button>
    </>
  )
}

export default Profile