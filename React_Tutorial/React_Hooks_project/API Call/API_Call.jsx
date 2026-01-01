import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const API_Call = () => {
    // async function getData(){
    //   const response= await fetch('https://jsonplaceholder.typicode.com/posts')
        
    //   const data= await response.json();   
    //     console.log(data);
    const [data, setdata] = useState([]);
    const getData=async()=>{
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
        setdata(response.data)
    }


  return (
    <div>
      <button onClick={()=>{
        getData()
      }}>Get Data</button>
      <div>
        {data.map(function(ele,idx){
            return <h3 key={idx}>{ele.title}</h3>
        })}
      </div>
    </div>
  )
}

export default API_Call
