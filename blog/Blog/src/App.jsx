import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/a" element={<Add/>}/>
        </Routes>
        {/* <Home/>
        <Add/> */}
        
      </div>
      
    </>
  )
}

export default App
