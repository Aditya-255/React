import React, { useEffect } from 'react'
import { useState } from 'react'

const Use_Effect = () => {
    const [num, setnum] = useState(0);
    const [num2, setnum2] = useState(100);
    useEffect(function(){
        console.log('use effect called');
    },[num])
  return (
    <div>
        <h1>{num}</h1> 
        <h1>{num2}</h1>
      <button onClick={()=>{
        setnum(num+1)
        setnum2(num2+10)
      }}>Click</button>
    </div>
  )
}

export default Use_Effect
