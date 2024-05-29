import { useState } from 'react'

export const CustomButton = ({ text = 'Click Here', onclick }) => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{text}</button>
      <p data-testid="p-customButton">{count}</p>
    </>
  )
}
