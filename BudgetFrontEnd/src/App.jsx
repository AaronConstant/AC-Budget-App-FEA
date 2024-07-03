import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import New from './Components/New'
import Show from './Components/Show'
function App() {




  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/transactions' element={<Home />}/>
      <Route path='transactions/new' element={<New/>}/>
      <Route path='/transactions/:index' element={<Show/>} />
    </Routes>
    </>
  )
}

export default App
