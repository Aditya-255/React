import React from 'react'

const Calc = () => {
  return (
    <div className='h-full flex w-screen flex-col items-center justify-between flex-nowrap'>
      <h1 className='h-full text-xl'>Hello</h1>

      <div className='border-5px w-100px '>
        <input className=' p-5 bg-gray-200 h-100px w-200px ' type="text" />

        <table>
            <tr className='flex items-center '>
                <td><button className='bg-black rounded-xl text-white m-3 p-2 overflow-none justify-between'>C</button></td>
                <td><button className='bg-black rounded-xl text-white m-3 p-2 overflow-none justify-between'>()</button></td>
                <td><button className='bg-black rounded-xl text-white m-3 p-2 overflow-none justify-between'>%</button></td>
                <td><button className='bg-black rounded-xl text-white m-3 p-2 overflow-none justify-between'>/</button></td>
            </tr>
            <tr className='flex items-center '>
                <td><button className='bg-black rounded-xl text-white m-3 p-2 justify-between'>7</button></td>
                <td><button className='bg-black rounded-xl text-white m-3 p-2 justify-between'>8</button></td>
                <td><button className='bg-black rounded-xl text-white m-3 p-2 justify-between'>9</button></td>
                <td><button className='bg-black rounded-xl text-white m-3 p-2 justify-between'>*</button></td>
            </tr>
            <tr className='flex items-center '>
                <div className='bg-black rounded-xl'>
                    <td><button onClick={()=>{
                    console.log("Clicked")
                }} className='bg-gray-200 h-full rounded-xl text-white m-4 p-3 justify-between'>4</button></td>
                </div>
                <div className='bg-black rounded-xl '>
                    <td><button onClick={()=>{
                    console.log("Clicked")
                }} className='bg-gray-200 h-full rounded-xl text-white m-4 p-3 justify-between'>4</button></td>
                </div>
                <div className='bg-black rounded-xl'>
                    <td><button onClick={()=>{
                    console.log("Clicked")
                }} className='bg-gray-200 h-full rounded-xl text-white m-4 p-3 justify-between'>4</button></td>
                </div>
                <div className='bg-black rounded-xl'>
                    <td><button onClick={()=>{  
                    console.log("Clicked")
                }} className='bg-gray-200 h-full rounded-xl text-white m-4 p-3 justify-between'>4</button></td>
                </div>
                
            </tr>
            <tr className='flex items-center '>
                <td><button  className='bg-black rounded-xl text-white m-3 p-2 justify-between'>1</button></td>
                <td><button className='bg-black  rounded-xl text-white m-3 p-2 justify-between'>2</button></td>
                <td><button className='bg-black rounded-xl text-white m-3 p-2 justify-between'>3</button></td>
                <td><button className='bg-black rounded-xl  text-white m-3 p-2 justify-between'>+</button></td>
            </tr>
        </table>
      </div>
    </div>  
  )
}

export default Calc
