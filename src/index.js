import React, { useState } from 'react'
import styles from './styles.module.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={styles.container}>
      <h3>Current count: {count}</h3>
      <div className={styles.buttonsContainer}>
        <button className={styles.addButton} onClick={() => setCount(count + 1)}>Add</button>
        <button className={styles.subtractButton} onClick={() => setCount(count - 1)}>Subtract</button>
      </div>
    </div>
  )
}

export default Counter
