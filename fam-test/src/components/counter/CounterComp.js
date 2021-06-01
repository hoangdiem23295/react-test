import React from 'react'
import useCounter from './useCounter'

const CounterComp = () => {
  const [
    count,
    increaseCounter,
    resetCounter
  ] = useCounter(1)
  return (
    <>
      <p>Counter = {count}</p>
      <p>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={resetCounter}>Reset</button>
      </p>
    </>
  )
}

export default CounterComp
