import React from 'react'
import './NftCard.css'
import { FaEthereum } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import Button from '../button/Button'
export default function NftCard({image}) {
  return (
    <>
        <div className='nft-card'>
        <a className='nft-card__link'>
          <div className='nft-card__container-image'>
            <img src={image} className='nft-card__image pointer'></img>
          </div>
        </a>    
        <div className='nft-card__media'>
                <span className='nft-card__time'>01h 32min 11s</span>
                <span className='nft-card__like pointer'><IoIosHeartEmpty></IoIosHeartEmpty></span>
                <Button className='nft-card__button pointer'>خرید</Button>  
        </div> 
        <div className='nft-card__description'>
          <div className='nft-card__description-top'>
              <h3 className='nft-card__title'>نام آیتم</h3>
              <div className='nft-card__creator'>
                <img className='nft-card__image'></img>
                <div className='nft-card__creator-info'>
                  <p className='nft-card__creator-info-p'>ساخته شده توسط:</p>
                  <p className='nft-card__creator-name'>Mani Fanaei</p>
                </div>
              </div>
          </div>
          <div className='nft-card__description-bottom'>
             <p className='nft-card__price-p'>قیمت الان</p>
             <span className='nft-card__price'>0.34<FaEthereum></FaEthereum></span>
          </div>
        </div>
        </div>
    </>
  )
}
