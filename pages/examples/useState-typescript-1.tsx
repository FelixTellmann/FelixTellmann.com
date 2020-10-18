import { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)
  
  return (
      <div>
        <p>Your number is {number}</p>
        <button onClick={() => setNumber(number + 1)} style={{marginRight: '20px'}}>Increase</button>
        <button onClick={() => setNumber(number - 1)}>Decrease</button>
      </div>
  )
}

export default  Counter