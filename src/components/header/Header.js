import React from 'react'
import './Header.css'
import Topbar from '../top-bar/Topbar'
export default function Header() {
  return (
    <>
      <header className='header'>
        <div className='container'>
            <Topbar></Topbar>
        </div>
      </header>
    </>
  )
}
