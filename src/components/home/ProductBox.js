import React from 'react'
import productBox from '../../assets/images/productBox.webp'
import gq from '../../assets/images/featuredOn/gq.webp'
import cnn from '../../assets/images/featuredOn/cnn.webp'
import guardian from '../../assets/images/featuredOn/guardian.webp'
import mashable from '../../assets/images/featuredOn/mashable.webp'
import newyork from '../../assets/images/featuredOn/newyork.webp'
import wallStreet from '../../assets/images/featuredOn/wallStreet.webp'
import checkMark from '../../assets/icons/checkMark.webp'

function ProductBox() {
  return (
    <div className='px-5 md:px-14 py-8'>
        <h2 className='text-5xl text-center'>What’s in the box?</h2>
        <img src={productBox} className='mx-auto'/>
        <p className='text-center'>Feautred on</p>
        <div className=' mx-auto'>
            <div className='grid grid-cols-2 gap-y-4 md:grid-cols-6 mt-5'>
                <img className='mx-auto' src={gq}/>
                <img className='mx-auto' src={guardian}/>
                <img className='mx-auto' src={newyork}/>
                <img className='mx-auto' src={mashable}/>
                <img className='mx-auto' src={cnn}/>
                <img className='mx-auto' src={wallStreet}/>
            </div>
            <hr className='my-5'/>
            <ul className='grid mx-auto w-fit xl:w-auto gap-y-3 xl:grid-cols-3'>
                <li className='flex items-center gap-5 text-3xl'><img src={checkMark} />1 Firebeeheadband  </li>
                <li className='flex items-center gap-5 text-3xl'><img src={checkMark} />1 Charging cable </li>
                <li className='flex items-center gap-5 text-3xl'><img src={checkMark} />1 User manual </li>
            </ul>
        </div>
    </div>
  )
}

export default ProductBox