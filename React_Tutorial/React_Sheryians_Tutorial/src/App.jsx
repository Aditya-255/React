import React from 'react'
import Card from './Component/Card'

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
    <div>
    <div className='card'>
      <h1>React Tutorial</h1>
      <Card />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit obcaecati, est dolorum voluptatibus autem laudantium fugiat illo eveniet id nihil soluta reiciendis, ex impedit? Quis distinctio cupiditate suscipit inventore?</p>
    </div>
    {Card()}
    </div>
  )
}

export default App


