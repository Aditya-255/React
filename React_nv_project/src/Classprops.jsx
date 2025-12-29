import React from 'react'
import "./card.css"
const Classprops = (props) => {
  return (
    <div className="user-card">
    <h1>{props.title}</h1>
    <img src={props.url} alt=""  />
    <button className='user-card-btn'>{props.btn}</button>
    <p>{props.desc}</p>
    </div>
  )
}

export default Classprops
