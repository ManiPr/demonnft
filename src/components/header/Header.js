import React from 'react'
import './Header.css'
import Topbar from '../top-bar/Topbar'
import Button from '../button/Button'
export default function Header() {
  return (
    <>
      <header className='header'>
        <div className='container'>
            <Topbar></Topbar>
            <div className='header__main'>
              <div className='header__backgrounds'>
                <img src='' className='header__background'></img>
                <img src='' className='header__background'></img>
                <img src='' className='header__background'></img>
                <img src='' className='header__background'></img>
                <img src='' className='header__background'></img>
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
