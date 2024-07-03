import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Menu from './pages/Menu'
import Contact from './pages/contact'
import './App.css'

function App() {
  return (
    <div>
      <Router><Navbar/>
      <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/menu" element = {<Menu/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App