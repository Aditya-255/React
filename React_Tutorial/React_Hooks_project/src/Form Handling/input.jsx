import React from 'react'

const Input = () => {
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} action="">
        <input type="text" placeholder='Enter name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Input
