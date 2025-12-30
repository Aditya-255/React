import React from 'react'

const Func = () => {

    function btnclick(){
        console.log("Button Clicked");
    }
    function MouseEnter(){
        console.log("Mouse Entered");
    }
  return (
    <div>
      {/* <h1>Hello Aditya</h1> */}
      {/* <button onMouseEnter={MouseEnter} onClick={btnclick}>Changes User</button> */}
        <input onChange={(ele)=>{
            console.log(ele.target.value);
        }} type="text" placeholder='Enter Name' />    
   </div>
  )
}

export default Func
