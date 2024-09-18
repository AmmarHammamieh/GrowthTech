import React from 'react'
import logo from '../../assets/images/logo.webp'
import user from '../../assets/icons/user.webp'
import Drawer from './Drawer'
import { BsList } from "react-icons/bs";

function Header() {
  return (
    <header>
      <div className='flex  items-center gap-8'>
        <img src={logo} className='logo'/>
        <a href='#howWorks' className='nav-item hidden md:block'>How it Works</a>
        <a href='#signals' className='nav-item hidden md:block'>Signals</a>
        <a href='#' className='nav-item hidden md:block'>Reviews</a>
        <a href='#' className='nav-item hidden md:block'>Blog</a>
      </div>
      <div className='flex items-center gap-8'>
        <button className='px-10 py-4 bg-[#07C961] rounded-[2rem] text-white'>Buy Now</button>
        <div className='bg-[#4B93D0] p-[0.9rem] rounded-full'>
          <img src={user}/>
        </div>
        <button class="text-4xl block md:hidden" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
          <BsList/>
        </button>
      </div>
      <Drawer/>
    </header>
  )
}

export default Header