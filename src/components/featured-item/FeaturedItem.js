import React from 'react'
import './FeaturedItem.css'
import Button from '../button/Button'
import NftCard from '../nft-card/NftCard' 
import images from '../../util/images';

export default function FeaturedItem() {
  return (
    <>
        <section className='featured-item'>
            <div className='container'>
                <div className='featured-item__wrapper'>
                    <div className='featured-item__top'>
                        <h3 className='featured-item__title'></h3>
                        <Button></Button>
                    </div>
                    <div className='featured-item__main center'>
                      <NftCard image={images.nftImage2}></NftCard>
                      <NftCard image={images.nftImage2}></NftCard>
                      <NftCard image={images.nftImage2}></NftCard>
                      <NftCard image={images.nftImage2}></NftCard>
                      <NftCard image={images.nftImage2}></NftCard>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
