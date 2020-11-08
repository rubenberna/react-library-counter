import React, { useState } from 'react'
import { button, buttonsContainer, container, addButton, subtractButton } from './_styles'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={container}>
      <h3>Current count: {count}</h3>
      <div style={buttonsContainer}>
        <button style={addButton} onClick={() => setCount(count + 1)}>Add</button>
        <button style={subtractButton} onClick={() => setCount(count - 1)}>Subtract</button>
      </div>
    </div>
  )
}

export default Counter
