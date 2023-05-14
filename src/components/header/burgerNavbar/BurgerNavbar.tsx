import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {UniversalLink} from 'common/universalLink/UniversalLink'
import s from './BurgerNavbar.module.scss'

export const BurgerNavbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [menuClose, setMenuClose] = useState(true)

    const openMenu = () => {
        setMenuIsOpen(!menuIsOpen)
        setMenuClose (!menuClose)
    }

    const closeMenu = () => {
        setMenuIsOpen(false)
        setMenuClose(true)
    }

    return (
        <div className={s.burgerNavbar}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <UniversalLink
                    path='main'
                    title='Main'
                    onClick={closeMenu}
                    offset={-70}
                />
                <UniversalLink
                    path='skills'
                    title='Skills'
                    onClick={closeMenu}
                    offset={-50}
                />
                <UniversalLink
                    path='projects'
                    title='Projects'
                    onClick={closeMenu}
                    offset={-50}
                />
                <UniversalLink
                    path='contacts'
                    title='Contacts'
                    onClick={closeMenu}
                    offset={-50}
                />
            </div>
            <FaBars className={s.burgerBtn} onClick={openMenu}/>
        </div>
    )
}