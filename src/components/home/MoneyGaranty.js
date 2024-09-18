import React from 'react'
import moneyGaranty from '../../assets/images/moneyGaranty.webp'
function MoneyGaranty() {
  return (
    <div className=' px-5 md:px-14 py-8'>
        <div className='bg-[#FBFCFB] p-5 gap-y-8 grid grid-cols-1 xl:grid-cols-3'>
            <img src={moneyGaranty} className='mx-auto'/>
            <div className='xl:col-span-2 m-auto'>
                <h3 className='text-5xl text-center xl:text-start mb-5'>30 Day Money Back Guarantee</h3>
                <p className='text-2xl text-[#3F3631]'>At Firebee we believe in building quality products that actually work. Firebee and its partners have invested over $85 million in research and development to create the highest quality wearable for customers to enjoy. If for any reason if you are not satisfied with your Firebee headband we will happily refund your purchase. </p>
            </div>
        </div>
    </div>
  )
}

export default MoneyGaranty