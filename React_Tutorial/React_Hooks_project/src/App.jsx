import { useState } from 'react'
import React from 'react'
import Counter from './UseState/Counter'

function App() {

  //num : read only
  //setNum : to update the value of num
  // const [num, setNum] = useState(10)
  // const [users, setusers] = useState([10,20,30]);


  // function changeNum(){
  //   setNum(30)
  //   setusers([40,50,60])
  // }
  return (
    <>
      {/* <div>
        <h1>value of num is {num} <br /> {users}</h1>
        <button onClick={changeNum}>Click</button>
      </div> */}

        <Counter/>

    </>
  )
}

export default App
