import React from 'react'
import './Header.css'
import Topbar from '../top-bar/Topbar'
import Button from '../button/Button'
import images from '../../util/images'
export default function Header() {
  console.log(images)
  return (
    <>
      <header className='header'>
        <div className='container'>
            <Topbar></Topbar>
            <div className='header__main'>
              <div className='header__backgrounds'>
                <img src={images.headerImageItem1} className='header__background header__background--1-1 absolute'></img>
                <img src={images.headerImageItem1} className='header__background header__background--1-2 absolute'></img>
                <img src={images.headerImageItem1} className='header__background header__background--1-3 absolute'></img>
                <img src={images.headerImageItem2} className='header__background header__background--2 absolute'></img>
                <img src={images.headerImageItem3} className='header__background header__background--3 absolute'></img>
                <img src={images.headerImageItem4} className='header__background header__background--4 absolute'></img>
                <img src={images.headerImageItem5} className='header__background header__background--5-1 absolute'></img>
                <img src={images.headerImageItem5} className='header__background header__background--5-2 absolute'></img>
              </div>
              <div className='header__content'>
                <h1 className='header__title'>دنیای آثار برتر</h1>
                <p className='header__caption'>
                به دنیای هنرهای دیجیتال کمیاب خوش آمدید. بهترین هنرهای هنرمند دیجیتالی دست‌چین شد
                ه را کاوش کنید و جواهر پنهان را پیدا کنید.
                </p>
              </div>
              <div className='header__buttons center'>
              <Button  className='button-component center'>
                        <p className='top-bar__wallet-text pointer'>دسته ها</p>
                    </Button>  
                    <Button  className='button-component center'>
                        <p className='top-bar__wallet-text pointer'>کاوش کنید</p>
                    </Button>  
              </div>
            </div>
        </div>
      </header>
    </>
  )
}
