import React from 'react'
import { useState } from 'react'
const Input_2 = () => {

  const [title, settitle] = useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} action="">
        <input 
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        type="text" 
        value={title}
        placeholder='Enter name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Input_2
