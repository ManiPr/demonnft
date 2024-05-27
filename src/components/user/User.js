import React from 'react'

export default function User() {
  return (
    <>
        <div className='user'>
            <div className='user__image-container'>
                <span className='user__number'></span>
                <img className='user__image'></img>
            </div>
            <div className='user__detail'>
                <p className='user__name'>Mani Fanaei</p>
                <p className='user__price'>40000</p>
            </div>
        </div>
    </>
  )
}
