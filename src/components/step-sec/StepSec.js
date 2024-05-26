import React from 'react'
import './StepSec.css'
import Step from '../step/Step'
import images from '../../util/images'
export default function StepSec() {
    const stepsData = [
        {
          id:1,
          image: images.stepImage1,
          number: 1,
          title: 'کیف پول خود را تنظیم کنید',
          caption: 'می توانید چند کیف پول درست کنید و آنهارا برای خرید ان اف تی یا مجموعه شارژ کنید',
        },
        {
          id:2,
          image:  images.stepImage2,
          number: 2,
          title: 'مجموعه ایجاد کنید',
          caption: 'می توانید با خرید یا ساخت چند ان اف تی مجموعه ایجاد کنید',
        },
        {
          id:3,
          image: images.stepImage3,
          number: 3,
          title: 'ان اف تی خود را اضافه کنید',
          caption:'می توانید ان اف تی خودآن طوری که میخواهید را بسازید',
        },
        {
          id:4,
          image: images.stepImage4,
          number: 4,
          title: 'ان اف تی خود را بفروشید',
          caption: 'می توانید ان اف تی خود را فروخته و کیف پول خودتون رو شارژ کنید ',
          }
      ];
  return (
    <>
        <section className='step-sec'>
            <div className='container'>
                <div className='step-sec__wrapper center'>
                    <step className='step-sec__right'>
                        <div className='step-sec__title'>گام به گام ایجاد و
NFT های خود را بفروشید</div>
                        <div className='step-sec__steps'>
                        {stepsData.map((step) => (
                        <Step key={step.id} stepData={step} />
                        ))}
                        </div>
                    </step>
                    <div className='step-sec__left'>
                        <div className='step-sec__image-container'>
                            <img src={images.stepBackgroundImage} className='step-sec__image'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
