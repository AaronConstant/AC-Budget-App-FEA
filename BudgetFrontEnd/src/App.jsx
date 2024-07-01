import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Show from './Components/Show'
function App() {



  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>
    </>
  )
}

export default App
