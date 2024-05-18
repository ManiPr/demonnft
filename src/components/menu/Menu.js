import React from 'react'
import './Menu.css'
export default function Menu() {
  return (
    <>
       <ul className='top-bar__menu'>
                        <li className='top-bar__menu-item'><a className='top-bar__menu-link'>خانه</a></li>
                        <li className='top-bar__menu-item'><a className='top-bar__menu-link'>درباره ما</a></li>
                        <li className='top-bar__menu-item'><a className='top-bar__menu-link'>پروژه های آینده</a></li>
                        <li className='top-bar__menu-item'><a className='top-bar__menu-link'>بلاگ ها</a></li>
                        <li className='top-bar__menu-item'><a className='top-bar__menu-link'>تماس با ما</a></li>
                    </ul>
    </>
  )
}
