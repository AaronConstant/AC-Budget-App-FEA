import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import New from './Components/New'
import Show from './Components/Show'
import { useEffect, useState } from 'react'
import Edit from './Components/Edit'
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
      <Route path='/transactions' element={<Home transactions= {transactions} />}/>
      <Route path='transactions/new' element={<New setTransactions= {setTransactions}/>}/>
      <Route path='/transactions/:index' element={<Show transactions= { transactions }/>} />
      <Route path='/transactions/:index/edit' element={<Edit/>} />
    </Routes>
    </>
  )
}

export default App
