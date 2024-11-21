import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
function App() {
  return (
    <Routes basename="/portfolio">
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path='/services' Component={Services} />
      <Route path="/contact" Component={Contact} />
      <Route path="/portfolio" Component={Portfolio} />
    </Routes>
  )
}

export default App
