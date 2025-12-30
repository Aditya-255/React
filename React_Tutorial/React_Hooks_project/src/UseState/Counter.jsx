import  { useState } from 'react'
import React from 'react'

const Counter = () => {

    const [num, setnum] = useState(0);
    function increaseNum(){
        setnum(num+1)
    }
    function decreaseNum(){
        setnum(num-1)
    }

  return (
    <div>
        <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  )
}
export default Counter;
