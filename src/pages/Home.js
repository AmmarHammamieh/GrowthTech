import React from 'react'
import Product from '../components/home/Product'
import MoneyGaranty from '../components/home/MoneyGaranty'
import FirebeeSignals from '../components/home/FirebeeSignals'
import FirebeePurpose from '../components/home/FirebeePurpose'
import ProductBox from '../components/home/ProductBox'
import FAQ from '../components/home/FAQ'
function Home() {
  return (
    <div>
        <Product/>
        <MoneyGaranty/>
        <FirebeeSignals/>
        <FirebeePurpose/>
        <ProductBox/>
        <FAQ/>
    </div>
  )
}

export default Home