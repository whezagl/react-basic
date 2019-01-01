import { useState } from 'react'

function useCount(name) {
  const [count, setCount] = useState(0)
  // think of: count = setCount(count + 1)
  const handleClick = () => setCount(count + 1)

  return {
    name,
    count,
    handleClick
  }

}

export default useCount
