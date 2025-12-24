import React from 'react'
// import Card from './Component/Card'
import { BsBookmark } from "react-icons/bs";
import Card2 from './Component/Card2';


// multiple return that time use fragment
const App = () => {
  return (
    // <>
    // <div>
    //   <h1>React Tutorial</h1>
    // </div>
    // <div>
    //   <h1>
    //     React Tutorial
    //   </h1>
    // </div>
    // </>
    // <div>
    // <div className='card'>
    //   <h1>React Tutorial</h1>
    //   <Card />
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit obcaecati, est dolorum voluptatibus autem laudantium fugiat illo eveniet id nihil soluta reiciendis, ex impedit? Quis distinctio cupiditate suscipit inventore?</p>
    // </div>
    // {Card()}
    // </div>

    // Understanding Props
    //Properties
      // <div className='parent'>
      //   <Card user="Aditya"  age={18}/>
      //   <Card user="ABC"/>
      // </div>

      //mini Project for props Drilling
      <div className="parent">
        <Card2 />
      </div>
  )
}

export default App


