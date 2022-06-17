import React from "react"
// import NumberModifier from "./components/NumberModifier"
// import NumberPresenter from "./components/NumberPresenter"
// import { useCounter } from "./CounterProvider"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  // const { value, increment, decrement } = useCounter()

  return (
    <div className="app">
      <Navbar />
      <h1>Counter demo</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <div className="counter">
        <button onClick={increment}>+</button>
        <p>{value}</p>
        <button onClick={decrement}>-</button>
        <NumberPresenter />
        <NumberModifier />
      </div> */}
    </div>
  );
}

export default App;
