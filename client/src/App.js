import React from 'react'
import { Login } from './components/Home/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from './components/Home/Register';


export const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
  
    </>
  )
}
