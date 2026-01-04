// React Rouet dom give multiple router

// 1. BrowserRouter:basic router for web app
//  store in browser history
// abc.com=/
// abc.com/home=/home
// 2. HashRouter:for hash routing
// abc.com=/#/

// 3. MemoryRouter:for memory routing
// store in memory

// 4.staticRouter:for static routing
// for server side rendering
//  used in next js
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Componet/Navbar'

const React_Router_Ex = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default React_Router_Ex
