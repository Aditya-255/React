import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right-content" className='h-full overflow-x-auto flex flex-nowrap gap-10 w-2/3 p-6'>
      {props.users.map(function(ele,idx){
        return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag}/>
      })}
    </div>
  )
}

export default RightContent
