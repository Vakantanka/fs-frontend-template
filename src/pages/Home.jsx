import { useCounter } from '../hooks/useCounter'
import { useCounter as useGlobalCounter } from "../providers/counter"

const Home = () => {
  const {counter, increment, decrement} = useCounter();
  const {value, increment: up, decrement: down} = useGlobalCounter();

  return (
    <>
    <h2>Home</h2>
    <h3>local</h3>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button className="homeValue">{counter}</button>
    <h3>global</h3>
    <button onClick={up}>+</button>
    <button onClick={down}>-</button>
    <button className="homeValue">{value}</button>
    </>
  )
}

export default Home