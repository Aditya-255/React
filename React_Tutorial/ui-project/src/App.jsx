import React from 'react'
import Section1 from './Component/Section 1/section1'
import Section2 from './Component/Section 2/section2'
const App = () => {
  const user=[
    {
      img:'',
      intro:'',
      tag:''
    },
    {
      img:'',
      intro:'',
      tag:''
    },
    {
      img:'',
      intro:'',
      tag:''
    }
  ]
  return (
    <div>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default App
