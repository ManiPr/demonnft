import React, { useRef } from 'react'
import './Menu-Detail.css'

export default function MenuDetial() {
    const menuItemsRef = useRef([]);

    const selectMenu = (event, index) => {
        // Remove active class from all menu items
        menuItemsRef.current.forEach(item => {
            item.classList.remove('top-bar__menu-item--active');
        });

        // Add active class to the clicked menu item
        event.target.classList.add('top-bar__menu-item--active');
    }

    return (
        <>
            {['خانه', 'درباره ما', 'خدمات', 'تماس با ما'].map((menuItem, index) => (
                <li
                    key={index}
                    ref={el => menuItemsRef.current[index] = el}
                    onClick={(event) => selectMenu(event, index)}
                    className='top-bar__menu-item pointer'
                >
                    <a className='top-bar__menu-link'>{menuItem}</a>
                </li>
            ))}
        </>
    )
}
// حذف هاور مودن المان هارو یادت نره که انجام بدی 
 