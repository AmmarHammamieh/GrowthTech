import React from 'react'
import offer_bg from '../assets/images/advertising/offer_bg.webp'
import offer_1 from '../assets/images/advertising/offer_1.webp'
import offer_2 from '../assets/images/advertising/offer_2.webp'
function Offer() {
  return (
    <div style={{backgroundImage:`url(${offer_bg})`}} className='bg-contain bg-center justify-between w-full grid grid-cols-3'>
        <img src={offer_1}  className='h-full'/>
        <span></span>
        <img src={offer_2}  className='h-full'/>
    </div>
  )
}

export default Offer