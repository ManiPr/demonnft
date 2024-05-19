import React from 'react'
import './Menu.css'
import MenuDetail from '../menu-detail/MenuDetial'
export default function Menu() {
  return (
    <>
       <ul className='top-bar__menu center'>
              <MenuDetail></MenuDetail>
      </ul>
    </>
  )
}
