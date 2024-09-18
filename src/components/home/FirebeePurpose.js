import React from 'react'
import firebeePurpose from '../../assets/images/firebeePurpose.webp'
import checkMark from '../../assets/icons/checkMark.webp'

function FirebeePurpose() {
  return (
    <div className='bg-[#FBFCFB] px-5 md:px-14 pt-8 pb-8 xl:pb-0'>
        <img src={firebeePurpose} className=' xl:hidden mx-auto mb-6'/>
        <h2 className='text-7xl text-center'>What will Firebee do for me?</h2>
        <p className='text-2xl text-center mt-3'>Firebee will help you gently nudge yourself into a different mental state</p>
        <div className='grid xl:grid-cols-3 mt-10'>
            <img src={firebeePurpose} className='hidden xl:block'/>
            <ul className='col-span-2 space-y-5 w-fit m-auto'>
                <li className='flex items-center text-3xl'>
                    <img src={checkMark}  className='me-5'/>
                    <p className='text-wrap'>Can’t sleep? Turn on the <span className='gradiant-purble font-poppins-Bold'> deep sleep </span> signal </p>
                </li>
                <li className='flex items-center text-3xl'>
                    <img src={checkMark} className='me-5'/>
                    <p className='text-wrap'>Feeling tired? Turn on the <span className='gradiant-red font-poppins-Bold'>alert</span> signal </p>
                </li>
                <li className='flex items-center text-3xl'>
                    <img src={checkMark} className='me-5'/>
                    <p className='text-wrap'>Feeling anxious? Turn on the <span className='gradiant-cyan font-poppins-Bold'>calm</span> signal</p>
                </li>
                <li className='flex items-center text-3xl'>
                    <img src={checkMark} className='me-5'/>
                    <p className='text-wrap'>Feeling unproductive? Turn on the <span className='gradiant-pink font-poppins-Bold'>focus</span> signal </p>
                </li>
                <li className='flex items-center text-3xl'>
                    <img src={checkMark} className='me-5'/>
                    <p className='text-wrap'>Feeling blue? Turn on the <span className='gradiant-pink-purble font-poppins-Bold'>happy</span> signal</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default FirebeePurpose