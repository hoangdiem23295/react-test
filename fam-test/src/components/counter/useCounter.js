import {useState} from 'react'

const useCounter = (num) => {
  const [count, setCount] = useState(0)
  
  const increaseCounter = () => {
    console.log(count)
    setCount(count + num)
  }
  const resetCounter = () => {
    setCount(0)
  }
  return [
    count,
    increaseCounter,
    resetCounter
  ]
}

export default useCounter

