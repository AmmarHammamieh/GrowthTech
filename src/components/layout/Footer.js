import React from 'react'
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import logo from '../../assets/images/logo.webp'

function Footer() {
  return (
    <div>
        <div className=' bg-gradient-to-r from-[#8BF2B5] to-[#35C8EB] h-[0.625rem]'/>
        <footer>
          <div className='grid grid-cols-2 gap-y-4 md:grid-cols-4 py-8 px-8 md:px-14'>
            <div>
              <p className='title'>About</p>
              <p className='nav-item'>Home</p>
              <p className='nav-item'>Product</p>
            </div>
            <div>
              <p className='title'>Support</p>
              <p className='nav-item'>Activate</p>
              <p className='nav-item'>Login</p>
            </div>
            <div className='col-span-2'>
              <p className='title'>Find Us On</p>
              <div className='flex gap-x-4 text-5xl'>
                <FaYoutube/>
                <FaTwitter/>
                <FaFacebookF/>
                <FaInstagram/>
                <FaPinterestP/>
              </div>
            </div>
          </div>
          <div className='px-8 md:px-14 py-8'>
            <div className='mb-8 grid md:grid-cols-2'>
              <img src={logo} className='logo white'/>
              <p className='text-lg text-[#A4A4A5] text-end hidden md:block'>Privacy Policy Terms of Service</p>
            </div>
            <p className='copyright mb-3'>Copyright © 2020 Firebee Technologies, Inc. All rights reserved.</p>
            <p className='footer-note'>The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            <p className='text-lg text-[#A4A4A5] text-start mt-14 md:hidden'>Privacy Policy Terms of Service</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer