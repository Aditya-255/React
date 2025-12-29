import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='pb-16 pt-6  px-18 h-[90vh] flex gap-10'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content
