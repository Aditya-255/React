import React from 'react'

const RightCardContent = () => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold
     rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
        <div >
         <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum 
            dolor sit amet consectetur adipisicing elit. Dolores, non neque! Eum iusto tenetur veniam!</p>   
         <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2  rounded-full' >Satisfied</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
         </div>
        </div>
        </div>
  )
}

export default RightCardContent
