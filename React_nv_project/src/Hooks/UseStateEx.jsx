import React,{useState} from 'react'

const UseStateEx = () => {
    const [arr1, setArr1] = useState([10,20,30,40,50]);
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);

    const addElement=(v1)=>{
        setArr1([...arr1,v1]);
    }
    const removeElement=(v1)=>{
        setArr1(arr1.filter((x)=>x!==v1))
    }
    const updateElement=(k1,v1)=>{
        let newarr=arr1.map((x,idx)=>(idx===k1 ? v1 : x))
        setArr1(newarr)
    }
  return (
    <>
    <h1>Array element arr: {arr1.join(", ")}</h1>
    <br />
    <input type="number" placeholder='Enter value to add' onChange={(e)=>setVal1(parseInt(e.target.value))}/>
    <input type="number" placeholder='enter the index'  onChange={(e)=>setVal2(parseInt(e.target.value))}/>
    <div className='flex flex-row '>
        <button className='bg-amber-700 h-25 w-25 m-2' onClick={()=>addElement(val1)}>Add Element</button>
    <br />
    <button className='bg-pink-300 h-25 w-25 m-2' onClick={()=>removeElement(val1)}>Remove Element</button>
    <br />
    <button className='bg-blue-300 h-25 w-25 m-2' onClick={()=>updateElement(val2,val1)}>Update Element</button>
    </div>


    </>
  )
}

export default UseStateEx
