import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {UniversalLink} from 'common/universalLink/UniversalLink'
import s from './BurgerNavbar.module.scss'

export const BurgerNavbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const openMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={s.burgerNavbar}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <UniversalLink
                    path='main'
                    title={'Main'}
                />
                <UniversalLink
                    path='skills'
                    title={'Skills'}
                />
                <UniversalLink
                    path='projects'
                    title={'Projects'}
                />
                <UniversalLink
                    path='contacts'
                    title={'Contacts'}
                />
            </div>
            <FaBars className={s.burgerBtn} onClick={openMenu}/>
        </div>
    )
}