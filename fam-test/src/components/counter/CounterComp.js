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
        <button onClick={increaseCounter} style={{padding: 5, marginRight: 10, backgroundColor: 'green', color: 'white', cursor: 'pointer'}}>Increase</button>
        <button onClick={resetCounter} style={{padding: 5, backgroundColor: 'green', color: 'white', cursor: 'pointer'}}>Reset</button>
      </p>
    </>
  )
}

export default CounterComp
