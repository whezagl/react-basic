import React from 'react'
import useCount from './use-count'

function Count2() {
  const {
    name, 
    count, 
    handleClick
  } = useCount('Count~2')

  return (
    <div>
      <hr/>
      <div>Hi {name}.</div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Count2
