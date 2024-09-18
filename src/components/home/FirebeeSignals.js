import React from 'react'
import bedTime from '../../assets/images/firebeeSignals/bedTime.webp'
import deepSleep from '../../assets/images/firebeeSignals/deepSleep.webp'
import calm from '../../assets/images/firebeeSignals/calm.webp'
import focus from '../../assets/images/firebeeSignals/focus.webp'
import happy from '../../assets/images/firebeeSignals/happy.webp'
import relax from '../../assets/images/firebeeSignals/relax.webp'
import alert from '../../assets/images/firebeeSignals/alert.webp'
import signal from '../../assets/images/firebeeSignals/signal.webp'
function FirebeeSignals() {
  return (
    <div id='signals' className=' px-5 md:px-14 py-8 relative'>
        <img src={signal} className='absolute left-0 top-0 w-[32rem] z-0 hidden lg:block'/>
        <img src={signal} className='absolute right-0 bottom-0 w-[32rem] z-0 hidden xl:block'/>
        <h2 className='text-5xl text-center'>Firebee Signals</h2>
        <p className='text-2xl text-center mt-3'>A signal for every situation</p>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14 z-10 relative'>
            <div className='p-3 grid gap-y-5 grid-cols-1 text-center md:grid-cols-3 bg-[#FBFCFB] rounded-xl'>
                <img src={bedTime} className='mx-auto md:mx-0'/>
                <p className='text-lg col-span-2'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
            </div>
            <div className='p-3 grid gap-y-5 grid-cols-1 text-center md:grid-cols-3 bg-[#FBFCFB] rounded-xl'>
                <img src={deepSleep} className='mx-auto md:mx-0'/>
                <p className='text-lg col-span-2'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
            </div>
            <div className='p-3 grid gap-y-5 grid-cols-1 text-center md:grid-cols-3 bg-[#FBFCFB] rounded-xl'>
                <img src={relax} className='mx-auto md:mx-0'/>
                <p className='text-lg col-span-2'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
            </div>
            <div className='p-3 grid gap-y-5 grid-cols-1 text-center md:grid-cols-3 bg-[#FBFCFB] rounded-xl'>
                <img src={calm} className='mx-auto md:mx-0'/>
                <p className='text-lg col-span-2'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
            </div>
            <div className='p-3 grid gap-y-5 grid-cols-1 text-center md:grid-cols-3 bg-[#FBFCFB] rounded-xl'>
                <img src={focus} className='mx-auto md:mx-0'/>
                <p className='text-lg col-span-2'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
            </div>
            <div className='p-3 grid gap-y-5 grid-cols-1 text-center md:grid-cols-3 bg-[#FBFCFB] rounded-xl'>
                <img src={happy} className='mx-auto md:mx-0'/>
                <p className='text-lg col-span-2'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
            </div>
            <div className='p-3 grid gap-y-5 grid-cols-1 text-center md:grid-cols-3 bg-[#FBFCFB] rounded-xl'>
                <img src={alert} className='mx-auto md:mx-0'/>
                <p className='text-lg col-span-2'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
            </div>
            <div className='p-3 grid gap-y-5 grid-cols-1 text-center md:grid-cols-3 bg-[#FBFCFB] rounded-xl'>
                <img src={alert} className='mx-auto md:mx-0'/>
                <p className='text-lg col-span-2'>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
            </div>
        </div>
    </div>
  )
}

export default FirebeeSignals