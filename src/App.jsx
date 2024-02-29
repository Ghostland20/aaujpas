import React from "react";
import { Navbar, Footer } from './constants'
import { Archive, Home, Contact, Eboard, Guidelines, Papers, Newsletter } from "./components";
import './index.css'

import { Routes, Route } from 'react-router-dom'


const App = () => {
  return(
    <div className="app__container">
      <Navbar />

      <div className="body__container">
        <Routes>
          <Route path='/'             element={[<Home/>]}/>
          <Route path='/archive'      element={[<Archive/>]}/>
          <Route path='/contact'      element={[<Contact/>]}/>
          <Route path='/editorial'    element={[<Eboard/>]}/>
          <Route path='/guidelines'   element={[<Guidelines/>]}/>
          <Route path='/papers'       element={[<Papers/>]}/>
          <Route path='/newsletter'   element={[<Newsletter/>]}/>
        </Routes>
      </div>
        
      <Footer/>
    </div>
  )
}

export default App