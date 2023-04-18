import React from 'react'
import s from './Navbar.module.scss'
import {Menu} from 'components/navbar/menu/Menu'

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <Menu/>
        </div>
    )
}

