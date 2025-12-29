import React from 'react'
import "./card.css"
// import prototype from 'prop-types'
const Classprops = (props) => {
  return (
    <div className="user-card">
    <h1>{props.title}</h1>
    <img src={props.url} alt=""  />
    <button onClick={props.onclikc}>{props.btn}</button>
    <p>{props.desc}</p>
    </div>
  )
}
// Classprops.prototype={
//   title:prototype.string.isRequired,
//   url:prototype.string.isRequired,
//   btn:prototype.string.isRequired,
//   desc:prototype.string.isRequired
// }

export default Classprops
