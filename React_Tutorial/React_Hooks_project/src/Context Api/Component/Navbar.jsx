import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../Contexts/ThemeContext'
import { PostDataContext } from '../Contexts/ThemeContext2'

const Navbar = (props) => {
  const data=useContext(ThemeDataContext)
  console.log(data)
  const data2=useContext(PostDataContext)
  console.log(data2)
  return (
    <div className='nav'>
      <h2>{data}</h2>
      <h2>{data2}</h2>
      <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
