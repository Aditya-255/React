import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className='py-3 px-18 h-[90vh] flex gap-10'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1content
