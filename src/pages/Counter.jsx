import React, { useState } from 'react'

import './Counter.css'
import '../App.css'

const Counter = () => {

  const[count, setCount] = useState(0)

  const handleOnClick = operador => {
    const newValue = operador === '+'
      ? count + 1
      : count - 1
    setCount(newValue)
  }

  return(
    <>
      <div className='counter'>
        <span>{count}</span>
        <button onClick={() => handleOnClick('-')}>-</button>
        <button onClick={() => handleOnClick('+')}>+</button>
      </div>
    </>
  )
}

export default Counter