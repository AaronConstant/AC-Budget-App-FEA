import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
// import Show from './Components/Show'
import Home from './Components/Home'
import New from './Components/New'
function App() {



  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/transactions' element={<Home/>}/>
      <Route path='transactions/new' element={<New/>}/>
    </Routes>
    </>
  )
}

export default App
