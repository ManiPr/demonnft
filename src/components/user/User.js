import React from 'react'
import { FaEthereum } from "react-icons/fa";
import './User.css'
export default function User({image}) {
  return (
    <>
        <div className='user'>
            <div className='user__image-container'>
                <span className='user__number'>1</span>
                <img src={image} className='user__image'></img>
            </div>
            <div className='user__detail'>
                <p className='user__name'>مانی فنایی</p>
                <p className='user__price center'>40,000<FaEthereum></FaEthereum></p>
            </div>
        </div>
    </>
  )
}
