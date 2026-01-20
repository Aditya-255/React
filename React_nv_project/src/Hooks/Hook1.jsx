import React ,{useState} from 'react'

const Hook1 = () => {
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(true);
    const [name, setName] = useState("abc");

  return (
    <div className='flex items-center justify-center flex-col'>
      <h1>Count: {count}</h1>
      <button className='border-2 bg-gray-600' onClick={()=>{setCount(count+1)}}>Increment</button>
      <button className='border-2 bg-cyan-600'  onClick={()=>{setCount(count-1)}}>Decrement</button>

        <input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)}/>

        <br />

        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <h1>Name is : {name}</h1>
    </div>
  )
}

export default Hook1
