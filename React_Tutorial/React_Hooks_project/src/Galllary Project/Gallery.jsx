import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Gallery = () => {
const [UserData, setUserData] = useState([]);
const [Index, setIndex] = useState(1);

  const getData= async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=15`)
    setUserData(response.data)
  }
  useEffect(()=>{
    getData()
  },[Index])
  let printuserdata='no user available';
  if(UserData.length>0){
    printuserdata=UserData.map(function(ele,idx){
      return <div key={idx}>
        <a href={ele.download_url} target='_blank'>
        <div className='h-40 w-44 bg-white'>
       <img className='h-full object-cover ' src={ele.download_url} alt="" /> 
      </div></a>
      <h1>{ele.author}</h1>
      </div>

    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button 
      onClick={getData}
      className='bg-gray-600 mb-5 px-5 py-2 rounded text-white'>
        Get Data
        </button> */}
        <div className='flex flex-wrap gap-4'>
          {
            printuserdata
          }
        </div>
        <div className='flex justify-center gap-6 items-center p-4'>
          <button 
          onClick={()=>{
            if(Index>1){
              setIndex(Index-1)
            }
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>
          Prev
          </button>
          <button 
          onClick={()=>{
            setIndex(Index+1)
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>
          Next
          </button>
        </div>
    </div>
  )
}

export default Gallery
