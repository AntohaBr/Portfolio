import React from 'react'
import s from './Navbar.module.scss'
import {BurgerNavbar} from 'components/navbar/menu/BurgerNavbar'

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <BurgerNavbar/>
        </div>
    )
}

