import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

//routes
import SignIn from './Components/SignIn'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import Show from './Components/Show'
import Edit from './Components/Edit'
import New from './Components/New'
function App() {
  
  const API = import.meta.env.VITE_BASE_URL
  const [transactions, setTransactions] = useState()
  useEffect(() => {
      fetch(API)
      .then(res => res.json())
      .then(res => {
          setTransactions(res)
      })
      .catch(err => console.error(err))

  },[])


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/transactions' element={<Home transactions= {transactions} />}/>
      <Route path='transactions/new' element={<New setTransactions= {setTransactions}/>}/>
      <Route path='/transactions/:index' element={<Show transactions= { transactions }/>} />
      <Route path='/transactions/:index/edit' element={<Edit/>} />
    </Routes>
    </>
  )
}

export default App
