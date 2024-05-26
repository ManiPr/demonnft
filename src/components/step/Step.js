import React from 'react'
import './Step.css'
export default function Step({stepData}) {
  return (
    <>
        <div className='step'>
            <div className='step__image-container'>
                <img src={stepData.image} className='step__image'></img>
                <p className='step__image-caption'>قدم {stepData.number}</p>
            </div>
            <div className='step__content '>
                <h3 className='step__title'>{stepData.title}</h3>
                <h3 className='step__caption'>{stepData.caption}</h3>
            </div>
        </div>
    </>
  )
}
