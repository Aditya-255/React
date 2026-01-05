import React from 'react'
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer'
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'
import About from './Pages/About'
import Product from './Pages/Product'
import Men from './Pages/men'
import Nav2 from './Componets/Nav2'

const App7 = () => {
  return (
    <div className=' h-screen bg-black text-white'>
      <Navbar/>
      <Nav2/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>}></Route>
        </Route>
         
      </Routes>
      <Footer/>
    </div>
  )
}

export default App7
