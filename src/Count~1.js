import React, { useState } from 'react'
import useCount from './use-count'

function Count1() {
  const [name] = useState('Count~1')
  const {count, handleClick} = useCount();

  return (
    <div>
      <hr/>
      <div>Hi {name}.</div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Count1
