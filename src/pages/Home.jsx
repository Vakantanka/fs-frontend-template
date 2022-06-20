import { useCounter } from '../hooks/useCounter'
import { useCounter as useGlobalCounter } from "../providers/counter"
import { useAuth } from '../providers/auth'

const Home = () => {
  const {counter, increment, decrement} = useCounter();
  const {value, increment: up, decrement: down} = useGlobalCounter();
  const { auth, token } = useAuth()

  return (
    <>
    <h2>Home</h2>
    <p>{ token ? "Logged in." : "Anonymous user."}</p>
    <h3>local</h3>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button className="homeValue">{counter}</button>
    <h3>global</h3>
    <button onClick={up}>+</button>
    <button onClick={down}>-</button>
    <button className="homeValue">{value}</button>
    <h3>Login</h3>
    <button onClick={auth}>Login with Google</button>
    </>
  )
}

export default Home