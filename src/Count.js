import React, { useState } from 'react'

function Count() {
  const [name] = useState('Count')
  const [count, setCount] = useState(0)
  const onClick = () => setCount(count + 1)

  return (
    <div>
      <hr/>
      <div>Hi {name}.</div>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default Count
