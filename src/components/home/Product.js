import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  FreeMode, Navigation ,Thumbs , EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "swiper/css/effect-fade";
import light_product from '../../assets/images/products/light_product.webp'
import light_product_opt1 from '../../assets/images/products/light_product_opt1.webp'
import light_product_opt2 from '../../assets/images/products/light_product_opt2.webp'
import light_product_opt3 from '../../assets/images/products/light_product_opt3.webp'
import light_product_opt4 from '../../assets/images/products/light_product_opt4.webp'
import creditCards from '../../assets/images/creditCards.webp'
import certification from '../../assets/icons/certification.webp'
import customer_support from '../../assets/icons/customer_support.webp'
import checkMark from '../../assets/icons/checkMark.webp'
import globe from '../../assets/icons/globe.webp'
import signal from '../../assets/icons/signal.webp'
import { IoStarSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

function Product() {
    const [thumbs, setThumbs] = useState()
    const mainSlider = useRef(null);
    const thumbSlider = useRef(null);
  return (
    <div id='howWorks' className='grid grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-14 px-5 md:px-14 bg-[#F6F6F6] py-8'>
        <div>
            <div className='gx-h-100'>
                <Swiper
                    ref={mainSlider}
                    loop={true}
                    effect= 'fade'
                    modules={[FreeMode, Navigation,EffectFade, Thumbs]}
                    fadeEffect= {{
                        crossFade: true
                    }}
                    thumbs={{
                        swiper: thumbs && !thumbs.destroyed ? thumbs : null // Ensure thumbs is valid
                    }}
                >
                    <SwiperSlide>
                        <img src={light_product}  alt="Thumbnail 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={light_product_opt1}  alt="Thumbnail 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={light_product_opt2}  alt="Thumbnail 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={light_product_opt3}  alt="Thumbnail 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={light_product_opt4}  alt="Thumbnail 3" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='gx-h-100'>
                <Swiper
                    onSwiper={setThumbs}
                    ref={thumbSlider}
                    centeredSlides= {true}
                    centeredSlidesBounds= {true}
                    slidesPerView= {5}
                    spaceBetween={25}
                    watchOverflow= {true}
                    watchSlidesVisibility= {true}
                    watchSlidesProgress= {true}
                    className='gx-h-100'
                >
                    <SwiperSlide>
                        <img src={light_product} className='cursor-pointer'  alt="Thumbnail 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={light_product_opt1} className='cursor-pointer'  alt="Thumbnail 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={light_product_opt2} className='cursor-pointer'  alt="Thumbnail 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={light_product_opt3} className='cursor-pointer'  alt="Thumbnail 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={light_product_opt4} className='cursor-pointer'  alt="Thumbnail 3" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='hidden gap-y-8 mt-10 xl:grid  grid-cols-2'>
                <div className='flex gap-5 items-center'>
                    <img src={certification}/>
                    <p className='text-lg'>30-day Money-back Guarantee</p>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={globe}/>
                    <p className='text-lg'>Free Shipping <br/> within USA</p>
                   
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={signal}/>
                    <p className='text-lg'>Signal Catalogue <br/> Updates Included</p>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={customer_support}/>
                    <p className='text-lg'>Customer Support via <br/> E-mail, Phone, and Chat</p>
                </div>
            </div>
        </div>
        <div>
            <h1 className='product-title'>Firebee Headband</h1>
            <p className='text-lg flex items-center justify-center xl:justify-start gap-4 my-2 xl:my-1'><div className='text-yellow-400 flex items-center gap-1'><IoStarSharp/> <IoStarSharp/> <IoStarSharp/> <IoStarSharp/> <IoStarSharp/></div> 267 Reviews</p>
            <p className='text-base text-center xl:text-start'>Order today and receive your Firebee by June 15th, 2021</p>
            <div>
                <div className='package'>
                    <div className='grid grid-cols-1 gap-y-2 md:grid-cols-2'>
                        <h2 className='package-title'>Firebee Starter Kit</h2>
                        <p className='text-2xl md:text-end'><span className='after-offer'>$999.00</span> $379.00</p>
                    </div>
                    <div className='tag mt-2'>MOST POPULAR KIT</div>
                    <div className='mt-3'>
                        <ul className='space-y-2'>
                            <li className='feature'><img src={checkMark}/> Access to 7 signals (and future signal releases)</li>
                            <li className='feature'><img src={checkMark}/> Firebee Headband</li>
                            <li className='feature'><img src={checkMark}/> $19/month membership, first 2 months free</li>
                        </ul>

                    </div>
                    <p className='mt-3'>The starter kit is the most affordable way to get started with Firebee. Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for only $19 a month. <span className='font-poppins-Bold text-base'> Membership can be cancelled anytime. No contracts. Satisfaction guaranteed </span>.</p>
                </div>
            </div>
            <div>
                <div className='package'>
                    <div className='flex justify-between'>
                        <h2 className='package-title'>Founder’s Kit</h2>
                        <p className='text-2xl'>$799.00</p>
                    </div>
                    <div className='mt-3'>
                        <ul className='space-y-2'>
                            <li className='feature'><img src={checkMark}/> Access to 7 signals (and future signal releases)</li>
                            <li className='feature'><img src={checkMark}/> Firebee Headband</li>
                            <li className='feature'><img src={checkMark}/> No Monthly Membership</li>
                        </ul>
                    </div>
                    <p className='mt-3'>The Founders kit allows you to get the Firebee headband and lifetime access to the entire Firebee Signal Catalogue for a one-time payment. The Founders is kit can be paid through Affirm allowing customers to make small payments of $73 a month.</p>
                </div>
            </div>
            <button className='bg-[#07C961] w-4/5 mt-5 py-5 rounded-[3.4rem] m-auto flex justify-center text-white items-center gap-2 text-2xl'>Add To Cart <FaArrowRight/></button>
            <img src={creditCards} className='mx-auto mt-5 w-1/2'/>
            <div className='grid gap-y-8 mt-10 xl:hidden  grid-cols-2 '>
                <div className='flex flex-col gap-5 items-center'>
                    <img src={certification}/>
                    <p className='text-lg text-center'>30-day Money-back Guarantee</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <img src={globe}/>
                    <p className='text-lg text-center'>Free Shipping <br/> within USA</p>
                   
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <img src={signal}/>
                    <p className='text-lg text-center'>Signal Catalogue <br/> Updates Included</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <img src={customer_support}/>
                    <p className='text-lg text-center'>Customer Support via <br/> E-mail, Phone, and Chat</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product