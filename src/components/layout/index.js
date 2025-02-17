import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Offer from '../Offer'

function Layout() {
  return (
    <div>
        <Offer/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout