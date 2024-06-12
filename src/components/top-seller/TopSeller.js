import React from 'react'
import './TopSeller.css'
import User from '../user/User'
import images from '../../util/images';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function TopSeller() {
  return (
    <>
        <section className='top-seller'>
          <div className='container'>
            <div className='top-seller__wrapper'>
              <div className='top-seller__top'>
                <h3 className='top-seller__tiltle'>پر فروش ترین در <span className='top-seller__day'>1روز</span> </h3>
              </div>    
              <div className='top-seller__main center'>
              <Swiper navigation={true} modules={[Navigation]}  centeredSlides={true}
        loop={true}
        slidesPerView={5} className="mySwiper">
        <SwiperSlide><User image={images.userImage}></User></SwiperSlide>
        <SwiperSlide><User image={images.userImage}></User></SwiperSlide>
        <SwiperSlide><User image={images.userImage}></User></SwiperSlide>
        <SwiperSlide><User image={images.userImage}></User></SwiperSlide>
        <SwiperSlide><User image={images.userImage}></User></SwiperSlide>
        <SwiperSlide><User image={images.userImage}></User></SwiperSlide>
        <SwiperSlide><User image={images.userImage}></User></SwiperSlide>
        <SwiperSlide><User image={images.userImage}></User></SwiperSlide>
      </Swiper>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
