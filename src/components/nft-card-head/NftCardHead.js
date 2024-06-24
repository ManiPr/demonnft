import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import Button from '../button/Button'
import { FaEthereum } from "react-icons/fa";
import './NftCardHead.css'
export default function NftCardHead({image}) {
    // این کامپوننت برای استفاده در اسلایدر در هدر اصلی هست 
  return (
    <>
   <div className='nft-card-head'>
    <a className='nft-card-head__link'>
        <div className='nft-card-head__container-image'>
        <img src={image} className='nft-card-head__image pointer'></img>
        </div>
    </a>           
        <div className='nft-card-head__media'>
                <span className='nft-card-head__time'>01h 32min 11s</span>
                <span className='nft-card-head__like pointer'><IoIosHeartEmpty></IoIosHeartEmpty></span>
                <Button className='nft-card-head__button pointer'>خرید</Button>
            </div>
            <div className='nft-card-head__info'>
                <p className='nft-card-head__caption pointer'>این یک ان اف تی تستی هست</p>
                <span className='nft-card-head__price center'>0,32<FaEthereum className='nft-card-head__icon'></FaEthereum></span>
            </div>
        </div>
    </>
  )
}
