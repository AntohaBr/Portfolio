import React from 'react'
import s from './Header.module.scss'
import {Navbar} from './navbar/Navbar'
import {BurgerNavbar} from './burgerNavbar/BurgerNavbar'

export const Header = () => {
    return (
        <div className={s.header}>
            {/*<Navbar/>*/}
            <BurgerNavbar/>
        </div>
    )
}

