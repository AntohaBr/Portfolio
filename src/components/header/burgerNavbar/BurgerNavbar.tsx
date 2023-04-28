import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineHome, AiOutlinePicture, AiOutlineMail, AiOutlineSetting} from 'react-icons/ai'
import {UniversalLink} from 'common/universalLink/UniversalLink'
import s from './BurgerNavbar.module.scss'

export const BurgerNavbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const openMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const closeMenu = () => {
        setMenuIsOpen(false)
    }

    return (
        <div className={s.burgerNavbar}>
            <button onClick={openMenu} type='button' id="burgerButton"><FaBars className={s.iconFaBars}/></button>
            {!menuIsOpen &&
                <div className={s.BurgerNavbarItems}>
                    <UniversalLink
                        path='main'
                        title={'Main'}
                        onClick={closeMenu}
                    />
                    <UniversalLink
                        path='skills'
                        title={'Skills'}
                        onClick={closeMenu}
                    />
                    <UniversalLink
                        path='projects'
                        title={'Projects'}
                        onClick={closeMenu}
                    />
                    <UniversalLink
                        path='contacts'
                        title={'Contacts'}
                        onClick={closeMenu}
                    />
                </div>
            }
        </div>
    )
}