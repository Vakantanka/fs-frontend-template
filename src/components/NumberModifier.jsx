import React from 'react'
import NumberPresenter from './NumberPresenter'
import { useCounter } from '../CounterProvider'

const NumberModifier = () => {
	const {increment, decrement} = useCounter()

	return (
		<>
		<div>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
		<NumberPresenter />
		</>
	)
}

export default NumberModifier