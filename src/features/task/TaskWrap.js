import React, { useState } from 'react'

const TaskWrap = ({ children }) => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((c) => c + 1)
  }
  return (
    <>
      <button onClick={handleClick}>クリック</button>
      <p>{count}</p>
      {children}
    </>
  )
}

export default TaskWrap
