import React from 'react'
import Nav from './nav'
import Page1content from './Page1content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Nav />
      <Page1content users={props.users} />
    </div>
  )
}

export default Section1
