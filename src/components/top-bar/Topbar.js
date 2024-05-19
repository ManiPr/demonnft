import React, { useState } from 'react'
import './Topbar.css'
import Menu from '../menu/Menu'
import { CiCircleRemove } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { RiWallet3Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Button from '../button/Button'
export default function Topbar() {
    const [isSearch,setIsSearch]=useState(true)
    const [isSearchBox,setIsSearchBox]=useState(false)
    const openSearch=()=>{
        setIsSearch(!isSearch)
        setIsSearchBox(!isSearchBox)
        console.log(isSearchBox);
    }
  return (
    <>
        <div className='top-bar'>
            <div className='top-bar__wrapper space-between'>
                <div className='top-bar__right center'>
                <a className='top-bar__logo'><span className='top-bar__color-p'>Demon</span>NFT</a>
                    <Menu></Menu>
                </div>
                <div className='top-bar__left'>
                    <div className='top-bar__search center'>
                    <Button  className='button-component center'>
                        <RiWallet3Fill className='top-bar__wallet-icon'></RiWallet3Fill>
                        <p className='top-bar__wallet-text pointer'>کیف پول </p>
                    </Button>                           
                        {isSearch?
                        <IoSearchSharp onClick={openSearch} className='top-bar__search-icon-sharp pointer'></IoSearchSharp>
                        :
                        <AiOutlineClose onClick={openSearch} className='top-bar__search-icon-sharp pointer'></AiOutlineClose>
                        }
                        {isSearchBox &&
                            <div className='top-bar__search-inputs center'>
                             <input className='topbar__search-input' placeholder='سرچ' type='text'></input>
                             <FiSearch className='top-bar__search-icon-fi-search pointer'></FiSearch>
                            </div>
                        }
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
