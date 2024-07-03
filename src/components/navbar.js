import React, { useState } from "react";
import Logo from '../assets/pizzaLogo.png'//Logo is just a variable name used in this file only.
import{Link } from 'react-router-dom'
import '../styles/navbar.css'
//import ReorderIcon from "@material-ui/icons/Reorder";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);}
  return (
    <div className ="navbar">
        <div className='leftSide' id = {openLinks ? "open":"close"}>
            <img src = {Logo}/>
            <div className='hiddenLinks'>
            <Link to ="/about">About</Link>
            <Link to ="/menu">Menu</Link>
            <Link to ="/contact">Contact</Link>
            <Link to ="/">Home</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to ="/about">About</Link>
            <Link to ="/menu">Menu</Link>
            <Link to ="/contact">Contact</Link>
            <Link to ="/">Home</Link>
            <button onClick={toggleNavbar}>
              <SkipPreviousIcon/>
            </button>
        </div>
    </div>
  )
}

export default Navbar