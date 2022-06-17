import { useCounter, useEffect } from '../hooks/useCounter'
import { useCounter as useGlobalCounter } from "../providers/counter"

const Profile = () => {
  const {counter, increment, decrement} = useCounter();
  const {value, increment: up, decrement: down} = useGlobalCounter();

  useEffect(() => {
    localStorage.setItem("counter", counter)
  }, [counter])

  return (
    <>
    <h2>Profile</h2>
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