import React, { useState } from 'react'

function Count() {
  const [name] = useState('Count')
  const [count, setCount] = useState(0)
  // think of: count = setCount(count + 1)
  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <hr/>
      <div>Hi {name}.</div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Count
