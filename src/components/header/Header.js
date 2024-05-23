import React from 'react';
import './Header.css';
import Topbar from '../top-bar/Topbar';
import Button from '../button/Button';
import images from '../../util/images';
import NftCardHead from '../nft-card-head/NftCardHead';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Install Swiper modules
Swiper.use([EffectCoverflow, Pagination, Navigation]);

export default function Header() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <Topbar />
          <div className='header__main'>
            <div className='header__backgrounds'>
              <img src={images.headerImageItem1} className='header__background header__background--1-1 absolute' alt="" />
              <img src={images.headerImageItem1} className='header__background header__background--1-2 absolute' alt="" />
              <img src={images.headerImageItem1} className='header__background header__background--1-3 absolute' alt="" />
              <img src={images.headerImageItem2} className='header__background header__background--2 absolute' alt="" />
              <img src={images.headerImageItem3} className='header__background header__background--3 absolute' alt="" />
              <img src={images.headerImageItem4} className='header__background header__background--4 absolute' alt="" />
              <img src={images.headerImageItem5} className='header__background header__background--5-1 absolute' alt="" />
              <img src={images.headerImageItem5} className='header__background header__background--5-2 absolute' alt="" />
            </div>
            <div className='header__content'>
              <h1 className='header__title'>دنیای آثار برتر</h1>
              <p className='header__caption'>
                به دنیای هنرهای دیجیتال کمیاب خوش آمدید. بهترین هنرهای هنرمند دیجیتالی دست‌چین شده را کاوش کنید و جواهر پنهان را پیدا کنید.
              </p>
            </div>
            <div className='header__buttons center'>
              <Button className='button-component center'>
                <p className='top-bar__wallet-text pointer'>دسته ها</p>
              </Button>
              <Button className='button-component center'>
                <p className='top-bar__wallet-text pointer'>کاوش کنید</p>
              </Button>
            </div>
          </div>
          <div className='header__slider center'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              navigation={true}
              className='mySwiper'
            >
              <SwiperSlide><NftCardHead image={images.nftImage} /></SwiperSlide>
              <SwiperSlide><NftCardHead image={images.nftImage} /></SwiperSlide>
              <SwiperSlide><NftCardHead image={images.nftImage} /></SwiperSlide>
              <SwiperSlide><NftCardHead image={images.nftImage} /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </header>
    </>
  );
}
// باید از توی سبزلرن نگاه کنی بعد swiper رو باید بکنی کامپوننت 
