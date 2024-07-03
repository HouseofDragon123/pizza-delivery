import React from 'react'
import {MenuList} from '../menuList'
import MenuCard from '../components/MenuCard'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>OUR MENU</h1>
        <div className='menuList'>
           {MenuList.map((menuitem,key)=>{return <MenuCard image={menuitem.image} name = {menuitem.name} price = {menuitem.price}/>})}
        </div>
    </div>
  )
}

export default Menu