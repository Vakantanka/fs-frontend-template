import React from "react";
import NumberModifier from "./components/NumberModifier";
import NumberPresenter from "./components/NumberPresenter";
import { useCounter } from "./CounterProvider";

function App() {
  const { value, increment, decrement } = useCounter()
  return (
    <div className="app">
      <h1>Counter demo</h1>
      <div className="counter">
        <button onClick={increment}>+</button>
        <p>{value}</p>
        <button onClick={decrement}>-</button>
        <NumberPresenter />
        <NumberModifier />
      </div>
    </div>
  );
}

export default App;
