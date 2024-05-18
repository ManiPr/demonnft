import React from 'react'
import './Topbar.css'
import Menu from '../menu/Menu'
import { CiCircleRemove } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { RiWallet3Fill } from "react-icons/ri";

export default function Topbar() {
  return (
    <>
        <div className='top-bar'>
            <div className='top-bar__wrapper'>
                <div className='top-bar__right'>
                <a className='top-bar__logo'>DemonNFT</a>
                    <Menu></Menu>
                </div>
                <div className='top-bar__left'>
                    <div className='top-bar__search'>
                        <IoSearchOutline className='top-bar__search-icon'></IoSearchOutline>
                        <div className='top-bar__search-inputs'>
                            <input placeholder='سرچ' type='text'></input>
                            <IoSearchOutline className='top-bar__search-icon'></IoSearchOutline>
                        </div>
                        <div className='top-bar__wallet'>
                            <div className='top-bar__wallet-text'>کیف پول </div>
                            <RiWallet3Fill className='top-bar__wallet-icon'></RiWallet3Fill>
                        </div>
                    </div>
                    <div className='top-bar__nav-menu'>
                        <div className='top-bar__nav-menu-top'>
                        <h2 className='top-bar__nav-menu-title'>DemonNFT</h2>
                        <CiCircleRemove className='top-bar__nav-menu-icon'></CiCircleRemove>
                    </div>
                <Menu></Menu>
            </div>
                </div>
                </div>
           

        </div>
    </>
  )
}
